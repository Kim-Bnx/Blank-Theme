<!-- Poll container -->
<div class="poll">

        <div class="head_poll">
            <!-- Poll title -->
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
                <div class="poll_vote">

                    <!-- Progression bar image -->
                    <img src="{VOTE_LCAP_IMG}" height="12" alt="" />
                    <img src="{poll_option.POLL_OPTION_IMG}" width="{poll_option.POLL_OPTION_IMG_WIDTH}" height="12" alt="{poll_option.POLL_OPTION_PERCENT}" />
                    <img src="{VOTE_RCAP_IMG}" height="12" alt="" />&nbsp;

                   
                    <!-- Vote counter for each option -->
                    <strong>{poll_option.POLL_OPTION_RESULT}</strong>&nbsp;
                    <!-- Total in percent -->
                    ({poll_option.POLL_OPTION_PERCENT})

                </div>
            <!-- END poll_option -->
            <!-- End poll option -->

        </div>

        <!-- Container : poll options -->
        <div class="poll_send">

            <!-- Voting over -->
            {L_VOTE_EXPIRE}<br />

            <!-- Total of votes -->
            {L_TOTAL_VOTES} : <strong>{TOTAL_VOTES}</strong>&nbsp;

            <!-- Cancel vote -->
            <!-- BEGIN cancel_vote -->
            <a href="{U_CANCEL_VOTE}">{L_CANCEL_VOTE}</a>
            <!-- END cancel_vote -->

            <br />

            <!-- Hide results -->
            <!-- BEGIN switch_hide_result -->
            <div id="hide_result_msg">{L_POLL_HIDE_RESULT}</div>
            <!-- END switch_hide_result -->
        </div>

    </div>
            