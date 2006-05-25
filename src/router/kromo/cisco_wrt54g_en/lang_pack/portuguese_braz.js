// Not working in IE & Opera ?
//************ Include the current language file after english.js ************//
//  var Head = document.getElementsByTagName('head')[0];
//  var head_inc = document.createElement('script');
//  head_inc.setAttribute('type','text/javascript');
//  head_inc.setAttribute('src',"lang_pack/language.js");
//  Head.appendChild(head_inc);

//////////////////////////////////////////////////////////////////////////////////////////////
//		Portuguese-Brazil translation file - DD-WRT V23 SP1 by aledr 25/05/2006		  //
//						Need some improvements yet...					  //
//////////////////////////////////////////////////////////////////////////////////////////////


// ******************************************* COMMON SHARE LABEL *******************************************//
var lang_charset = new Object();
lang_charset.set="iso-8859-1";

var share = new Object();
share.firmware="Firmware";
share.time="Hora";
share.interipaddr="Internet IP Address";
share.more="Mais...";
share.help="Ajuda";
share.enable="Habilitar";
share.enabled="Habilitado";
share.disable="Desabilitar";
share.disabled="Desabilitado";
share.usrname="Nome de Usu�rio";
share.passwd="Senha";
share.hostname="Host Name";
share.domainname="Nome de Dom�nio";
share.statu="Status";
share.start="Iniciar";
share.end="Fim";
share.proto="Protocolo";
share.ip="Endere�o IP";
share.mac="Endere�o MAC";
share.none="Nenhum";
share.none2="n�o";
share.both="Ambos";
share.del="Apagar";
share.remove="Remover";
share.descr="Descri��o";
share.from="De";
share.to="Para";
share.about="Sobre";
share.everyday="Todos os Dias";
share.sun="Domingo";
share.sun_s="Dom";
share.sun_s1="D";
share.mon="Segunda";
share.mon_s="Seg";
share.mon_s1="S";
share.tue="Ter�a";
share.tue_s="Ter";
share.tue_s1="T";
share.wed="Quarta";
share.wed_s="Qua";
share.wed_s1="Q";
share.thu="Quinta";
share.thu_s="Qui";
share.thu_s1="Q";
share.fri="Sexta";
share.fri_s="Sex";
share.fri_s1="S";
share.sat="S�bado";
share.sat_s="Sab";
share.sat_s1="S";
share.expires="Expira";
share.yes="Sim";
share.no="N�o";
share.allow="Permitir";
share.deny="Negar";
share.range="Range";
share.use="Usar";
share.mins="Min.";
share.secs="Seg.";
share.routername="Nome do Roteador";
share.manual="Manual";
share.port="Porta";
share.ssid="SSID";
share.channel="Canal";
share.rssi="Rssi";
share.signal="Sinal";
share.noise="Ru�do";
share.beacon="beacon";
share.openn="Aberto";
share.dtim="dtim";
share.rates="Taxa";
share.low="Baixo";
share.medium="M�dio";
share.high="Alto";
share.option="Op��es";
share.rule="Regra";
share.lan="LAN";
share.point2point="Ponto a Ponto";
share.nat="NAT";
share.subnet="M�scara de Sub-Rede";
share.unmask="Desmascarar";
share.deflt="Padr�o";  //don't use share.default !!!
share.all="Tudo";
share.auto="Autom�tico";
share.right="Direita";
share.left="Esquera";
share.share_key="Chave Compartilhada";
share.inter="Intervalo (em segundos)";
share.srv="Nome do Servi�o";
share.port_range="Faixa de Portas";
share.priority="Prioridade";
share.gateway="Gateway";
share.intrface="Interface";  //don't use share.interface, Mozilla problem!!!
share.router="Roteador";
share.static_lease="Concess�es Est�ticas";
share.srvip="IP do Servidor";
share.localdns="DNS Local";
share.minutes="minutos";
share.oui="Busca OUI";
share.sttic="Est�tico";
share.connecting="Conectando";
share.connect="Conectar";
share.connected="Conectado";
share.disconnect="Desconectar";
share.disconnected="Desconectado";
share.info="Informa��o";
share.state="Estado";
share.mode="Modo";
share.encrypt="Criptografia";
share.key="Chave";
share.wireless="Wireless";
share.dhcp="DHCP";
share.styl="Estilo";
share.err="erro";
share.errs="erros";


var sbutton = new Object();
sbutton.save="Salvar Configura��es";
sbutton.saving="Salvo";
sbutton.cmd="Executando";
sbutton.cancel="Cancelar Altera��es";
sbutton.refres="Atualizar";
sbutton.clos="Fechar";
sbutton.del="Apagar";
sbutton.continu="Continuar";
sbutton.add="Adicionar";
sbutton.remove="Remover";
sbutton.modify="Modificar";
sbutton.deleted="Apagado";
sbutton.delall="Apagar Todos";
sbutton.autorefresh="Atualiza��o Autom�tica Habilitada";
sbutton.backup="Backup";
sbutton.restore="Restaurar";
sbutton.cptotext="Copiar para �rea de transfer�ncia";
sbutton.runcmd="Executar Comandos";
sbutton.startup="Salvar Inicialia��o";
sbutton.firewall="Salvar Firewall";
sbutton.wol="Wake Up";
sbutton.add_wol="Adicionar Host";
sbutton.manual_wol="Wake Up Manual";
sbutton.summary="Resumo";
sbutton.filterIP="Editar Lista de PCs";
sbutton.filterMac="Editar Lista do Filtro de MAC";
sbutton.filterSer="Adicionar/Editar Servi�o";
sbutton.reboot="Reiniciar Roteador";
sbutton.help="   Ajuda  ";
sbutton.wl_client_mac="Lista de MAC dos Clientes Wireless";
sbutton.update_filter="Atualiar Lista de Filtros";
sbutton.join="Ingressar";
sbutton.log_in="Log de Entrada";
sbutton.log_out="Log de Sa�da";
sbutton.apply="Aplicar";
sbutton.edit_srv="Adicionar/Editar Servi�o";
sbutton.routingtab="Mostrar Tabela de Roteamento";
sbutton.wanmac="Capturar Endere�o MAC Deste PC";
sbutton.dhcprel="Liberar DHCP";
sbutton.dhcpren="Renovar DHCP";
sbutton.survey="Site Survey";
sbutton.upgrading="Atualizando";
sbutton.upgrade="Atualizar";
sbutton.preview="Pr�-Visualizar";


// ******************************************* COMMON ERROR MESSAGES  *******************************************//
var errmsg = new Object();
errmsg.err0="Voc� deve inserir um Nome de Usu�rio.";
errmsg.err1="Voc� deve inserir o Nome do Roteador.";
errmsg.err2="Endere�o IP fora da classe, por favor ajuste o endere�o IP inicial ou o n�mero de usu�rios.";
errmsg.err3="Voc� deve selecionar um dia no m�nimo."
errmsg.err4="O tempo final deve ser maior que o tempo inicial.";
errmsg.err5="O tamanho do Endere�o MAC n�o est� correto.";
errmsg.err6="Voc� deve inserir uma senha.";
errmsg.err7="Voc� deve inserir um a Host Name.";
errmsg.err8="Voc� deve inserir um Endere�o IP ou um Nome de Dom�nio.";
errmsg.err9="Endere�o IP DMZ ilegal.";
errmsg.err10="A Senha e a Verifica��o n�o coincidem. Por favor digite novamente sua senha.";
errmsg.err11="Espa�os em branco n�o s�o permitidas na Senha";
errmsg.err12="Voc� deve inserir um comando a ser executado.";
errmsg.err13="Falha na atualiza��o.";
errmsg.err45="N�o dispon�vel em modo HTTPS! Por favor conecte em modo HTTP.";
errmsg.err46="N�o dispon�vel em modo HTTPS.";


