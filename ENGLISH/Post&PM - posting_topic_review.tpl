<div class="wrapped">

    <!-- Title for "topic review" -->
    <!-- BEGIN switch_inline_mode -->
    <div class="h3">{L_TOPIC_REVIEW}</div>
    <!-- END switch_inline_mode -->

    <!-- Simplified post view -->
    <!-- BEGIN postrow -->
    <!-- BEGIN displayed -->
    <a name="{postrow.displayed.POST_ID}"></a>
    <div class="panel {postrow.displayed.displayed.ROW_CLASS}">

        <!-- Contents -->
        <div class="postbody">
            <!-- By - author - on - date -->
            <span> {postrow.displayed.L_TOPIC_BY} {postrow.displayed.POSTER_NAME} {postrow.displayed.L_TOPIC_ON} {postrow.displayed.POST_DATE}</span>

            <!-- Message -->
            <div class="content">{postrow.displayed.MESSAGE}</div>
        </div>

        <div class="clear"></div>
    </div>
    <!-- END displayed -->
    <!-- BEGIN hidden -->
    <div class="post">
        <p style="text-align:center">{postrow.hidden.MESSAGE}</p>
    </div>
    <!-- END hidden -->
    <!-- END postrow -->
    <!-- End of post view -->


</div>
<br />

            