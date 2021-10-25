{JAVASCRIPT}

<!----------------------------------------------->
<!-- QUICK LOGIN (top) -------------->


<!-- BEGIN switch_user_login_form_header -->
<div class="panel">
    <form action="{S_LOGIN_ACTION}" method="post" name="form_login">
        <div class="user_login_form center">
            <!-- Username -->
            <label>{L_USERNAME} : <input class="post" type="text" size="10" name="username" /></label> &nbsp;

            <!-- Password -->
            <label>{L_PASSWORD} : <input class="post" type="password" size="10" name="password" /></label> &nbsp;

            <!-- Checkbox : auto login -->
            <label>{L_AUTO_LOGIN} : <input class="radio" type="checkbox" name="autologin" {AUTOLOGIN_CHECKED} /></label> &nbsp;

            <!-- Connect button -->
            {S_HIDDEN_FIELDS}<input class="mainoption button1" type="submit" name="login" value="{L_LOGIN}" />


        </div>
    </form>
</div>
<!-- END switch_user_login_form_header -->


<!----------------------------------------------->
<!-- HOMEPAGE -------------->


<!-- BEGIN message_admin_index -->
<div class="panel introduction">

    <!-- Homepage title -->
    <!-- BEGIN message_admin_titre -->
    <div class="h3">{message_admin_index.message_admin_titre.MES_TITRE}</div>
    <!-- END message_admin_titre -->

    <!-- Homepage contents -->
    <!-- BEGIN message_admin_txt -->
    <div class="mes-txt">{message_admin_index.message_admin_txt.MES_TXT}</div>
    <!-- END message_admin_txt -->
</div>
<!-- END message_admin_index -->


<!----------------------------------------------->
<!-- Chatbox (if at the top) -------------->

{CHATBOX_TOP}


<!----------------------------------------------->
<!-- CATEGORIES -------------->
<!-- (template : index_box) -->

{BOARD_INDEX}


<!----------------------------------------------->
<!-- WHO IS ONLINE (WIO) -------------->

<!-- BEGIN disable_viewonline -->
<div class="qeel">

    <div class="qeel-left">

        <!-- Newest user -->
        <div id="last_user">
	<span id="lastuser_avatar"></span>
          
            <span id="newest_user">
                {NEWEST_USER}<br />
            </span>
        </div><br />


        <!-- Total posts: X messages / Total users: X members -->
        <span id="qeel_posts">{TOTAL_POSTS}</span><br/>
        <span id="qeel_members">{TOTAL_USERS}</span><br /><br />


        <a class="groups">Alpha</a>
        <a class="groups">Bêta</a>
        <a class="groups">Charlie</a>
    </div>

    <div class="qeel-middle">

        <!-- X connected :: 1 member, 0 invisible, 0 guests -->
      <div id="total_users">{TOTAL_USERS_ONLINE}</div>

        <div class="separator"></div>

        <!-- Users currently online -->
        <div id="online_users">{LOGGED_IN_USER_LIST}</div>


        <div class="credits">Insert creator and administrator credits here, and which browser it's optimized for. Add more if needed, and so on and so forth.</div>

    </div>

    <!-- Connected in the last X hours -->
    <div class="qeel-right" id="24hconnected">
        {L_CONNECTED_MEMBERS}<br />
    </div>
</div>



<!-- Changing the text for the WIO information -->
<script type="text/javascript">
document.getElementById('ELEMENT ID HERE').innerHTML = document.getElementById('ELEMENT ID HERE').innerHTML.replace(/BASE TEXT ON THE FORUM/, "YOUR CUSTOM TEXT HERE (you can leave it blank or put html like <br>)");</script>


<!-- Chatbox info container -->
<!-- BEGIN switch_chatbox_activate -->
  
  <div class="panel">
      <!-- Chatbox name -->
      <div class="h3"><a href="{S_JOIN_CHAT}" target="ChatBox">{CHATBOX_NAME}</a></div>
  
      <!-- List of online users on the chatbox -->
      {TOTAL_CHATTERS_ONLINE}&nbsp;:&nbsp;{CHATTERS_LIST}<br />
  
      <!-- BEGIN switch_chatbox_popup -->
      <!-- Link to join the chatbox -->
      <div id="chatbox_popup"></div>
      <script type="text/javascript">
          insertChatBoxPopup('{disable_viewonline.switch_chatbox_activate.switch_chatbox_popup.U_FRAME_CHATBOX}', '{L_CLICK_TO_JOIN_CHAT}');
  
      </script>
      <!-- END switch_chatbox_popup -->
    
  </div>
<!-- END switch_chatbox_activate -->
<!-- End of chatbox info container -->


<!-- END disable_viewonline -->
<!-- End of the Who is online panel -->


<!----------------------------------------------->
<!-- Chatbox (if at the bottom) -------------->

{CHATBOX_BOTTOM}


<!----------------------------------------------->
<!-- QUICK LOGIN (bottom) -------------->

<!-- BEGIN switch_user_login_form_footer -->
<div class="panel">
    <form action="{S_LOGIN_ACTION}" method="post" name="form_login">
        <div class="user_login_form center">
            <!-- Username -->
            <label>{L_USERNAME} : <input class="post" type="text" size="10" name="username" /></label>&nbsp;

            <!-- Password -->
            <label>{L_PASSWORD} : <input class="post" type="password" size="10" name="password" /></label>&nbsp;

            <!-- Checkbox: auto login -->
            <label>{L_AUTO_LOGIN} : <input class="radio" type="checkbox" name="autologin" {AUTOLOGIN_CHECKED} /></label>&nbsp;

            <!-- Connect button -->
            {S_HIDDEN_FIELDS}<input class="mainoption button1" type="submit" name="login" value="{L_LOGIN}" />


        </div>
    </form>
</div>
<!-- END switch_user_login_form_footer -->




{AUTO_DST}
            