//common.js error messages
errmsg.err14=" valor fora de alcance [";
errmsg.err15="O Endere�o MAC da WAN est�o fora de alcance [00 - ff].";
errmsg.err16="O segundo caractere do Endere�o MAC deve ser sempre um n�mero: [0, 2, 4, 6, 8, A, C, E].";
errmsg.err17="O Endere�o MAC n�o est� correto.";
errmsg.err18="O tamanho do Endere�o MAC n�o est� correto.";
errmsg.err19="O Endere�o MAC n�o pode ser o endere�o de broadcast."
errmsg.err20="Insira o Endere�o MAC no formato (xx:xx:xx:xx:xx:xx).";
errmsg.err21="Formato Inv�lido de Endere�o MAC.";
errmsg.err22="O Endere�o MAC da WAN n�o est� correto.";
errmsg.err23="Valor hexadecimal inv�lido ";
errmsg.err24=" encontrado no Endere�o MAC ";
errmsg.err25="O valor da Chave n�o est� correto.";
errmsg.err26="O tamanho da Chave n�o est� correto.";
errmsg.err27="M�scara de Sub-Rede inv�lida.";
errmsg.err28=" possui caracteres inv�lidos, devem estar entre [ 0 - 9 ].";
errmsg.err29=" possui c�digo ascii inv�lido."
errmsg.err30=" possui d�gitos hexadecimais inv�lidos.";
errmsg.err31=" valor � inv�lido.";
errmsg.err32="Endere�o IP e Gateway n�o est�o na mesma m�scara de sub-rede.";
errmsg.err33="Endere�o IP e Gateway n�o podem ser o mesmo.";
errmsg.err34=" n�o � permitido conter espa�os em branco.";

//Wol.asp error messages
errmsg.err35="Voc� deve inserir um Endere�o MAC para funcionar."
errmsg.err36="Voc� deve inserir um endere�o broadcast de rede para funcionar.";
errmsg.err37="Voc� deve inserir uma porta UDP para funcionar.";

//WL_WPATable.asp error messages
//WPA.asp error messages
errmsg.err38="Por favor insira uma Chave Compartilhada!";
errmsg.err39="Chave Inv�lida, deve conter entre 8 e 63 caracteres ASCII ou 64 d�gitos hexadecimais."
errmsg.err40="Voc� deve inserir uma chave no campo Chave ";
errmsg.err41="Tamanho inv�lido na Chave ";
errmsg.err43="Rekey interval";

//config.asp error messages
errmsg.err42="Por favor selecione um arquivo de configura��o para restaurar.";

//WL_ActiveTable.asp error messages
errmsg.err44="As verifica��es totais excedem 128 contagens.";

//Site_Survey.asp error messages
errmsg.err47="SSID Inv�lida.";

//Wireless_WDS.asp error messages
errmsg.err48="WDS n�o � compat�vel com a configura��o atual do roteador. Por favor verifique os seguintes passos :\n * O Modo Wireless deve ser AccessPoint \n * WPA2 n�o � suportado no modo WDS \n * Modo de Rede Somente-B n�o � suportado em modo WDS";

//Wireless_radauth.asp error messages
errmsg.err49="Radius est� dispon�vel somente no modo AccessPoint.";

//Wireless_Basic.asp error messages
errmsg.err50="Voc� deve inserir uma SSID.";

// Management.asp error messages
errmsg.err51="O Roteador est� atualmente configurado com senha padr�o. \
			Como medida de seguran�a, voc� deve alterar a senha antes de habilitar o Gerenciamento Remoto. \
			Clique em OK para mudar sua senha. Clique em Cancelar pra deixar o Gerenciamento Remoto desabilitado.";
errmsg.err52="Verifica��o de Senha est� incorreta.";

// Port_Services.asp error messages
errmsg.err53="Ap�s finilzar todas as altera��es, clique em Aplicar para salvar as configura��es.";
errmsg.err54="Voc� deve inserir um Nome do Servi�o.";
errmsg.err55="O Nome do Servi�o j� existe.";

// QoS.asp error messages
errmsg.err56="O valor da Porta est� fora de alcance [0 - 65535]";

// Routing.asp error messages
errmsg.err57="Apagar Registro?";

// Status_Lan.asp error messages
errmsg.err58="Clique para apagar a concess�o.";

//Status_Wireless.asp error messages
errmsg.err59="N�o dispon�vel! Por favor habilite a Rede Wireless.";

//Upgrade.asp error messages
errmsg.err60="Por favor selecione um arquivo para atualizar.";
errmsg.err61="Arquivo de imagem incorreto.";

// *******************************************  COMMON MENU ENTRIES  *******************************************//
var bmenu= new Object();
bmenu.setup="Configura��es";
bmenu.setupbasic="Configura��es B�sicas";
bmenu.setupddns="DDNS";
bmenu.setupmacclone="Clone de Endere�o MAC";
bmenu.setuprouting="Roteamento Avan�ado";
bmenu.setupvlan="VLANs";

bmenu.wireless="Wireless";
bmenu.wirelessBasic="Configura��es B�sicas";
bmenu.wirelessRadius="Radius";
bmenu.wirelessSecurity="Seguran�a Wireless";
bmenu.wirelessMac="Filtro de MAC";
bmenu.wirelessAdvanced="Configura��es Avan�adas";
bmenu.wirelessWds="WDS";

bmenu.security="Seguran�a";
bmenu.firwall="Firewall";
bmenu.vpn="VPN";

bmenu.accrestriction="Restri��es de Acesso";
bmenu.webaccess="Acesso � Internet";


bmenu.applications="Applications &amp; Gaming";
bmenu.applicationsprforwarding="Encaminhamento de Faixa de Portas";
bmenu.applicationspforwarding="Encaminhamento de Portas";
bmenu.applicationsptriggering="Port Triggering";
bmenu.applicationsUpnp="UPnP";
bmenu.applicationsDMZ="DMZ";
bmenu.applicationsQoS="QoS";

bmenu.sipath="SIPatH";
bmenu.sipathoverview="Overview";
bmenu.sipathphone="Phonebook";
bmenu.sipathstatus="Status";

bmenu.admin="Administra��o";
bmenu.adminManagement="Gerenciamento";
bmenu.adminHotspot="Hotspot";
bmenu.adminServices="Servi�os";
bmenu.adminAlive="Keep Alive";
bmenu.adminLog="Log";
bmenu.adminDiag="Diagn�sticos";
bmenu.adminWol="WOL";
bmenu.adminFactory="Padr�es de F�brica";
bmenu.adminUpgrade="Atualiza��o de Firmware";
bmenu.adminBackup="Backup";


bmenu.statu="Status";
bmenu.statuRouter="Roteador";
bmenu.statuLAN="LAN";
bmenu.statuSputnik="Agente Sputnik";
bmenu.statuWLAN="Wireless";
bmenu.statuSysInfo="Sys-Info";


// ******************************************* Alive.asp *******************************************//

var alive = new Object();
alive.titl=" - Keep Alive";
alive.h2="Keep Alive";
alive.legend="Rein�cio Agendado";
alive.sevr1="Rein�cio Agendado";
alive.hour="No Hor�rio determinado";
alive.legend2="Watchdog da Conex�o WDS";
alive.sevr2="Habilitar Watchdog";
alive.IP="Endere�os IP";
alive.legend3="Proxy/Watchdog da Conex�o";
alive.sevr3="Habilitar Watchdog do Proxy";
alive.IP2="Endere�o IP do Proxy";
alive.port="Porta do Proxy";

//help container
var halive = new Object();
halive.right2="Escolha quando reiniciar o roteador. O Cron deve estar habilitado na ba de Gerenciamento.";
halive.right4="Tr�s IPs no m�ximo separados por um <em>ESPA�O</em> s�o permitidos.<BR/>Formato dos Endere�os IPs: xxx.xxx.xxx.xxx.";


// ******************************************* config.asp *******************************************//

var config = new Object();
config.titl=" - Restaura��o & Backup";
config.h2="Backup das Configura��es";
config.legend="Backup das Configura��es";
config.mess1="Clique em \"" + sbutton.backup + "\" para baixar o arquivo de backup das configura��es para o seu computador.";
config.h22="Restaurar Configura��es";
config.legend2="Restaurar Configura��es";
config.mess2="Por favor selecione um arquivo para restaurar.";
config.mess3="A T E N � � O";
config.mess4="Fa�a upload de backups feitos usando esse firmware a partir de um roteador do mesmo modelo que  o seu.<br />N�o utilize nenhum arquivo que n�o foi criado atrav�s dessa interfae!";

//help container
var hconfig = new Object();
hconfig.right2="Voc� pode realizar um backup das configura��es atuais caso necessite resetar o roteador para os padr�es de f�brica.<br /><br />Clique em <em>Backup</em> para salvar as configura��es atuais.";
hconfig.right4="Clique em <em>Procurar...</em> para procurar por um arquivo de configura��o salvo em seu computador.<br /><br />Clique em <em>" + sbutton.restore + "</em> para sobrescrever todas as configura��es atuais pelo arquivo de configura��o.";


// ******************************************* DDNS.asp *******************************************//

