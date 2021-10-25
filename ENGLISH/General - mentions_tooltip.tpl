<div class="main-tooltip">

   <!-- Preview bubble content -->
    <div class="preview_content">

        <!-- Avatar -->
        <div class="preview_avatar"><img src="{USER_AVATAR}" alt="{USER_NAME}" /></div>

       <!-- Informations -->
        <div class="preview_infos">
           <!-- Pseudo -->
            <span class="preview_pseudo">{USER_NAME_COLORED}</span>
          <br />
            
            <!-- Rank-->
            <!-- BEGIN switch_rank_info -->
            {switch_rank_info.L_RANK}: {switch_rank_info.RANK_TITLE}<br />
            <!-- END switch_rank_info -->
            
            <!-- Posts -->
            {L_POSTS}: <b>{POSTS}</b>

           <!-- Contact images -->
            <div class="preview_contacts right">
                <!-- BEGIN switch_button_tooltip_PROFILE -->
                <a href="{switch_button_tooltip_PROFILE.URL}" title="{switch_button_tooltip_PROFILE.LANG}">
                    <img src="{switch_button_tooltip_PROFILE.IMAGE}" alt="{switch_button_tooltip_PROFILE.LANG}" />
                </a>
                <!-- END switch_button_tooltip_PROFILE -->

                <!-- BEGIN switch_button_tooltip_PM -->
                <a href="{switch_button_tooltip_PM.URL}" title="{switch_button_tooltip_PM.LANG}">
                    <img src="{switch_button_tooltip_PM.IMAGE}" alt="{switch_button_tooltip_PM.LANG}" />
                </a>
                <!-- END switch_button_tooltip_PM -->

                <!-- BEGIN switch_button_tooltip_MESSAGES -->
                <a href="{switch_button_tooltip_MESSAGES.URL}" rel="nofollow" title="{switch_button_tooltip_MESSAGES.LANG}">
                    <img src="{switch_button_tooltip_MESSAGES.IMAGE}" alt="{switch_button_tooltip_MESSAGES.LANG}" />
                </a>
                <!-- END switch_button_tooltip_MESSAGES -->
            </div>

        </div>
        <!-- End of informations -->

    </div>
    <!-- Fin of content -->

</div>
            