<br />
<div class="container">
    <h1 class="page-title">{L_SEARCH_MATCHES}</h1>

    <form action="{S_ACTION}" method="post" name="post" onsubmit="return verify_select();">

	<!-- BEGIN searchresults -->	
        <div class="topicslist_row">
            
            <!-- Topic image -->
            <div class="topicslist-img">
                <img src="{searchresults.TOPIC_FOLDER_IMG}" />
            </div>


            <div class="topicslist_infos" {searchresults.TOPIC_ICON}>

                <!-- Post icon -->
                <span class="topic_msgicon"></span>

                <!-- Topic type icon: announcement, note, ... -->
                <span class="topic-type">{searchresults.TOPIC_TYPE}</span>

                <!-- Topic title -->
                <a class="topictitle" href="{searchresults.U_VIEW_TOPIC}">{searchresults.TOPIC_TITLE}</a>&nbsp;

                <!-- "You have posted in this topic" icon -->
                {searchresults.PARTICIPATE_POST_IMG}

                <br />

                <span class="topic-author">
                    {searchresults.L_BY} {searchresults.TOPIC_AUTHOR} {searchresults.L_IN} <a href="{searchresults.U_VIEW_FORUM}">{searchresults.FORUM_NAME}</a>
                </span>&nbsp;

                <!-- Topic pagination -->
                <span class="topicslist-pagination">
                    {searchresults.GOTO_PAGE_NEW}
                    <!-- BEGIN nav_tree -->
                    {searchresults.TOPIC_NAV_TREE_NEW}
                    <!-- END nav_tree -->
                </span>

            </div>


            <!-- Statistics -->
            <div class="topicslist-stats">
                {searchresults.REPLIES} {L_REPLIES}
                <!-- Number // "replies" indication -->
                <br />
                {searchresults.VIEWS} {L_VIEWS}
                <!-- Number // "views" indication -->
            </div>



            <!-- Latest post -->
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
