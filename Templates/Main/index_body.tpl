{JAVASCRIPT}

<!------------------------------------>
<!-- PAGE D'ACCUEIL ------------------>
<!-- (admin > généralités : message sur la page d'accueil) -->

<!-- BEGIN message_admin_index -->
<div class="introduction">
  <!-- BEGIN message_admin_txt -->
  {message_admin_index.message_admin_txt.MES_TXT}
  <!-- END message_admin_txt -->
</div>
<!-- END message_admin_index -->
<!-- FIN PAGE D'ACCUEIL -------------->


<!-- EMPLACEMENT DES CATEGORIES ------>
<!-- (template : index_box) ---------->
{BOARD_INDEX}
<!------------------------------------>


<!------------------------------------>
<!-- BARRE D'ACTIONS ----------------->

<div class="page-actions">
  <!-- BEGIN switch_user_logged_in -->
  <div class="links">
    <a id="lastvisit_posts" href="{U_SEARCH_NEW}">Derniers messages</a>
    <span class="separator">•</span>

    <a href="{U_TODAY_ACTIVE}">Sujets actifs du jour</a>
    <span class="separator">•</span>

    <a href="{U_SEARCH_UNANSWERED}">Sujets sans réponse</a>
  </div>
  <!-- END switch_user_logged_in -->


  <!-- BEGIN switch_user_logged_in -->
  <!-- Marquer les forums comme lus -->
  <a class="button" id="mark_read" href="{U_MARK_READ}" accesskey="m">Tout marquer comme lu</a>
  <!-- END switch_user_logged_in -->
</div>
<!-- FIN BARRE D'ACTIONS ------------->



<!------------------------------------>
<!-- QUI EST EN LIGNE ---------------->
<!-- BEGIN disable_viewonline -->

<!-- NE PAS SUPPRIMER : permet de générer les données du hub -->
<div hidden id="qeel-var">
  <div id="total_users">{TOTAL_USERS_ONLINE}</div>
  <div id="online_users">{LOGGED_IN_USER_LIST}</div>
  <div id="last_connected">{L_CONNECTED_MEMBERS} </div>
</div>
<!-- NE PAS SUPPRIMER -->

<!-- HUB (qeel amélioré) -->
<template type="template/potion" data-name="hub" class="hub">

  <h2 class="hub_title">Hub du forum</h2>

  <!-- Conteneur : dernier inscrit et informations -->
  <div class="hub_infos">

    <!-- Dernier inscrit -->
    <div class="hub_lastUser">
      <!-- Avatar du dernier inscrit -->
      <img src="[NEW_USER_AVATAR]" alt="[NEW_USER]" class="lastUser-avatar u-img-square" @click.right="updateAvatar"/>

      <div class="lastUser-welcome">
        Bienvenue à<br />
        <!-- Nom du dernier inscrit -->
        <a href="[NEW_USER_PROFILE]" class="lastUser-link">[NEW_USER]</a>
      </div>
    </div>

    <!-- Informations sur le forum -->
    <div class="hub_details">
      <!-- Statistiques-->
      <div class="hub_stats">
        <!-- Nombre total de membres -->
        <div class="stat tag">
          <strong>[TOTAL_USERS]</strong> [TOTAL_USERS_TEXT]
        </div>
        <!-- Nombre total de messages -->
        <div class="stat tag">
          <strong>[TOTAL_POSTS]</strong> [TOTAL_POSTS_TEXT]
        </div>
      </div>

      <!-- Texte libre -->
      <div class="hub_text">
        Ici crédits de ce qui qui l’a fait et qui qui l’admistre avec l’optimisation qui va bien. Et encore un peu plus
        de blabla.
      </div>
    </div>

  </div>
  <!-- Fin du conteneur -->

  <!-- Conteneur des utilisateurs en ligne -->
  <div class="hub_onlineUsers">
    <!-- Total d'utilisateurs en ligne -->
    <div class="total tag">
      <strong>[USERS_ONLINE_COUNT]</strong> [USERS_ONLINE_TEXT]
    </div>

    <!-- Liste des utilisateurs en ligne -->
    <div class="onlineUsers-list">

      <!-- Boucle des utilisateurs en ligne -->
      [NOW_CONNECTED_LIST]
      <!-- Utilisateur en ligne-->
      <div class="user">
        <img src="[AVATAR]" alt="[NAME]" class="user-avatar u-img-square" @click.right="updateAvatar"/>
        <a href="[HREF]" class="[GROUP]" style="color:[COLOR]">[NAME]</a>
      </div>

      <!-- Élément qui sépare chaque utilisateur -->
      <span class="separator"><!-- vide --></span>
      [/NOW_CONNECTED_LIST]
      <!-- Fin de la boucle -->

      <!-- Nombre d'invités affiché que s'il y en a -->
      [IF_GUEST]
      <div class="guest">
        <div class="guest-count">[GUEST_COUNT]</div> [GUEST_TEXT]
      </div>
      [/IF_GUEST]
    </div>
  </div>
  <!-- Fin du conteneur -->

  <!-- Conteneur des derniers connectés -->
  <div class="hub_lastConnected">
    <span class="lastConnected-text">[LAST_CONNECTED_TEXT]</span>

    <!-- Boucle des derniers connectés -->
    [LAST_CONNECTED_LIST]
    <!-- Utilisateur connecté récemment -->
    <a href="[HREF]" class="[GROUP]" style="color:[COLOR]">[NAME]</a>

    <!-- Élément qui sépare chaque utilisateur -->
    <span class="separator">, </span>
    [/LAST_CONNECTED_LIST]
    <!-- Fin de la boucle -->
  </div>
  <!-- Fin du conteneur -->

  <!-- Conteneur des groupes -->
  <div class="hub_groups">

    <!-- Groupe : à dupliquer pour chaque groupe -->
    <div class="group moderateurs">
      <span class="group-name">Modérateurs</span>
      <!-- PRE-REQUIS : modifiez le nom du groupe correspond dans la variable [GRP_COUNT...] (voir aide dans la page votreforum.com/groups)-->
      <span class="group-count">[GRP_COUNT.moderateurs]</span>
    </div>

    <div class="group beta">
      <span class="group-name">Bêta</span>
      <span class="group-count">[GRP_COUNT.beta]</span>
    </div>
    
    <div class="group charlie">
      <span class="group-name">Charlie</span>
      <span class="group-count">[GRP_COUNT.charlie]</span>
    </div>
  </div>
  <!-- Fin du conteneur -->

</template>
<!-- Fin DU HUB ---------------------->

<!-- Contenenur des infos CB -->
<!-- BEGIN switch_chatbox_activate -->
<div class="panel">
  <!-- Nom de la CB -->
  <div class="h3"><a href="{S_JOIN_CHAT}" target="ChatBox">{CHATBOX_NAME}</a></div>

  <!-- Nombre et liste des connectés sur la CB -->
  {TOTAL_CHATTERS_ONLINE}&nbsp;:&nbsp;{CHATTERS_LIST}<br />

  <!-- BEGIN switch_chatbox_popup -->
  <!-- Lien pour rejoindre la CB -->
  <div id="chatbox_popup"></div>
  <script
    type="text/javascript">insertChatBoxPopup('{disable_viewonline.switch_chatbox_activate.switch_chatbox_popup.U_FRAME_CHATBOX}', '{L_CLICK_TO_JOIN_CHAT}');</script>
  <!-- END switch_chatbox_popup -->
</div>
<!-- END switch_chatbox_activate -->
<!-- Fin du conteneur -->


<!-- END disable_viewonline -->
<!--FIN DU QEEL ---------------------->


<!-- EMPLACEMENT DE LA CHATBOX ------->
{CHATBOX_BOTTOM}
<!------------------------------------>


<!------------------------------------>
<!-- CONNEXION RAPIDE ---------------->

<!-- BEGIN switch_user_login_form_footer -->
<!-- Conteneur du formulaire de connexion -->
<form action="{S_LOGIN_ACTION}" method="post" name="form_login" class="page-actions">
  <div class="user_login_form">
    <!-- Nom utilisateur -->
    <div class="form-input"><label>{L_USERNAME} :</label> <input class="post" type="text" name="username" size="17" />
    </div>

    <!-- Mot de passe -->
    <div class="form-input"><label>{L_PASSWORD} :</label> <input class="post" type="password" name="password"
        size="17" /></div>

    <!-- Check : connexion automatique -->
    <div class="form-input"><label>{L_AUTO_LOGIN} :</label> <input class="radio" type="checkbox" name="autologin"
        {AUTOLOGIN_CHECKED} /></div>

    <!-- Bouton connexion -->
    {S_HIDDEN_FIELDS}<input class="primary" type="submit" name="login" value="{L_LOGIN}" />
  </div>
</form>
<!-- Fin du conteneur -->
<!-- END switch_user_login_form_footer -->
<!-- FIN CONNEXION RAPIDE ------------>


{AUTO_DST}