var ddns = new Object();
ddns.titl=" - DNS Din�mico"
ddns.h2="Sistema de Nomes de Dom�nio Din�mico(DDNS)";
ddns.legend="DDNS";
ddns.srv="Servi�o DDNS";
ddns.emailaddr="Endere�o de e-mail";
ddns.typ="Tipo";
ddns.dynamic="Din�mico";
// ddns.static="Est�tico"; Please note: Mozilla doesn't like ".static", use ".sttic" , Eko 22.mar.06
ddns.custom="Personalizado";
ddns.wildcard="Wildcard";
ddns.statu="Status DDNS";

var ddnsm = new Object();
ddnsm.dyn_strange="Resposta estranha do servidor, voc� est� se conectando ao servidor correto?";
ddnsm.dyn_good="DDNS atualizado com sucesso";
ddnsm.dyn_noupdate="Atualiza��o n�o necess�ria no momento";
ddnsm.dyn_nohost="O hostname n�o existe";
ddnsm.dyn_notfqdn="O Host Name n�o est� correto";
ddnsm.dyn_yours="O Host m�o est� sob o seu controle";
ddnsm.dyn_abuse="O Host foi bloqueado por por abusos";
ddnsm.dyn_nochg="O Endere�o IP n�o foi alterado desde a �ltima atualiza��o";
ddnsm.dyn_badauth="Falha na autentica��o (verifique o Nome de Usu�rio e Senha)";
ddnsm.dyn_badsys="Par�metros inv�lidos do sistema";
ddnsm.dyn_badagent="Este useragent foi bloqueado";
ddnsm.dyn_numhost="Muitos ou muito poucos hosts encontrados";
ddnsm.dyn_dnserr="Erro interno de DNS";
ddnsm.dyn_911="Erro inesperado 911";
ddnsm.dyn_999="Erro inesperado 999";
ddnsm.dyn_donator="A funcionalidade requerida est� dispon�vel somente para doadores, por favor doe";
ddnsm.dyn_uncode="C�digo de retorno desconhecido";

ddnsm.tzo_good="Opera��o Completa";
ddnsm.tzo_noupdate="N�o � necess�ria atualiza��o nesse momento";
ddnsm.tzo_notfqdn="Nome de Dom�nio Inv�lido";
ddnsm.tzo_notmail="E-mail Inv�lido";
ddnsm.tzo_notact="A��o Inv�lida";
ddnsm.tzo_notkey="Chave Inv�lida";
ddnsm.tzo_notip="Endere�o IP Inv�lido";
ddnsm.tzo_dupfqdn="Nome de Dom�nio Duplicado";
ddnsm.tzo_fqdncre="Nome de Dom�nio j� criado para este dom�nio";
ddnsm.tzo_expired="A conta expirou";
ddnsm.tzo_error="Erro inesperado do servidor";

ddnsm.zone_701="Zona n�o configurada nesta conta";
ddnsm.zone_702="Falha na Atualiza��o";
ddnsm.zone_703="Um dos par�metros <em>zonas</em> ou <em>host</em> � necess�rio";
ddnsm.zone_704="A Zona deve ser um nome de internet <em>pontuado</em> v�lido";
ddnsm.zone_705="A Zona n�o pode estar vazia";
ddnsm.zone_707="Atualiza��es duplicadas para o mesmo host/ip, ajuste as configura��es do cliente";
ddnsm.zone_201="Nenhum registro necessita de atualiza��o";
ddnsm.zone_badauth="Falha na Autoriza��o (Nome de Usu�rio ou Senha)";
ddnsm.zone_good="ZoneEdit foi atualizado com sucesso";
ddnsm.zone_strange="Resposta estranha do servidor, voc� est� se conectando ao servidor correto?";

ddnsm.all_closed="Servidor DDNS est� fechado";
ddnsm.all_resolving="Resolvendo nome de dom�nio";
ddnsm.all_errresolv="Falha na resolu��o do nome de dom�nio";
ddnsm.all_connecting="Conectando ao servidor";
ddnsm.all_connectfail="Falha na conex�o ao servidor";
ddnsm.all_disabled="Fun��o DDNS desabilitada";
ddnsm.all_noip="Sem conex�o � internet";

//help container
var hddns = new Object();
hddns.right2="O DDNS permite que voc� acesse sua rede utilizando nomes de dom�nios so inv�s de endere�os IPs. \
	O servi�o gerencia mudan�as no endere�o IP e atualiza as informa��es do seu dom�nio dinamicamente. \
	Voc� deve se inscrever no servi�o atrav�s de um dos sites: DynDNS.org, TZO.com ou ZoneEdit.com.";


// ******************************************* Diagnostics.asp *******************************************//

var diag = new Object();
diag.titl=" - Diagn�sticos";
diag.h2="Diagn�sticos";
diag.legend="Command Shell";
diag.cmd="Comandos";
diag.startup="Inicializa��o";
diag.firewall="Firewall";

//help container
var hdiag = new Object();
hdiag.right2="Voc� pode executar comandos via interface web. Preencha a caixa de texto com seus comando e clique em <em>" + sbutton.runcmd + "</em> para enviar.";


// ******************************************* DMZ.asp *******************************************//

var dmz = new Object();
dmz.titl=" - DMZ";
dmz.h2="Zona Demilitarizada (DMZ)";
dmz.legend="DMZ";
dmz.serv="Usar DMZ";
dmz.host="Endere�o IP do Host DMZ";


//help container
var hdmz = new Object();
hdmz.right2="Habilitando esta op��o voc� ir� expor o host especificado � Internet. Todas as portas estar�o acess�veis a partir da Internet.";


// ******************************************* Factory_Defaults.asp *******************************************//

var factdef = new Object();
factdef.titl=" - Padr�es de F�brica";
factdef.h2="Padr�es de F�brica";
factdef.legend="Resetar configura��es do roteador";
factdef.restore="Restaurar Padr�es de F�brica";

factdef.mess1="Aten��o! Se voc� clicar em OK, o dispositivo ir� resetar aos padr�es de f�brica e todas as configura��es anteriores ser�o apagadas.";

//help container
var hfactdef = new Object();
hfactdef.right1="Esta op��o ir� restaurar todas as op��es para o padr�o de f�brica. Todas as suas configura��es ser�o resetadas.";


// ******************************************* FilterIP%AC.asp *******************************************//

var filterIP = new Object();
filterIP.titl=" - Lista de PCs";
filterIP.h2="Lista de PCs";
filterIP.h3="Insira o Endere�o MAC dos PCs neste formato: xx:xx:xx:xx:xx:xx";
filterIP.h32="Insira o Endere�o IP dos PCs";
filterIP.h33="Insira a Faixa de IPs dos PCs";
filterIP.ip_range="Faixa de IPs";


// ******************************************* Filter.asp *******************************************//

var filter = new Object();
filter.titl=" - Restri��es de Acesso";
filter.h2="Acesso � Internet";
filter.legend="Politicas de Acesso";
filter.restore="Restaurar Padr�es de F�brica";
filter.pol="Pol�ticas";
filter.polname="Nome da Pol�tica";
filter.pcs="PCs";
filter.polallow="Acesso � Internet durante os dias e as horas selecionadas.";
filter.legend2="Dias";
filter.time="Horas";
filter.h24="24 Horas";
filter.legend3="Servi�os Bloqueados";
filter.catchall="Capturar todos os protocolos P2P";
filter.legend4="Bloqueio de Website pelo Endere�o URL";
filter.legend5="Bloqueio de Website por Palavras-Chave";

filter.mess1="Remover pol�tica?";
filter.mess2="Voc� deve selecionar um dia no m�nimo.";
filter.mess3="O tempo final deve ser maior que o tempo inicial.";

//help container
var hfilter = new Object();
hfilter.right1="Pol�tica de Acesso � Internet:";
hfilter.right2="Voc� pode definir at� 10 pol�ticas de acesso. Clique em <em>" + sbutton.del + "</em> para remover uma pol�tica ou em <em>" + sbutton.summary + "</em> para ver um das pol�ticas de acesso.";
hfilter.right3="Status:";
hfilter.right4="Habilitar ou Desabilitar pol�tica.";
hfilter.right5="Nome da Pol�tica:";
hfilter.right6="Voc� deve adicionar um nome � sua pol�tica de acesso.";
hfilter.right7="Dias:";
hfilter.right8="Escolha os dias da semana aos quais a pol�tica ser� aplicada.";
hfilter.right9="Hor�rios:";
hfilter.right10="Insira o hor�rio do dia em que voc� gostaria de aplicar a pol�tica.";
hfilter.right11="Servi�os Bloqueados:";
hfilter.right12="Voc� pode escolher bloquear determinados servi�os. Clique em <em>" + sbutton.filterSer + "</em> para modificar estas configura��es.";
hfilter.right13="Bloqueio de Website pela URL:";
hfilter.right14="Voc� pode bloquear determinados sites inserindo o endere�o da URL.";
hfilter.right15="Bloqueio de Website por Palavra-Chave:";
hfilter.right16="Voc� pode bloquear acesso � determinados sites pelas Palavras-Chave contidas na p�gina web.";


