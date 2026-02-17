<form method="post" action="{S_POLL_ACTION}">
  <!-- Conteneur du sondage -->
  <div class="poll">

    <div class="head_poll">
      <!-- Titre du sondage -->
      <h2>{POLL_QUESTION}</h2>

      <div>
        <!-- Fermer le sondage -->
        <a href="/post&mode=close" class="button">Clore le sondage</a>
        &nbsp;
        <!-- Vote terminé -->
        {L_VOTE_EXPIRE}
      </div>
    </div>

    <!-- Option -->
    <!-- BEGIN poll_option -->
    <div class="poll_choice">
      <!-- Nom d'une option -->
      <div class="poll_option">{poll_option.POLL_OPTION_CAPTION}</div>

      <!-- Case à cocher -->
      <div class="poll_vote"><input type="{poll_option.POLL_TYPE_BUTTON}" name="vote_id[]"
          value="{poll_option.POLL_OPTION_ID}" /></div>
    </div>
    <!-- END poll_option -->
    <!-- Fin d'une option -->


    <!-- Conteneur : options du sondage -->
    <div class="poll_send">
      <!-- Envoyer son vote -->
      <input type="submit" name="submit" value="{L_SUBMIT_VOTE}" class="button1" />

      <!-- Voir les résultats -->
      &nbsp;&nbsp;<a href="{U_VIEW_RESULTS}">{L_VIEW_RESULTS}</a>

      <br /><br />

      <!-- Mention "sondage publique" -->
      <!-- BEGIN warning_public_votes -->
      <i>{warning_public_votes.L_WARNING_PUBLIC_VOTES}</i>
      <br />
      <!-- END warning_public_votes -->

      <!-- Sondage terminé -->
      {L_VOTE_EXPIRE}
    </div>

  </div>
</form>

<!-- Amélioration du bouton d'annulation du sondage -->
<script type="text/javascript">
  if ('{CLOSE_POLL}') {
    let closeHref = '{CLOSE_POLL}';
    closeHref = new DOMParser().parseFromString(closeHref, "text/html");
    closeHref = closeHref.querySelector('a').href;
    document.querySelector('a[href="/post&mode=close"]').href = closeHref;
  } else { document.querySelector('a[href="/post&mode=close"]').remove() }
</script>