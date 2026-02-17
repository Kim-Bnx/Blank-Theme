<br />
<!-- LIENS DE NAVIGATION ------------->
<!-- (Catégorie > Forum > Sous-fo) --->
<span class="navigation_links tag">{NAV_CAT_DESC}</span>

<!------------------------------------>
<!-- BARRE D'ACTIONS ----------------->

<div class="page-actions">

  <div class="buttons">
    <!-- BEGIN switch_user_authreply -->
    <a class="button primary" href="{U_POST_REPLY_TOPIC}" title="{T_POST_REPLY_TOPIC}">{L_POST_REPLY_TOPIC}</a>
    <!-- END switch_user_authreply -->

    <!-- BEGIN switch_user_logged_in --><!-- BEGIN watchtopic -->
    <span class="button">{S_WATCH_TOPIC}</span>
    <!-- END watchtopic --><!-- END switch_user_logged_in -->
  </div>

  <!-- Pagination -->
  <div class="pagination">{PAGINATION}</div>

</div>


<!------------------------------------>
<!-- ENSEMBLE DES POSTS -------------->

<!-- Conteneur de tous les posts -->
<div class="container">

  <!-- Titre du poste -->
  <h1 class="page-title">{TOPIC_TITLE}</h1>

  <!-- Liste des participants du sujet -->
  {POSTERS_LIST}

  <!-- Sondage (template : viewtopic_poll_ballot && viewtopic_poll_result) -->
  {POLL_DISPLAY}


  <!-- Affichage d'un message -->
  <!-- BEGIN postrow -->
  <!-- BEGIN displayed -->
  <div class="post post_row" id="{postrow.displayed.U_POST_ID}">

    <!-- Conteneur informations du message-->
    <div class="post_details">

      <span class="post_date">
        <!-- Lien d'ancre vers le message -->
        <a href="{postrow.displayed.POST_URL}">{TOPIC_TITLE}</a>&nbsp;
        <!-- Date du message -->
        <time>{postrow.displayed.POST_DATE_NEW}</time>
      </span>

      <!-- Boutons d'édition de message -->
      <div class="edition-buttons">
        <button class="btn-tag">Tag</button>
        <a class="btn-quote" href="{postrow.displayed.QUOTE_URL}">Citer</a>
        <a class="btn-edit" href="{postrow.displayed.EDIT_URL}"> Editer</a>
        <a class="btn-delete" href="{postrow.displayed.DELETE_URL}">Supprimer</a>
        <a class="btn-ip" href="{postrow.displayed.IP_URL}">IP</a>


        <!-- Bouton "j'aime/j'aime pas" activé -->
        <!-- BEGIN switch_likes_active -->
        <!-- Bouton "j'aime" -->
        <button class="rep-button {postrow.displayed.switch_likes_active.C_VOTE_LIKE}"
          data-href="{postrow.displayed.switch_likes_active.U_VOTE_LIKE}"
          data-href-rm="{postrow.displayed.switch_likes_active.U_VOTE_RM_LIKE}">
          <!-- Texte "j'aime" -->
          <span class="rep-text">{postrow.displayed.switch_likes_active.L_LIKE}</span>
          <!-- Compte des "j'aime" -->
          {postrow.displayed.switch_likes_active.COUNT_VOTE_LIKE}
        </button>
        <!-- END switch_likes_active -->
      </div>
      <!-- Fin boutons d'éditions -->

    </div>
    <!-- Fin détails -->


    <!-- Colonne de profil -->
    <div class="post_profile" id="profile{postrow.displayed.U_POST_ID}">

      <center>
        <!-- Pseudo -->
        <span class="post_pseudo">{postrow.displayed.POSTER_NAME}</span><br />

        <!-- Rang -->
        <span class="post_rank">
          {postrow.displayed.POSTER_RANK_NEW} <!-- Textuel -->
          {postrow.displayed.RANK_IMAGE} <!-- Image -->
        </span>
      </center>

      <br />

      <!-- Avatar -->
      <div class="post_avatar">
        {postrow.displayed.POSTER_AVATAR}
      </div>

      <!-- En ligne : apparait seulement lorsque la class ".online" est ajouté -->
      <div class="presence {postrow.displayed.ONLINE_IMG_NEW}">En ligne</div>

      <br />

      <!-- Conteneur des informations profil -->
      <div class="post_userinfo">

        <!-- Champs de profil -->
        <!-- BEGIN profile_field -->
        <div class="user_field">
          <!-- Label d'un champs de profil -->
          <span class="field_label">{postrow.displayed.profile_field.LABEL} </span>

          <!-- Contenu d'un champs de profil -->
          <span class="field_content">{postrow.displayed.profile_field.CONTENT}</span>
        </div>
        <!-- END profile_field -->
        <!-- Fin de champs de profil -->

        <!-- Récompenses -->
        <div {postrow.displayed.AWARDS_SHOW} id="list_awards">
          {postrow.displayed.AWARDS}
        </div>
        <div class="award_more"></div>

        <!-- Feuille de personnage si activée -->
        {postrow.displayed.POSTER_RPG}

      </div>

      <br />

      <!-- Lien de contact -->
      <div class="post_contact">
        <!-- MP -->
        {postrow.displayed.PM_IMG}
        <!-- Autre champs de contact -->
        <!-- BEGIN contact_field -->
        {postrow.displayed.contact_field.CONTENT}
        <!-- END contact_field -->
      </div>

    </div>
    <!-- Fin colonne profil -->


    <!-- Conteneur du message -->
    <div class="post_message postbody content">

      <!-- Message -->
      <div>{postrow.displayed.MESSAGE}</div>

      <!-- Signature -->
      <!-- BEGIN switch_signature -->
      <div class="post_signature" id="sig{postrow.displayed.U_POST_ID}">{postrow.displayed.SIGNATURE_NEW}</div>
      <!-- END switch_signature -->

    </div>
    <!-- Fin du conteneur du message -->

  </div>

  <!-- END displayed -->
  <!-- END postrow -->
  <!-- Fin affichage d'un message -->

