include $(top_srcdir)/config/Rules.am

DEFAULT_INCLUDES += \
	-I$(top_srcdir)/include \
	-I$(top_srcdir)/lib/libspl/include

EXTRA_DIST = zed.d/README \
	zed.d/history_event-zfs-list-cacher.sh.in

sbin_PROGRAMS = zed

ZED_SRC = \
	zed.c \
	zed.h \
	zed_conf.c \
	zed_conf.h \
	zed_disk_event.c \
	zed_disk_event.h \
	zed_event.c \
	zed_event.h \
	zed_exec.c \
	zed_exec.h \
	zed_file.c \
	zed_file.h \
	zed_log.c \
	zed_log.h \
	zed_strings.c \
	zed_strings.h

FMA_SRC = \
	agents/zfs_agents.c \
	agents/zfs_agents.h \
	agents/zfs_diagnosis.c \
	agents/zfs_mod.c \
	agents/zfs_retire.c \
	agents/fmd_api.c \
	agents/fmd_api.h \
	agents/fmd_serd.c \
	agents/fmd_serd.h

zed_SOURCES = $(ZED_SRC) $(FMA_SRC)

zed_LDADD = \
	$(top_builddir)/lib/libnvpair/libnvpair.la \
	$(top_builddir)/lib/libuutil/libuutil.la \
	$(top_builddir)/lib/libzfs/libzfs.la \
	$(top_builddir)/lib/libzfs_core/libzfs_core.la \
	$(top_builddir)/lib/libzutil/libzutil.la \
	-lssl -lcrypto -ltirpc -luutil

zed_LDADD += -lrt
zed_LDFLAGS = -pthread

zedconfdir = $(sysconfdir)/zfs/zed.d

dist_zedconf_DATA = \
	zed.d/zed-functions.sh \
	zed.d/zed.rc

zedexecdir = $(zfsexecdir)/zed.d

dist_zedexec_SCRIPTS = \
	zed.d/all-debug.sh \
	zed.d/all-syslog.sh \
	zed.d/data-notify.sh \
	zed.d/generic-notify.sh \
	zed.d/resilver_finish-notify.sh \
	zed.d/scrub_finish-notify.sh \
	zed.d/statechange-led.sh \
	zed.d/statechange-notify.sh \
	zed.d/vdev_clear-led.sh \
	zed.d/vdev_attach-led.sh \
	zed.d/pool_import-led.sh \
	zed.d/resilver_finish-start-scrub.sh

nodist_zedexec_SCRIPTS = zed.d/history_event-zfs-list-cacher.sh

$(nodist_zedexec_SCRIPTS): %: %.in
	-$(SED) -e 's,@bindir\@,$(bindir),g' \
		-e 's,@runstatedir\@,$(runstatedir),g' \
		-e 's,@sbindir\@,$(sbindir),g' \
		-e 's,@sysconfdir\@,$(sysconfdir),g' \
		$< >'$@'

zedconfdefaults = \
	all-syslog.sh \
	data-notify.sh \
	resilver_finish-notify.sh \
	scrub_finish-notify.sh \
	statechange-led.sh \
	statechange-notify.sh \
	vdev_clear-led.sh \
	vdev_attach-led.sh \
	pool_import-led.sh \
	resilver_finish-start-scrub.sh

install-data-hook:
	rm -rf "$(DESTDIR)$(zedexecdir)"
	$(MKDIR_P) "$(DESTDIR)$(zedexecdir)"
	cp -fpR $(dist_zedexec_SCRIPTS) $(DESTDIR)$(zedexecdir)
	chmod 0600 "$(DESTDIR)$(zedconfdir)/zed.rc"
