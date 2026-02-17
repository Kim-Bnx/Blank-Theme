<div class="main-tooltip">

  <!-- Contenu de la bulle de prévisualisation -->
  <div class="preview_content">

    <!-- Avatar -->
    <img src="{USER_AVATAR}" alt="{USER_NAME}" class="preview_avatar u-square" />

    <!-- Informations -->
    <div class="preview_infos">
      <div class="preview_infos-user">
        <!-- Pseudo -->
        <span class="preview_pseudo">{USER_NAME_COLORED}</span>
        <br />

        <!-- Rang-->
        <!-- BEGIN switch_rank_info -->
        {switch_rank_info.RANK_TITLE}
        <!-- END switch_rank_info -->
      </div>

      <!-- Image de contact -->
      <div class="preview_contacts">

        <!-- Bouton "suivre le membre" -->
        <!-- BEGIN switch_followers -->
        <button onclick="doFollowAction(this);" data-id="{CUR_USER_ID}"
          class="followBtn {C_FOLLOW} ion-android-notifications{C_FOLLOW_ICON}">
          {L_FOLLOW_TXT}
        </button>
        <!-- END switch_followers -->


        <!-- BEGIN switch_button_tooltip_PROFILE -->
        <a href="{switch_button_tooltip_PROFILE.URL}" class="button">
          Profil
        </a>
        <!-- END switch_button_tooltip_PROFILE -->

        <!-- BEGIN switch_button_tooltip_PM -->
        <a href="{switch_button_tooltip_PM.URL}" class="button">
          MP
        </a>
        <!-- END switch_button_tooltip_PM -->

        <!-- BEGIN switch_button_tooltip_MESSAGES -->
        <a href="{switch_button_tooltip_MESSAGES.URL}" class="button">
          Messages
        </a>
        <!-- END switch_button_tooltip_MESSAGES -->
      </div>
    </div>
    <!-- Fin des infos -->

  </div>
  <!-- Fin du contenu -->

</div>