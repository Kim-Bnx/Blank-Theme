<!-- SOUS-FORUM  --------------------->
<!-- (template : index_box) ---------->
{BOARD_INDEX}

<br />

<!-- LIENS DE NAVIGATION ------------->
<!-- (Catégorie > Forum > Sous-fo) --->
<span class="navigation_links tag">{NAV_CAT_DESC} </span>


<!------------------------------------>
<!-- BARRE D'ACTIONS ----------------->
<div class="page-actions">
  <!-- Boutons : nouveau, répondre, verrouillé -->
  <!-- BEGIN switch_user_authpost -->
  <a class="button primary" href="{U_POST_NEW_TOPIC}" title="{T_POST_NEW_TOPIC}">Ouvrir un sujet</a>
  <!-- END switch_user_authpost -->

  <div class="buttons">
    <!-- Bouton de modération du sujet -->
    <div id="moderation_data" hidden>{S_AUTH_LIST}</div><!--Ne pas supprimer-->
    <div id="moderation_link" class=" button"></div>

    <!-- Bouton pour trier les sujets -->
    <!-- BEGIN switch_sort_options -->
    <div id="sort-topics">
      <span id="sort-btn" class="button"><i class="bi bi-filter"></i> Trier les sujets</span>

      <!-- Menu d'option de tri -->
      <form method="post" class="sort-form">
        <h3>{switch_sort_options.L_SORT_BY}</h3>
        <p>
          <label><input type="radio" name="sort_order" id="sort_order_d" value="0" {switch_sort_options.DESC_CHECKED} />
            {switch_sort_options.L_DESC}</label>
          <br />
          <label><input type="radio" name="sort_order" id="sort_order_a" value="1" {switch_sort_options.ASC_CHECKED} />
            {switch_sort_options.L_ASC}</label>
        </p>

        <select name="sort_method">{switch_sort_options.S_OPTIONS}</select>&nbsp;
        <input type="submit" value="{switch_sort_options.L_SORT}">

      </form>
    </div>
    <!-- END switch_sort_options -->
    <!-- Fin du bouton -->
  </div>

</div>
<!-- Fin barre d'actions -->


<!------------------------------------>
<!-- CONTENEUR DES SUJETS ------------>
<div class="container">

  <!-- Titre liste des sujets -->
  <h1 class="page-title">{FORUM_NAME}</h1>

  <!-- Description du forum -->
  <!-- BEGIN switch_forum_desc -->
  <div class="forum-page_desc">{SINGLE_FORUM_DESC}</div>
  <!-- END switch_forum_desc -->

  <!-- Liste des sujets (template: topics_list_box) -->
  {TOPICS_LIST_BOX}

  <!-- Utilisateurs parcourant ce forum -->
  <div id="users_here">{LOGGED_IN_USER_LIST}</div>
</div>


<!------------------------------------>
<!-- BARRE D'ACTIONS ----------------->
<div class="page-actions">

  <div class="buttons">
    <!-- Lien Surveiller ce forum -->
    <!-- BEGIN switch_user_logged_in -->
    <span class="button">{S_WATCH_FORUM}</span>
    <!-- END switch_user_logged_in -->

    <!-- BEGIN switch_user_logged_in -->
    <a href="{U_MARK_READ}" class="button">{L_MARK_TOPICS_READ}</a>
    <!-- END switch_user_logged_in -->
  </div>

  <!-- Pagination -->
  <div class="pagination">{PAGINATION}</div>

</div>


<!-- Modification de texte par défaut -->
<!-- "Actuellement sur ce forum" et "Modérer ce forum" -->
<script type="text/javascript">
  $("#users_here").html($("#users_here").html().replace("Utilisateurs parcourant actuellement ce forum", "Actuellement sur ce forum"));
  $("#moderation_data").html($("#moderation_data").html().replace("modérer ce forum", "Modérer les sujets"));
  $('#moderation_data a').appendTo('#moderation_link');
</script>

<!-- BEGIN switch_sort_options -->
<script type="text/javascript">
  //<![CDATA[
  $(document).ready(function () {
    var sort_btn = $('#sort-btn');
    sort_btn.on('click', function () {
      sort_btn.toggleClass('expanded');
    });

    document.onclick = function (e) {
      if ($(e.target).parents('#sort-topics').length == 0) {
        document.getElementById('sort-btn').classList.remove('expanded');
      }
    };
  });
  //]]>
</script>
<!-- END switch_sort_options -->