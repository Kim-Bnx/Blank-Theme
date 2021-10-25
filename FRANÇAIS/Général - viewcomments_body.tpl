<!-- Chaîne de lien : Catégorie > Forum > Sous-fo -->
<span class="navigation_chain">
    {NAV_CAT_DESC}
</span>

<!----------------------------------------------->
<!-- BARRE DE GESTION -------------->


<div class="links_bar">
    <span>
        <!-- Boutons : nouveau -->
        <!-- BEGIN switch_user_authpost -->
        <a class="buttons" href="{U_POST_NEW_TOPIC}" rel="nofollow"><img class="newtopic_button" src="{POST_IMG}" class="{POST_IMG_CLASS}" alt="{L_POST_NEW_TOPIC}" /></a>&nbsp;
        <!-- END switch_user_authpost -->

        <!-- Bouton : répondre -->
        <!-- BEGIN switch_user_authreply -->
        <a class="buttons" href="{U_POST_REPLY_TOPIC}"><img class="reply_button" src="{REPLY_IMG}" class="i_reply" alt="{L_POST_REPLY_TOPIC}" /></a>
        <!-- END switch_user_authreply -->
    </span>


    <span class="right">
        <a href="{JS_AUTH_FAVOURITES}">Ajouter le sujet à ses favoris</a>
    </span>

</div>


<!----------------------------------------------->
<!-- AFFICHAGE DU BLOG -------------->

