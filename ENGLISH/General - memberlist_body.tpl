<!----------------------------------------------->
<!-- SELECTION BAR -------------->

<div class="links_bar">
    <form action="{S_MODE_ACTION}" method="get">
        <span>
            {L_USER_SELECT}&nbsp;<input type="text" class="inputbox tiny" name="username" maxlength="25" size="20" value="{L_USER_SELECT_VALUE}" />&nbsp;&nbsp;&nbsp;&nbsp;
            {L_SELECT_SORT_METHOD}&nbsp;{S_MODE_SELECT}&nbsp;&nbsp;&nbsp;&nbsp;
            {L_ORDER}&nbsp;{S_ORDER_SELECT}&nbsp;&nbsp;&nbsp;&nbsp;
            {S_HIDDEN_SID}
            <input class="button2" type="submit" name="submit" value="{L_SUBMIT}" />
        </span>
    </form>
</div>


<!----------------------------------------------->
<!-- MEMBERLIST -------------->

<div class="container">

    <!-- Memberlist title -->
    <h1 class="page-title">{PAGE_TITLE}</h1>

    <!-- Memberlist -->
    <div class="userlist">

        <!-- Profile view -->
        <!-- BEGIN memberrow -->
        <div class="userlist_profil">

            <!-- Avatar -->
            <div class="userlist_avatar">
                {memberrow.AVATAR_IMG}
            </div>

            <!-- Member info container -->
            <div class="userlist_details">

                <!-- Nickname -->
                <span class="userlist_pseudo">
                    <a href="{memberrow.U_VIEWPROFILE}">{memberrow.USERNAME}</a>
                </span>

                <!-- Profile fields -->
                <div class="userlist_infos">
                    {L_JOINED}: {memberrow.JOINED}<br />
                    {L_VISITED}: {memberrow.LASTVISIT}<br />
                    {L_POSTS}: {memberrow.POSTS}<br />
                </div>

                <!-- Contact links -->
                <div class="userlist_contact right">
                    {memberrow.PM_IMG}&nbsp;
                    {memberrow.WWW_IMG}
                </div>
            </div>

        </div>
        <!-- END memberrow -->
        <!-- Profile end -->

    </div>
    <!-- Memberlist end -->
  
    <!-- Pagination -->
    <center>
        <!-- BEGIN switch_pagination -->
        <span class="pagination">
            {PAGINATION}
        </span>
        <!-- END switch_pagination -->
    </center>
  
</div>
            