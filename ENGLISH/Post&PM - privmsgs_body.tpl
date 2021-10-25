<br />

<!----------------------------------------------->
<!-- INBOX MENU -------------->

<ul id="privmsgs-menu">
    <!-- Inbox (image / link) -->
    <li>{INBOX_IMG} {INBOX}</li>
    <!-- Sent messages (image / link) -->
    <li>{SENTBOX_IMG} {SENTBOX}</li>
    <!-- Outbox (image / link) -->
    <li>{OUTBOX_IMG} {OUTBOX}</li>
    <!-- Saved messages (image / link) -->
    <li>{SAVEBOX_IMG} {SAVEBOX}</li>
</ul>



<!-- Start of PM interactions -->
<form action="{S_PRIVMSGS_ACTION}" method="post" name="privmsg_list">

    <!----------------------------------------------->
    <!-- LINKS BAR -------------->
    <div class="links_bar">

          <!-- "New" button -->
          <span class="newpm_button buttons">{POST_PM_IMG}</span>


        <!-- Show all messages -->
        <span class="right">
            {L_DISPLAY_MESSAGES}:&nbsp;
            <select name="msgdays">{S_SELECT_MSG_DAYS}</select>&nbsp;
            <input class="button2" type="submit" name="submit_msgdays" value="{L_GO}" />
        </span>

    </div>


    <!----------------------------------------------->
    <!-- PM LIST -------------->

    <!-- Container -->
    <div class="container">

        <!-- Beginning of a PM -->
        <!-- BEGIN listrow -->
        <div class="mp_row">

            <!-- PM image -->
            <div class="mp_img"><img src="{listrow.PRIVMSG_FOLDER_IMG}" /></div>

            <div class="mp_infos">
                <!-- PM title -->
                <a href="{listrow.U_READ}" class="topictitle">{listrow.SUBJECT}</a><br />
                <!-- From, date -->
                <span>{listrow.FROM} - {listrow.DATE}</span>
              
                <!-- Checkbox -->
                <input class="right" type="checkbox" name="mark[]2" value="{listrow.S_MARK_ID}" />
            </div>
        </div>
        <!-- END listrow -->
        <!-- End of PM -->

        <!-- "No message" info -->
        <!-- BEGIN switch_no_messages -->
        <center>{L_NO_MESSAGES}</center>
        <!-- END switch_no_messages -->

      <!-- Inbox capacity -->
            <!-- BEGIN switch_box_size_notice -->
            <span>{BOX_SIZE_STATUS}</span>
            <!-- END switch_box_size_notice -->
      
      <!-- Select all/deselect all -->
        <span class="right"><a href="javascript:select_switch_privmsg(true);">{L_MARK_ALL}</a> ou <a href="javascript:select_switch_privmsg(false);">{L_UNMARK_ALL}</a></span>
        <br />
    </div>


    <br />
    <!----------------------------------------------->
    <!-- MANAGEMENT BUTTONS -------------->

    <div>
        {S_HIDDEN_FIELDS}
        <!-- BEGIN switch_save -->
        <input class="button1" type="submit" name="save" value="{L_SAVE_MARKED}" />&nbsp;&nbsp;
        <!-- END switch_save -->
        <!-- BEGIN switch_move_profile -->
        <input class="button1" type="submit" name="moveprofile" value="{L_MOVE_PROFILE_MARKED}" />&nbsp;&nbsp;
        <!-- END switch_move_profile -->
        <!-- BEGIN switch_mark_as_read -->
        <input class="button2" type="submit" name="mark_as_read" value="{switch_mark_as_read.L_MARK_AS_READ}" />&nbsp;&nbsp;
        <input class="button2" type="submit" name="mark_as_unread" value="{switch_mark_as_read.L_MARK_AS_UNREAD}" />&nbsp;&nbsp;
        <!-- END switch_mark_as_read -->
        <input class="button2" type="submit" name="delete" value="{L_DELETE_MARKED}" />&nbsp;&nbsp;
        <input class="button2" type="submit" name="deleteall" value="{L_DELETE_ALL}" />
    </div>


</form>
<!-- End of PM interactions -->


<!----------------------------------------------->
<!-- MANAGEMENT BAR -------------->

<div class="links_bar">
    <!-- "New" button -->
    <span class="newpm_button buttons">{POST_PM_IMG}</span>
  
    <!-- Pagination -->
    <span class="pagination right">{PAGINATION} {PAGE_NUMBER}</span>
</div>


<!-- Jump to another forum -->
{JUMPBOX}

<br style="clear:both" />

            