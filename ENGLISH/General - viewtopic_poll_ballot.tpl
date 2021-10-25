<form method="post" action="{S_POLL_ACTION}">
<!-- Poll container -->
<div class="poll">

        <div class="head_poll">
            <!-- Survey title -->
            <h2>{POLL_QUESTION}</h2>

            <!-- Close poll -->
            <span class="right">
                {CLOSE_POLL}
            </span>

        </div>

        <!-- Poll options list -->
        <div class="poll_list">
            <!-- Option -->
            <!-- BEGIN poll_option -->

            <!-- Option name -->
            <div class="poll_option">{poll_option.POLL_OPTION_CAPTION}</div>

            <!-- Checkbox -->
            <div class="poll_vote"><input type="{poll_option.POLL_TYPE_BUTTON}" name="vote_id[]" value="{poll_option.POLL_OPTION_ID}" /></div>
            <!-- END poll_option -->
            <!-- End of poll option -->

        </div>

        <!-- Container: poll options -->
        <div class="poll_send">
            <!-- Submit vote -->
            <input type="submit" name="submit" value="{L_SUBMIT_VOTE}" class="button1" />

            <!-- View results -->
            &nbsp;&nbsp;<a href="{U_VIEW_RESULTS}">{L_VIEW_RESULTS}</a>

            <br />
            <!-- Poll over -->
            {L_VOTE_EXPIRE}
        </div>

</div>
</form>

            