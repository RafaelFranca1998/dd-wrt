#include <malloc.h>
#include <stdarg.h>

#define cprintf(fmt, args...)

/*
#define cprintf(fmt, args...) do { \
	FILE *fp = fopen("/dev/console", "w"); \
	if (fp) { \
		fprintf(fp, fmt, ## args); \
		fclose(fp); \
	} \
} while (0)
*/

void nvram_store_collection(const char *name, char *buf)
{
	char *chain;
	char *n;
	int size = strlen(buf);
	int chaincount = size / 1024;
	int c = 0;
	int i, offset;
	offset = 0;
	cprintf("chaincount = %d\n", chaincount);
	for (i = 0; i < chaincount; i++) {
		n = malloc(strlen(name) + 16);
		sprintf(n, "%s%d", name, c++);
		cprintf("get chain name %s\n", n);
		chain = malloc(1025);
		memcpy(chain, &buf[offset], 1024);
		chain[1024] = 0;
		cprintf("story chain %s\n", chain);
		nvram_set(n, chain);
		offset += 1024;
		free(n);
		free(chain);
	}
	int rest = size % 1024;
	if (rest) {
		n = malloc(strlen(name) + 16);
		sprintf(n, "%s%d", name, c);
		cprintf("chainname = %s, malloc = %d\n", n, rest + 16);
		chain = malloc(rest + 1);
		memcpy(chain, &buf[offset], rest);
		chain[rest] = 0;
		nvram_set(n, chain);
		cprintf("free mem\n");
		free(n);
		free(chain);
	}
}

/*
    do not forget to free the returned result
*/
char *nvram_get_collection(const char *name)
{
	char *chains = NULL;
	int offset = 0;
	int c = 0;
	char n[65];

	sprintf(n, "%s%d", name, c++);
	cprintf("name = %s\n", n);
	while (nvram_get(n) != NULL) {
		char *chain = nvram_get(n);
		cprintf("chain = %s\n", chain);
		if (chains == NULL)
			chains = malloc(strlen(chain) + 1);
		chains = (char *)realloc(chains, chains != NULL ? strlen(chains) + strlen(chain) + 1 : strlen(chain) + 1);
		cprintf("alloc okay\n");
		memcpy(&chains[offset], chain, strlen(chain));
		offset += strlen(chain);
		chains[offset] = 0;
		cprintf("copy %s\n", chains);
		sprintf(n, "%s%d", name, c++);
	}
	return chains;
}

/*
 * Match an NVRAM variable.
 * @param	name	name of variable to match
 * @param	match	value to compare against value of variable
 * @return	TRUE if variable is defined and its value is string equal
 *		to match or FALSE otherwise
 */
int nvram_match(const char *name, const char *match)
{
	const char *value = nvram_get(name);
	return (value && !strcmp(value, match));
}

int nvram_matchi(const char *name, const int match)
{
	char tmp[100];
	snprintf(tmp, sizeof(tmp), "%d", match);
	return nvram_match(name, tmp);
}

/*
 * Inversely match an NVRAM variable.
 * @param	name	name of variable to match
 * @param	match	value to compare against value of variable
 * @return	TRUE if variable is defined and its value is not string
 *		equal to invmatch or FALSE otherwise
 */
int nvram_invmatch(const char *name, const char *invmatch)
{
	const char *value = nvram_get(name);
	return (value && strcmp(value, invmatch));
}

int nvram_invmatchi(const char *name, const int invmatch)
{
	char tmp[100];
	snprintf(tmp, sizeof(tmp), "%d", invmatch);
	return nvram_invmatch(name, tmp);
}

char *nvram_prefix_get(const char *name, const char *prefix)
{
	char p[64];
	sprintf(p, "%s_%s", prefix, name);
	return nvram_safe_get(p);
}

int nvram_prefix_match(const char *name, const char *prefix, const char *match)
{
	char p[64];
	sprintf(p, "%s_%s", prefix, name);
	return nvram_match(p, match);
}

