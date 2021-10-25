<!-- Conteneur du sondage -->
<div class="poll">

        <div class="head_poll">
            <!-- Titre du sondage -->
            <h2>{POLL_QUESTION}</h2>

            <!-- Fermer le sondage -->
            <span class="right">
                {CLOSE_POLL}
            </span>
        </div>


        <!-- Liste des choix de vote -->
        <div class="poll_list">

           <!-- Option -->
            <!-- BEGIN poll_option -->
            
                <!-- Nom de l'option -->
                <div class="poll_option">{poll_option.POLL_OPTION_CAPTION}</div>

                <!-- Case à cocher -->
                <div class="poll_vote">

                    <!-- Images de barre de progression -->
                    <img src="{VOTE_LCAP_IMG}" height="12" alt="" />
                    <img src="{poll_option.POLL_OPTION_IMG}" width="{poll_option.POLL_OPTION_IMG_WIDTH}" height="12" alt="{poll_option.POLL_OPTION_PERCENT}" />
                    <img src="{VOTE_RCAP_IMG}" height="12" alt="" />&nbsp;

                   
                    <!-- Compte des votes d'une option -->
                    <strong>{poll_option.POLL_OPTION_RESULT}</strong>&nbsp;
                    <!-- Total en pourcentage -->
                    ({poll_option.POLL_OPTION_PERCENT})

                </div>
            <!-- END poll_option -->
            <!-- Fin option -->

        </div>

        <!-- Conteneur : options du sondage -->
        <div class="poll_send">

            <!-- Vote terminé -->
            {L_VOTE_EXPIRE}<br />

            <!-- Résultat total des votes -->
            {L_TOTAL_VOTES} : <strong>{TOTAL_VOTES}</strong>&nbsp;

            <!-- Annuler vote -->
            <!-- BEGIN cancel_vote -->
            <a href="{U_CANCEL_VOTE}">{L_CANCEL_VOTE}</a>
            <!-- END cancel_vote -->

            <br />

            <!-- Cacher les résultats -->
            <!-- BEGIN switch_hide_result -->
            <div id="hide_result_msg">{L_POLL_HIDE_RESULT}</div>
            <!-- END switch_hide_result -->
        </div>

    </div>
            