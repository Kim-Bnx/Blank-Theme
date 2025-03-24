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
       <a href="{REPLY_PM_URL}" rel="nofollow" title="{REPLY_PM_IMG}" class="replypm_button buttons">Répondre au message</a>
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
                    <li class="btn-quote">
                      	<a href="/privmsg?mode=quote">Citer</a>
                    </li>
                    <!-- END switch_quote -->
                  
                    <li class="btn-edit">
                    	<a href="/privmsg?mode=edit">Editer</a>
                    </li>
                </ul>

            </div>

            <!-- Profil de l'expéditeur -->
            <div class="message_profil">

                <!-- avatar -->
                {AVATAR_FROM}<br /><br />

                <!-- pseudo -->
                <div class="message_from">
                    {MESSAGE_FROM}
                    <!-- BEGIN switch_user_contact -->
                    {PROFILE_IMG}
                    <!-- END switch_user_contact -->
              </div>
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

<!-- Bouton editer/citer text -->
<script type="text/javascript">
const post = document.querySelector('input[type="hidden"][name="mark[]"][value]').value;
    
const quoteBtn = document.querySelector('a[href="/privmsg?mode=quote"]');
if('{QUOTE_PM_IMG}' && quoteBtn) { quoteBtn.href = '/privmsg?mode=quote&p=' + post} else {quoteBtn?.remove();}

const editBtn = document.querySelector('a[href="/privmsg?mode=edit"]');
if('{EDIT_PM_IMG}' && editBtn) { editBtn.href = '/privmsg?mode=edit&p=' + post } else {editBtn.remove();}

const container = document.querySelector(".message_from");
if (!container) {
  console.alert('[Affichage MP] Le pseudo et l\'image de renvoit vers le profil ne sont pas contenu dans le selecteur .message_from');
}
const link = container?.querySelector("a");
const span = container?.querySelector("span");

if (link && span) {
    link.innerHTML = span.outerHTML; 
    span.remove(); 
    link.querySelector("img")?.remove();
}
</script>