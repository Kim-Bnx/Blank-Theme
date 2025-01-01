<br />

 

<!----------------------------------------------->
<!-- LIENS DE NAVIGATION -------------->

<div class="navigation_links">

    <!-- Chaîne de lien : Catégorie > Forum > Sous-fo -->
    <span class="navigation_chain">
        {NAV_CAT_DESC}
    </span>

</div>

<!----------------------------------------------->
<!-- BARRE DE GESTION -------------->

<div class="links_bar">
        <!-- Boutons : nouveau -->
        <!-- BEGIN switch_user_authpost -->
        <a class="buttons" href="{U_POST_NEW_TOPIC}" rel="nofollow" title="{T_POST_NEW_TOPIC}">{L_POST_NEW_TOPIC}</a>&nbsp;
        <!-- END switch_user_authpost -->

        <!-- Bouton : répondre -->
        <!-- BEGIN switch_user_authreply -->
        <a class="buttons" href="{U_POST_REPLY_TOPIC}" title="{T_POST_REPLY_TOPIC}">{L_POST_REPLY_TOPIC}</a>
        <!-- END switch_user_authreply -->
  
        <!-- Pagination -->
        <span class="pagination right">
            {PAGINATION}
        </span>
</div>

<!----------------------------------------------->
<!-- MESSAGE -------------->


