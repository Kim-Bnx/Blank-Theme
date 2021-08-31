{JAVASCRIPT}

<!----------------------------------------------->
<!-- CONNEXION RAPIDE (haut) -------------->


<!-- BEGIN switch_user_login_form_header -->
<div class="panel">
    <form action="{S_LOGIN_ACTION}" method="post" name="form_login">
        <div class="user_login_form center">
            <!-- Nom utilisateur -->
            <label>{L_USERNAME} : <input class="post" type="text" size="10" name="username" /></label> &nbsp;

            <!-- Mot de passe -->
            <label>{L_PASSWORD} : <input class="post" type="password" size="10" name="password" /></label> &nbsp;

            <!-- Check : connexion automatique -->
            <label>{L_AUTO_LOGIN} : <input class="radio" type="checkbox" name="autologin" {AUTOLOGIN_CHECKED} /></label> &nbsp;

            <!-- Bouton connexion -->
            {S_HIDDEN_FIELDS}<input class="mainoption button1" type="submit" name="login" value="{L_LOGIN}" />


        </div>
    </form>
</div>
<!-- END switch_user_login_form_header -->


<!----------------------------------------------->
<!-- PAGE D'ACCUEIL -------------->


<!-- BEGIN message_admin_index -->
<div class="panel introduction">

    <!-- Titre de la PA -->
    <!-- BEGIN message_admin_titre -->
    <div class="h3">{message_admin_index.message_admin_titre.MES_TITRE}</div>
    <!-- END message_admin_titre -->

    <!-- Contenu de la PA -->
    <!-- BEGIN message_admin_txt -->
    <div class="mes-txt">{message_admin_index.message_admin_txt.MES_TXT}</div>
    <!-- END message_admin_txt -->
</div>
<!-- END message_admin_index -->


<!----------------------------------------------->
<!-- CB (si affichée en haut) -------------->

{CHATBOX_TOP}


<!----------------------------------------------->
<!-- CATEGORIES -------------->
<!-- (template : index_box) -->

{BOARD_INDEX}


<!----------------------------------------------->
<!-- QUI EST EN LIGNE -------------->

<!-- BEGIN disable_viewonline -->
<div class="qeel">

    <div class="qeel-right">

        <!-- Dernier inscrit -->
        <div id="last_user">
	<span id="lastuser_avatar"></span>
          
            <span id="newest_user">
                {NEWEST_USER}<br /> est le dernier inscrit
            </span>
        </div><br />


        <!-- Total posts : X messages / Total users : X membres -->
        Il y a <span id="qeel_posts">{TOTAL_POSTS}</span> et
        <span id="qeel_members">{TOTAL_USERS}</span><br /><br />


        <a class="groups">Alpha</a>
        <a class="groups">Bêta</a>
        <a class="groups">Charlie</a>
    </div>

    <div class="qeel-middle">

        <!-- X connectés :: 1 membre, 0 invisible, 0 invité -->
      <div id="total_users">{TOTAL_USERS_ONLINE}</div>

        <div class="separator"></div>

        <!-- Connectés en ce moment -->
        <div id="online_users">{LOGGED_IN_USER_LIST}</div>


        <div class="credits">Ici crédits de ce qui qui l’a fait et qui qui l’admistre avec l’optimisation qui va bien. Et encore un peu plus de blabla.</div>

    </div>

    <!-- Derniers connectés au cours de ces Xh -->
    <div class="qeel-left" id="24hconnected">
        {L_CONNECTED_MEMBERS}<br />
    </div>
</div>



<!-- Changement de texte des informations du QEEL -->
<script type="text/javascript">
document.getElementById('last_user').innerHTML = document.getElementById('last_user').innerHTML.replace(/L'utilisateur enregistré le plus récent est/, " ");</script>

<script type="text/javascript">
document.getElementById('qeel_posts').innerHTML = document.getElementById('qeel_posts').innerHTML.replace(/Nos membres ont posté un total de /, " ");</script>

<script type="text/javascript">
document.getElementById('qeel_members').innerHTML = document.getElementById('qeel_members').innerHTML.replace(/Nous avons/, " ");</script>

<script type="text/javascript">
document.getElementById('total_users').innerHTML = document.getElementById('total_users').innerHTML.replace(/Il y a en tout/, " ");</script>

<script type="text/javascript">
document.getElementById('total_users').innerHTML = document.getElementById('total_users').innerHTML.replace(/utilisateur en ligne/, "connecté");</script>

<script type="text/javascript">
document.getElementById('online_users').innerHTML = document.getElementById('online_users').innerHTML.replace(/Utilisateurs enregistrés/, "En ligne");</script>

<script type="text/javascript">
document.getElementById('24hconnected').innerHTML = document.getElementById('24hconnected').innerHTML.replace(/Membres connectés au cours des 24 dernières heures/, "Connectés récemment");</script>



<!-- Conteneur des infos CB -->
<!-- BEGIN switch_chatbox_activate -->
  
  <div class="panel">
      <!-- Nom de la CB -->
      <div class="h3"><a href="{S_JOIN_CHAT}" target="ChatBox">{CHATBOX_NAME}</a></div>
  
      <!-- Nombre et liste des connectés sur la CB -->
      {TOTAL_CHATTERS_ONLINE}&nbsp;:&nbsp;{CHATTERS_LIST}<br />
  
      <!-- BEGIN switch_chatbox_popup -->
      <!-- Lien pour rejoindre la CB -->
      <div id="chatbox_popup"></div>
      <script type="text/javascript">
          insertChatBoxPopup('{disable_viewonline.switch_chatbox_activate.switch_chatbox_popup.U_FRAME_CHATBOX}', '{L_CLICK_TO_JOIN_CHAT}');
  
      </script>
      <!-- END switch_chatbox_popup -->
    
  </div>
<!-- END switch_chatbox_activate -->
<!-- Fin des infos CB -->


<!-- END disable_viewonline -->
<!-- Fin du QEEL -->


<!----------------------------------------------->
<!-- CB (si affichée en bas) -------------->

{CHATBOX_BOTTOM}


<!----------------------------------------------->
<!-- CONNEXION RAPIDE (bas) -------------->

<!-- BEGIN switch_user_login_form_footer -->
<div class="panel">
    <form action="{S_LOGIN_ACTION}" method="post" name="form_login">
        <div class="user_login_form center">
            <!-- Nom utilisateur -->
            <label>{L_USERNAME} : <input class="post" type="text" size="10" name="username" /></label>&nbsp;

            <!-- Mot de passe -->
            <label>{L_PASSWORD} : <input class="post" type="password" size="10" name="password" /></label>&nbsp;

            <!-- Check : connexion automatique -->
            <label>{L_AUTO_LOGIN} : <input class="radio" type="checkbox" name="autologin" {AUTOLOGIN_CHECKED} /></label>&nbsp;

            <!-- Bouton connexion -->
            {S_HIDDEN_FIELDS}<input class="mainoption button1" type="submit" name="login" value="{L_LOGIN}" />


        </div>
    </form>
</div>
<!-- END switch_user_login_form_footer -->




{AUTO_DST}
            