// ******************************************* FilterSummary.asp *******************************************//

var filterSum = new Object();
filterSum.titl=" - Resumo das Restri��es de Acesso";
filterSum.h2="Resumo das Pol�ticas de Acesso � Internet";
filterSum.polnum="N�.";
filterSum.polday="Hora do Dia";


// ******************************************* Firewall.asp *******************************************//

var firewall = new Object();
firewall.titl=" - Firewall";
firewall.h2="Seguran�a";
firewall.legend="Prote��o de Firewall";
firewall.firewall="Firewall SPI";
firewall.legend2="Filtros Adicionais";
firewall.proxy="Filtrar Proxy";
firewall.cookies="Filtrar Cookies";
firewall.applet="Filtrar Java Applets";
firewall.activex="Filtrar ActiveX";
firewall.legend3="Bloquear Requisi��es da WAN";
firewall.ping="Bloquear Requisi��es An�nimas da Internet";
firewall.muticast="Filtrar Multicast";
filter.nat="Filtrar Redirecionamento NAT da Internet";
filter.port113="Filtrar IDENT (Porta 113)";

//help container
var hfirewall = new Object();
hfirewall.right2="Habilita ou desabilita o firewall SPI.";


// ******************************************* Forward.asp *******************************************//

var prforward = new Object();
prforward.titl=" - Encaminhamento de Range de Portas";
prforward.h2="Encaminhamento de Range de Portas";
prforward.legend="Encaminhamentos";
prforward.app="Aplica��o";

//help container
var hprforward = new Object();
hprforward.right2="Determinadas aplica��es podem requerer a abertura de portas espec�ficas para que funcionem corretamente. \
	Exemplos dessas aplica��es incluem servidores e alguns jogos on-line. \
	Quando uma requisi��o � uma determinada porta chega da Internet, o roteador ir� rotear os dados para o computador especificado. \
	Devido � interesses em seguran�a, voc� pode limitar o encaminhamento de portas para somente �s portas em uso, \
	e desmarcar a op��o <em>" + share.enable +"</em> ap�s ter finalizado.";


// ******************************************* ForwardSpec.asp *******************************************//

var pforward = new Object();
pforward.titl=" - Encaminhamento de Portas";
pforward.h2="Encaminhamento de Portas";
pforward.legend="Encaminhamentos";
pforward.app="Aplica��o";
pforward.from="Da Porta";
pforward.to="Para a Porta";

//help container
var hpforward = new Object();
hpforward.right2="Determinadas aplica��es podem requerer a abertura de portas espec�ficas para que funcionem corretamente. \
	Exemplos dessas aplica��es incluem servidores e alguns jogos on-line. \
	Quando uma requisi��o � uma determinada porta chega da Internet, o roteador ir� rotear os dados para o computador especificado. \
	Devido � interesses em seguran�a, voc� pode limitar o encaminhamento de portas para somente �s portas em uso, \
	e desmarcar a op��o <em>Habilitar</em> ap�s ter finalizado.";


// ******************************************* Hotspot.asp *******************************************//

var hotspot = new Object();
hotspot.titl=" - Hotspot";
hotspot.h2="Portal do Hotspot";
hotspot.legend="Chillispot";
hotspot.hotspot="Chillispot";
hotspot.pserver="Endere�o IP/DNS Prim�rio do Servidor Radius";
hotspot.bserver="Backup do Endere�o IP/DNS do Servidor Radius";
hotspot.dns="Endere�o IP do DNS";
hotspot.url="URL de Redirecionamento";
hotspot.dhcp="Interface DHCP";
hotspot.radnas="ID NAS do Radius";
hotspot.uam="UAM Secret";
hotspot.uamdns="UAM Any DNS";
hotspot.allowuam="UAM Permitido";
hotspot.macauth="MACauth";
hotspot.option="Op��es Adicionais do Chillispot";
hotspot.fon_chilli="Gerenciamento do Usu�rio Local Chillispot";
hotspot.fon_user="Lista de Usu�rios";
hotspot.http_legend="Redirecionamento HTTP";
hotspot.http_srv="Redirecionamento HTTP";
hotspot.http_ip="Endere�o IP de Destino HTTP";
hotspot.http_port="Porta de Destino HTTP";
hotspot.http_net="Rede de Origem HTTP";
hotspot.nocat_legend="NoCatSplash";
hotspot.nocat_srv="NoCatSplash";
hotspot.nocat_gateway="Nome do Gateway";
hotspot.nocat_home="Home Page";
hotspot.nocat_allowweb="Web Hosts Permitidos";
hotspot.nocat_docroot="Document Root";
hotspot.nocat_splash="Splash URL";
hotspot.nocat_port="Excluir Portas";
hotspot.nocat_timeout="Timeout de Login";
hotspot.nocat_verbose="Verbosity";
hotspot.nocat_route="Rotear Somente";
hotspot.smtp_legend="Redirecionamento SMTP";
hotspot.smtp_srv="Redirecionamento SMTP";
hotspot.smtp_ip="Endere�o IP de Destino SMTP";
hotspot.smtp_net="Rede de Origem SMTP";
hotspot.shat_legend="Zero IP Config";
hotspot.shat_srv="Zero IP Config";
hotspot.shat_srv2="Zero IP Config habilitado";
hotspot.sputnik_legend="Sputnik";
hotspot.sputnik_srv="Agente Sputnik";
hotspot.sputnik_id="ID do Servidor Sputnik";
hotspot.sputnik_instant="Usar Configura��o Instant�nea do Sputnik";
hotspot.sputnik_express="Usar SputnikNet Express";
hotspot.sputnik_about="sobre o Sputnik";


// ******************************************* Info.htm *******************************************//

var info = new Object();
info.titl=" - Informa��es";
info.h2="Informa��es do Sistema";
info.wlanmac="MAC Wireless";
info.srv="Servi�os";
info.ap="Access Point";


// ******************************************* index_heartbeat.asp *******************************************//

var idx_h = new Object();
idx_h.srv="Servidor Heart Beat";
idx_h.con_strgy="Estrat�gia de Conex�o";
idx_h.max_idle="Conectar sob Demanda: M�ximo Tempo Ocioso";
idx_h.alive="Keep Alive: Per�odo de Rediscagem";


// ******************************************* index_l2tp.asp *******************************************//

var idx_l = new Object();
idx_l.srv="Servidor L2TP";


// ******************************************* index_pppoe.asp *******************************************//

var idx_pppoe = new Object();
idx_pppoe.use_rp="Usar RP PPPoE";


// ******************************************* index_pptp.asp *******************************************//

var idx_pptp = new Object();
idx_pptp.srv="Usar DHCP";
idx_pptp.wan_ip="Endere�o IP para Internet";
idx_pptp.gateway="Gateway (Servidor PPTP)";
idx_pptp.encrypt="Criptografia PPTP";


// ******************************************* index_static.asp *******************************************//

var idx_static = new Object();
idx_static.dns="DNS Est�tico";


// ******************************************* index.asp *******************************************//

var idx = new Object();
idx.titl=" - Configura��o";
idx.h2="Configura��o da Internet";
idx.h22="Configura��o Wireless";
idx.legend="Tipo de Conex�o � Internet";
idx.conn_type="Tipo de Conex�o";
idx.stp="STP";
idx.stp_mess="(desabilitar para ISPs COMCAST)";
idx.optional="Configura��o Opcional (necess�ria para alguns ISPs)";
idx.mtu="MTU";
idx.h23="Configura��o da Rede";
idx.routerip="IP do Roteador";
idx.lanip="Endere�o IP Local";
idx.legend2="Porta WAN";
idx.wantoswitch="Atribuir Porta WAN ao Switch";
idx.legend3="Configura��es de Hora";
idx.timeset="Fuso Hor�rio / Hor�rio de Ver�o (DST)";
idx.localtime="Usar hora local";
idx.static_ip="Endere�o IP Est�tico";
idx.dhcp="Configura��o Autom�tica - DHCP";
idx.dhcp_legend="Configura��es do Endere�o de Rede do Servidor (DHCP)";
idx.dhcp_type="Tipo de DHCP";
idx.dhcp_srv="Servidor DHCP";
idx.dhcp_fwd="DHCP Forwarder";
idx.dhcp_start="Endere�o IP Inicial";
idx.dhcp_end="Endere�o IP Final";		//used in Status_Lan.asp
idx.dhcp_maxusers="N�mero M�ximo de Usu�rios DHCP";
idx.dhcp_lease="Tempo de Concess�o ao Cliente";
idx.dhcp_dnsmasq="Usar DNSMasq para o DHCP";
idx.dns_dnsmasq="Usar DNSMasq para o DNS";
idx.auth_dnsmasq="DHCP-Authoritative";


