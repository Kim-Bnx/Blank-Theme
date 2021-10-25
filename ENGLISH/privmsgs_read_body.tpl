<br />

<!----------------------------------------------->
<!-- INBOX MENU -------------->

<ul id="privmsgs-menu">
    <!-- Inbox (image / limk) -->
    <li>{INBOX_IMG} {INBOX}</li>
    <!-- Sent messages (image / link) -->
    <li>{SENTBOX_IMG} {SENTBOX}</li>
    <!-- Outbox (image / link) -->
    <li>{OUTBOX_IMG} {OUTBOX}</li>
    <!-- Saved messages (image / link) -->
    <li>{SAVEBOX_IMG} {SAVEBOX}</li>
</ul>

<!----------------------------------------------->
<!-- LINKS BAR -------------->
<div class="links_bar">
      
       <!-- Button: "Reply" -->
       <!-- BEGIN switch_post_reply -->
       <a href="{REPLY_PM_URL}" rel="nofollow" title="{REPLY_PM_IMG}" class="replypm_button buttons">{REPLY_PM_IMG}</a>
        <!-- END switch_post_reply -->
    </div>



<form action="{S_PRIVMSGS_ACTION}" method="post">

   <!----------------------------------------------->
    <!-- VIEW POST -------------->
    <div class="container">

        <!-- Message title -->
        <h1 class="page-title">{POST_SUBJECT}</h1>

        <!-- Message container -->
        <div class="message">

            <!-- Message info container -->
            <div class="message_infos">

                <!-- De XX à XX, date -->
                <span>{L_FROM} {MESSAGE_FROM} {L_TO} {MESSAGE_TO}, {POST_DATE}</span>

                <!-- Edit buttons -->
                <ul class="mp-icons">
                    <!-- BEGIN switch_quote -->
                    <li>{QUOTE_PM_IMG}</li>
                    <!-- END switch_quote -->
                    <li>{EDIT_PM_IMG}</li>
                </ul>

            </div>

            <!-- Sender profile -->
            <div class="message_profil">

                <!-- avatar -->
                {AVATAR_FROM}<br /><br />

                <!-- username -->
                {MESSAGE_FROM}

                <!-- Contact link button -->
                <!-- BEGIN switch_user_contact -->
                <br />
                {PROFILE_IMG} {WWW_IMG}
                <!-- END switch_user_contact -->
            </div>

            <!-- PM contents -->
            <div class="message_content postbody content">
                {MESSAGE}
            </div>

        </div>
        <!-- Message container end -->

      
        <!----------------------------------------------->
        <!-- MANAGEMENT BUTTONS -------------->
        <br/>
        <fieldset class="submit-buttons">
            {S_HIDDEN_FIELDS}
            <!-- BEGIN switch_save -->
            <input class="button2" type="submit" name="save" value="{L_SAVE_MSG}" />&nbsp;&nbsp;
            <!-- END switch_save -->

            <!-- BEGIN switch_move_profile -->
            <input class="button2" type="submit" name="moveprofile" value="{L_MOVE_PROFILE}" />&nbsp;&nbsp;
            <!-- END switch_move_profile -->

            <input class="button2" type="submit" name="delete" value="{L_DELETE_MSG}" />
        </fieldset>

    </div>
    <!-- View post end -->

</form>

<!----------------------------------------------->
<!-- Message history -------------->
<!-- (template : privmsg_topic_review)-->

<!-- BEGIN switch_review_box -->
{TOPIC_REVIEW_BOX}
<!-- END switch_review_box -->




<!-- Jump to another forum -->
{JUMPBOX}



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

            