<!-- PAGE DE RESULTAT DE RECHERCHE PAR SUJET -->
<!-- Conteneur du résultat -->
<form action="{S_ACTION}" method="post" name="post" onsubmit="return verify_select();" class="container">

  <!-- Titre de la recherche -->
  <h1 class="page-title">{L_SEARCH_MATCHES}</h1>

  <!-- Apparence de chaque sujet listé -->
  <!-- (copié sur l'apparence des sujets dans la liste des sujets (template : topics_list_box) -->

  <!-- BEGIN searchresults -->
  <div class="topicslist_row">

    <!-- Image du sujet -->
    <div class="topicslist-img">
      <img src="{searchresults.TOPIC_FOLDER_IMG}" />
    </div>

    <!-- Conteneur des informations principales -->
    <div class="topicslist_infos">

      <!-- Type de sujet : annonce, post-it, global, ... -->
      <span class="topic-type">{searchresults.TOPIC_TYPE}</span>

      <!-- Titre du sujet -->
      <a class="topictitle" href="{searchresults.U_VIEW_TOPIC}">{searchresults.TOPIC_TITLE}</a>&nbsp;

      <!-- Icon "vous avez posté dans ce sujet" -->
      {searchresults.PARTICIPATE_POST_IMG}

      <br />

      <!-- Auteur du sujet -->
      <span class="topic-author">
        {searchresults.L_BY} {searchresults.TOPIC_AUTHOR} {searchresults.L_IN} <a
          href="{searchresults.U_VIEW_FORUM}">{searchresults.FORUM_NAME}</a>
      </span>&nbsp;

      <!-- Pagination -->
      <span class="topicslist-pagination">
        {searchresults.GOTO_PAGE_NEW}
      </span>

    </div>


    <!-- Conteneur des statistiques -->
    <div class="topicslist-stats">
      <!-- Nombre de messages -->
      {searchresults.REPLIES} {L_REPLIES}
      <br />
      <!-- Nombre de vues -->
      {searchresults.VIEWS} {L_VIEWS}
    </div>

    <!-- Conteneur du dernier message posté -->
    <div class="topicslist-lastpost">
      {searchresults.LAST_POST_TIME}&nbsp;
      <br />
      {searchresults.LAST_POST_AUTHOR}&nbsp;
      {searchresults.LAST_POST_IMG}
    </div>

  </div>
  <!-- Fin du sujet -->
  <!-- END searchresults -->

  <!-- Pagination -->
  <div class="pagination">{PAGINATION}</div>
</form>