//help container
var hidx = new Object();
hidx.right2="Estas configura��es s�o comumente usdas por provedores � Cabo.";
hidx.right4="Insira o Host Name fornecido pelo seu ISP.";
hidx.right6="Insira o Nome de Dom�nio fornecido pelo seu ISP.";
hidx.right8="Este � o endere�o do roteador.";
hidx.right10="Esta � a m�scara de sub-rede do roteador.";
hidx.right12="Permite ao roteador gerenciar seus endere�os IP.";
hidx.right14="O endere�o com o qual voc� gostaria de iniciar.";
hidx.right16="Voc� pode limitar o n�mero de endere�os fornecidos pelo seu roteador.";
hidx.right18="Escolha o fuso hor�rio e o hor�rio de ver�o ao qual voc� pertence. O roteador pode usar hor�rios locais ou o hor�rio UTC.";


// ******************************************* Join.asp *******************************************//

var join = new Object();

//sshd.webservices
join.titl=" - Ingressar";
join.mess1="Ingresso como cliente realizado com sucesso � rede: ";



// ******************************************* Log_incoming.asp *******************************************//

var log_in = new Object();
log_in.titl=" - Tabela do Log de Entrada";
log_in.h2="Tabela do Log de Entrada";
log_in.th_ip="IP de Origem";
log_in.th_port="N�mero da Porta de Destino";



// ******************************************* Log_outgoing.asp *******************************************//

var log_out = new Object();
log_out.titl=" - Tabela do Log de Sa�da";
log_out.h2="Tabela do Log de Sa�da";
log_out.th_lanip="IP da LAN";
log_out.th_wanip="URL/IP de Destino";
log_out.th_port="N�mero do Servi�o/Porta";


// ******************************************* Log.asp *******************************************//

var log = new Object();
log.titl=" - Log";
log.h2="Gerenciamento do Log";
log.legend="Log";
log.lvl="N�vel do Log";
log.drop="Derrubados";
log.reject="Rejeitados";
log.accept="Aceitos";


// ******************************************* Management.asp *******************************************//

var management = new Object();
management.titl=" - Administra��o";
management.h2="Gerenciamento do Roteador";

management.psswd_legend="Senha do Roteador";
management.psswd_user="Nome de Usu�rio do Roteador";
management.psswd_pass="Senha do Roteador";
management.pass_conf="Confirme a Senha do Roteador";

management.remote_legend="Acesso Remoto";
management.remote_gui="Gerenciamento via Interface Web";
management.remote_https="Usar HTTPS";
management.remote_guiport="Porta da Interface Web";
management.remote_ssh="Gerenciamento SSH";
management.remote_sshport="Porta do SSH";

management.web_legend="Acesso Web";
management.web_refresh="Auto-Atualiza��o (em segundos)";
management.web_sysinfo="Habilitar P�gina de Informa��es";
management.web_sysinfopass="Prote��o de Senha na P�gina de Informa��es";
management.web_sysinfomasq="Mascaramento de MAC na P�gina de Informa��es";

management.boot_legend="Boot Wait";
management.boot_srv="Boot Wait";

management.cron_legend="Cron";
management.cron_srvd="Cron";

management.dsn_legend="DNSMasq";
management.dsn_srv="DNSMasq";
management.dsn_loc="DNS Local";
management.dsn_opt="Op��es Adicionais de DNS";

management.loop_legend="Loopback";
management.loop_srv="Loopback";

management.wifi_legend="802.1x";
management.wifi_srv="802.1x";

management.ntp_legend="Cliente NTP";
management.ntp_srv="NTP";

management.rst_legend="Bot�o de Reset";
management.rst_srv="Bot�o de Reset";

management.routing_legend="Roteamento";
management.routing_srv="Roteamento";

management.wol_legend="Wake-On-LAN";
management.wol_srv="WOL";
management.wol_pass="SecureOn Password";
management.wol_mac="Endere�os MAC<br/>( Formato: xx:xx:xx:xx:xx:xx )";

management.ipv6_legend="Suporte IPv6";
management.ipv6_srv="IPv6";
management.ipv6_rad="Habilitar Radvd";
management.ipv6_radconf="Configura��es Radvd";

management.jffs_legend="Suporte JFFS2";
management.jffs_srv="JFFS2";
management.jffs_clean="Limpar JFFS2";

management.lang_legend="Selecionar Linguagem";
management.lang_srv="Linguagem";
management.lang_bulgarian="bulgarian";
management.lang_tradchinese="tradchinese";
management.lang_chinese_simplified="chinese simplified";
management.lang_croatian="croatian";
management.lang_czech="czech";
management.lang_dutch="dutch";
management.lang_english="Ingl�s";
management.lang_french="Franc�s";
management.lang_german="Alem�o";
management.lang_italian="Italiano";
management.lang_brazilian="Portugu�s-Brazil";
management.lang_slovenian="slovenian";
management.lang_spanish="Espanhol";
management.lang_swedish="swedish";

management.net_legend="Configura��es do Filtro de IP (ajustes para P2P)";
management.net_port="N�mero M�ximo de Portas";
management.net_tcptimeout="Timeout TCP (em segundos)";
management.net_udptimeout="Timeout UDP (em segundos)";

management.clock_legend="Overclocking";
management.clock_frq="Freq��ncia";
management.clock_support="N�o Suportado";

management.mmc_legend="Suporte � Cart�o MMC/SD";
management.mmc_srv="Dispositivo MMC";

management.samba_legend="Samba FS Automount";
management.samba_srv="Sistema de Arquivos SMB";
management.samba_share="Compartilhamento";
management.samba_stscript="Startscript";

management.SIPatH_srv="SIPatH";
management.SIPatH_port="Porta SIP";
management.SIPatH_domain="Dom�nio SIP";

management.gui_style="Estilo da Interface do Roteador";


//help container
var hmanagement = new Object();
hmanagement.right1="Auto-Refresh:";
hmanagement.right2="Adjusts the Web GUI automatic refresh interval. 0 disables this feature completely.";


// ************ Port_Services.asp (used by Filters.asp and QoS.asp, QOSPort_Services.asp not used anymor) *****************************************//

var portserv = new Object();
portserv.titl=" - Port Services";
portserv.h2="Port Services";


// ******************************************* QoS.asp *******************************************//

var qos = new Object();
qos.titl=" - Qualidade do Servi�o";
qos.h2="Qualidade do Servi�o (QoS)";
qos.legend="Configura��es do QoS";
qos.srv="Iniciar QoS";
qos.type="Agendador de Pacotes";
qos.uplink="Uplink (kbps)";
qos.dnlink="Downlink (kbps)";
qos.gaming="Otimizar para Jogos";
qos.legend2="Prioridade dos Servi�os";
qos.prio_x="Isento";
qos.prio_p="Premium";
qos.prio_e="Express";
qos.prio_s="Padr�o";
qos.prio_b="Bulk";
qos.legend3="Prioridade de M�scara de Sub-Rede";
qos.ipmask="IP/M�scara";
qos.maxrate_b="Max Kbits";
qos.maxrate_o="Max Rate";
qos.legend4="Prioridade de MAC";
qos.legend5="Prioridade de Porta Ethernet";
qos.legend6="N�vel de Banda Padr�o";
qos.bandwith="Banda em Kbits";

//help container
var hqos = new Object();
hqos.right1="Uplink:";
hqos.right2="Defina para 80%-95% (max) do total de seu limite de upload.";
hqos.right3="Downlink:";
hqos.right4="Defina para 80%-100% (max) do seu limite total de download.";
hqos.right6="Voc� pode controlar sua taxa de dados respeitando a aplica��o que est� consumindo a largura de banda.";
hqos.right8="Voc� pode especificar a prioridade para todo o tr�fego de um endere�o IP ou range de endere�os IP.";
hqos.right10="Voc� pode especificar prioridades para todo o tr�fego de um dispositivo de sua rede dando a ele um Nome de Dispositivo, \
			especificando a prioridade e inserindo seu endere�o MAC.";
