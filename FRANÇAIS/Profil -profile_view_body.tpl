<!-- IMPORTANT!!-->
<!-- ACTIVATE SIMPLE PROFILE: Users & Groups › Profiles › General options › Activate advanced profile: no -->

<br/>
<div class="container" id="wombat">

    <!-- Username -->
    <h1 class="page-title">{USERNAME}</h1>

    <!-- Profile contents -->
    <div class="user_profile">

        <!-- Avatar -->
        <div class="profile_avatar" id="user_avatar"> {AVATAR_IMG}</div>

      
        <!-- Profile info -->
        <div class="profile_infos">

            <div class="profile_contact right">
                <!-- Contact image link -->
                <form action="{S_PROFILE_ACTION}" method="post" name="post">
                    <!-- BEGIN contact_field -->
                    <div id="field_id{contact_field.ID}">{contact_field.CONTENT}</div>
                    <!-- END contact_field -->
                </form>
            </div>

            <!-- Rank-->
            <strong>{POSTER_RANK}</strong><br />

            <!-- Status: online -->
            <!-- BEGIN switch_show_status -->
            {USER_ONLINE}
            <!-- END switch_show_status -->


            <br/>
            <!-- PROFILE FIELDS -->
            <div class="profile_content">

                <!-- "Last visited" field -->
                <div class="profile_field">
                    <label>{L_LAST_VISITED} :</label>
                    <field>{LAST_VISIT_TIME}</field>
                </div>

               <!-- "Private messages" field -->
                <!-- BEGIN switch_dhow_mp -->
                <div class="profile_field">
                    <label>{L_PRIVATE_MSG} :</label>
                    <field>{PRIVATE_MSG}</field>
                </div>
                <!-- END switch_dhow_mp -->

                <!-- Other fields -->
                <!-- BEGIN profile_field -->
                <div class="profile_field" id="field_id{profile_field.ID}">
                    <label>{profile_field.LABEL}</label>
                    <field>{profile_field.CONTENT}

                        <!-- "Message" field contents -->
                        <!-- BEGIN profil_type_user_posts -->
                        <a rel="nofollow" href="/st/{PUSERNAME}" id="opentopics">{L_SEARCH_USER_POSTS} :</a><!-- topics opened by -->

                        <br />
                        <a rel="nofollow" href="/sta/{PUSERNAME}" id="alltopics">{L_TOPICS}</a> <!-- all topics -->
                      		&nbsp;-&nbsp;
                        <a rel="nofollow" href="/spa/{PUSERNAME}" id="allposts">{L_POSTS}</a> <!-- all posts -->
                        <!-- END profil_type_user_posts -->
                    </field>
                </div>
                <!-- END profile_field -->

              
              	<!-- Character sheet -->
                <!-- BEGIN switch_rpg -->
                <!-- BEGIN rpg_fields -->
                <div class="profile_field">
                    <label>{switch_rpg.rpg_fields.F_NAME} :</label>
                    <field>{switch_rpg.rpg_fields.F_VALUE_NEW}</field>
                </div>
                <!-- END rpg_fields -->

                <fieldset class="submit-buttons">{U_ADMIN_RPG_NEW}</fieldset>
                <!-- END switch_rpg -->


            </div>
            <!-- End of profile fields -->

        </div>


    </div>

    <!-- Profile moderation links -->
    <!-- BEGIN switch_auth_user -->
    <div class="profile_admin">{ADMINISTRATE_USER}{BAN_USER}</div>
    <!-- END switch_auth_user -->


</div>




<script src="{JQUERY_ROOT}json/jquery.json-1.3.min.js" type="text/javascript"></script>
<script type="text/javascript">
    //<![CDATA[
    $(document).ready(function() {
        $('[id^=field_id]').each(function() {
            if ($(this).find('.field_editable').is('span, div')) {
                $(this).hover(function() {
                    if ($(this).find('.field_editable.invisible').is('span, div')) {
                        $(this).find('.field_editable').prev().addClass('ajax-profil_hover').parent().addClass('ajax-profil_parent').append('<div class="ajax-profil_edit"><img src="{AJAX_EDIT_IMG}" /></div>');
                        $(this).find('.ajax-profil_edit').attr({
                            alt: "{L_FIELD_EDIT_VALUE}",
                            title: "{L_FIELD_EDIT_VALUE}"
                        }).click(function() {
                            $(this).prev().prev().removeClass('ajax-profil_hover').addClass('invisible').next().removeClass('invisible').append('<img src="{AJAX_VALID_IMG}" class="ajax-profil_valid" />').find('input,select');
                            $(this).prev().find('.ajax-profil_valid').attr({
                                alt: "{L_VALIDATE}",
                                title: "{L_VALIDATE}"
                            }).click(function() {
                                var content = new Array();
                                $(this).parent().find('[name]').each(function() {
                                    var type_special = $(this).is('input[type=radio],input[type=checkbox]');
                                    if ((type_special && $(this).is(':checked')) || !type_special) {
                                        content.push(new Array($(this).attr('name'), $(this).attr('value')));
                                    }
                                });
                                var id_name = $(this).parents('[id^=field_id]').attr('id');
                                var id = id_name.substring(8, id_name.length);
                                $.post(
                                    "{U_AJAX_PROFILE}", {
                                        id: id,
                                        user: "{CUR_USER_ID}",
                                        active: "{CUR_USER_ACTIVE}",
                                        content: $.toJSON(content),
                                        tid: "{TID}"
                                    },
                                    function(data) {
                                        $.each(data, function(i, item) {
                                            $('[id=field_id' + i + ']').find('.field_uneditable').html(item).end().find('.ajax-profil_valid').remove().end().find('.field_editable').addClass('invisible').end().find('.field_uneditable').removeClass('invisible');
                                        });
                                    },
                                    "json"
                                );
                            });
                            $(this).remove();
                        });
                    }
                }, function() {
                    if ($(this).find('.field_editable.invisible').is('span, div')) {
                        $(this).find('.field_editable').prev().removeClass('ajax-profil_hover');
                        $(this).find('.ajax-profil_edit').remove();
                    }
                });
            }
        });
    });
    //]]>
</script>
            