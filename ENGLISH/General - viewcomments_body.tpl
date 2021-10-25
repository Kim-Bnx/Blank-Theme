<!-- Nav chain: Category > Forum > Subforum -->
<span class="navigation_chain">
    {NAV_CAT_DESC}
</span>

<!----------------------------------------------->
<!-- MANAGEMENT BAR -------------->


<div class="links_bar">
    <span>
        <!-- Buttons: new -->
        <!-- BEGIN switch_user_authpost -->
        <a class="buttons" href="{U_POST_NEW_TOPIC}" rel="nofollow"><img class="newtopic_button" src="{POST_IMG}" class="{POST_IMG_CLASS}" alt="{L_POST_NEW_TOPIC}" /></a>&nbsp;
        <!-- END switch_user_authpost -->

        <!-- Button: reply -->
        <!-- BEGIN switch_user_authreply -->
        <a class="buttons" href="{U_POST_REPLY_TOPIC}"><img class="reply_button" src="{REPLY_IMG}" class="i_reply" alt="{L_POST_REPLY_TOPIC}" /></a>
        <!-- END switch_user_authreply -->
    </span>


    <span class="right">
        <a href="{JS_AUTH_FAVOURITES}">Add topic to favourites</a>
    </span>

</div>


<!----------------------------------------------->
<!-- BLOG VIEW -------------->

