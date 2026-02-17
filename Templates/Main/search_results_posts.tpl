<!-- PAGE DE RESULTAT DE RECHERCHE PAR MESSAGE -->
<!-- Conteneur du résultat -->
<div class="container">
  <!-- Titre de la recherche -->
  <h1 class="page-title">{L_SEARCH_MATCHES}</h1>

  <!-- Conteneur du message -->
  <!-- (basé sur la même structure que le bloc de post dans viewtopic_body -->
  <!-- BEGIN searchresults -->
  <div class="post_row">

    <div class="post_details">
      <!-- Titre du sujet -->
      <a class="postdetails" href="{searchresults.U_TOPIC}">{searchresults.TOPIC_TITLE}</a>
      <!-- Forum dans lequel se trouve le sujet -->
      <div>
        <span>Dans : <a class="postdetails" href="{searchresults.U_FORUM}">{searchresults.FORUM_NAME}</a></span>
      </div>
    </div>

    <!-- Information supplémentaire : Auteur et date -->
    <div class="post_profile" style="width: 200px">
      <p>
        <span>{searchresults.L_TOPIC_BY} {searchresults.POSTER_NAME}</span>
        <br />
        <span>{searchresults.L_TOPIC_ON} {searchresults.POST_DATE}</span>
      </p>

    </div>

    <!-- Contenu du message -->
    <div class="post_message">
      {searchresults.MESSAGE}
    </div>
  </div>
  <!-- END searchresults -->

  <div class="pagination">{PAGINATION}</div>
</div>



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