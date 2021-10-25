<!-- Subforum view (template: index_box) -->
{BOARD_INDEX}
<br />


<!----------------------------------------------->
<!-- NAVIGATION BAR -------------->

<div class="navigation_links">

    <!-- Nav chain: Category > Forum > Subforum -->
    <span class="navigation_chain">
        {NAV_CAT_DESC}
    </span>

    <!-- Pagination -->
    <span class="right pagination page-topic">
        {PAGINATION}
    </span>

</div>


<!----------------------------------------------->
<!-- MANAGEMENT BAR -------------->

<div class="links_bar">

    <!-- Buttons: new, reply, locked -->
    <!-- BEGIN switch_user_authpost -->
        <a class="buttons" href="{U_POST_NEW_TOPIC}" accesskey="n" rel="nofollow"><img class="newtopic_button" src="{POST_IMG}" class="{POST_IMG_ID}" alt="{L_POST_NEW_TOPIC}" /></a>
    <!-- END switch_user_authpost -->

    <!-- Links: Watch this forum -- Watched topics -->
    <!-- BEGIN switch_user_logged_in -->
    <span class="right">
        {S_WATCH_FORUM} • <a href="{U_WATCHSEARCH_JS_PLUS_MENU}">Watched topics</a>
    </span>
    <!-- END switch_user_logged_in -->

</div>


<!----------------------------------------------->
<!-- TOPICS LIST -------------->
<!--(template: topics_list_box) -->

<div class="container">

    <!-- Topics list title -->
    <h1 class="page-title">{FORUM_NAME}</h1>

   <!-- Topics list -->
    {TOPICS_LIST_BOX}
</div>


<!----------------------------------------------->
<!-- MANAGEMENT BAR -------------->

<div class="links_bar">

    <!-- Button: new -->
    <!-- BEGIN switch_user_authpost -->
        <a class="buttons" href="{U_POST_NEW_TOPIC}" accesskey="n" rel="nofollow"><img class="newtopic_button" src="{POST_IMG}" class="{POST_IMG_ID}" alt="{L_POST_NEW_TOPIC}" /></a>
    <!-- END switch_user_authpost -->

    <!-- "Mark as read" link -->
    <!-- BEGIN switch_user_logged_in -->
    <span class="right">
        <a href="{U_MARK_READ}">{L_MARK_TOPICS_READ}</a>
    </span>
    <!-- END switch_user_logged_in -->

</div>



<!-- Container: users and pagination -->
<div class="navigation_links">

    <!-- Users browsing the forum -->
    <span id="users_here">
        {LOGGED_IN_USER_LIST}
    </span>

    <!-- Pagination -->
    <span class="right pagination page-topic">
        {PAGINATION}
    </span>
</div>

<!----------------------------------------------->
<!---------------->

<br />
<div class="separator"></div>
<br />


<!----------------------------------------------->
<!-- JUMP TO FORUM -------------->

<div class="right">
    <form action="{S_JUMPBOX_ACTION}" method="get" name="jumpbox" onsubmit="if(document.jumpbox.f.value == -1){return false;}">
        <fieldset class="vf_jumpbox">
            <label>{L_JUMP_TO}:</label><br />
            {S_JUMPBOX_SELECT} &nbsp;
            <input class="button2" type="submit" value="{L_GO}" />
        </fieldset>
    </form>
</div>


<!----------------------------------------------->
<!-- USEFUL LINKS -------------->

<a href="{U_EGOSEARCH_JS_PLUS_MENU}">View my posts</a><br />
<a href="{U_NEWPOSTS_JS_PLUS_MENU}">New posts since my last visit</a><br />
<a href="{U_UNANSWERED_JS_PLUS_MENU}">Unanswered topics</a>

<br /><br />

<!----------------------------------------------->
<!-- MODERATION TOOLS ------------>
<div id="moderation_forum_tools">
  {S_AUTH_LIST}
</div>

<!-- Change link text for "Moderate this forum" -->
<script type="text/javascript">
document.getElementById('moderation_forum_tools').innerHTML = document.getElementById('moderation_forum_tools').innerHTML.replace(/moderate this forum/, "Moderate topics in this forum");</script>




<br />
<div class="clear"></div>

            