hqos.right12="Voc� pode controlar sua taxa de dados de acordo com qual porta LAN seu dispositivo est� fisicamente conectado. \
			Voc� pode atribuir prioridades de acordo com os dispositivos conectados nas portas LAN de 1 � 4.";


// ******************************************* RouteTable.asp *******************************************//

var routetbl = new Object();
routetbl.titl=" - Tabela de Roteamento";
routetbl.h2="Lista de Entrada da Tabela de Roteamento";
routetbl.th1="Endere�o IP de Destino da LAN";


// ******************************************* Routing.asp *******************************************//

var route = new Object();
route.titl=" - Roteamento";
route.h2="Roteamento Avan�ado";
route.mod="Modo de Opera��o";
route.bgp_legend="Configura��es BGP";
route.bgp_ip="IP Vizinho";
route.bgp_as="N�mero AS Vizinho";
route.rip2_mod="Roteador RIP2";
route.ospf_mod="Roteador OSPF";
route.gateway_legend="Roteamento Din�mico";
route.static_legend="Roteamento Est�tico";
route.static_setno="Selecione um N�mero de Registro";
route.static_name="Nome da Rota";
route.static_ip="Endere�o IP de Destino da LAN";

//help container
var hroute = new Object();
hroute.right1="Modo de Opera��o:";
hroute.right2="Se o roteador est� hospedando sua conex�o � Internet, selecione o modo <em>Gateway</em>. Se algum outro roteador existir na sua rede, selecione o modo <em>Router</em>.";
hroute.right3="Selecione Uum N�mero de Registro:";
hroute.right4="Este � o n�mero �nico da rota, voc� pode definir at� 20 rotas.";
hroute.right5="Nome da Rota:";
hroute.right6="Insira o nome desejado que deseja associar � esta regra.";
hroute.right7="Endere�o IP de Destino da LAN:";
hroute.right8="Este � o host remoto ao qual voc� gostaria de atribuir a rota est�tica.";
hroute.right9="M�scara de Sub-Rede:";
hroute.right10="Determina o host e a por��o de rede a qual pertence a rota.";


// ******************************************* Site_Survey.asp *******************************************//

var survey = new Object();
survey.titl=" - Pesquisa de Redes";
survey.h2="Redes Wireless Vizinhas";
survey.thjoin="Ingressar na Rede";


// ******************************************* Services.asp *******************************************//

var service = new Object();

service.titl=" - Servi�os";
service.h2="Gerenciamento de Servi�os";

//kaid
service.kaid_legend="XBOX Kaid";
service.kaid_srv="Iniciar Kaid";
service.kaid_mac="Console Macs: (deve terminar com um ;)";

//DHCPd
service.dhcp_legend="Cliente DHCP";
service.dhcp_vendor="Set Vendorclass";
service.dhcp_legend2="Servidor DHCP";
service.dhcp_srv="Daemon DHCP";
service.dhcp_jffs2="Usar JFFS2 Para o BD de Concess�o aos Clientes";
service.dhcp_domain="Dom�nio Utilizado";
service.dhcp_landomain="Dominio da LAN";
service.dhcp_option="Op��es Adicionais do DHCPd";

//pptp.webservices
service.pptp_legend="PPTP";
service.pptp_srv="Servidor PPTP";
service.pptp_client="IP(s) Clientes";
service.pptp_chap="CHAP-Secrets";

//syslog.webservices
service.syslog_legend="Log do Sistema";
service.syslog_srv="Syslogd";
service.syslog_ip="Servidor Remoto";

//telnet.webservices
service.telnet_legend="Telnet";
service.telnet_srv="Telnet";

//pptpd_client.webservices
service.pptpd_legend="Cliente PPTP";
service.pptpd_option="Op��es do Cliente PPTP";
service.pptpd_ipdns="IP do Servidor ou Nome DNS";
service.pptpd_subnet="Sub-Rede Remota";
service.pptpd_subnetmask="M�scara de Sub-Rede Remota";
service.pptpd_encry="Criptografia MPPE";
service.pptpd_mtu="MTU";
service.pptpd_mru="MRU";
service.pptpd_nat="NAT";

//rflow.webservices
service.rflow_legend="RFlow / MACupd";
service.rflow_srv1="RFlow";
service.rflow_srv2="MACupd";

//pppoe-relay.webservices
service.pppoe_legend="Relay PPPOE";
service.pppoe_srv="Relay";

//snmp.webservices
service.snmp_legend="SNMP";
service.snmp_srv="SNMP";
service.snmp_loc="Localiza��o";
service.snmp_contact="Contato";
service.snmp_name="Nome";
service.snmp_read="Comunidade RO";
service.snmp_write="Comunidade RW";

//openvpn.webservices
service.vpn_legend="Cliente OpenVPN";
service.vpn_srv="Iniciar OpenVPN";
service.vpn_ipname="IP/Namo do Servidor";
service.vpn_mtu="TUN MTU Setting";
service.vpn_mru="TUN MTU Extra";
service.vpn_mss="TCP MSS";
service.vpn_compress="Usar Compress�o LZO";
service.vpn_tunnel="Protocolo do T�nel";
service.vpn_srvcert="Certificado P�blico do Servidor";
service.vpn_clicert="Certificado P�blico do Cliente";
service.vpn_certtype="nsCertType";
service.vpn_clikey="Chave Privada do Cliente";

//sshd.webservices
service.ssh_legend="Shell Seguro";
service.ssh_srv="SSHd";
service.ssh_password="Login com Senha";
service.ssh_key="Chaves Autorizadas";


// ******************************************* Sipath.asp + cgi *******************************************//

var sipath = new Object();
sipath.titl=" - SiPath Overview";
sipath.phone_titl=" - Phonebook";
sipath.status_titl=" - Status";



// ******************************************* Status_Lan.asp *******************************************//

var status_lan = new Object();
status_lan.titl=" - Status da LAN";
status_lan.h2="Rede Local";
status_lan.legend="Status da LAN";
status_lan.h22="Protocolo de Configura��o Din�mica de Hosts (DHCP)";
status_lan.legend2="Status DHCP";
status_lan.legend3="Clientes DHCP";

//help container
var hstatus_lan = new Object();
hstatus_lan.right2="Este � o Enderelo MAC do Roteador, como visto na sua rede local (rede Ethernet).";
hstatus_lan.right4="Este � o Endere�o IP do Roteador, como visto na sua rede local (rede Ethernet).";
hstatus_lan.right6="When the Router is using a Subnet Mask, it is shown here.";
hstatus_lan.right8="Se voc� est� utilizando o Roteador como um servidor DHCP, suas configura��es ser�o exibidas aqui.";
hstatus_lan.right10="Clicando em qualquer ender�o MAC voc� ir� obter o Identificador �nico Organizacional da interface de rede (Padr�es IEEE Standards OUI database search).";


// ******************************************* Status_Router.asp *******************************************//

var status_router = new Object();
status_router.titl=" - Status do Roteador";
status_router.h2="Informa��es do Roteador";
status_router.legend="Sistema";
status_router.sys_model="Modelo do Roteador";
status_router.sys_firmver="Vers�o do Firmware";
status_router.sys_time="Hora Atual";
status_router.sys_up="Uptime";
status_router.sys_load="Estimativa de Utiliza��o";
status_router.legend2="CPU";
status_router.cpu="Modelo da CPU";
status_router.clock="Clock da CPU";
status_router.legend3="Mem�ria";
status_router.mem_tot="Total Dispon�vel";
status_router.mem_free="Livre";
status_router.mem_used="Utilizado";
status_router.mem_buf="Buffers";
status_router.mem_cached="Cached";
status_router.mem_active="Ativo";
status_router.mem_inactive="Inativo";
status_router.legend4="Rede";
status_router.net_maxports="N�mero M�xido de Portas do Filtro IP";
status_router.net_conntrack="Conex�es IPs Ativas";
status_router.h22="Internet";
status_router.legend5="Tipo de Configura��o";
status_router.www_login="Tipo de Login";
status_router.www_loginstatus="Status do Login";

//help container
var hstatus_router = new Object();
hstatus_router.right2="Este � o nome espec�fico do roteador, que pode ser configurado na aba <i>Configura��es</i>.";
hstatus_router.right4="Este � o Endere�o MAC do roteador, vis�vel para o seu ISP.";
hstatus_router.right6="Este � o firmware atual do roteador.";
hstatus_router.right8="Este � o hor�rio, configurado na aba de Configura��es.";
hstatus_router.right10="Esta � a medida de tempo que o roteador est� \"ligado\" e operacional.";
hstatus_router.right12="� dado por tr�s n�meros que representam a carga do sistema durante o �ltimo minuto, os cinco, e quinze minutos passados.";
hstatus_router.right14="Exibe todas as informa��es necess�rias pelo seu ISP para conx�o com a Internet. \
				Estas informa��es s�o fornecidas atrav�s da aba de Configura��o. Voc� pode <em>Conectar</em> ou <em>Desconectar</em> sua conex�o aqui, clicando no bot�o.";