<!-- Contenenur des messages -->
<div class="container">

    <!-- Titre du poste -->
    <h1 class="page-title">{TOPIC_TITLE}</h1>
  
    <!-- Liste des participants du sujet -->
    {POSTERS_LIST}

    <!-- Sondage (template : viewtopic_poll_ballot /// viewtopic_poll_result) -->
    {POLL_DISPLAY}


    <!-- Affichage d'un message -->
    <!-- BEGIN postrow -->
    <!-- BEGIN displayed -->
    <div id="{postrow.displayed.U_POST_ID}"></div>
    <div class="post post_row post--{postrow.displayed.U_POST_ID}" id="p{postrow.displayed.U_POST_ID}">

        <!-- Conteneur informations du message-->
        <div class="post_details">

            <span class="post_date">
                <!-- Lien d'ancre vers le message -->
                <a href="{postrow.displayed.POST_URL}">{postrow.displayed.POST_SUBJECT}</a>
			&nbsp;
                <!-- Date du message -->
                <time>{postrow.displayed.POST_DATE_NEW}</time>
            </span>
              
                <!-- Boutons d'édition de message -->
                <ul class="profile-icons">
                    <li class="btn-quote">
                        <a href="{postrow.displayed.QUOTE_URL}">
                            Citer
                        </a>
                    </li>
                    <li class="btn-edit">
                        <a href="{postrow.displayed.EDIT_URL}">
                            Editer
                        </a>
                    </li>
                    <li class="btn-delete">
                        <a href="{postrow.displayed.DELETE_URL}">
                            Supprimer
                        </a>
                    </li>
                    <li class="btn-ip">
                        <a href="{postrow.displayed.IP_URL}">
                            IP
                        </a>
                    </li>
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


        <!-- Colonne de profil -->
        <div class="post_profile" id="profile{postrow.displayed.U_POST_ID}">

            <center>
                <!-- Pseudo -->
                <span class="post_pseudo">{postrow.displayed.POSTER_NAME}</span><br />

                <!-- Rang -->
                <span class="post_rank">
                    {postrow.displayed.POSTER_RANK_NEW} <!-- Textuel -->
                    {postrow.displayed.RANK_IMAGE} <!-- Image -->
                </span><br />
            </center>

            <!-- Avatar -->
            <div class="post_avatar">
                {postrow.displayed.POSTER_AVATAR}
            </div>

            <br />

            <!-- En ligne -->
            <center>
                <div class="presence {postrow.displayed.ONLINE_IMG_NEW}">
                	En ligne
                </div>
            </center>

            <br />

            <div class="post_userinfo">
               
               <!-- Champs de profil -->
                <!-- BEGIN profile_field -->
                    <div class="user_field">
                        <!-- Label d'un champs de profil -->
                        <span class="field_label">{postrow.displayed.profile_field.LABEL}</span>
                      
                        <!-- Contenu d'un champs de profil -->
                        <span class="field_content">{postrow.displayed.profile_field.CONTENT}</span>
                      
			<!-- Séparateur entre champs de profil -->                      
                        <span class="field_separator">{postrow.displayed.profile_field.SEPARATOR}</span>
                    </div>
                <!-- END profile_field -->
                <!-- Fin de champs de profil -->

                <!-- Récompenses -->
                <div {postrow.displayed.AWARDS_SHOW} id="list_awards">
                	{postrow.displayed.AWARDS}
                </div>
                <div class="award_more"></div>

                <!-- Champs de profil de la feuille de personnage -->
                {postrow.displayed.POSTER_RPG}

            </div>

            <br />

            <!-- Lien de contact -->
            <div class="profil_contact">
                {postrow.displayed.PROFILE_IMG} &nbsp; <!-- Profil -->
                {postrow.displayed.PM_IMG} &nbsp; <!-- MP -->
                <!-- Autre contact-->
                <!-- BEGIN contact_field -->
                {postrow.displayed.contact_field.CONTENT} <!-- Autre champs de contact -->
                <!-- END contact_field -->
            </div>

        </div>
        <!-- Fin colonne profil -->


        <!-- Contenu du message -->
        <div class="post_message postbody content">
            <div>{postrow.displayed.MESSAGE}</div>

            <!-- Signature -->
            <!-- BEGIN switch_signature -->
            <div class="signature_div" id="sig{postrow.displayed.U_POST_ID}">{postrow.displayed.SIGNATURE_NEW}</div>
            <!-- END switch_signature -->

        </div>
        <!-- Fin du contenu du message -->
    </div>

    <!-- END displayed -->
    <!-- END postrow -->
    <!-- Fin affichage d'un message -->

</div>
<!-- Fin des messages -->


<!----------------------------------------------->
<!-- BARRE DE GESTION -------------->


<div class="links_bar">
  
        <!-- Lien "surveiller le sujet" -->
        <!-- BEGIN switch_user_logged_in -->
        <!-- BEGIN watchtopic -->
        <span class="specials_links">{S_WATCH_TOPIC}</span>
        <!-- END watchtopic -->
        <!-- END switch_user_logged_in -->
        
        <!-- BEGIN switch_plus_menu -->
        <!-- Lien "sujets surveillés" -->
        &nbsp;<a class="specials_links" href="{U_WATCHSEARCH_JS_PLUS_MENU}">Sujets surveillés</a>
        <!-- END switch_plus_menu -->

    <!-- Pagination -->
    <!-- BEGIN topicpagination -->
    <span class="pagination right">{PAGINATION}</span>
    <!-- END topicpagination -->

</div>


<!----------------------------------------------->
<!-- REGLES DE LA CATEGORIE (si activé) -------------->

<!-- BEGIN switch_forum_rules -->
<div class="panel" id="forum_rules">

    <!-- Titre "règlement" -->
    <div class="h3">{L_FORUM_RULES}</div>

    <!-- Règlement -->
    <div class="postbody">
        <!-- Image du règlement -->
        <!-- BEGIN switch_forum_rule_image -->
        <img class="left logo" src="{RULE_IMG_URL}" alt="" />
        <!-- END switch_forum_rule_image -->

        <!-- Contenu -->
        {RULE_MSG}
    </div>

</div>
<!-- END switch_forum_rules -->


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
        <!-- Boutons : nouveau -->
        <!-- BEGIN switch_user_authpost -->
        <a class="buttons" href="{U_POST_NEW_TOPIC}" rel="nofollow" title="{T_POST_NEW_TOPIC}">{L_POST_NEW_TOPIC}</a>&nbsp;
        <!-- END switch_user_authpost -->

        <!-- Bouton : répondre -->
        <!-- BEGIN switch_user_authreply -->
        <a class="buttons" href="{U_POST_REPLY_TOPIC}" title="{T_POST_REPLY_TOPIC}">{L_POST_REPLY_TOPIC}</a>
        <!-- END switch_user_authreply -->

    <!-- BEGIN switch_plus_menu -->
    <span class="right">
        <a href="{U_FAVOURITE_JS_PLUS_MENU}">Ajouter le sujet à ses favoris</a>
    </span>
  <!-- END switch_plus_menu -->

</div>

<br/>

<!----------------------------------------------->
<!-- SAUTER VERS UN AUTRE FORUM -------------->


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

<!-- Script image recadré -->
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

    //]]>

</script>

            