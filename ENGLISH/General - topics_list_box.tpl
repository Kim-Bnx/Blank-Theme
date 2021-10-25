<!----------------------------------------------->
<!-- TOPICS LIST -------------->
<!-- BEGIN topics_list_box -->


<!----------------------------------------------->
<!-- TOPIC VIEW -------------->
<!-- BEGIN row -->
<!-- BEGIN topic -->


<!-- Topic container -->
<div class="topicslist_row" <!-- BEGIN line_sticky --> style="margin-top:5px;"<!-- END line_sticky -->>

    <!-- Topic image -->
    <div class="topicslist-img">
        <img src="{topics_list_box.row.TOPIC_FOLDER_IMG}" />
    </div>


    <div class="topicslist_infos" {topics_list_box.row.ICON}>

        <!-- Topic selection 
                (useful only for moderating, allows for selecting topics [checkbox])-->
        <!-- BEGIN single_selection -->
        <input type="radio" name="{topics_list_box.FIELDNAME}" value="{topics_list_box.row.FID}" {topics_list_box.row.L_SELECT} />
        <!-- END single_selection -->
      
      	<!-- Post icon -->
     	<span class="topic_msgicon"></span>

        <!-- Topic type label: announcement, note, ... -->
        <span class="topic-type">{topics_list_box.row.TOPIC_TYPE}</span>

        <!-- Topic title -->
        <a class="topictitle" href="{topics_list_box.row.U_VIEW_TOPIC}">{topics_list_box.row.TOPIC_TITLE}</a>&nbsp;
      
        <!-- "You have posted in this topic" icon -->
        {topics_list_box.row.PARTICIPATE_POST_IMG}
      
        <br />
      
        <span class="topic-author">
            {topics_list_box.row.L_BY}&nbsp;
            <!-- "by" indicator -->
            {topics_list_box.row.TOPIC_AUTHOR}
            <!-- Author -->
        </span>&nbsp;
      
      <!-- Topic pagination -->
        <span class="topicslist-pagination">
            {topics_list_box.row.GOTO_PAGE_NEW}
            <!-- BEGIN nav_tree -->
            {topics_list_box.row.TOPIC_NAV_TREE_NEW}
            <!-- END nav_tree -->
        </span>

    </div>


    <!-- Statistics -->
    <div class="topicslist-stats">
        {topics_list_box.row.REPLIES} {L_REPLIES}
        <!-- Number // "posts" indicator -->
        <br />
        {topics_list_box.row.VIEWS} {L_VIEWS}
        <!-- Number // "views" indicator -->
    </div>


    <!-- Last post author avatar-->
    <div class="topicslist-avatar-lastpost">
        <!-- BEGIN avatar -->
        {topics_list_box.row.topic.avatar.LAST_POST_AVATAR}
        <!-- END avatar -->
    </div>


    <!-- Last post -->
    <div class="topicslist-lastpost">
        <!-- Last post date -->
        {topics_list_box.row.LAST_POST_TIME} &nbsp;
        <br />
        <!-- Last post author -->
        {topics_list_box.row.LAST_POST_AUTHOR} &nbsp;
        <!-- Link image to jump to last post -->
        {topics_list_box.row.LAST_POST_IMG}
    </div>


    <!-- Topic description -->
    <!-- BEGIN switch_description -->
    <div class="topicslist-description">
        {topics_list_box.row.topic.switch_description.TOPIC_DESCRIPTION}
    </div>
    <!-- END switch_description -->


</div>
<!-- END topic -->
<!-- END row -->

<!-- Topic container end -->

<!-- "No topic" indicator -->
<!-- BEGIN no_topics -->
<center><strong>{topics_list_box.row.L_NO_TOPICS}</strong></center>
<!-- END no_topics -->


<!-- END topics_list_box -->
<!-- Topic list end -->





<!-- BEGIN multi_selection -->
<script type="text/javascript">
    function check_uncheck_main_ {
        topics_list_box.row.header_table.BOX_ID
    }() {
        alert('MAIN');

        var all_checked = true;

        for (i = 0;
            (i < document. {
                topics_list_box.FORMNAME
            }.elements.length) && all_checked; i++) {
            if (document. {
                    topics_list_box.FORMNAME
                }.elements[i].name == '{topics_list_box.FIELDNAME}[]{topics_list_box.row.header_table.BOX_ID}') {
                all_checked = document. {
                    topics_list_box.FORMNAME
                }.elements[i].checked;
            }
        }

        document. {
            topics_list_box.FORMNAME
        }.all_mark_ {
            topics_list_box.row.header_table.BOX_ID
        }.checked = all_checked;
    }

    function check_uncheck_all_ {
        topics_list_box.row.header_table.BOX_ID
    }() {
        alert('ALL');

        for (i = 0; i < document. {
                topics_list_box.FORMNAME
            }.length; i++) {
            if (document. {
                    topics_list_box.FORMNAME
                }.elements[i].name == '{topics_list_box.FIELDNAME}[]{topics_list_box.row.header_table.BOX_ID}') {
                document. {
                    topics_list_box.FORMNAME
                }.elements[i].checked = document. {
                    topics_list_box.FORMNAME
                }.all_mark_ {
                    topics_list_box.row.header_table.BOX_ID
                }.checked;
            }
        }
    }

</script>
<!-- END multi_selection -->
            