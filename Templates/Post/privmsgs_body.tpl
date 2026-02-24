<!------------------------------------>
<!-- ONGLETS DES MESSAGES PRIVÉS ----->

<ul class="privmsgs_menu">
  <!-- Boîte de reception -->
  <li>{INBOX}</li>
  <!-- Messages envoyés -->
  <li>{SENTBOX}</li>
  <!-- Boîte d'envoi -->
  <li>{OUTBOX}</li>
  <!-- Archives  -->
  <li>{SAVEBOX}</li>
</ul>

<!------------------------------------>
<!-- BARRE D'ACTIONS ----------------->
<div class="page-actions">
  <!-- Bouton "nouveau" -->
  <a href="/privmsg?mode=post" class="button primary">Nouveau message privé</a>
</div>


<!------------------------------------>
<!-- LISTE DES MPs ------------------->
<form action="{S_PRIVMSGS_ACTION}" method="post" name="privmsg_list" class="container">

  <div class="u-space-between">
    <!-- Capacité de la boîte de réception -->
    <!-- BEGIN switch_box_size_notice -->
    <span>{BOX_SIZE_STATUS}</span>
    <!-- END switch_box_size_notice -->


    <!-- Filtrer tous les messsages -->
    <div class="right">
      <select name="msgdays">{S_SELECT_MSG_DAYS}</select>&nbsp;
      <input class="button2" type="submit" name="submit_msgdays" value="Filtrer" />
    </div>

  </div>

  <!-- Début d'un message privé -->
  <!-- BEGIN listrow -->
  <div class="mp_row">

    <!-- Image MP -->
    <div class="mp_img"><img src="{listrow.PRIVMSG_FOLDER_IMG}" /></div>

    <div class="mp_infos">
      <!-- Titre du MP -->
      <a href="{listrow.U_READ}" class="topictitle {listrow.MSG_UNANSWERED}">{listrow.SUBJECT}</a><br />
      <div class="u-space-between">
        <!-- Expéditeur et date -->
        <span>{listrow.FROM} - {listrow.DATE}</span>

        <!-- Bouton de sélection -->
        <input type="checkbox" name="mark[]2" value="{listrow.S_MARK_ID}" />
      </div>
    </div>
  </div>
  <!-- END listrow -->
  <!-- Fin d'un message privé -->

  <!-- Notion "pas de message" -->
  <!-- BEGIN switch_no_messages -->
  <center>{L_NO_MESSAGES}</center>
  <!-- END switch_no_messages -->

  <!-- Tout sélectionner/déselectionner -->
  <center>
    <p>
      <a href="javascript:select_switch_privmsg(true);">{L_MARK_ALL}</a> ou 
      <a href="javascript:select_switch_privmsg(false);">{L_UNMARK_ALL}</a>
    </p>
  </center>

  <!-- Boutons de gestion des MP -->
  <center>
    {S_HIDDEN_FIELDS}
    <!-- BEGIN switch_save -->
    <input class="button1" type="submit" name="save" value="{L_SAVE_MARKED}" />&nbsp;&nbsp;
    <!-- END switch_save -->
    <!-- BEGIN switch_move_profile -->
    <input class="button1" type="submit" name="moveprofile" value="{L_MOVE_PROFILE_MARKED}" />&nbsp;&nbsp;
    <!-- END switch_move_profile -->
    <!-- BEGIN switch_mark_as_read -->
    <input class="button2" type="submit" name="mark_as_read" value="{switch_mark_as_read.L_MARK_AS_READ}" />&nbsp;&nbsp;
    <input class="button2" type="submit" name="mark_as_unread"
      value="{switch_mark_as_read.L_MARK_AS_UNREAD}" />&nbsp;&nbsp;
    <!-- END switch_mark_as_read -->
    <input class="button2" type="submit" name="delete" value="{L_DELETE_MARKED}" />&nbsp;&nbsp;
    <input class="button2" type="submit" name="deleteall" value="{L_DELETE_ALL}" />
  </center>

</form>
<!-- Fin conteneur mp -->