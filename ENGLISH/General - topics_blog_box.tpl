<!----------------------------------------------->
<!-- BLOG LIST -------------->
<!-- BEGIN topics_blog_box -->


<!----------------------------------------------->
<!-- BLOG VIEW -------------->
<!-- BEGIN row -->
<!-- BEGIN topic -->

<div class="bloglist">

    <!-- Date container -->
    <div class="bloglist_date">
        <span class="blog_daymonth">
            <!-- Day -->
            {topics_blog_box.row.FIRST_POST_DMY_VALUE0}.
            <!-- Month -->
            {topics_blog_box.row.FIRST_POST_DMY_VALUE1}
        </span><br />
        <!-- Year -->
        <span class="blog_year">{topics_blog_box.row.FIRST_POST_DMY_VALUE2}</span>

    </div>

    <!-- Information container -->
    <div class="bloglist_infos">
        <div>

            <!-- Blog image -->
            <div class="mini_img left"><img src="{topics_blog_box.row.TOPIC_FOLDER_IMG}" /></div>

            <!-- Recent post icon -->
            {topics_blog_box.row.NEWEST_POST_IMG}
            <!-- "You have posted in this topic" icon -->
            {topics_blog_box.row.PARTICIPATE_POST_IMG}&nbsp;
            {topics_blog_box.row.TOPIC_TYPE}

           <!-- Blog title -->
            <a class="topictitle" href="{topics_blog_box.row.U_VIEW_TOPIC}">{topics_blog_box.row.TOPIC_TITLE}</a><br />
            <!-- Author -->
            {topics_blog_box.row.L_BY} <strong>{topics_blog_box.row.TOPIC_AUTHOR}</strong>

        </div>

        <!-- Comments and views -->
        <div class="bloglist_details">
            {topics_blog_box.row.REPLIES} <a href="{topics_blog_box.row.U_VIEW_TOPIC}#comments">{L_COMMENTS}</a><br />
            {topics_blog_box.row.VIEWS} {L_VIEWS}
        </div>

    </div>

   
    <div class="bloglist_resum">
       <!-- Blog description -->
        <!-- BEGIN switch_description -->
        <span class="specials_links">{topics_blog_box.row.topic.switch_description.TOPIC_DESCRIPTION}</span><br /><br />
        <!-- END switch_description -->

       <!-- Blog contents summary -->
        <div>{topics_blog_box.row.FIRST_POST_TEXT}</div>

    </div>


</div>
<!-- END topic -->
<!-- END row -->
<!-- End blog view -->

<!-- "No topic" notification -->
<!-- BEGIN no_topics -->
<center><strong>{topics_blog_box.row.L_NO_TOPICS}</strong></center>
<!-- END no_topics -->


<!-- END topics_blog_box -->
<!-- Blog list end -->



<!-- BEGIN multi_selection -->
<script type="text/javascript">
    function check_uncheck_main_ {
        topics_blog_box.row.header_table.BOX_ID
    }() {
        alert('MAIN');

        var all_checked = true;

        for (i = 0;
            (i < document. {
                topics_blog_box.FORMNAME
            }.elements.length) && all_checked; i++) {
            if (document. {
                    topics_blog_box.FORMNAME
                }.elements[i].name == '{topics_blog_box.FIELDNAME}[]{topics_blog_box.row.header_table.BOX_ID}') {
                all_checked = document. {
                    topics_blog_box.FORMNAME
                }.elements[i].checked;
            }
        }

        document. {
            topics_blog_box.FORMNAME
        }.all_mark_ {
            topics_blog_box.row.header_table.BOX_ID
        }.checked = all_checked;
    }

    function check_uncheck_all_ {
        topics_blog_box.row.header_table.BOX_ID
    }() {
        alert('ALL');

        for (i = 0; i < document. {
                topics_blog_box.FORMNAME
            }.length; i++) {
            if (document. {
                    topics_blog_box.FORMNAME
                }.elements[i].name == '{topics_blog_box.FIELDNAME}[]{topics_blog_box.row.header_table.BOX_ID}') {
                document. {
                    topics_blog_box.FORMNAME
                }.elements[i].checked = document. {
                    topics_blog_box.FORMNAME
                }.all_mark_ {
                    topics_blog_box.row.header_table.BOX_ID
                }.checked;
            }
        }
    }

</script>
<!-- END multi_selection -->

<!-- BEGIN switch_image_resize -->
<script type="text/javascript">
    //<![CDATA[
    $(resize_images({
        'selector': '.blog_message',
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

            