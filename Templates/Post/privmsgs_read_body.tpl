<!------------------------------------>
<!-- ONGLETS DES MESSAGES PRIVÉS ----->

<ul class="privmsgs_menu">
  <!-- Boîte de reception -->
  <li>{INBOX}</li>
  <!-- Messages envoyés -->
  <li>{SENTBOX}</li>
  <!-- Boîte d'envoi -->
  <li>{OUTBOX}</li>
  <!-- Archives  -->
  <li>{SAVEBOX}</li>
</ul>

<!------------------------------------>
<!-- BARRE D'ACTIONS ----------------->
<div class="page-actions">
  <!-- Bouton: répondre -->
  <!-- BEGIN switch_post_reply -->
  <a href="{REPLY_PM_URL}" rel="nofollow" title="{REPLY_PM_IMG}" class="button primary">Répondre au message</a>
  <!-- END switch_post_reply -->
</div>



<form action="{S_PRIVMSGS_ACTION}" method="post">

  <!------------------------------------>
  <!-- AFFICHAGE DU MESSAGE ------------>
  <div class="container">

    <!-- Tire du message -->
    <h1 class="page-title">{POST_SUBJECT}</h1>

    <!-- Conteneur du message -->
    <div class="message">

      <!-- Conteneur des informations du message -->
      <div class="message_infos">

        <!-- De XX à XX, date -->
        <span>{L_FROM} {MESSAGE_FROM} {L_TO} {MESSAGE_TO}, {POST_DATE}</span>

        <!-- Boutons d'édition du message -->
        <div class="edition-buttons">
          <!-- BEGIN switch_quote -->
          <a class="btn-quote" href="/privmsg?mode=quote">Citer</a>
          <!-- END switch_quote -->
          <a class="btn-edit" href="/privmsg?mode=edit">Editer</a>
        </div>

      </div>

      <!-- Profil de l'expéditeur -->
      <div class="message_profil">

        <!-- avatar -->
        {AVATAR_FROM}
        <br /><br />

        <!-- pseudo -->
        <div class="message_from">
          {MESSAGE_FROM}
          <!-- BEGIN switch_user_contact -->
          {PROFILE_IMG}
          <!-- END switch_user_contact -->
        </div>
      </div>

      <!-- contenu du MP -->
      <div class="message_content postbody content">
        {MESSAGE}
      </div>

    </div>
    <!-- Fin du conteneur message -->


    <!-- Boutons de gestion "sauvegarder" et "supprimer" -->
    <br />
    <fieldset class="u-center">
      {S_HIDDEN_FIELDS}
      <!-- BEGIN switch_save -->
      <input class="button2" type="submit" name="save" value="{L_SAVE_MSG}" />
      <!-- END switch_save -->

      <!-- BEGIN switch_move_profile -->
      <input class="button2" type="submit" name="moveprofile" value="{L_MOVE_PROFILE}" />
      <!-- END switch_move_profile -->

      <input class="button2" type="submit" name="delete" value="{L_DELETE_MSG}" />
    </fieldset>

  </div>
  <!-- Fin de l'affichage du message -->

</form>


<!-- HISTORIQUE DES MESSAGES --------->
<!-- (template : privmsg_topic_review)-->

<!-- BEGIN switch_review_box -->
{TOPIC_REVIEW_BOX}
<!-- END switch_review_box -->




<!-- BEGIN switch_image_resize -->
<script type="text/javascript">
  //<![CDATA[
  $(resize_images({
    'selector': '.postbody .content',
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

<!-- Permet d'améliorer la customisation de l'affichage du MP -->
<script type="text/javascript">
  const betterMP = Blanket("Better MP", function ({ get, ready }) {
    /* Fix les boutons d'édition d'un MP pour une meilleure customisation */
    function fixButtons() {
      const post = get('input[type="hidden"][name="mark[]"][value]');
      if (!post) return;

      const value = post.value;
      const quoteBtn = get('a[href="/privmsg?mode=quote"]');
      if ('{QUOTE_PM_IMG}' && quoteBtn) { quoteBtn.href = "/privmsg?mode=quote&p=" + value; } else { quoteBtn.remove(); }

      const editBtn = get('a[href="/privmsg?mode=edit"]');
      if ('{EDIT_PM_IMG}' && editBtn) { editBtn.href = "/privmsg?mode=edit&p=" + post; } else { editBtn?.remove(); }
    }

    /* Ajoute le lien de renvoi vers le profil sur le pseudo de l'auteur du MP */
    function fixUserLink() {
      const pseudo = get(".message_from");
      if (!pseudo) return;

      const link = get("a", pseudo);
      const name = get("span", pseudo);
      link.innerHTML = name.outerHTML;
      name.remove();
    }

    function init() {
      fixButtons();
      fixUserLink();
    }

    ready(init);
    return { init };
  });

</script>