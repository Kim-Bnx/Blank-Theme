<script type="text/javascript" src="{JSPWD}"></script>


<!-- Onglet de gestion du profil -->
<!-- BEGIN switch_display_menu -->
	{UCP_TABS}
<!-- END switch_display_menu -->


{ERROR_BOX}

<div class="container">
    <div id="cp-main" class="ucp-main">
        <form action="{S_PROFILE_ACTION}" {S_FORM_ENCTYPE} method="post" name="post" id="ucp">
          
            <!----------------------------->
            <!-- Cadre enregistrement des informations d'utilisateur -->
            <!-- BEGIN switch_informations_menu -->
            <h1 class="page-title">{L_REGISTRATION_INFO}</h1>
            <div class="panel">

                <p>{L_ITEMS_REQUIRED}</p>
                <fieldset>
                    <!-- BEGIN switch_namechange_disallowed -->
                    <dl>
                        <dt><label>{L_USERNAME} : *</label></dt>
                        <dd><input type="hidden" name="username" value="{USERNAME}" class="inputbox" /><strong>{USERNAME}</strong></dd>
                    </dl>
                    <!-- END switch_namechange_disallowed -->
                    <!-- BEGIN switch_namechange_allowed -->
                    <dl>
                        <dt><label>{L_USERNAME} : *</label></dt>
                        <dd><input type="text" name="username" value="{USERNAME}" class="inputbox" maxlength="25" /></dd>
                    </dl>
                    <!-- END switch_namechange_allowed -->
                    <!-- BEGIN switch_emailchange_disallowed -->
                    <dl>
                        <dt><label>{L_EMAIL_ADDRESS} : *</label></dt>
                        <dd><input type="hidden" name="email" value="{EMAIL}" />
                            {EMAIL}
                            {L_INVALID_EMAIL}
                        </dd>
                    </dl>
                    <!-- END switch_emailchange_disallowed -->
                    <!-- BEGIN switch_emailchange_allowed -->
                    <dl>
                        <dt><label>{L_EMAIL_ADDRESS} : *</label></dt>
                        <dd><input type="email" name="email" value="{EMAIL}" class="inputbox" />
                            {L_INVALID_EMAIL}
                        </dd>
                    </dl>
                    <!-- END switch_emailchange_allowed -->

                    <!-- BEGIN switch_change_password -->
                    <dl>
                        <dt><label>{L_CHANGE_PASSWORD} : *</label></dt>
                        <dd>
                            <a href="{LINK_FOR_PASSWD_CHANGE}" target="_blank"><b>&lt;&nbsp;{L_MODIFY}&nbsp;&gt;</b></a>
                        </dd>
                    </dl>
                    <!-- END switch_change_password -->
                </fieldset>
            </div>
            <!-- BEGIN switch_span_div -->
            <!-- END switch_span_div -->
          
          
            <!----------------------------->
            <!-- Cadre champs de profil du compte -->
            <!-- BEGIN switch_profile_fields -->
            <h1 class="page-title">{switch_informations_menu.switch_profile_fields.L_PROFILE_FIELDS}</h1>
            <div class="panel">
                <fieldset>
                    <!-- BEGIN field -->
                    <dl>
                        <dt>{switch_informations_menu.switch_profile_fields.field.NAME}</dt>
                        <dd>
                            {switch_informations_menu.switch_profile_fields.field.OBJECT}<br />
                            <span class="italic">{switch_informations_menu.switch_profile_fields.field.DESCRIPTION}</span>
                        </dd>
                    </dl>
                    <!-- END field -->
                </fieldset>
            </div>
            <!-- END switch_profile_fields -->


            <!-- LISTES DES RECCOMPENSES -->
            <!-- BEGIN switch_awards -->
            <h1 class="page-title">{switch_informations_menu.switch_awards.L_AWARDS}</h1>
            <div class="panel" style="overflow: visible">
                <div id="list_awards" style="width: 100%; text-align: center">{switch_informations_menu.switch_awards.AWARDS_LIST}</div>

                <center>
                    <input id="awards_order" type="hidden" name="awards_order" value="" />
                    <input style="cursor: pointer" id="sort_awards" class="button1" type="button" name="order" value="{switch_informations_menu.switch_awards.L_SORT}" />
                </center>
            </div>
                {switch_informations_menu.switch_awards.SCRIPT_SORT_AWARDS}
            <!-- END switch_awards -->
            

            <!-- BEGIN switch_register_not_display -->
            <div class="panel">
                <p>{L_PROFILE_INFO_NOTICE}</p>
                <fieldset>
                    <!-- BEGIN switch_unsubscribe_allowed -->
                    <dl>
                        <dt><label>{L_DELETE}</label></dt>
                        <dd><input type="checkbox" name="delete_user" /><span class="italic">{L_DELETE_EXPLAIN}</span>
                        </dd>
                    </dl>
                    <!-- END switch_unsubscribe_allowed -->
                </fieldset>
            </div>
            <!-- END switch_register_not_display -->

            <!-- BEGIN switch_profile_fields_register -->
            <div class="panel">
                <fieldset>
                    <!-- BEGIN field -->
                    <dl>
                        <dt><label>{switch_informations_menu.switch_profile_fields_register.field.NAME} :</label></dt>
                        <dd>{switch_informations_menu.switch_profile_fields_register.field.OBJECT}<br /><br /></dd>
                    </dl>
                    <!-- END field -->
                </fieldset>
            </div>
            <!-- END switch_profile_fields_register -->
          
          
	    <!----------------------------->
            <!-- Cadre exportation des données -->
            <h1 class="page-title">{switch_informations_menu.RGPD_ACTION_TITLE}</h1>
            <!-- BEGIN rgpd_generate_or_download -->
            <div class="panel">
                <fieldset>
                    <dl>
                        <dt><label>{switch_informations_menu.rgpd_generate_or_download.RGPD_ACTION_LABEL} :</label></dt>
                        <dd>
                            <a href="{switch_informations_menu.rgpd_generate_or_download.RGPD_ACTION_LINK}" class="button1">{switch_informations_menu.rgpd_generate_or_download.RGPD_ACTION_CONTENT}</a>
                            <br /><br />
                            {switch_informations_menu.rgpd_generate_or_download.RGPD_ACTION_EXPLAIN}
                        </dd>
                    </dl>
                </fieldset>
            </div>
            <!-- END rgpd_generate_or_download -->
            <!-- BEGIN rgpd_await_export -->
            <div class="panel">
                <fieldset>
                    <p>{switch_informations_menu.rgpd_await_export.RGPD_AWAIT_EXPORT}</p>
                </fieldset>
            </div>
            <!-- END rgpd_await_export -->
            <!-- END switch_informations_menu -->
          

          
            <!----------------------------->
	    <!-- Page : Modification du mot de passe -->
            <!-- BEGIN switch_confirm_password -->
            <h1 class="page-title">{L_REGISTRATION_INFO}</h1>
            <div class="panel">
                <fieldset>
                    <dl>
                        <dt><label>{L_CURRENT_PASSWORD}&nbsp;: *</label></dt>
                        <dd><input type="password" name="cur_password" value="{CUR_PASSWORD}" class="inputbox" /></dd>
                    </dl>
                </fieldset>
            </div>
            <!-- END switch_confirm_password -->
            <!-- BEGIN switch_confirm_password_new -->
            <div class="panel">
                <fieldset>
                    <dl>
                        <dt><label>{L_NEW_PASSWORD}&nbsp;: *</label></dt>
                        <dd><input type="password" name="new_password" value="{NEW_PASSWORD}" class="inputbox" maxlength="25" /></dd>
                    </dl>
                    <dl>
                        <dt><label>{L_CONFIRM_PASSWORD}&nbsp;: *</label></dt>
                        <dd>
                            <input type="password" name="password_confirm" value="{PASSWORD_CONFIRM}" class="inputbox" maxlength="25" />
                            <input type="hidden" name="change_password" value="change_password" />
                        </dd>
                    </dl>
                </fieldset>
            </div>
            <!-- END switch_confirm_password_new -->
          
          
          
          
	    <!----------------------------->
	    <!-- Page de la gestion des préférences -->
            <!-- BEGIN switch_preferences_menu -->
            <h1 class="page-title">{L_PREFERENCES}</h1>
            <div class="panel profil_preferences">

                <fieldset>
                    <dl>
                        <dt><label>{L_PUBLIC_VIEW_EMAIL} :</label></dt>
                        <dd>
                            <label><input type="radio" name="viewemail" value="2" {VIEW_EMAIL_FORM} />{L_YES}</label>
                            <!-- BEGIN switch_enable_mail_view --><label><input type="radio" name="viewemail" value="2" {VIEW_EMAIL_FORM} />{L_FORM}</label>
                            <label><input type="radio" name="viewemail" value="1" {VIEW_EMAIL_MAILTO} />{L_MAILTO}</label>
                            <!-- END switch_enable_mail_view --><label><input type="radio" name="viewemail" value="0" {VIEW_EMAIL_NO} />{L_NO}</label>
                        </dd>
                    </dl>
                    <!-- BEGIN switch_view_pm -->
                    <dl>
                        <dt><label>{L_PUBLIC_VIEW_MP}&nbsp;:</label></dt>
                        <dd>
                            <label><input type="radio" name="view_pm" value="1" {VIEW_MP_YES} />{L_YES}</label>
                            <label><input type="radio" name="view_pm" value="0" {VIEW_MP_NO} />{L_NO}</label>
                        </dd>
                    </dl>
                    <!-- END switch_view_pm -->
                    <!-- BEGIN switch_profile_advanced -->
                    <dl>
                        <dt><label>{switch_preferences_menu.switch_profile_advanced.L_ALLOW_PROFILE_MSGS} :</label></dt>
                        <dd>
                            <label><input type="radio" name="profilemsgs" value="2" {switch_preferences_menu.switch_profile_advanced.PROFILE_MSGS_ALL} />{L_ALL_USERS}</label> &nbsp;
                            <label><input type="radio" name="profilemsgs" value="1" {switch_preferences_menu.switch_profile_advanced.PROFILE_MSGS_FRIENDS} />{L_MY_FRIENDS}</label> &nbsp;
                            <label><input type="radio" name="profilemsgs" value="0" {switch_preferences_menu.switch_profile_advanced.PROFILE_MSGS_NONE} />{L_NO_ONE}</label> &nbsp;
                            <label><input type="radio" name="profilemsgs" value="-1" {switch_preferences_menu.switch_profile_advanced.PROFILE_MSGS_HIDE} />{L_HIDE_TAB}</label>
                        </dd>
                    </dl>
                    <!-- END switch_profile_advanced -->

                    <dl>
                        <dt><label>{L_NEWSLETTER_ACCEPT} :</label></dt>
                        <dd>
                            <label><input type="radio" name="newsletter" value="1" {NEWSLETTER_YES} />{L_YES}</label>
                            <label><input type="radio" name="newsletter" value="0" {NEWSLETTER_NO} />{L_NO}</label>
                            <br /><span class="italic">{L_NEWSLETTER_ACCEPT_EXPLAIN}</span>
                        </dd>
                    </dl>
                    <!-- BEGIN display_newsletter_auto -->
                    <dl>
                        <dt><label>{L_NEWSLETTER_AUTO_ACCEPT} :</label></dt>
                        <dd>
                            <label><input type="radio" name="newsletter_auto" value="1" {NEWSLETTER_AUTO_YES} />{L_YES}</label>
                            <label><input type="radio" name="newsletter_auto" value="0" {NEWSLETTER_AUTO_NO} />{L_NO}</label>
                            <br /><span class="italic">{L_NEWSLETTER_AUTO_ACCEPT_EXPLAIN}</span>
                        </dd>
                    </dl>
                    <!-- END display_newsletter_auto -->
                    <dl>
                        <dt><label>{L_HIDE_USER} :</label></dt>
                        <dd>
                            <label><input type="radio" name="hideonline" value="1" {HIDE_USER_YES} />{L_YES}</label>
                            <label><input type="radio" name="hideonline" value="0" {HIDE_USER_NO} />{L_NO}</label>
                        </dd>
                    </dl>
                    <dl>
                        <dt><label>{L_NOTIFY_ON_REPLY} :</label></dt>
                        <dd>
                            <label><input type="radio" name="notifyreply" value="1" {NOTIFY_REPLY_YES} />{L_YES}</label>
                            <label><input type="radio" name="notifyreply" value="0" {NOTIFY_REPLY_NO} />{L_NO}</label>
                            <br /><span class="italic">{L_NOTIFY_ON_REPLY_EXPLAIN}</span>
                        </dd>
                    </dl>
                    <!-- BEGIN switch_can_disable_mass_pm -->
                    <dl>
                        <dt><label>{L_ENABLE_MASS_PM} : </label></dt>
                        <dd>
                            <label><input type="radio" name="allow_mass_pm" value="4" {ALLOW_MASS_PM_NOTIFY_CHECKED} />{L_YES}</label>
                            <label><input type="radio" name="allow_mass_pm" value="2" {ALLOW_MASS_PM_CHECKED} />{L_NO}</label>
                            <label><input type="radio" name="allow_mass_pm" value="0" {DISABLE_MASS_PM_CHECKED} />{L_NO_MASS_PM}</label>
                            <br /><span class="italic">{L_ENABLE_MASS_PM_EXPLAIN}</span>
                        </dd>
                    </dl>
                    <!-- END switch_can_disable_mass_pm -->
                    <!-- BEGIN switch_notify_subscriptions -->
                    <dl>
                        <dt><label>{L_NOTIFY_SUBSCRIPTIONS} :</label></dt>
                        <dd>
                            <label><input type="radio" name="notify_subscriptions" value="1" {NOTIFY_SUBSCRIPTIONS_YES} />{L_YES}</label>
                            <label><input type="radio" name="notify_subscriptions" value="0" {NOTIFY_SUBSCRIPTIONS_NO} />{L_NO}</label>
                        </dd>
                    </dl>
                    <!-- END switch_notify_subscriptions -->
                    <dl>
                        <dt><label>{L_POPUP_ON_PRIVMSG} :</label></dt>
                        <dd>
                            <label><input type="radio" name="popup_pm" value="1" {POPUP_PM_YES} />{L_YES}</label>
                            <label><input type="radio" name="popup_pm" value="0" {POPUP_PM_NO} />{L_NO}</label>
                            <br /><span class="italic">{L_POPUP_ON_PRIVMSG_EXPLAIN}</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt><label>{L_NOTIFY_POST_PREVENT} :</label></dt>
                        <dd>
                            <label><input type="radio" name="post_prevent" value="1" {POST_PREVENT_YES} />{L_YES}</label>
                            <label><input type="radio" name="post_prevent" value="0" {POST_PREVENT_NO} />{L_NO}</label>
                            <br /><span class="italic">{L_NOTIFY_POST_PREVENT_EXPLAIN}</span>
                        </dd>
                    </dl>
                    <!-- BEGIN switch_report -->
                    <dl>
                        <dt><label>{switch_preferences_menu.switch_report.L_NO_REPORT_POPUP} :</label></dt>
                        <dd>
                            <label><input type="radio" name="no_report_popup" value="0" {switch_preferences_menu.switch_report.NO_REPORT_POPUP_YES} />{L_YES}</label>
                            <label><input type="radio" name="no_report_popup" value="1" {switch_preferences_menu.switch_report.NO_REPORT_POPUP_NO} />{L_NO}</label>
                        </dd>
                    </dl>
                    <!-- END switch_report -->
                    <!-- BEGIN switch_signature -->
                    <dl>
                        <dt><label>{switch_preferences_menu.switch_signature.L_ALWAYS_ADD_SIGNATURE} :</label></dt>
                        <dd>
                            <label><input type="radio" name="attachsig" value="1" {switch_preferences_menu.switch_signature.ALWAYS_ADD_SIGNATURE_YES} />{L_YES}</label>
                            <label><input type="radio" name="attachsig" value="0" {switch_preferences_menu.switch_signature.ALWAYS_ADD_SIGNATURE_NO} />{L_NO}</label>
                        </dd>
                    </dl>
                    <!-- END switch_signature -->
                    <dl>
                        <dt><label>{L_ALWAYS_ALLOW_BBCODE} :</label></dt>
                        <dd>
                            <label><input type="radio" name="allowbbcode" value="1" {ALWAYS_ALLOW_BBCODE_YES} />{L_YES}</label>
                            <label><input type="radio" name="allowbbcode" value="0" {ALWAYS_ALLOW_BBCODE_NO} />{L_NO}</label>
                        </dd>
                    </dl>
                    <dl>
                        <dt><label>{L_ALWAYS_ALLOW_HTML} :</label></dt>
                        <dd>
                            <label><input type="radio" name="allowhtml" value="1" {ALWAYS_ALLOW_HTML_YES} />{L_YES}</label>
                            <label><input type="radio" name="allowhtml" value="0" {ALWAYS_ALLOW_HTML_NO} />{L_NO}</label>
                        </dd>
                    </dl>
                    <dl>
                        <dt><label>{L_ALWAYS_ALLOW_SMILIES} :</label></dt>
                        <dd>
                            <label><input type="radio" name="allowsmilies" value="1" {ALWAYS_ALLOW_SMILIES_YES} />{L_YES}</label>
                            <label><input type="radio" name="allowsmilies" value="0" {ALWAYS_ALLOW_SMILIES_NO} />{L_NO}</label>
                        </dd>
                    </dl>
                    <dl>
                        <dt><label>{L_BOARD_LANGUAGE} :</label></dt>
                        <dd>{LANGUAGE_SELECT}</dd>
                    </dl>
                    <dl>
                        <dt><label>{L_TIMEZONE} :</label></dt>
                        <dd>{TIMEZONE_SELECT}</dd>
                    </dl>
                    <dl>
                        <dt><label>{L_DATE_FORMAT} :</label></dt>
                        <dd>{DATE_FORMAT}
                            <br /><span class="italic">{CURRENT_TIME}</span>
                        </dd>
                    </dl>
                </fieldset>

            </div>
            <!-- END switch_preferences_menu -->
          

            <!----------------------------->
            <!-- Page : gestion d'avatar -->
            <!-- BEGIN switch_avatar_block -->
            <h1 class="page-title">{L_AVATAR_PANEL}</h1>
            <div class="panel profil_editavatar">

                <fieldset>
                    <dl>
                        <dt>
                            <strong>{L_CURRENT_IMAGE}</strong><br />
                            <span>{L_AVATAR_EXPLAIN}</span>
                        </dt>
                        <dd>
                            {AVATAR}
                            <input type="checkbox" name="avatardel" />{L_DELETE_AVATAR}
                        </dd>
                    </dl>

                    <!-- BEGIN switch_avatar_local_upload -->
                    <dl>
                        <dt><label>{L_UPLOAD_AVATAR_FILE} :</label></dt>
                        <dd><input type="file" name="avatar" class="inputbox" /></dd>
                    </dl>
                    <!-- END switch_avatar_local_upload -->
                    <!-- BEGIN switch_avatar_remote_upload -->
                    <dl>
                        <dt><label>{L_UPLOAD_AVATAR_URL} :</label></dt>
                        <dd><input type="text" name="avatarurl" class="inputbox" />
                            <br /><span class="italic">{L_UPLOAD_AVATAR_URL_EXPLAIN}</span>
                        </dd>
                    </dl>
                    <!-- END switch_avatar_remote_upload -->
                    <!-- BEGIN switch_avatar_remote_link -->
                    <dl>
                        <dt><label>{L_LINK_REMOTE_AVATAR} :</label></dt>
                        <dd><input type="text" name="avatarremoteurl" class="inputbox" />
                            <br /><span class="italic">{L_LINK_REMOTE_AVATAR_EXPLAIN}</span>
                        </dd>
                    </dl>
                    <!-- END switch_avatar_remote_link -->
                    <!-- BEGIN switch_avatar_local_gallery -->
                    <dl>
                        <dt><label>{L_AVATAR_GALLERY} :</label></dt>
                        <dd><input type="submit" name="avatargallery" value="{L_SHOW_GALLERY}" class="button1" /></dd>
                    </dl>
                    <!-- END switch_avatar_local_gallery -->
                </fieldset>
            </div>
            <!-- END switch_avatar_block -->

          
            <!----------------------------->
            <!-- Boutons "Enregistrer" et "Réinitialiser" -->
            <fieldset class="submit-buttons">
                <center>
                    {S_HIDDEN_FIELDS}
                    <input class="button1" type="submit" name="submit" value="{L_SUBMIT}" />&nbsp;
                    <input class="button2" type="reset" name="reset" value="{L_RESET}" />
                </center>
            </fieldset>
          
          
        </form>
    </div>
    <div class="clear"></div>
</div>
<script type="text/javascript">
    $(function() {
        $('input[name=reset]').click(function() {
            $("#pwd_good,#pwd_middle,#pwd_bad").hide();
        });
        $('input[name=new_password],input[name=username]').keyup(function() {
            if ($('input[name=new_password]').val() != "") {
                var level = passwordStrength($('input[name=new_password]').val(), $('input[name=username]').val());
                switch (level) {
                    case 'bad':
                        $("#pwd_middle,#pwd_good").hide();
                        $("#pwd_bad").show();
                        break;
                    case 'good':
                        $("#pwd_good,#pwd_bad").hide();
                        $("#pwd_middle").show();
                        break;
                    case 'strong':
                        $("#pwd_middle,#pwd_bad").hide();
                        $("#pwd_good").show();
                        break;
                }
            } else {
                $("#pwd_middle,#pwd_good,#pwd_bad").hide();
            }
        });

        var banner_width;
        $(window).on("resize", function() {
                $("#fym_banner").width(banner_width / ($(window).width() < 1000 ? 1.5 : 1));
            })
            .load(function() {
                banner_width = $("#fym_banner").width();
                $(this).trigger("resize");
            });
    });

</script>