<!-- Blog container -->
<div class="container">

    <!-- Blog title -->
    <h1 class="page-title">{TOPIC_TITLE}</h1>


    <!-- Survey (template: viewtopic_poll_ballot // viewtopic_poll_result) -->
    {POLL_DISPLAY}

   
    <!-- Post beginning -->
    <!-- BEGIN postrow -->
    <!-- BEGIN displayed -->
    <div class="blog_post" id="{postrow.displayed.U_POST_ID}">

        <!-- Post info container -->
        <div class="blog_details">

            <!-- Blog author -->
            <span class="blog_author">
                {L_TOPIC_BY}&nbsp;{postrow.displayed.POSTER_NAME}
            </span>

            <!-- Post edit buttons -->
            <ul class="profile-icons ">
                <li>{postrow.displayed.THANK_IMG}</li>
                <li>{postrow.displayed.MULTIQUOTE_IMG}</li>
                <li>{postrow.displayed.QUOTE_IMG}</li>
                <li>{postrow.displayed.EDIT_IMG}</li>
                <li>{postrow.displayed.DELETE_IMG}</li>
                <li>{postrow.displayed.IP_IMG}</li>
            </ul>

            <!-- Like button container -->
            <!-- BEGIN switch_likes_active -->
            <div class="like_button">

                <!-- "Like" button -->
                <button class="rep-button {postrow.displayed.switch_likes_active.C_VOTE_LIKE}" data-href="{postrow.displayed.switch_likes_active.U_VOTE_LIKE}" data-href-rm="{postrow.displayed.switch_likes_active.U_VOTE_RM_LIKE}">

                    <!-- "Like" text -->
                    <span class="like_text">{postrow.displayed.switch_likes_active.L_LIKE}</span>
                    <!-- "Like" counter -->
                    {postrow.displayed.switch_likes_active.COUNT_VOTE_LIKE}

                </button>
            </div>
            <!-- END switch_likes_active -->
            <!-- Like button end -->


        </div>
        <!-- Details end -->


        <!-- Post container -->
        <div class="post_message postbody content">
            {postrow.displayed.MESSAGE}
        </div>

    </div>
    <!-- END displayed -->
    <!-- END postrow -->
    <!-- Post end -->

</div>
<!-- Blog end -->


<!----------------------------------------------->
<!-- COMMENTS -------------->

<!-- Comments container -->
<div class="wrapped">

    <!-- "Comments" title -->
    <h3>{L_COMMENTS}</h3>

    <!-- Comment view -->
    <!-- BEGIN comment -->
    <!-- BEGIN displayed -->
    <div id="p{comment.displayed.U_POST_ID}" class="post--{comment.displayed.U_POST_ID} blog_comment">

        <!-- Comment info container -->
        <div class="comment_details" id="profile{comment.displayed.U_POST_ID}">
            <div class="left">
                <!-- Commenter avatar -->
                <div class="comment_avatar">
                    {comment.displayed.POSTER_AVATAR}
                </div>

                <!-- Comment link -->
                <a href="{comment.displayed.POST_URL}" name="{comment.displayed.U_POST_ID}">Reply by</a>&nbsp;
                <!-- Comment author -->
                {comment.displayed.POSTER_NAME}
                <!-- Online indicator -->
                {comment.displayed.L_ONLINE}

                <br />
                <!-- Comment date -->
                <span>{comment.displayed.POST_DATE_NEW}</span>
            </div>

            <!-- Edit buttons -->
            <ul class="profile-icons">
                <li>{comment.displayed.MULTIQUOTE_IMG}</li>
                <li>{comment.displayed.QUOTE_IMG}</li>
                <li>{comment.displayed.EDIT_IMG}</li>
                <li>{comment.displayed.DELETE_IMG}</li>
                <li>{comment.displayed.IP_IMG}</li>
            </ul>


        </div>
        <!-- Info end -->

        <!-- Comment content -->
        <div class="comment_content">
            {comment.displayed.MESSAGE}
        </div>

    </div>
    <!-- END displayed -->
    <!-- END comment -->
    <!-- Comment end -->

    <!-- "No comment" indicator -->
    <!-- BEGIN no_comment -->
    <div class="blog_comment">
        <center>{no_comment.L_NO_COMMENT}</center>
    </div>
    <!-- END no_comment -->

</div>
<!-- End of comments -->



<!----------------------------------------------->
<!-- MANAGEMENT BAR -------------->


<div class="links_bar">
    <!-- Follow blog -->
    <span>
        <!-- Follow topic -->
        <!-- BEGIN switch_user_logged_in -->
        <!-- BEGIN watchtopic -->
        <span class="specials_links">{S_WATCH_TOPIC}</span>
        <!-- END watchtopic -->
        <!-- END switch_user_logged_in -->

        <!-- Followed topics -->
        &nbsp;<a class="specials_links" href="{U_WATCHSEARCH_JS_PLUS_MENU}">Sujets surveillés</a>
    </span>


    <!-- Comments pagination -->
    <!-- BEGIN topicpagination -->
    <span class="pagination right">{PAGINATION}</span>
    <!-- END topicpagination -->
</div>


<!----------------------------------------------->
<!-- QUICK REPLY -------------->

<div class="container quickreply" id="quickreply_content">
    <!-- BEGIN switch_user_logged_in -->
    {QUICK_REPLY_FORM}
    <!-- END switch_user_logged_in -->
</div>


<!----------------------------------------------->
<!-- MANAGEMENT BAR -------------->


<div class="links_bar">
    <span>
        <!-- Button: new -->
        <!-- BEGIN switch_user_authpost -->
        <a class="buttons" href="{U_POST_NEW_TOPIC}" rel="nofollow"><img class="newtopic_button" src="{POST_IMG}" class="{POST_IMG_CLASS}" alt="{L_POST_NEW_TOPIC}" /></a>&nbsp;
        <!-- END switch_user_authpost -->

        <!-- Button: reply -->
        <!-- BEGIN switch_user_authreply -->
        <a class="buttons" href="{U_POST_REPLY_TOPIC}"><img class="reply_button" src="{REPLY_IMG}" class="i_reply" alt="{L_POST_REPLY_TOPIC}" /></a>
        <!-- END switch_user_authreply -->
    </span>


    <span class="right">
        <a href="{JS_AUTH_FAVOURITES}">Add topic to favourites</a>
    </span>

</div>


<br/>

<!----------------------------------------------->
<!-- JUMP TO FORUM  -------------->

<form action="{S_JUMPBOX_ACTION}" method="get" onsubmit="if(document.jumpbox.f.value == -1){return false;}" class="left">
    <fieldset class="jumpbox">
        <label>{L_JUMP_TO}:&nbsp;</label>
        {S_JUMPBOX_SELECT}&nbsp;
        <input class="button2" type="submit" value="{L_GO}" />
    </fieldset>
</form>


<!----------------------------------------------->
<!-- MODERATION TOOLS -------------->

<!-- BEGIN viewtopic_bottom -->
<form method="get" action="{S_FORM_MOD_ACTION}" class="right">
    <fieldset class="quickmod">
        <input type="hidden" name="t" value="{TOPIC_ID}" />

        <!-- <input type="hidden" name="sid" value="{S_SID}" /> -->
        <input type="hidden" name="{SECURE_ID_NAME}" value="{SECURE_ID_VALUE}" />
        <label>{L_MOD_TOOLS}:&nbsp;</label>
        {S_SELECT_MOD}&nbsp;
        <input class="button2" type="submit" value="{L_GO}" />
    </fieldset>
    <span class="right">{S_TOPIC_ADMIN}</span>
</form>
<!-- END viewtopic_bottom -->


<div class="clear"></div>



<!-- BEGIN switch_plus_menu -->
<script type="text/javascript">
    //<![CDATA[
    var multiquote_img_off = '{JS_MULTIQUOTE_IMG_OFF}',
        multiquote_img_on = '{JS_MULTIQUOTE_IMG_ON}';

</script>
<!-- END switch_plus_menu -->
<script type="text/javascript">
    var hiddenMsgLabel = {
        visible: '{JS_HIDE_HIDDEN_MESSAGE}',
        hidden: '{JS_SHOW_HIDDEN_MESSAGE}'
    };
    showHiddenMessage = function(id) {
        try {
            var regId = parseInt(id, 10);
            if (isNaN(regId)) {
                regId = 0;
            }

            if (regId > 0) {
                $('.post--' + id).toggle(0, function() {
                    if ($(this).is(":visible")) {
                        $('#hidden-title--' + id).html(hiddenMsgLabel.visible);
                    } else {
                        $('#hidden-title--' + id).html(hiddenMsgLabel.hidden);
                    }
                });
            }
        } catch (e) {}

        return false;
    };

    //]]>Visi

</script>


<!-- BEGIN switch_image_resize -->
<script type="text/javascript">
    //<![CDATA[
    $(resize_images({
        'selector': '.postbody .content',
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

            