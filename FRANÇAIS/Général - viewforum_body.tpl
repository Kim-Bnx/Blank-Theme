<!-- Affichage des sous forums (template : index_box) -->
{BOARD_INDEX}
<br />


<!----------------------------------------------->
<!-- LIEN DE NAVIGATION -------------->

<div class="navigation_links">

    <!-- Chaîne de lien : Catégorie > Forum > Sous-fo -->
    <span class="navigation_chain">
        {NAV_CAT_DESC}
    </span>

    <!-- Pagination -->
    <span class="right pagination page-topic">
        {PAGINATION}
    </span>

</div>


<!----------------------------------------------->
<!-- BARRE DE GESTION -------------->

<div class="links_bar">

    <!-- Boutons : nouveau, répondre, verrouillé -->
    <!-- BEGIN switch_user_authpost -->
        <a class="buttons" href="{U_POST_NEW_TOPIC}" accesskey="n" rel="nofollow"><img class="newtopic_button" src="{POST_IMG}" class="{POST_IMG_ID}" alt="{L_POST_NEW_TOPIC}" /></a>
    <!-- END switch_user_authpost -->

    <!-- Liens : Surveiller ce forum -- Sujets surveillés -->
    <!-- BEGIN switch_user_logged_in -->
    <span class="right">
        {S_WATCH_FORUM} • <a href="{U_WATCHSEARCH_JS_PLUS_MENU}">Sujets surveillés</a>
    </span>
    <!-- END switch_user_logged_in -->

</div>


<!----------------------------------------------->
<!-- LISTE DES SUJETS -------------->
<!--(template: topics_list_box) -->

<div class="container">

    <!-- Titre liste des sujets -->
    <h1 class="page-title">{FORUM_NAME}</h1>

   <!-- Liste des sujets -->
    {TOPICS_LIST_BOX}
</div>


<!----------------------------------------------->
<!-- BARRE DE GESTION -------------->

<div class="links_bar">

    <!-- Bouton : nouveau -->
    <!-- BEGIN switch_user_authpost -->
        <a class="buttons" href="{U_POST_NEW_TOPIC}" accesskey="n" rel="nofollow"><img class="newtopic_button" src="{POST_IMG}" class="{POST_IMG_ID}" alt="{L_POST_NEW_TOPIC}" /></a>
    <!-- END switch_user_authpost -->

    <!-- Lien "marquer comme lu" -->
    <!-- BEGIN switch_user_logged_in -->
    <span class="right">
        <a href="{U_MARK_READ}">{L_MARK_TOPICS_READ}</a>
    </span>
    <!-- END switch_user_logged_in -->

</div>



<!-- Conteneur : utilisateurs et pagination -->
<div class="navigation_links">

    <!-- Utilisateurs parcourant ce forum -->
    <span id="users_here">
        {LOGGED_IN_USER_LIST}
    </span>
    <!-- Modification de la phrase "utilisateur parcourant ce forum" -->
    <script type="text/javascript">
        document.getElementById('users_here').innerHTML = document.getElementById('users_here').innerHTML.replace(/Utilisateurs parcourant actuellement ce forum/, "Actuellement sur ce forum");</script>


    <!-- Pagination -->
    <span class="right pagination page-topic">
        {PAGINATION}
    </span>
</div>

<!----------------------------------------------->
<!---------------->

<br />
<div class="separator"></div>
<br />


<!----------------------------------------------->
<!-- SAUTER VERS UN FORUM -------------->

<div class="right">
    <form action="{S_JUMPBOX_ACTION}" method="get" name="jumpbox" onsubmit="if(document.jumpbox.f.value == -1){return false;}">
        <fieldset class="vf_jumpbox">
            <label>{L_JUMP_TO}:</label><br />
            {S_JUMPBOX_SELECT} &nbsp;
            <input class="button2" type="submit" value="{L_GO}" />
        </fieldset>
    </form>
</div>


<!----------------------------------------------->
<!-- LIENS UTILES -------------->

<a href="{U_EGOSEARCH_JS_PLUS_MENU}">Voir ses messages</a><br />
<a href="{U_NEWPOSTS_JS_PLUS_MENU}">Nouveaux messages depuis la dernière visite</a><br />
<a href="{U_UNANSWERED_JS_PLUS_MENU}">Messages sans réponses</a>

<br /><br />

<!----------------------------------------------->
<!-- OUTILS DE MODERATION ------------>
<div id="moderation_forum_tools">
  {S_AUTH_LIST}
</div>

<!-- Changement de texte du lien "modérer ce forum" -->
<script type="text/javascript">
document.getElementById('moderation_forum_tools').innerHTML = document.getElementById('moderation_forum_tools').innerHTML.replace(/modérer ce forum/, "Modérer les sujets du forum");</script>




<br />
<div class="clear"></div>

            