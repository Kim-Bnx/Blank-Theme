<!----------------------------------------------->
<!-- LISTE DES SUJETS -------------->
<!-- BEGIN topics_list_box -->


<!----------------------------------------------->
<!-- AFFICHAGE D'UN SUJET -------------->
<!-- BEGIN row -->
<!-- BEGIN topic -->


<!-- Conteneur d'un sujet -->
<div class="topicslist_row" <!-- BEGIN line_sticky --> style="margin-top:5px;"<!-- END line_sticky -->>

    <!-- Image d'un sujet -->
    <div class="topicslist-img">
        <img src="{topics_list_box.row.TOPIC_FOLDER_IMG}" />
    </div>


    <div class="topicslist_infos" {topics_list_box.row.ICON}>

        <!-- Sélection d'un sujet 
                (utile uniquement durant la modération des sujets, permet de les sélectionner)-->
        <!-- BEGIN single_selection -->
        <input type="radio" name="{topics_list_box.FIELDNAME}" value="{topics_list_box.row.FID}" {topics_list_box.row.L_SELECT} />
        <!-- END single_selection -->
      
      	<!-- Icone de message -->
     	<span class="topic_msgicon"></span>

        <!-- Label type de sujet : annonce, note, ... -->
        <span class="topic-type">{topics_list_box.row.TOPIC_TYPE}</span>

        <!-- Titre du sujet -->
        <a class="topictitle" href="{topics_list_box.row.U_VIEW_TOPIC}">{topics_list_box.row.TOPIC_TITLE}</a>&nbsp;
      
        <!-- Icon vous avez posté dans ce sujet -->
        {topics_list_box.row.PARTICIPATE_POST_IMG}
      
        <br />
      
        <span class="topic-author">
            {topics_list_box.row.L_BY}&nbsp;
            <!-- Indication "par" -->
            {topics_list_box.row.TOPIC_AUTHOR}
            <!-- Auteur -->
        </span>&nbsp;
      
      <!-- Pagination du sujet -->
        <span class="topicslist-pagination">
            {topics_list_box.row.GOTO_PAGE_NEW}
            <!-- BEGIN nav_tree -->
            {topics_list_box.row.TOPIC_NAV_TREE_NEW}
            <!-- END nav_tree -->
        </span>

    </div>


    <!-- Statistiques -->
    <div class="topicslist-stats">
        {topics_list_box.row.REPLIES} {L_REPLIES}
        <!-- Nombres // Indication "messages" -->
        <br />
        {topics_list_box.row.VIEWS} {L_VIEWS}
        <!-- Nombres // Indication "vues" -->
    </div>


    <!-- Avatar du dernier posteur-->
    <div class="topicslist-avatar-lastpost">
        <!-- BEGIN avatar -->
        {topics_list_box.row.topic.avatar.LAST_POST_AVATAR}
        <!-- END avatar -->
    </div>


    <!-- Dernier message -->
    <div class="topicslist-lastpost">
        <!-- Date du dernier message -->
        {topics_list_box.row.LAST_POST_TIME} &nbsp;
        <br />
        <!-- Auteur du dernier message -->
        {topics_list_box.row.LAST_POST_AUTHOR} &nbsp;
        <!-- Image-lien pour aller au dernier message -->
        {topics_list_box.row.LAST_POST_IMG}
    </div>


    <!-- Description du sujet -->
    <!-- BEGIN switch_description -->
    <div class="topicslist-description">
        {topics_list_box.row.topic.switch_description.TOPIC_DESCRIPTION}
    </div>
    <!-- END switch_description -->


</div>
<!-- END topic -->
<!-- END row -->

<!-- Fin du conteneur d'un sujet -->

<!-- Indication "pas de sujet" -->
<!-- BEGIN no_topics -->
<center><strong>{topics_list_box.row.L_NO_TOPICS}</strong></center>
<!-- END no_topics -->


<!-- END topics_list_box -->
<!-- Fin de la liste des sujets -->





<!-- BEGIN multi_selection -->
<script type="text/javascript">
    function check_uncheck_main_ {
        topics_list_box.row.header_table.BOX_ID
    }() {
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
    }() {
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
            