// ******************************************* Status_SputnikAPD.asp *******************************************//

var status_sputnik = new Object();
status_sputnik.titl=" - Sputnik Agent Status";
status_sputnik.h2="Sputnik&reg; Agent&trade;";
status_sputnik.manage="Managed By";
status_sputnik.license="SCC License No.";

//help container
var hstatus_sputnik = new Object();
hstatus_sputnik.right1="Status do Agente Sputnik";
hstatus_sputnik.right2="Esta tela exibe o status do processo do Agente Sputnik.";
hstatus_sputnik.right4="O Centro de Controle Sputnik ao qual este Access Point est� conectado.";
hstatus_sputnik.right6="O status do Agente atual.";
hstatus_sputnik.right8="O n�mero da licensa do seu Centro de Controle Sputnik.";



// ******************************************* Status_Wireless.asp *******************************************//

var status_wireless = new Object();
status_wireless.titl=" - Status Wireless";
status_wireless.h2="Wireless";
status_wireless.legend="Status Wireless";
status_wireless.net="Rede";
status_wireless.pptp="Status PPTP";
status_wireless.legend2="Informa��es dos Pacotes";
status_wireless.rx="Recebidos (RX)";
status_wireless.tx="Enviados (TX)";
status_wireless.h22="N�s Wireless";
status_wireless.legend3="Clientes Wireless";
status_wireless.signal_qual="Qualidade do Sinal";
status_wireless.wds="N�s WDS";

//help container
var hstatus_wireless = new Object();
hstatus_wireless.right2="Este � o Endere�o MAC do Roteador, visto pela sua rede wireless.";
hstatus_wireless.right4="Como selecionado na aba Wireless, ela ir� mostrar o mode de opera��o da rede wireless (Mixto, Somente-G, Somente-B ou Desabilitado) utilizado pela rede.";


// ******************************************* Triggering.asp *******************************************//

var trforward = new Object();
trforward.titl=" - Port Triggering";
trforward.h2="Port Triggering";
trforward.legend="Encaminhamentos";
trforward.trrange="Triggered Port Range";
trforward.fwdrange="Forwarded Port Range";
trforward.app="Aplica��o";

//help container
var htrforward = new Object();
htrforward.right2="Enter the application name of the trigger.";
htrforward.right4="For each application, list the triggered port number range. Check with the Internet application documentation for the port number(s) needed.";
htrforward.right6="For each application, list the forwarded port number range. Check with the Internet application documentation for the port number(s) needed.";
htrforward.right8="Enter the starting port number of the Triggered and Forwarded Range.";
htrforward.right10="Enter the ending port number of the Triggered and Forwarded Range.";


// ******************************************* Upgrade.asp *******************************************//

var upgrad = new Object();
upgrad.titl=" - Atualiza��o do Firmware";
upgrad.h2="Gerenciamento do Firmware";
upgrad.legend="Atualiza��o do Firmware";
upgrad.info1="Ap�s o flash, resetar para";
upgrad.resetOff="N�o resetar";
upgrad.resetOn="Configura��es padr�es";
upgrad.file="Por favor selecione um arquivo para atualizar";
upgrad.warning="A T E N � � O";
upgrad.mess1="A atualiza��o do firmware pode levar alguns minutos.<br />N�o desligue o roteador nem pressione o bot�o de reset!";

//help container
var hupgrad = new Object();
hupgrad.right2="Clique no bot�o <em>Pesquisar...</em> para escolher o arquivo de firmware a ser carregado no roteador.<br /><br /> \
			Clique no bot�o <em>Atualizar</em> para iniciar o processo de atualiza��o. A atualiza��o n�o deve ser interrompida.";


// ******************************************* UPnP.asp *******************************************//

var upnp = new Object();
upnp.titl=" - UPnP";
upnp.h2="Universal Plug and Play (UPnP)";
upnp.legend="Encaminhamentos";
upnp.legend2="Configura��es UPnP";
upnp.serv="Servi�o UPnP";
upnp.clear="Limpar o encaminho portas na iniciliza��o";
upnp.url="Enviar URL de apresenta��o";
upnp.msg1="Clique para apagar a concess�o";
upnp.msg2="Remover todas as entradas?";


//help container
var hupnp = new Object();
hupnp.right2="Clique na lixeira para remover um entrada.";
hupnp.right4="Permite �s aplica��es configurarem encaminhamentos de porta automaticamente.";


// ******************************************* VPN.asp *******************************************//

var vpn = new Object();
vpn.titl=" - VPN";
vpn.h2="Rede Virtual Privada (VPN)";
vpn.legend="VPN Passthrough";
vpn.ipsec="IPSec Passthrough";
vpn.pptp="PPTP Passthrough";
vpn.l2tp="L2TP Passthrough";

//help container
var hvpn = new Object();
hvpn.right1="Voc� pode escolher habilitar a passagem de IPSec, PPTP e/ou L2TP atrav�s dos seus dispositivos de rede para comunicar-se via VPN.";


// ******************************************* Vlan.asp *******************************************//

var vlan = new Object();
vlan.titl=" - LAN Virtual";
vlan.h2="Rede Local Virtual (VLAN)";
vlan.legend="VLAN";
vlan.bridge="Associada �<br />Ponte";
vlan.tagged="Tagged";
vlan.negociate="Auto-Negocia��o";
vlan.aggregation="Agregar Link<br>nas Portas 3 & 4";
vlan.trunk="Trunk";


// ******************************************* WEP.asp *******************************************//

var wep = new Object();
wep.defkey="Chave Padr�o de Transmiss�o";
wep.passphrase="Passphrase";


// ******************************************* WOL.asp *******************************************//

var wol = new Object();
wol.titl=" - WOL";
wol.h2="Wake-On-LAN";
wol.legend="Hosts Dispon�veis";
wol.legend2="Endere�os WOL";
wol.legend3="Sa�da";
wol.legend4="WOL Manual";
wol.enable="Habilitar WOL?";
wol.add_wol="Adicionar Host WOL";
wol.restore="Restaurar Padr�es de F�brica";
wol.mac="Endere�o(s) MAC";
wol.broadcast="Broadcast de Rede";
wol.udp="Porta UDP";
wol.msg1="Clique para remover o host WOL";

//help container
var hwol = new Object();
hwol.right2="Esta p�gina lhe permite <em>Acordar</em> hosts na sua rede local (ex.: conectado localmente ao roteador).";
hwol.right4="Endere�os MAC s�o inseridos no formato xx:xx:xx:xx:xx:xx (ex.: 01:23:45:67:89:AB)";
hwol.right6="O Endere�os IP � tipicamente o endere�o broadcast para a rede local, mas pode ser um endere�o remoto se o host alvo n�o estiver conectado � rede local do roteador."


// ******************************************* WanMAC.asp *******************************************//

var wanmac = new Object();
wanmac.titl=" - Clone de Endere�o MAC";
wanmac.h2="Clone de Endere�o MAC";
wanmac.legend="Clonar MAC";
wanmac.wan="Clonar MAC WAN";
wanmac.wlan="Clonar MAC Wireless";

//help container
var hwanmac = new Object();
hwanmac.right2="Alguns ISPs requerem o registro do seu endere�o MAC. \
			Se voc� n�o deseja registrar novamente seu endere�o MAC, voc� pode clonar o endere�o MAC que est� registrado com seu ISP.";


// ******************************************* WL_WPATable.asp / WPA.asp / Radius.asp *******************************************//

var wpa = new Object();
wpa.titl=" - Seguran�a Wireless";
wpa.h2="Seguran�a Wireless";
wpa.legend="Criptografia Wireless";
wpa.auth_mode="Autentica��o de Rede";
wpa.psk="Chave WPA Pr�-Compartilhada";
wpa.wpa="WPA";
wpa.radius="Radius";
wpa.gtk_rekey="Intervalo de Renova��o da Chava WPA do Grupo";
wpa.rekey="Intervalo de Renova��o da Chave (em segundos)";
wpa.radius_ipaddr="Endere�o do Servidor RADIUS";
wpa.radius_port="Porta do Servidor RADIUS";
wpa.radius_key="Chave RADIUS";
wpa.algorithms="Algoritimos WPA";
wpa.shared_key="Chave Compartilhada WPA";
wpa.rekeyInt="rekey interval";

