<br />
<div class="container">
    <h1 class="page-title">{L_SEARCH_MATCHES}</h1>
    <!-- BEGIN searchresults -->
    <div class="post_search">
      
        <!-- Information du sujet -->
        <div class="postsearch_infos">
            <span>{L_TOPIC}: <strong><a class="postdetails" href="{searchresults.U_TOPIC}">{searchresults.TOPIC_TITLE}</a></strong></span><br />
            <span>{searchresults.L_TOPIC_BY} {searchresults.POSTER_NAME}</span><br />
            <span>{searchresults.L_TOPIC_ON} {searchresults.POST_DATE}</span>
            <hr />
            <span>{L_FORUM}: <strong><a class="postdetails" href="{searchresults.U_FORUM}">{searchresults.FORUM_NAME}</a></strong></span><br />
            <span>{L_REPLIES}: <strong>{searchresults.TOPIC_REPLIES}</strong></span><br />
            <span>{L_VIEWS}: <strong>{searchresults.TOPIC_VIEWS}</strong></span><br />
        </div>

        <!-- Contenu du message -->
        <div class="postsearch_content">
            <h3><a href="{searchresults.U_POST}">{searchresults.TOPIC_TITLE}</a></h3>
            {searchresults.MESSAGE}
        </div>
    </div>
    <!-- END searchresults -->

    <p class="pagination">{PAGINATION}</p>
</div>

{JUMPBOX}




<!-- BEGIN switch_image_resize -->
<script type="text/javascript">
    //<![CDATA[
    $(resize_images({
        'selector': '.postbody',
        'max_width': {
            switch_image_resize.IMG_RESIZE_WIDTH
        },
        'max_height': {
            switch_image_resize.IMG_RESIZE_HEIGHT
        }
    }));
    //]]>

</script>
<!-- END switch_image_resize -->
