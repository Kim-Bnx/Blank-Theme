<!----------------------------------------------->
<!-- MANAGEMENT BAR -------------->

<div class="links_bar">
  <!-- BEGIN switch_user_logged_in -->
  <span>
        <!-- Messages since last visit -->
        <a id="lastvisit_posts" href="{U_SEARCH_NEW}">{L_SEARCH_NEW}</a>&nbsp;•&nbsp;

        <!-- View your own messages -->
        <a href="{U_SEARCH_SELF}">{L_SEARCH_SELF}</a>&nbsp;•&nbsp;
        
        <!-- Unanswered posts -->
        <a id="posts_unanswered" href="{U_SEARCH_UNANSWERED}">{L_SEARCH_UNANSWERED}</a>
    </span>
    <!-- END switch_user_logged_in -->

   
    <!-- BEGIN switch_user_logged_in -->
    <!-- Mark forums as read -->
    <a class="specials_links right" id="mark_read" href="{U_MARK_READ}" accesskey="m">{L_MARK_FORUMS_READ}</a>
    <!-- END switch_user_logged_in -->
</div>


<!----------------------------------------------->
<!-- CATEGORIES -------------->

<!-- Category container -->
<!-- BEGIN catrow -->

<!-- BEGIN tablehead -->
<div class="category" id="{catrow.tablehead.ID}">

    <!-- Category title -->
    <div class="cate_title">{catrow.tablehead.L_FORUM}</div>


    <!-- Forum list container -->
    <div class="forums">

<!-- END tablehead -->


        
        <!-- BEGIN forumrow -->
        <!-- View forum -->
        <div class="forum_row">
                <!-- Forum title -->
                <a href="{catrow.forumrow.U_VIEWFORUM}" class="forumtitle">{catrow.forumrow.FORUM_NAME}</a>
                <br />

                <!-- Forum image: new, no new, locked -->
                <img class="forum-img" src="{catrow.forumrow.FORUM_FOLDER_IMG}" />

                <!-- Description -->
                <div class="forum_desc">{catrow.forumrow.FORUM_DESC}</div>

                
                <div class="forum_lastpost-avatar">
                   <!-- Last post avatar -->
                    <!-- BEGIN avatar -->
                    {catrow.forumrow.avatar.LAST_POST_AVATAR}
                    <!-- END avatar -->
                </div>

                <!-- Last post container -->
                <div class="forum_lastpost">
                  <span>
                     <!-- Last post -->
                      <!-- BEGIN switch_topic_title -->
                      <a href="{catrow.forumrow.U_LATEST_TOPIC}" title="{catrow.forumrow.LATEST_TOPIC_TITLE}">{catrow.forumrow.LATEST_TOPIC_NAME}</a><br />
                      <!-- END switch_topic_title -->
                      
                      <!-- Author -->
                      {catrow.forumrow.USER_LAST_POST}
                  </span>
                </div>

            <div class="forum_details">

                <!-- Subforum links -->
                <span id="subforum">{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}</span>

                <!-- Topics and posts counter -->
                <span class="forum_stats">
                  {catrow.forumrow.TOPICS} {L_TOPICS}
                  &nbsp; • &nbsp;
                  {catrow.forumrow.POSTS} {L_POSTS}
                </span>
            </div>

        </div>
        <!-- End of forum view -->
        <!-- END forumrow -->
      
        <!-- BEGIN tablefoot -->
    </div>
    <!-- End of forum list -->


</div>
<!-- END tablefoot -->
<!-- END catrow -->
<!-- End of category container -->



<!----------------------------------------------->
<!-- MANAGEMENT BAR -------------->

<!-- BEGIN switch_on_index -->
<div class="links_bar">
        <!-- Active today -->
        <a href="{U_TODAY_ACTIVE}">{L_TODAY_ACTIVE}</a> &nbsp; • &nbsp;

        <!-- Top 20 daily posters -->
        <a href="{U_TODAY_POSTERS}">{L_TODAY_POSTERS}</a> &nbsp; • &nbsp;

        <!-- Top 20 posters overall -->
        <a href="{U_OVERALL_POSTERS}">{L_OVERALL_POSTERS}</a>

    <!-- Delete forum cookies -->
    <!-- BEGIN switch_delete_cookies -->
    <a class="specials_links right" href="{switch_on_index.switch_delete_cookies.U_DELETE_COOKIES}" rel="nofollow">{switch_on_index.switch_delete_cookies.L_DELETE_COOKIES}</a>
    <!-- END switch_delete_cookies -->
</div>
<!-- END switch_on_index -->   
            