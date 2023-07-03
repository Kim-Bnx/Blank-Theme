<!----------------------------------------------->
<!-- BARRE DE GESTION -------------->

<div class="links_bar">
    <!-- BEGIN switch_user_logged_in -->
    <span>
        <!-- Messages depuis la dernière visite -->
        <a id="lastvisit_posts" href="{U_SEARCH_NEW}">Messages depuis la dernière visite</a>&nbsp;•&nbsp;

        <!-- Voir ses messages -->
        <a href="{U_SEARCH_SELF}">Voir ses messages</a>&nbsp;•&nbsp;

        <!-- Messages sans réponses -->
        <a id="posts_unanswered" href="{U_SEARCH_UNANSWERED}">Message sans réponses</a>
    </span>
    <!-- END switch_user_logged_in -->


    <!-- BEGIN switch_user_logged_in -->
    <!-- Marquer les forums comme lus -->
    <a class="specials_links right" id="mark_read" href="{U_MARK_READ}" accesskey="m">Tout marquer comme lu</a>
    <!-- END switch_user_logged_in -->
</div>


<!----------------------------------------------->
<!-- CATEGORIES -------------->

<!-- Conteneur d'une catégorie -->
<!-- BEGIN catrow -->

<!-- BEGIN tablehead -->
<div class="category" id="{catrow.tablehead.ID}">

    <!-- Titre catégorie -->
    <div class="cate_title">{catrow.tablehead.L_FORUM}</div>


    <!-- Conteneur liste des forums -->
    <div class="forums">

        <!-- END tablehead -->



        <!-- BEGIN forumrow -->
        <!-- Affichage d'un forum -->
        <div class="forum row">
            <!-- Titre forum -->
            <a href="{catrow.forumrow.U_VIEWFORUM}" class="forumtitle">{catrow.forumrow.FORUM_NAME}</a>

            <div class="forum_content">

                <!-- Staut du forum : sans réponse, nouvelle réponse, vérouillé -->
                <img class="forum-img" src="{catrow.forumrow.FORUM_FOLDER_IMG}" />

                <!-- Description -->
                <div class="forum_desc">{catrow.forumrow.FORUM_DESC}</div>



                <div class="forum_avatar lastpostavatar">
                    <!-- Avatar du dernier posteur -->
                    <!-- BEGIN avatar -->
                    {catrow.forumrow.avatar.LAST_POST_AVATAR}
                    <!-- END avatar -->
                </div>

                <!-- Conteneur du du dernier message -->
                <div class="forum_lastpost lastpost">
                    <span>
                        <!-- Tire du dernier message -->
                        <!-- BEGIN switch_topic_title -->
                        <a href="{catrow.forumrow.U_LATEST_TOPIC}" title="{catrow.forumrow.LATEST_TOPIC_TITLE}"
                            class="lastpost_link">{catrow.forumrow.LATEST_TOPIC_NAME}</a><br />
                        <!-- END switch_topic_title -->

                        <!-- Date et auteur -->
                        {catrow.forumrow.USER_LAST_POST}
                    </span>
                </div>

            </div>

            <div class="forum_details">

                <!-- Liens de sous-forum -->
                <span id="subforum">{catrow.forumrow.L_LINKS}{catrow.forumrow.LINKS}</span>

                <!-- Compteur sujets et message -->
                <span class="forum_stats">{catrow.forumrow.TOPICS} {L_TOPICS}&nbsp; • &nbsp;{catrow.forumrow.POSTS}
                    {L_POSTS}</span>
            </div>

        </div>
        <!-- Fin affichage d'un forum -->
        <!-- END forumrow -->

        <!-- BEGIN tablefoot -->
    </div>
    <!-- Fin liste des forums -->


</div>
<!-- END tablefoot -->
<!-- END catrow -->
<!-- Fin du conteneur de catégorie -->


<!----------------------------------------------->
<!-- BARRE DE GESTION -------------->

<!-- BEGIN switch_on_index -->
<div class="links_bar">
    <!-- Sujets actifs du jour -->
    <a href="{U_TODAY_ACTIVE}">{L_TODAY_ACTIVE}</a> &nbsp; • &nbsp;

    <!-- Top 20 des posteurs du jour -->
    <a href="{U_TODAY_POSTERS}">{L_TODAY_POSTERS}</a> &nbsp; • &nbsp;

    <!-- Top 20 des posteurs du forum -->
    <a href="{U_OVERALL_POSTERS}">{L_OVERALL_POSTERS}</a>

    <!-- Supprimer des cookies du forum -->
    <!-- BEGIN switch_delete_cookies -->
    <a class="specials_links right" href="{switch_on_index.switch_delete_cookies.U_DELETE_COOKIES}"
        rel="nofollow">{switch_on_index.switch_delete_cookies.L_DELETE_COOKIES}</a>
    <!-- END switch_delete_cookies -->
</div>
<!-- END switch_on_index -->