int nvram_nmatch(const char *match, const char *fmt, ...)
{
	char varbuf[64];
	va_list args;
	va_start(args, (char *)fmt);
	vsnprintf(varbuf, sizeof(varbuf), fmt, args);
	va_end(args);
	return nvram_match(varbuf, match);
}

char *nvram_nget(const char *fmt, ...)
{
	char varbuf[64];
	va_list args;
	va_start(args, (char *)fmt);
	vsnprintf(varbuf, sizeof(varbuf), fmt, args);
	va_end(args);
	return nvram_safe_get(varbuf);
}

int nvram_ngeti(const char *fmt, ...)
{
	char varbuf[64];
	va_list args;
	va_start(args, (char *)fmt);
	vsnprintf(varbuf, sizeof(varbuf), fmt, args);
	va_end(args);
	return atoi(nvram_safe_get(varbuf));
}

int nvram_nset(const char *value, const char *fmt, ...)
{
	char varbuf[64];
	va_list args;
	va_start(args, (char *)fmt);
	vsnprintf(varbuf, sizeof(varbuf), fmt, args);
	va_end(args);
	return nvram_set(varbuf, value);
}

char *nvram_safe_get(const char *name)
{
	return nvram_get(name) ? : "";
}

int nvram_exists(const char *name)
{
	return nvram_get(name) ? 1 : 0;
}

int nvram_geti(const char *name)
{

	return atoi(nvram_safe_get(name));
}

void nvram_seti(const char *name, const int value)
{
	char tmp[100];
	snprintf(tmp, sizeof(tmp), "%d", value);
	nvram_set(name, tmp);
}

void nvram_safe_unset(const char *name)
{
	if (nvram_get(name))
		nvram_unset(name);
}

void nvram_safe_set(const char *name, char *value)
{
	if (!nvram_get(name) || strcmp(nvram_safe_get(name), value))
		nvram_set(name, value);
}

int nvram_default_match(const char *var, const char *match, const char *def)
{
	const char *v = nvram_get(var);
	if (v == NULL || !*v) {
		nvram_set(var, def);
		v = def;
	}
	return !strcmp(v, match);
}

int nvram_default_matchi(const char *var, const int match, const int def)
{
	char m[32];
	char d[32];
	sprintf(m, "%d", match);
	sprintf(d, "%d", def);
	return nvram_default_match(var, m, d);
}

char *nvram_default_get(const char *var, const char *def)
{
	char *v = nvram_get(var);
	if (v == NULL || !*v) {
		nvram_set(var, def);
		return def;
	}
	return v;
}

int nvram_default_geti(const char *var, const int def)
{
	char tmp[100];
	char *v = nvram_get(var);
	if (v == NULL || !*v) {
		snprintf(tmp, sizeof(tmp), "%d", def);
		nvram_set(var, tmp);
		return def;
	}
	return atoi(v);
}

void fwritenvram(const char *var, FILE * fp)
{
	int i;
	if (fp == NULL)
		return;
	const char *host_key = nvram_safe_get(var);
	int len = strlen(host_key);
	for (i = 0; i < len; i++)
		if (host_key[i] != '\r')
			fprintf(fp, "%c", host_key[i]);
}

void writenvram(const char *var, char *file)
{
	FILE *fp = fopen(file, "wb");
	if (fp == NULL)
		return;
	fwritenvram(var, fp);
	fclose(fp);
}

#define foreach_int(word, wordlist, next) \
	for (next = &wordlist[strspn(wordlist, " ")], \
	     strncpy(word, next, sizeof(word)), \
	     word[strcspn(word, " ")] = '\0', \
	     word[sizeof(word) - 1] = '\0', \
	     next = strchr(next, ' '); \
	     word[0]; \
	     next = next ? &next[strspn(next, " ")] : "", \
	     strncpy(word, next, sizeof(word)), \
	     word[strcspn(word, " ")] = '\0', \
	     word[sizeof(word) - 1] = '\0', \
	     next = strchr(next, ' '))

int nvhas(char *nvname, char *key)
{
	char *next;
	char var[32];
	char *list = nvram_safe_get(nvname);
	foreach_int(var, list, next) {
		if (!strcmp(var, key))
			return 1;
	}
	return 0;

}
