<!-- Boucle de la liste des sujets --->
<!-- BEGIN topics_list_box -->

<!-- AFFICHAGE D'UN SUJET ------------>
<!-- BEGIN row --><!-- BEGIN topic -->

<!-- Ligne qui séparent les annonces et les notes des autres sujets (à activer dans "message > configuration") -->
<!-- BEGIN line_sticky -->
<div class="topic_separator"></div>
<!-- END line_sticky -->


<!-- Conteneur d'un sujet -->
<div class="topicslist_row row {topics_list_box.row.FOLDER_CLASSNAME} {topics_list_box.row.TOPIC_READ_STATUS}">

  <!-- Image du sujet -->
  <div class="topicslist-img">
    <img src="{topics_list_box.row.TOPIC_FOLDER_IMG}" />
  </div>

  <!-- Conteneur des informations principales -->
  <div class="topicslist_infos">

    <!-- Sélection d'un sujet (s'affiche seulement lors de la modération des sujets, permet de les sélectionner)-->
    <!-- BEGIN single_selection -->
    <input type="radio" name="{topics_list_box.FIELDNAME}" value="{topics_list_box.row.FID}"
      {topics_list_box.row.L_SELECT} />
    <!-- END single_selection -->

    <!-- Type de sujet : annonce, post-it, global, ... -->
    <span class="topic-type">{topics_list_box.row.TOPIC_TYPE}</span>

    <!-- Titre du sujet -->
    <a class="topictitle" href="{topics_list_box.row.U_VIEW_TOPIC}">{topics_list_box.row.TOPIC_TITLE}</a>&nbsp;

    <!-- Icon vous avez posté dans ce sujet -->
    {topics_list_box.row.PARTICIPATE_POST_IMG}
    <br />
    <!-- Auteur -->
    <span class="topic-author">
      {topics_list_box.row.TOPIC_AUTHOR}&nbsp;
    </span>

    <!-- Pagination du sujet -->
    <span class="topicslist-pagination">
      {topics_list_box.row.GOTO_PAGE_NEW}
    </span>

  </div>


  <!-- Conteneur des statistiques -->
  <div class="topicslist-stats">
    <!-- Nombre de messages -->
    {topics_list_box.row.REPLIES} {L_REPLIES}
    <br />
    <!-- Nombre de vues -->
    {topics_list_box.row.VIEWS} {L_VIEWS}
  </div>


  <!-- Avatar du dernier posteur-->
  <div class="topicslist-avatar-lastpost u-img-square lastpostavatar">
    <!-- BEGIN avatar -->
    {topics_list_box.row.topic.avatar.LAST_POST_AVATAR}
    <!-- END avatar -->
  </div>


  <!-- Conteneur du dernier message -->
  <div class="topicslist-lastpost lastpost">
    <span>
      <!-- Date du dernier message -->
      {topics_list_box.row.LAST_POST_TIME} &nbsp;
      <br />
      <!-- Auteur du dernier message -->
      {topics_list_box.row.LAST_POST_AUTHOR} &nbsp;
      <!-- Image-lien pour aller au dernier message -->
      {topics_list_box.row.LAST_POST_IMG}
    </span>
  </div>


  <!-- Description du sujet -->
  <!-- BEGIN switch_description -->
  <div class="topicslist-description">
    {topics_list_box.row.topic.switch_description.TOPIC_DESCRIPTION}
  </div>
  <!-- END switch_description -->


</div>
<!-- Fin du conteneur d'un sujet -->

<!-- END topic --><!-- END row -->
<!-- Fin de l'affichage -->


<!-- Indication "pas de sujet" -->
<!-- BEGIN no_topics -->
<center><strong>{topics_list_box.row.L_NO_TOPICS}</strong></center>
<!-- END no_topics -->


<!-- END topics_list_box -->
<!-- Fin boucle de la liste des sujets -->




<!-- BEGIN multi_selection -->
<script type="text/javascript">
  function check_uncheck_main_ {
    topics_list_box.row.header_table.BOX_ID
  } () {
    alert('MAIN');

    var all_checked = true;

    for (i = 0;
      (i < document. {
        topics_list_box.FORMNAME
      }.elements.length) && all_checked; i++) {
      if (document. {
        topics_list_box.FORMNAME
      }.elements[i].name == '{topics_list_box.FIELDNAME}[]{topics_list_box.row.header_table.BOX_ID}') {
        all_checked = document. {
          topics_list_box.FORMNAME
        }.elements[i].checked;
      }
    }

    document. {
      topics_list_box.FORMNAME
    }.all_mark_ {
      topics_list_box.row.header_table.BOX_ID
    }.checked = all_checked;
  }

  function check_uncheck_all_ {
    topics_list_box.row.header_table.BOX_ID
  } () {
    alert('ALL');

    for (i = 0; i < document. {
      topics_list_box.FORMNAME
    }.length; i++) {
      if (document. {
        topics_list_box.FORMNAME
      }.elements[i].name == '{topics_list_box.FIELDNAME}[]{topics_list_box.row.header_table.BOX_ID}') {
        document. {
          topics_list_box.FORMNAME
        }.elements[i].checked = document. {
          topics_list_box.FORMNAME
        }.all_mark_ {
          topics_list_box.row.header_table.BOX_ID
        }.checked;
      }
    }
  }

</script>
<!-- END multi_selection -->