</div>
<!-- Fin conteneur des posts -->



<!------------------------------------>
<!-- BARRE D'ACTIONS ----------------->

<div class="page-actions">

  <div class="buttons">
    <!-- BEGIN switch_user_authreply -->
    <a class="button primary" href="{U_POST_REPLY_TOPIC}" title="{T_POST_REPLY_TOPIC}">{L_POST_REPLY_TOPIC}</a>
    <!-- END switch_user_authreply -->

    <!-- BEGIN switch_user_logged_in --><!-- BEGIN watchtopic -->
    <span class="button">{S_WATCH_TOPIC}</span>
    <!-- END watchtopic --><!-- END switch_user_logged_in -->
  </div>

  <!-- Pagination -->
  <div class="pagination">{PAGINATION}</div>
</div>


<!------------------------------------>
<!-- REGLES DU SUJET (si activé) ----->

<!-- BEGIN switch_forum_rules -->
<div class="panel" id="forum_rules">

  <!-- Titre "règlement" -->
  <div class="h3">{L_FORUM_RULES}</div>

  <!-- Règlement -->
  <div class="postbody">
    <!-- Image du règlement -->
    <!-- BEGIN switch_forum_rule_image -->
    <img class="left logo" src="{RULE_IMG_URL}" alt="" />
    <!-- END switch_forum_rule_image -->

    <!-- Contenu -->
    {RULE_MSG}
  </div>

</div>
<!-- END switch_forum_rules -->


<!------------------------------------>
<!-- REPONSE RAPIDE ------------------>

<div class="container quickreply" id="quickreply_content">
  <!-- BEGIN switch_user_logged_in -->
  {QUICK_REPLY_FORM}
  <!-- END switch_user_logged_in -->
</div>

<br />

<!------------------------------------>
<!-- OUTILS DE MODERATION ------------>

<!-- BEGIN viewtopic_bottom -->
<form method="get" action="{S_FORM_MOD_ACTION}" class="right">
  <fieldset class="quickmod">
    <input type="hidden" name="t" value="{TOPIC_ID}" />
    <!-- <input type="hidden" name="sid" value="{S_SID}" /> -->
    <input type="hidden" name="{SECURE_ID_NAME}" value="{SECURE_ID_VALUE}" />
    <label>Modérer : </label>
    {S_SELECT_MOD}
  </fieldset>
</form>
<!-- END viewtopic_bottom -->

<!-- Script image recadré -->
<!-- BEGIN switch_image_resize -->
<script type="text/javascript">
  //<![CDATA[
  $(resize_images({
    'selector': '.postbody',
    'max_width': {
      switch_image_resize.IMG_RESIZE_WIDTH
    },
    'max_height': {
      switch_image_resize.IMG_RESIZE_HEIGHT
    }
  }));
  //]]>

</script>
<!-- END switch_image_resize -->