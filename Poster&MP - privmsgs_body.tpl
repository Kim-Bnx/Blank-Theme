<br />

<!----------------------------------------------->
<!-- MENU DE LA BOITE DE RECEPTION -------------->

<ul id="privmsgs-menu">
    <!-- Boîte de reception (image / lien) -->
    <li>{INBOX_IMG} {INBOX}</li>
    <!-- Messages envoyés (image / lien) -->
    <li>{SENTBOX_IMG} {SENTBOX}</li>
    <!-- Boîte d'envoi (image / lien) -->
    <li>{OUTBOX_IMG} {OUTBOX}</li>
    <!-- Archives (image / lien) -->
    <li>{SAVEBOX_IMG} {SAVEBOX}</li>
</ul>



<!-- Début des interactions par MP -->
<form action="{S_PRIVMSGS_ACTION}" method="post" name="privmsg_list">

    <!----------------------------------------------->
    <!-- BARRE DE GESTION -------------->
    <div class="links_bar">

          <!-- Bouton "nouveau" -->
          <span class="newpm_button buttons">{POST_PM_IMG}</span>


        <!-- Montrer tous les messsages -->
        <span class="right">
            {L_DISPLAY_MESSAGES}:&nbsp;
            <select name="msgdays">{S_SELECT_MSG_DAYS}</select>&nbsp;
            <input class="button2" type="submit" name="submit_msgdays" value="{L_GO}" />
        </span>

    </div>


    <!----------------------------------------------->
    <!-- LISTE DES MPs -------------->

    <!-- Conteneur-->
    <div class="container">

        <!-- Début d'un message privé -->
        <!-- BEGIN listrow -->
        <div class="mp_row">

            <!-- Image MP -->
            <div class="mp_img"><img src="{listrow.PRIVMSG_FOLDER_IMG}" /></div>

            <div class="mp_infos">
                <!-- Titre du MP -->
                <a href="{listrow.U_READ}" class="topictitle {listrow.MSG_UNANSWERED}">{listrow.SUBJECT}</a><br />
                <!-- Expéditeur et date -->
                <span>{listrow.FROM} - {listrow.DATE}</span>
              
                <!-- Bouton de sélection -->
                <input class="right" type="checkbox" name="mark[]2" value="{listrow.S_MARK_ID}" />
            </div>
        </div>
        <!-- END listrow -->
        <!-- Fin d'un message privé -->

        <!-- Notion "pas de message" -->
        <!-- BEGIN switch_no_messages -->
        <center>{L_NO_MESSAGES}</center>
        <!-- END switch_no_messages -->

      <!-- Capacité de la boîte de réception -->
            <!-- BEGIN switch_box_size_notice -->
            <span>{BOX_SIZE_STATUS}</span>
            <!-- END switch_box_size_notice -->
      
        <!-- Tout sélectionner/déselectionner -->
        <span class="right"><a href="javascript:select_switch_privmsg(true);">{L_MARK_ALL}</a> ou <a href="javascript:select_switch_privmsg(false);">{L_UNMARK_ALL}</a></span>
        <br />
    </div>


    <br />
    <!----------------------------------------------->
    <!-- BOUTONS DE GESTION -------------->

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
<!-- Fin des interactions par MP -->


<!----------------------------------------------->
<!-- BARRE DE GESTION -------------->

<div class="links_bar">
    <!-- Bouton "Nouveau" -->
    <span class="newpm_button buttons">{POST_PM_IMG}</span>
  
    <!-- Pagination -->
    <span class="pagination right">{PAGINATION} {PAGE_NUMBER}</span>
</div>


<!-- Sauter vers un forum -->
{JUMPBOX}

<br style="clear:both" />

            