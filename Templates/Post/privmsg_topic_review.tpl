<br />
<!-- Conteneur de l'historique de la conversation privée -->
<div class="wrapped container">

  <!-- Titre "historique des messages privés" -->
  <!-- BEGIN switch_inline_mode -->
  <h2>
    <center>{L_TOPIC_REVIEW}</center>
  </h2>
  <!-- END switch_inline_mode -->

  <!-- Affichage d'un message simplifié -->
  <!-- BEGIN postrow -->
  <div class="panel {postrow.CURRENT_MSG}">
    <!-- Sujet par - Auteur - le - date -->
    <span class="author">{postrow.L_TOPIC_BY} {postrow.POSTER_NAME} {postrow.L_TOPIC_ON} {postrow.POST_DATE}</span>
    <hr />
    <!-- Message -->
    <div class="content">{postrow.MESSAGE}</div>

  </div>
  <!-- END postrow -->

  <!-- pagination -->
  <div class="pagination">
    {PM_PAGINATION}
  </div>
</div>