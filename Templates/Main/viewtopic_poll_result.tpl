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

    <!-- Nom de l'option -->
    <div class="poll_option">{poll_option.POLL_OPTION_CAPTION}</div>

    <!-- Case à cocher -->
    <div class="poll_vote">

      <!-- Images de barre de progression -->
      <img src="{VOTE_LCAP_IMG}" height="12" alt="" />
      <img src="{poll_option.POLL_OPTION_IMG}" width="{poll_option.POLL_OPTION_IMG_WIDTH}" height="12"
        alt="{poll_option.POLL_OPTION_PERCENT}" />
      <img src="{VOTE_RCAP_IMG}" height="12" alt="" />&nbsp;


      <!-- Compte des votes d'une option -->
      <strong>{poll_option.POLL_OPTION_RESULT}</strong>&nbsp;
      <!-- Total en pourcentage -->
      ({poll_option.POLL_OPTION_PERCENT})

      <!-- Liste des votants -->
      <!-- BEGIN option_voters -->
      <br />
      <div class="option_voters_list"> {poll_option.option_voters.POLL_OPTION_VOTERS}</div>
      <!-- END option_voters -->

    </div>
  </div>
  <!-- END poll_option -->
  <!-- Fin option -->


  <!-- Conteneur : options du sondage -->
  <div class="poll_send">

    <!-- Résultat total des votes -->
    {L_TOTAL_VOTES} : <strong>{TOTAL_VOTES}</strong>&nbsp;

    <!-- Annuler vote -->
    <!-- BEGIN cancel_vote --><br />
    <a href="{U_CANCEL_VOTE}">{L_CANCEL_VOTE}</a>
    <!-- END cancel_vote -->

    <br />

    <!-- Liste des votants -->
    {ALL_POLL_VOTERS_LIST} <br />

    <!-- BEGIN switch_back_to_vote -->
    <a class="specials_links" href="{switch_back_to_vote.U_BACK_TO_VOTE}">{switch_back_to_vote.L_BACK}</a>
    <!-- END switch_back_to_vote -->

    <!-- Cacher les résultats -->
    <!-- BEGIN switch_hide_result -->
    <div id="hide_result_msg">{L_POLL_HIDE_RESULT}</div>
    <!-- END switch_hide_result -->
  </div>

</div>

<!-- Amélioration du bouton d'annulation du sondage -->
<script type="text/javascript">
  if ('{CLOSE_POLL}') {
    let closeHref = '{CLOSE_POLL}';
    closeHref = new DOMParser().parseFromString(closeHref, "text/html");
    closeHref = closeHref.querySelector('a').href;
    document.querySelector('a[href="/post&mode=close"]').href = closeHref;
  } else { document.querySelector('a[href="/post&mode=close"]').remove() }
</script>