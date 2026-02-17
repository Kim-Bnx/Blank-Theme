<!------------------------------------>
<!-- BARRE D'ACTIONS ----------------->

<form action="{S_MODE_ACTION}" method="get" class="page-actions">
  <div class="form-input"><label>{L_USER_SELECT}</label> <input type="text" name="username" size="20"
      value="{L_USER_SELECT_VALUE}" /></div>
  <div class="form-input"><label>{L_SELECT_SORT_METHOD}</label> {S_MODE_SELECT}</div>
  <div class="form-input"><label>{L_ORDER}</label> {S_ORDER_SELECT}</div>
  {S_HIDDEN_SID}
  <input class="primary" type="submit" name="submit" value="Chercher" />
</form>


<!------------------------------------>
<!-- LISTE DES MEMBRES --------------->

<div class="container">

  <!-- Titre de la liste des membres -->
  <h1 class="page-title">{PAGE_TITLE}</h1>

  <!-- Liste des membres -->
  <div class="userlist">

    <!-- Affichage d'un profil -->
    <!-- BEGIN memberrow -->
    <div class="userlist_profil">

      <!-- Avatar -->
      <div class="userlist_avatar u-img-cover">
        {memberrow.AVATAR_IMG}
      </div>

      <!-- Conteneurs des informations de membre -->
      <div class="userlist_infos">

        <div class="userlist_infos-user">
          <!-- Pseudo -->
          <a href="{memberrow.U_VIEWPROFILE}" class="userlist_pseudo">{memberrow.USERNAME}</a>
          <br />

          <!-- Champs de profil -->
          <label>{L_JOINED}:</label> {memberrow.JOINED}<br />
          <label>{L_VISITED}:</label> {memberrow.LASTVISIT}<br />
          <label>{L_POSTS}:</label> {memberrow.POSTS}<br />
        </div>

        <!-- Bouton MP -->
        <div class="userlist_contact">
          {memberrow.PM_IMG}
        </div>
      </div>

    </div>
    <!-- END memberrow -->
    <!-- Fin d'un profil -->

  </div>
  <!-- Fin liste des membres -->

  <!-- Pagination -->
  <center>
    <!-- BEGIN switch_pagination -->
    <div class="pagination">
      {PAGINATION}
    </div>
    <!-- END switch_pagination -->
  </center>

</div>