<!-- Conteneur du blog -->
<div class="container">

    <!-- Titre du blog -->
    <h1 class="page-title">{TOPIC_TITLE}</h1>


    <!-- Sondage (template : viewtopic_poll_ballot // viewtopic_poll_result) -->
    {POLL_DISPLAY}

   
    <!-- Début du post -->
    <!-- BEGIN postrow -->
    <!-- BEGIN displayed -->
    <div class="blog_post" id="{postrow.displayed.U_POST_ID}">

        <!-- Conteneur des informations du message -->
        <div class="blog_details">

            <!-- Auteur du blog -->
            <span class="blog_author">
                {L_TOPIC_BY}&nbsp;{postrow.displayed.POSTER_NAME}
            </span>

            <!-- Bouton d'édition de message -->
            <ul class="profile-icons ">
                <li>{postrow.displayed.THANK_IMG}</li>
                <li>{postrow.displayed.MULTIQUOTE_IMG}</li>
                <li>{postrow.displayed.QUOTE_IMG}</li>
                <li>{postrow.displayed.EDIT_IMG}</li>
                <li>{postrow.displayed.DELETE_IMG}</li>
                <li>{postrow.displayed.IP_IMG}</li>
            </ul>

            <!-- Conteneur du bouton like -->
            <!-- BEGIN switch_likes_active -->
            <div class="like_button">

                <!-- Bouton "j'aime" -->
                <button class="rep-button {postrow.displayed.switch_likes_active.C_VOTE_LIKE}" data-href="{postrow.displayed.switch_likes_active.U_VOTE_LIKE}" data-href-rm="{postrow.displayed.switch_likes_active.U_VOTE_RM_LIKE}">

                    <!-- Texte "j'aime" -->
                    <span class="like_text">{postrow.displayed.switch_likes_active.L_LIKE}</span>
                    <!-- Compte des "j'aime" -->
                    {postrow.displayed.switch_likes_active.COUNT_VOTE_LIKE}

                </button>
            </div>
            <!-- END switch_likes_active -->
            <!-- Fin du bouton like -->


        </div>
        <!-- Fin détails -->


        <!-- Contenu du message -->
        <div class="post_message postbody content">
            {postrow.displayed.MESSAGE}
        </div>

    </div>
    <!-- END displayed -->
    <!-- END postrow -->
    <!-- Fin du post -->

</div>
<!-- Fin du blog -->


<!----------------------------------------------->
<!-- COMMENTAIRES -------------->

<!-- Conteneur des commentaires -->
<div class="wrapped">

    <!-- Titre "commentaires" -->
    <h3>{L_COMMENTS}</h3>

    <!-- Affichage d'un commentaire -->
    <!-- BEGIN comment -->
    <!-- BEGIN displayed -->
    <div id="p{comment.displayed.U_POST_ID}" class="post--{comment.displayed.U_POST_ID} blog_comment">

        <!-- Conteneur des informations du commentaire -->
        <div class="comment_details" id="profile{comment.displayed.U_POST_ID}">
            <div class="left">
                <!-- avatar du commentaire -->
                <div class="comment_avatar">
                    {comment.displayed.POSTER_AVATAR}
                </div>

                <!-- Lien du commentaire -->
                <a href="{comment.displayed.POST_URL}" name="{comment.displayed.U_POST_ID}">Réponse de</a>&nbsp;
                <!-- Auteur du commentaire -->
                {comment.displayed.POSTER_NAME}
                <!-- En ligne -->
                {comment.displayed.L_ONLINE}

                <br />
                <!-- Date du commentaire -->
                <span>{comment.displayed.POST_DATE_NEW}</span>
            </div>

            <!-- Bouton d'édition -->
            <ul class="profile-icons">
                <li>{comment.displayed.MULTIQUOTE_IMG}</li>
                <li>{comment.displayed.QUOTE_IMG}</li>
                <li>{comment.displayed.EDIT_IMG}</li>
                <li>{comment.displayed.DELETE_IMG}</li>
                <li>{comment.displayed.IP_IMG}</li>
            </ul>


        </div>
        <!-- Fin des informations -->

        <!-- Contenu du commentaire -->
        <div class="comment_content">
            {comment.displayed.MESSAGE}
        </div>

    </div>
    <!-- END displayed -->
    <!-- END comment -->
    <!-- Fin d'un commentaire -->

    <!-- Indication "pas de commentaire -->
    <!-- BEGIN no_comment -->
    <div class="blog_comment">
        <center>{no_comment.L_NO_COMMENT}</center>
    </div>
    <!-- END no_comment -->

</div>
<!-- Fin des commentaires -->



<!----------------------------------------------->
<!-- BARRE DE GESTION -------------->


<div class="links_bar">
    <!-- Surveiller le blog -->
    <span>
        <!-- Surveiller le sujet -->
        <!-- BEGIN switch_user_logged_in -->
        <!-- BEGIN watchtopic -->
        <span class="specials_links">{S_WATCH_TOPIC}</span>
        <!-- END watchtopic -->
        <!-- END switch_user_logged_in -->

        <!-- Sujets surveillés -->
        &nbsp;<a class="specials_links" href="{U_WATCHSEARCH_JS_PLUS_MENU}">Sujets surveillés</a>
    </span>


    <!-- Pagination des commentaires -->
    <!-- BEGIN topicpagination -->
    <span class="pagination right">{PAGINATION}</span>
    <!-- END topicpagination -->
</div>


<!----------------------------------------------->
<!-- REPONSE RAPIDE -------------->

<div class="container quickreply" id="quickreply_content">
    <!-- BEGIN switch_user_logged_in -->
    {QUICK_REPLY_FORM}
    <!-- END switch_user_logged_in -->
</div>


<!----------------------------------------------->
<!-- BARRE DE GESTION -------------->


<div class="links_bar">
    <span>
        <!-- Boutons : nouveau -->
        <!-- BEGIN switch_user_authpost -->
        <a class="buttons" href="{U_POST_NEW_TOPIC}" rel="nofollow"><img class="newtopic_button" src="{POST_IMG}" class="{POST_IMG_CLASS}" alt="{L_POST_NEW_TOPIC}" /></a>&nbsp;
        <!-- END switch_user_authpost -->

        <!-- Bouton : répondre -->
        <!-- BEGIN switch_user_authreply -->
        <a class="buttons" href="{U_POST_REPLY_TOPIC}"><img class="reply_button" src="{REPLY_IMG}" class="i_reply" alt="{L_POST_REPLY_TOPIC}" /></a>
        <!-- END switch_user_authreply -->
    </span>


    <span class="right">
        <a href="{JS_AUTH_FAVOURITES}">Ajouter le sujet à ses favoris</a>
    </span>

</div>


<br/>

<!----------------------------------------------->
<!-- SAUTER VERS UN FORUM  -------------->

<form action="{S_JUMPBOX_ACTION}" method="get" onsubmit="if(document.jumpbox.f.value == -1){return false;}" class="left">
    <fieldset class="jumpbox">
        <label>{L_JUMP_TO}:&nbsp;</label>
        {S_JUMPBOX_SELECT}&nbsp;
        <input class="button2" type="submit" value="{L_GO}" />
    </fieldset>
</form>


<!----------------------------------------------->
<!-- BOUTONS DE MODERATION -------------->

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

            