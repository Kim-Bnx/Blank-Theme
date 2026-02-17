<div class="sidebar">
  <div class="sidebar_top">
    <!-- BEGIN switch_user_logged_in -->
    <!-- Bouton pour ouvrir le panneau des notifications -->
    <div id="notiffi_button">
      <template class="myface u-img-square" type="template/potion" data-name="myface"><img src="[avatar]" /></template>
      <div class="myface-tooltip">Voir mes notifications</div>
      <template class="unread_count" type="template/potion" data-name="unread_notifs">[count]</template>
    </div>
    <!-- END switch_user_logged_in -->

    <!-- Barre switcheroo -->
    <nav id="switcheroo" class="switcheroo"></nav>
  </div>

  <div class="sidebar_bottom">
    <!-- Lien retour en haut -->
    <a href="#top" class="button"><i class="bi bi-chevron-up"></i></a>

    <!-- Switch thème button -->
    <button class="button theme-toggle" title="Activer le mode sombre" aria-describedby="theme-controls-focus-text">
      <!-- Light theme -->
      <div class="icon light"><i class="ion-ios-sunny"></i></div>
      <!-- Dark theme -->
      <div class="icon dark"><i class="ion-ios-moon"></i></div>
    </button>

    <!-- Lien retour en bas -->
    <a href="#bottom" class="button"><i class="bi bi-chevron-down"></i></a>
  </div>
</div>


<!-- NOTIFFI ------------------------->
<!-- BEGIN switch_user_logged_in -->
<!-- Panneau des notifications -->
<div id="notiffi_panel">
  <div class="myprofile">
    <template class="myname" type="template/potion" data-name="myname">
      <a href="/u[id]" style="color: #[groupColor]">[username]</a>
    </template>
    <a href="/profile?mode=editprofile" class="myprofile-edit">Éditer mon profil</a>
  </div>
  <!-- Conteneur des notifications -->
  <template class="all_notifications" type="template/potion" data-name="all_notifs">
    <!-- Panneau si vide de notification -->
    [isEmpty]
    <span class="no_notification">[text]</span>
    [/isEmpty]

    <!-- Notification -->
    [notifs]
    <div class="notification [type] [read]" data-notif-id="[id]">
      <div class="notif_details">
        <div class="notif_avatar u-img-square">[avatar]</div>
        <div class="notif_icon">[icon]</div>
      </div>
      <div class="notif_content">
        <div class="notif_text">[text]</div>
        <div class="notif_time">[time]</div>
      </div>
      <button @click="deleteNotif" class="notif_close"><i class="bi bi-x"></i></button>
    </div>
    [/notifs]

  </template>
  <!-- Fin du conteneur des notifications -->

  <!-- Conteneur des actions -->
  <div class="notiffi_manage">
    <!-- Lien vers la page de gestion des notifications dans le profil -->
    <a class="notiffi_see_all" href="/profile?mode=editprofile&page_profil=notifications">Voir toutes les
      notifications</a>

    <!-- Bouton d'action -->
    <div class="notiffi_actions">
      <button id="notiffi_mark_as_read" class="button primary">Marquer comme lu</button>
      <button id="notiffi_delete_all" class="button">Tout supprimer</button>
    </div>
  </div>
  <!-- Fin du couteur des actions -->
</div>
<!-- Fin du panneau des notifications -->

<!-- Popup d'alerte d'une nouvelle notification -->
<template type="template/potion" data-name="alert_notif">
  <div class="notification alert [alert.type]">
    <div class="notif_details">
      <div class="notif_avatar">[alert.avatar]</div>
    </div>
    <div class="notif_content">
      <div class="notif_text">[alert.text]</div>
    </div>
    <button id="alert_dismiss" class="alert_close"><i class="bi bi-x"></i></button>
  </div>
</template>
<!-- Fin du popup -->
<!-- END switch_user_logged_in -->
<!-- NOTIFFIN ------------------------>


<!------------------------------------>
<!-- FOOTER -------------------------->
<div id="page-footer">
  <!-- Lien d'accès au panneau admin et d'édition du profil -->
  <div class="u-center">{ADMIN_LINK}</div>

  <!-- Liens forumactif -->
  <div id="bottom" class="u-center">
    <div><!-- BEGIN html_validation --></div>
  </div>

</div>


<!-- Footer end -->
<!-- END html_validation -->