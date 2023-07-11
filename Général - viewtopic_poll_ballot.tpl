<form method="post" action="{S_POLL_ACTION}">
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

            <!-- Nom d'une option -->
            <div class="poll_option">{poll_option.POLL_OPTION_CAPTION}</div>

            <!-- Case à cocher -->
            <div class="poll_vote"><input type="{poll_option.POLL_TYPE_BUTTON}" name="vote_id[]" value="{poll_option.POLL_OPTION_ID}" /></div>
            <!-- END poll_option -->
            <!-- Fin d'une option -->

        </div>

        <!-- Conteneur : options du sondage -->
        <div class="poll_send">
            <!-- Envoyer son vote -->
            <input type="submit" name="submit" value="{L_SUBMIT_VOTE}" class="button1" />

            <!-- Voir les résultats -->
            &nbsp;&nbsp;<a href="{U_VIEW_RESULTS}">{L_VIEW_RESULTS}</a>

            <br /><br />
          
            <!-- Mention "sondage publique" -->
            <!-- BEGIN warning_public_votes -->
            <i>{warning_public_votes.L_WARNING_PUBLIC_VOTES}</i>
            <br/>
            <!-- END warning_public_votes -->
          
            <!-- Sondage terminé -->
            {L_VOTE_EXPIRE}
        </div>

</div>
</form>

            