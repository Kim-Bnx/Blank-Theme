<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" dir="{S_CONTENT_DIRECTION}" id="min-width" lang="{L_LANG_HTML}"
  xml:lang="{L_LANG_HTML}" data-blank="4" {NAMESPACE_BBCODE}>

  <head>
    <!-- INSTALLATION DE NOUVELLE POLICE D'ECRITURE -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
      rel="stylesheet">

    <!-- INSTALLATION DE FONT ICON -->
    <link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">

    <link rel="stylesheet"
      href="https://dl.dropbox.com/scl/fi/9yrle37tfenphdxm0y3gz/newBlankStyles.css?rlkey=xv8g00whimmjo9pb4pb2ew6us">

    <!-- TEXTE DANS L'ONGLET DE NAVIGATEUR -->
    <title>{SITENAME_TITLE}{PAGE_TITLE}</title>

    <meta http-equiv="content-type" content="text/html; charset={S_CONTENT_ENCODING}" />
    <meta http-equiv="content-script-type" content="text/javascript" />
    <meta http-equiv="content-style-type" content="text/css" />
    <!-- BEGIN switch_compat_meta -->
    <meta http-equiv="X-UA-Compatible" content="IE={switch_compat_meta.VERSION}" />
    <!-- END switch_compat_meta -->
    <!-- BEGIN switch_canonical_url -->
    <link rel="canonical" href="{switch_canonical_url.CANONICAL_URL}" />
    <!-- END switch_canonical_url -->
    {META_FAVICO}
    {META}
    {META_FB_LIKE}
    <meta name="title" content="{SITENAME_TITLE}{PAGE_TITLE}" />

    <link rel="search" type="application/opensearchdescription+xml" href="/improvedsearch.xml" title="{SITENAME}" />
    <link rel="search" type="application/opensearchdescription+xml"
      href="{URL_BOARD_DIRECTORY}/search/improvedsearch.xml" title="{SEARCH_FORUMS}" />
    <script src="{JQUERY_PATH}" type="text/javascript"></script>
    <!-- BEGIN switch_recent_jquery -->
    <script src="{JS_DIR}jquery1.9/jquery-migrate-1.4.1.js" type="text/javascript"></script>
    <script src="{JQUERY_DIR}browser/v1.0/jquery.browser.min.js" type="text/javascript"></script>
    <script src="{JQUERY_DIR}support/jquery.support.js" type="text/javascript"></script>
    <!-- END switch_recent_jquery -->
    <script src="{JS_DIR}{L_LANG}.js" type="text/javascript"></script>
    {RICH_SNIPPET_GOOGLE}

    <!-- CSS DE BASE (Blank) -->
    <link rel="stylesheet" type="text/css" href="https://dl.dropbox.com/scl/fi/0cup6t02xsddrmdxyrbs5/blank-core.css?rlkey=lwtbxnwzen0hua6usufmeezy8" />

    <!-- CSS UTILITAIRE (Blank) -->
    <link rel="stylesheet" type="text/css" href="https://dl.dropbox.com/scl/fi/tomqstggr92y1enhehhjd/blank-utils.css?rlkey=2ci7btxus6yv9w7sv3j48weyp" />

    <!-- CSS ajouté via le panneau d'administration -->
    {T_HEAD_STYLESHEET}{CSS}

    <!-- BLANKET (Blank) -->
    <script src="https://dl.dropbox.com/scl/fi/yo42nldp35uaqsho6n3pp/Blanket.js?rlkey=zu8mvhciiwjwu7ppxml2fykef"></script>

    <!-- Importation des scripts du panneau admin -->
    {HOSTING_JS}

    <!-- DESACTIVE EMOJIONE -->
    <script>$(function () { $('img.emojione').each(function () { $(this).after($(this).attr('alt')).remove(); }); });</script>

    <!-- Edison -->
    <script>Edison.load();</script>

  </head>

  <body>
    <!-- Ascenseur : renvoi vers le haut de la page -->
    <a id="top" name="top" accesskey="t"></a>

    <!------------------------------------>
    <!-- STRUCTURE DU FORUM -------------->
    <div class="main_forum">
      {JAVASCRIPT}

      <!-- Conteneur de l'entête -->
      <!-- (au-dessus de la pub) ---->
      <div id="page-header">

        <!-- Bannière -->
        <a href="{U_INDEX}" id="header"><img loading="lazy" src="{LOGO}" alt="{L_INDEX}" /></a>

        <!-- Barre de navigation -->
        <div hidden id="data_navbar">{GENERATED_NAV_BAR}</div><!-- Ne pas supprimer -->

        <nav class="navbar">
          <a href="/" class="nav-home">Accueil</a>
          <a href="/search" class="nav-search">Rechercher</a>
          <a href="/groups" class="nav-groups">Groupes</a>
          <a href="/memberlist" class="nav-memberlist">Membres</a>
          <a href="/discover" class="nav-activity">Activités</a>

          <!-- BEGIN switch_user_logged_in -->
          <a href="/profile?mode=editprofile" class="nav-profile">Profil</a>
          <a href="/privmsg?folder=inbox" id="msgbox" class="nav-mp">Messagerie <span class="unread-mp"></span></a>
          <a href="/login?logout" class="nav-logout">Déconnexion</a>
          <!-- END switch_user_logged_in -->

          <!-- BEGIN switch_user_logged_out -->
          <a href="/login" class="nav-login">Connexion</a>
          <a href="/register" class="nav-register">Inscription</a>
          <!-- END switch_user_logged_out -->
        </nav>
        <!-- Fin de la barre de nav -->

      </div>
      <!-- Fin du conteneur de l'entête -->


      <!------------------------------------>
      <!-- INTERIEUR DU FORUM -------------->
      <div id="page-body">