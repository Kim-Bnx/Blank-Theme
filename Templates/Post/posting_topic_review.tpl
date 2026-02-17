<br />
<div class="wrapped container">

  <!-- Titre "revue du sujet" -->
  <!-- BEGIN switch_inline_mode -->
  <h2>
    <center>{L_TOPIC_REVIEW}</center>
  </h2>
  <!-- END switch_inline_mode -->

  <!-- Affichage d'un message simplifié -->
  <!-- BEGIN postrow -->
  <!-- BEGIN displayed -->
  <div name="{postrow.displayed.POST_ID}" class="panel">

    <!-- Sujet par - Auteur - le - date -->
    <span> {postrow.displayed.L_TOPIC_BY} {postrow.displayed.POSTER_NAME} {postrow.displayed.L_TOPIC_ON}
      {postrow.displayed.POST_DATE}</span>
    <hr />

    <!-- Message -->
    <div class="content">{postrow.displayed.MESSAGE}</div>

  </div>
  <!-- END displayed -->
  <!-- BEGIN hidden -->
  <div class="post">
    <p style="text-align:center">{postrow.hidden.MESSAGE}</p>
  </div>
  <!-- END hidden -->
  <!-- END postrow -->
  <!-- Fin de l'affichage -->


</div>