//help container
var hwpa = new Object();
hwpa.right1="Modo de Seguran�a:";
hwpa.right2="Voc� pode escolher entre Desabilitado, WEP, Chave WPA Pr�-Compartilhada, WPA RADIUS, ou RADIUS. Todos os dispositivos na sua rede dever�o usar o mesmo modo de seguran�a.";


// ******************************************* WL_FilterTable.asp *******************************************//

var wl_filter = new Object();
wl_filter.titl=" - Lista de Filtro de Endere�os MAC";
wl_filter.h2="Lista de Filtro de Endere�os MAC";
wl_filter.h3="Insira os Endere�os MAC no formato &nbsp;:&nbsp;&nbsp;&nbsp;xx:xx:xx:xx:xx:xx";


// ******************************************* WL_ActiveTable.asp *******************************************//

var wl_active = new Object();
wl_active.titl=" - Lista de Clientes Wireless Ativos";
wl_active.h2="Lista de MAC dos Clientes Wireless";
wl_active.h3="Habilitar o Filtro de Endere�os MAC";
wl_active.active="PCs Ativos";
wl_active.inactive="PCs Inativos";


// ******************************************* Wireless_WDS.asp *******************************************//

var wds = new Object();
wds.titl=" - WDS";
wds.h2="Sistema de Distribui��o Wireless";
wds.legend="Configura��es WDS";
wds.label="WDS 'Pregui�oso'";
wds.label2="Sub-Rede WDS";
wds.wl_mac="MAC Wireless";
wds.lazy_default="Padr�o: Desabilitar";
wds.nat1="wLAN->WDS";
wds.nat2="WDS->wLAN";
wds.subnet="Sub-Rede";
wds.legend2="Op��es Extra";


// ******************************************* Wireless_radauth.asp *******************************************//

var radius = new Object();
radius.titl=" - Radius";
radius.h2="Remote Authentication Dial-In User Service";
radius.legend="Radius";
radius.label="MAC Radius Client";
radius.label2="Formato do MAC";
radius.label3="IP do Servidor Radius";
radius.label4="Porta do Servidor Radius";
radius.label5="M�ximo de Usu�rios N�o Autenticados";
radius.label6="Formato da Senha";
radius.label7="RADIUS Shared Secret";
radius.label8="Override Radius if Server is unavailable";
radius.mac="MAC";


// ******************************************* Wireless_MAC.asp *******************************************//

var wl_mac = new Object();
wl_mac.titl=" - Filtro MAC";
wl_mac.h2="Filtro de MAC Wireless";
wl_mac.legend="Filtro MAC";
wl_mac.label="Usar Filtro";
wl_mac.label2="Modo do Filtro";
wl_mac.deny="Prevenir os PCs listads de acessar a rede wireless";
wl_mac.allow="Permitir somente os PCs listados acessarem a rede wireless";


// ******************************************* Wireless_Basic.asp *******************************************//

var wl_basic = new Object();
wl_basic.titl=" - Wireless";
wl_basic.h2="Wireless";
wl_basic.legend="Configura��es B�sicas";
wl_basic.label="Modo Wireless";
wl_basic.label2="Modo de Rede Wireless";
wl_basic.label3="Nome da Rede Wireless (SSID)";
wl_basic.label4="Canal Wireless";
wl_basic.label5="Broadcast SSID Wireless";
wl_basic.label6="Sensitivity Range (ACK Timing)";
wl_basic.ap="AccessPoint";
wl_basic.client="Cliente";
wl_basic.clientBridge="Cliente Bridge";
wl_basic.adhoc="Adhoc";
wl_basic.mixed="Mixto";
wl_basic.b="Somente-B";
wl_basic.g="Somente-G";
wl_basic.sensitivity="Padr�o: 20000 metros";

//help container
var hwl_basic = new Object();
hwl_basic.right2="Se voc� deseja excluir clientes Wireless-G, escolha o modo <em>Somente-B</em>. Se voc� deseja desabilitar o acesso wireless, escolha <em>Desabilitar</em>.";
hwl_basic.right3="Sensitivity Range: ";
hwl_basic.right4="Adjusts the ack timing. 0 disables ack timing completely.";


// ******************************************* Wireless_Advanced.asp *******************************************//

var wl_adv = new Object();
wl_adv.titl=" - Configura��es Wireless Avan�adas";
wl_adv.h2="Configura��es Wireless Avan�adas";
wl_adv.legend="Configura��es Avan�adas";
wl_adv.legend2="Configura��es de Suporte Multim�dia Wireless";
wl_adv.label="Tipo de Autentica��o";
wl_adv.label2="Taxa B�sica";
wl_adv.label3="Taxa de Transmiss�o";
wl_adv.label4="Modo de Prote��o CTS";
wl_adv.label5="Frame Burst";
wl_adv.label6="Intervalo Beacon";
wl_adv.label7="Intervalo DTIM";
wl_adv.label8="Tamanho da Fragmenta��o";
wl_adv.label9="Tamanho RTS";
wl_adv.label10="N�mero M�ximo de Clientes Associados";
wl_adv.label11="Isolamento AP";
wl_adv.label12="Antena TX";
wl_adv.label13="Antena RX";
wl_adv.label14="Preamble";
wl_adv.reference="Ru�do de Refer�ncia";
wl_adv.label15="For�a Xmit";
wl_adv.label16="Afterburner";
wl_adv.label17="Acesso Wireless � Interface de Configura��o";
wl_adv.label18="Suporte WMM";
wl_adv.label19="No-Acknowledgement";
wl_adv.table1="EDCA AP Parameters (AccessPoint para Cliente)";
wl_adv.col1="CWmin";
wl_adv.col2="CWmax";
wl_adv.col3="AIFSN";
wl_adv.col4="TXOP(b)";
wl_adv.col5="TXOP(a/g)";
wl_adv.col6="Admin Forced";
wl_adv.row1="Background";
wl_adv.row2="Best Effort";
wl_adv.row3="V�deo";
wl_adv.row4="Voz";
wl_adv.table2="EDCA STA Parameters (Client to AP)";
wl_adv.lng="Longo"; 					//************* don't use .long ! *************
wl_adv.shrt="Curto"; 				//************* don't use .short ! **************

//help container
var hwl_adv = new Object();
hwl_adv.right1="Tipo de Autentica��o:";
hwl_adv.right2="Voc� pode escolher entre Autom�tica e Chave Compartilhada. A autentica��o de Chave Compartilhada � mais segura, mas todos os dispositivos da rede devem suportar o modo de autentica��o de Chave Compartilhada.";


// ******************************************* Fail_s.asp / Fail_u_s.asp / Fail.asp *******************************************//

var fail = new Object();
fail.mess1="Os valores que voc� inseriu s�o inv�lidos. Por favor tente novamente.";
fail.mess2="Falha na Atualia��o.";


// ******************************************* Success*.asp / Reboot.asp  *******************************************//

var success = new Object();
success.saved="Configura��es Salvas.";
success.restore="Configura��es Restauradas.<br/>A unidades est� reiniciando. Por favor aguarde um momento...";
success.upgrade="Sucesso na Atualiza��o.<br/>A unidades est� reiniciando. Por favor aguarde um momento...";
success.success_noreboot="Configura��es efetuadas com sucesso.";
success.success_reboot=success.success_noreboot + "<br />A unidades est� reiniciando. Por favor aguarde um momento...";

success.alert_reset="Todos os par�metros de configura��o foram restaurados para os valores padr�o.<br /><br />";
success.alert1="Por favor verifique os seguintes �tens antes de continuar:";
success.alert2="Se voc� alterou o endere�o IP do roteador, por favor note que voc� deve liberar/renovar o(s) endere�o(s) do(s) cliente(s) na rede.";
success.alert3="Se voc� est� conectado via WLAN, por favor associe-se a rede e clique em <em>Continuar</em>.";

// *****************************************************		OLD PAGES 		************************************************************************//
// **************************************************************** DHCPTable.asp **********************************************************************//

var dhcp = new Object();
dhcp.titl=" - Tabela DHCP de IPs Ativos";
dhcp.h2="Tabela DHCP de IPs Ativos";
dhcp.server="Endere�o IP do Servidor DHCP:";
dhcp.tclient="Nome de Host do Cliente";

var donate = new Object();
donate.mb="Voc� pode desejar doar atrav�s da conta Moneybookers mb@dd-wrt.com";
