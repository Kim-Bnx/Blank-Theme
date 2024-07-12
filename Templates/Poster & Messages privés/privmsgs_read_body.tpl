<br />

<!----------------------------------------------->
<!-- MENU DE LA BOÎTE DE RECEPTION -------------->

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

<!----------------------------------------------->
<!-- BARRE DE GESTION -------------->
<div class="links_bar">
      
       <!-- Bouton: répondre -->
       <!-- BEGIN switch_post_reply -->
       <a href="{REPLY_PM_URL}" rel="nofollow" title="{REPLY_PM_IMG}" class="replypm_button buttons">{REPLY_PM_IMG}</a>
        <!-- END switch_post_reply -->
    </div>



<form action="{S_PRIVMSGS_ACTION}" method="post">

   <!----------------------------------------------->
    <!-- AFFICHAGE DU MESSAGE -------------->
    <div class="container">

        <!-- Tire du message -->
        <h1 class="page-title">{POST_SUBJECT}</h1>

        <!-- Conteneur du message -->
        <div class="message">

            <!-- Conteneur des informations du message -->
            <div class="message_infos">

                <!-- De XX à XX, date -->
                <span>{L_FROM} {MESSAGE_FROM} {L_TO} {MESSAGE_TO}, {POST_DATE}</span>

                <!-- Boutons d'édition -->
                <ul class="mp-icons">
                    <!-- BEGIN switch_quote -->
                    <li>{QUOTE_PM_IMG}</li>
                    <!-- END switch_quote -->
                    <li>{EDIT_PM_IMG}</li>
                </ul>

            </div>

            <!-- Profil de l'expéditeur -->
            <div class="message_profil">

                <!-- avatar -->
                {AVATAR_FROM}<br /><br />

                <!-- pseudo -->
                {MESSAGE_FROM}

                <!-- Lien-image de contact -->
                <!-- BEGIN switch_user_contact -->
                <br />
                {PROFILE_IMG} {WWW_IMG}
                <!-- END switch_user_contact -->
            </div>

            <!-- contenu du MP -->
            <div class="message_content postbody content">
                {MESSAGE}
            </div>

        </div>
        <!-- Fin du conteneur message -->

      
        <!----------------------------------------------->
        <!-- BOUTONS DE GESTION -------------->
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
    <!-- Fin de l'affichage du message -->

</form>

<!----------------------------------------------->
<!-- HISTORIQUE DES MESSAGES -------------->
<!-- (template : privmsg_topic_review)-->

<!-- BEGIN switch_review_box -->
{TOPIC_REVIEW_BOX}
<!-- END switch_review_box -->




<!-- Sauter vers un forum -->
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

            