<br />
<div class="container">
    <h1 class="page-title">{L_SEARCH_MATCHES}</h1>

    <form action="{S_ACTION}" method="post" name="post" onsubmit="return verify_select();">

	<!-- BEGIN searchresults -->	
        <div class="topicslist_row">
            
            <!-- Image d'un sujet -->
            <div class="topicslist-img">
                <img src="{searchresults.TOPIC_FOLDER_IMG}" />
            </div>


            <div class="topicslist_infos" {searchresults.TOPIC_ICON}>

                <!-- Icone de message -->
                <span class="topic_msgicon"></span>

                <!-- Label type de sujet : annonce, note, ... -->
                <span class="topic-type">{searchresults.TOPIC_TYPE}</span>

                <!-- Titre du sujet -->
                <a class="topictitle" href="{searchresults.U_VIEW_TOPIC}">{searchresults.TOPIC_TITLE}</a>&nbsp;

                <!-- Icon vous avez posté dans ce sujet -->
                {searchresults.PARTICIPATE_POST_IMG}

                <br />

                <span class="topic-author">
                    {searchresults.L_BY} {searchresults.TOPIC_AUTHOR} {searchresults.L_IN} <a href="{searchresults.U_VIEW_FORUM}">{searchresults.FORUM_NAME}</a>
                </span>&nbsp;

                <!-- Pagination du sujet -->
                <span class="topicslist-pagination">
                    {searchresults.GOTO_PAGE_NEW}
                    <!-- BEGIN nav_tree -->
                    {searchresults.TOPIC_NAV_TREE_NEW}
                    <!-- END nav_tree -->
                </span>

            </div>


            <!-- Statistiques -->
            <div class="topicslist-stats">
                {searchresults.REPLIES} {L_REPLIES}
                <!-- Nombres // Indication "messages" -->
                <br />
                {searchresults.VIEWS} {L_VIEWS}
                <!-- Nombres // Indication "vues" -->
            </div>



            <!-- Dernier message -->
            <div class="topicslist-lastpost">
                {searchresults.LAST_POST_TIME}&nbsp;
                <br />
                {searchresults.LAST_POST_AUTHOR}&nbsp;
                {searchresults.LAST_POST_IMG}
            </div>

        </div>
	 <!-- END searchresults -->
      
        <p class="pagination">{PAGINATION}</p>
    </form>

</div>

{JUMPBOX}
