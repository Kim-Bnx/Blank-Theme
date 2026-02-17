<!-- Boucle des catégories -->
<!-- BEGIN catrow -->

<!- Conteneur d'une catégorie -->
  <!-- BEGIN tablehead -->
  <div class="container" id="{catrow.tablehead.ID}">

    <!-- Titre catégorie -->
    <div class="cate_title">{catrow.tablehead.L_FORUM}</div>


    <!-- Conteneur liste des forums -->
    <div class="forums">

      <!-- END tablehead -->

      <!-- Boucle des forums -->
      <!-- BEGIN forumrow -->

      <!-- Conteneur d'un forum -->
      <div class="forum row {catrow.forumrow.FOLDER_CLASSNAME}">
        <!-- Titre forum -->
        <a href="{catrow.forumrow.U_VIEWFORUM}" class="forumtitle">{catrow.forumrow.FORUM_NAME}</a>

        <!-- Informations principale d'un forum -->
        <div class="forum_content">
          <!-- Staut du forum : sans réponse, nouvelle réponse, vérouillé -->
          <img class="forum-img" src="{catrow.forumrow.FORUM_FOLDER_IMG}" />

          <!-- Description -->
          <div class="forum_desc">{catrow.forumrow.FORUM_DESC}</div>

          <!-- Avatar du dernier posteur -->
          <div class="forum_avatar lastpostavatar u-img-cover">
            <!-- BEGIN avatar -->
            {catrow.forumrow.avatar.LAST_POST_AVATAR}
            <!-- END avatar -->
          </div>

          <!-- Informations du dernier message -->
          <div class="forum_lastpost lastpost u-img-cover">
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
        <!-- Fin du conteneur -->

        <!-- Sous-forum et statistique -->
        <div class="forum_details">
          <!-- Liens de sous-forum -->
          <span class="forum_sub">{catrow.forumrow.LINKS}</span>
          <!-- Compteur sujets et message -->
          <span class="forum_stats">{catrow.forumrow.TOPICS} {L_TOPICS}&nbsp; • &nbsp;{catrow.forumrow.POSTS}
            {L_POSTS}</span>
        </div>

      </div>
      <!-- Fin du conteneur d'un forum -->

      <!-- END forumrow -->
      <!-- BEGIN tablefoot -->
      <!-- Fin de la boucle des forums -->
    </div>
    <!-- Fin de la liste des forums -->


  </div>
  <!-- END tablefoot -->
  <!-- END catrow -->
  <!-- Fin de la boucle des catégories -->