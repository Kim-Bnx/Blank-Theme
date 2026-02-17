{ERROR_BOX}
<form action="{S_POST_ACTION}" method="post" name="post" enctype="multipart/form-data">

  <div class="container">

    <!-- Titre de la page -->
    <h1 class="page-title">{L_POST_A}</h1>

    <!-- Affichage de la prévisualisation (template : posting_topic_review ) -->
    {POST_PREVIEW_BOX}

    <!------------------------------------>
    <!-- REGLES DE LA CATEGORIE (si activé) -->

    <!-- BEGIN switch_forum_rules -->
    <div class="panel" id="forum_rules">

      <!-- Titre "règlement" -->
      <h3>{L_FORUM_RULES}</h3>

      <!-- Règlement -->
      <div class="postbody">
        <!-- Image du règlement -->
        <!-- BEGIN switch_forum_rule_image -->
        <img class="left logo" src="{RULE_IMG_URL}" alt="" />
        <!-- END switch_forum_rule_image -->

        <!-- Contenu -->
        {RULE_MSG}
      </div>

    </div>
    <!-- END switch_forum_rules -->

    <!------------------------------------>
    <!-- AVERTISSEMENT ------------------->

    <!-- BEGIN switch_quote_limit -->
    <div class="panel">
      <br />
      <p class="center" style="color:red">{switch_quote_limit.L_QUOTE_LIMIT_WARNING}</p>
      <br />
    </div>
    <!-- END switch_quote_limit -->

    <!------------------------------------>
    <!-- CONTENU POSTER UN MESSAGE ------->

    <div class="panel" id="postingbox">
      <fieldset>
        <!-- Nom d'utilisateur (quand un invité poste) -->
        <!-- BEGIN switch_username_select -->
        <dl>
          <dt><label>{L_USERNAME}</label></dt>
          <dd><input class="inputbox" type="text" name="username" maxlength="25" value="{USERNAME}" /></dd>
        </dl>
        <!-- END switch_username_select -->

        <!-- Nom du destinataire (pour les MPs) -->
        <!-- BEGIN switch_privmsg -->
        <dl>
          <dt><label>{L_USERNAME}</label></dt>
          <dd>
            <!-- BEGIN switch_username -->
            <input class="inputbox" style="width:15%;margin:1px 0" type="text" name="username[]"
              value="{switch_privmsg.switch_username.USERNAME}" /><br />
            <!-- END switch_username -->
            <input class="inputbox" style="width:15%;margin:1px 0" type="text" id="username" name="username[]"
              value="{USERNAME}" tabindex="1" />&nbsp;
            <input class="button primary" id="add_username" type="button" value="+" />&nbsp;
            <input class="button2" type="button" id="find_user" value="{L_FIND_USERNAME}" />
          </dd>
        </dl>

        <!-- Envoyer à un groupe (MP) -->
        <!-- BEGIN switch_privmsg_group -->
        <dl>
          <dt><label>{switch_privmsg.switch_privmsg_group.L_OR_GROUP}</label></dt>
          <dd>{switch_privmsg.switch_privmsg_group.MASS_PM}</dd>
        </dl>
        <!-- END switch_privmsg_group -->
        <!-- END switch_privmsg -->

        <!-- Icon du message -->
        <!-- BEGIN switch_icon_checkbox -->
        <dl>
          <dt><label>{L_ICON_TITLE}</label></dt>
          <dd>
            <!-- BEGIN row -->
            <!-- BEGIN cell -->
            <label><input type="radio" name="post_icon" value="{switch_icon_checkbox.row.cell.ICON_ID}"
                {switch_icon_checkbox.row.cell.ICON_CHECKED}
                id="post_icon_{switch_icon_checkbox.row.cell.ICON_ID}" />&nbsp;<span
                onclick="document.forms['post'].post_icon_{switch_icon_checkbox.row.cell.ICON_ID}.checked=true">{switch_icon_checkbox.row.cell.ICON_IMG}</span></label>
            &nbsp;
            <!-- END cell -->
            <!-- END row -->
          </dd>
        </dl>
        <!-- END switch_icon_checkbox -->

        <!-- Type du sujet (annonce, post-it, ...) -->
        <!-- BEGIN switch_type_toggle -->
        <dl>
          <dt><label>Type de sujet</label></dt>
          <dd class="type-input">{S_TYPE_TOGGLE}</dd>
        </dl>
        <!-- END switch_type_toggle -->

        <!-- Titre du sujet -->
        <!-- BEGIN switch_subject -->
        <dl>
          <dt><label>{L_SUBJECT}</label></dt>
          <dd>
            <input class="inputbox medium" type="text" name="subject" value="{SUBJECT}"
              maxlength="{TOPIC_TITLE_MAXLENGTH}" title="{TOPIC_TITLE_LENGTH_EXPLAIN}"
              onkeypress="if (event.keyCode==13){return false}" />

            <!-- BEGIN switch_subject_color -->

            <script type="text/javascript">
              //<![CDATA[
              input = document.getElementsByName('subject');
              //]]>

            </script>
            <select name="topic_color" onchange="input[0].style.color = topic_color.value" style="margin-left:10px">
              {switch_subject.switch_subject_color.TOPIC_TITLE_COLOR_OPTIONS}
            </select>
            <script type="text/javascript">
              //<![CDATA[
              input[0].style.color = '{switch_subject.switch_subject_color.TOPIC_TITLE_COLOR_DEFAULT}';
              //]]>

            </script>

            <!-- END switch_subject_color -->
          </dd>
        </dl>
        <!-- END switch_subject -->

        <!-- Description du sujet -->
        <!-- BEGIN switch_description -->
        <dl>
          <dt><label>{L_DESCRIPTION}</label></dt>
          <dd>
            <input class="inputbox medium" type="text" name="description" value="{DESCRIPTION}"
              maxlength="{TOPIC_DESCRIPTION_MAXLENGTH}" onkeypress="if (event.keyCode==13){return false}" />
          </dd>
        </dl>
        <!-- END switch_description -->

        <!-- CONTENU : Smiley, options, éditeur de texte -->
        <div class="message-edition">
          <!-- Colonne de gauche -->
          <div class="u-space-between" style="flex-direction: column">
            <!-- Smileys -->
            <div id="smileyContainer">{L_SMILIES_PREVIEW_NEW}</div>

            <!-- Options du post -->
            <div class="post-param" style="width: 100%">
              <!-- BEGIN switch_html_checkbox -->
              <label><input type="checkbox" name="disable_html" {S_HTML_CHECKED} />&nbsp;Désactiver le
                HTML</label><br />
              <!-- END switch_html_checkbox -->

              <!-- BEGIN switch_bbcode_checkbox -->
              <label><input type="checkbox" name="disable_bbcode" {S_BBCODE_CHECKED} />&nbsp;Désactiver le
                BBCode</label><br />
              <!-- END switch_bbcode_checkbox -->

              <!-- BEGIN switch_smilies_checkbox -->
              <label><input type="checkbox" name="disable_smilies" {S_SMILIES_CHECKED} />&nbsp;Désactiver les
                smileys</label><br />
              <!-- END switch_smilies_checkbox -->

              <!-- BEGIN switch_signature_checkbox -->
              <label><input type="checkbox" name="attach_sig"
                  {S_SIGNATURE_CHECKED} />&nbsp;{L_ATTACH_SIGNATURE}</label><br />
              <!-- END switch_signature_checkbox -->

              <!-- BEGIN switch_notify_checkbox -->
              <label><input type="checkbox" name="notify" {S_NOTIFY_CHECKED} />&nbsp;Surveiller le sujet</label><br />
              <!-- END switch_notify_checkbox -->

              <!-- BEGIN switch_delete_checkbox -->
              <label><input type="checkbox" name="delete" />&nbsp;{L_DELETE_POST}</label><br />
              <!-- END switch_delete_checkbox -->
            </div>
          </div>

          <!-- Conteneur de l'éditeur de texte -->
          <div id="message-box">
            <div class="left-box"><span id="helpbox" class="helpline"></span></div>
            <div id="textarea_content">
              <textarea id="text_editor_textarea" name="message">{MESSAGE}</textarea>
            </div>
          </div>
        </div>
        <!-- Fin contenu : Smiley, options, éditeur de texte -->

      </fieldset>
    </div>
    <!-- Fin contenu poster un message -->

    <!-- BLOC D'OPTION : Dés ------------------->
    <!-- BEGIN switch_roll_dice -->
    <details class="panel">
      <summary>
        <h3 style="display: inline">{ROLL_DICE_TITLE}</h3>
      </summary>

      <table style="width:100%" id="list_dice">
        <tr>
          <td>
            {ROLL_DICE_TITLE_LOW} #1 :&nbsp;
            <select name="post_dice_0" id="post_dice">
              <option value="">-</option>
              <!-- BEGIN row_replace -->
              <option value="{switch_roll_dice.row_replace.DICE_ID}" {switch_roll_dice.row_replace.DICE_SELECTED}>
                {switch_roll_dice.row_replace.DICE_NAME}</option>
              <!-- END row_replace -->
            </select>
            &nbsp;<label for="nb_rolls">{switch_roll_dice.L_DICE_ROLLS} : </label><input type="text" size="2"
              maxlength="3" name="nb_rolls_0" id="nb_rolls" value="{switch_roll_dice.S_DICE_ROLLS_VALUE}" />
            &nbsp;<span id="dice_to_del"><a href="javascript:add_dice(1,'',1)">+</a></span>
          </td>
        </tr>
      </table>
      {switch_roll_dice.DICE_SCRIPT}
    </details>
    <!-- END switch_roll_dice -->

    <!-- BLOC D'OPTION : Sondage --------------->
    <!-- (template: posting_poll_body) --->
    {POLLBOX}

    <!------------------------------------>
    <!-- BOUTONS D'ENVOI ----------------->
    <fieldset class="u-center">
      {S_HIDDEN_FORM_FIELDS}
      <input type="hidden" name="lt" value="{LAST_TOPIC_ID}" />
      <!-- BEGIN switch_preview -->
      <input class="button2" type="submit" name="preview" value="{L_PREVIEW}" tabindex="5" />
      <!-- END switch_preview -->
      <!-- BEGIN switch_draft -->
      <input class="button2 {BTN_DRAFT_CLASS}" type="submit" name="draft" value="{L_DRAFT}" title="{L_DRAFT_TITLE}"
        tabindex="7" accesskey="d" {switch_draft.DISABLED_DRAFT} />
      <!-- END switch_draft -->
      <!-- BEGIN switch_publish -->
      <input class="primary" type="submit" name="publish" value="{L_PUBLISH}" tabindex="8" accesskey="p" />
      <!-- END switch_publish -->
      <input class="primary" type="submit" name="post" value="{L_SUBMIT}" title="{L_SUBMIT_TITLE}" tabindex="6"
        accesskey="s" {DISABLED_SUBMIT} />
      <!-- BEGIN switch_signature -->
      <input type="hidden" name="submit" value="{L_SUBMIT}" />
      <!-- END switch_signature -->
      <!-- BEGIN switch_warning_msg -->
      <br />
      <span class="info">{switch_warning_msg.WARNING_CONTENT}</span>
      <!-- END switch_warning_msg -->
    </fieldset>

  </div>

</form>

<!-- HISTORIQUES DES MESSAGES -------->
<!-- (template : posting_topic_review (message)) -------->
<!-- (template : privmsg_topic_review (messages privés)-->
{TOPIC_REVIEW_BOX}


<!-- BEGIN switch_privmsg -->
<div id="find_username" class="jqmWindow"></div>
<div id="group_pm_explain" class="jqmWindow"></div>

<script src="{JQUERY_DIR}jqmodal/jqmodal.js" type="text/javascript"></script>
<!-- END switch_privmsg -->
<script type="text/javascript">
  //<![CDATA[
  $(function () {
    <!-- BEGIN switch_privmsg -->
    privmsg_add_username('{U_SEARCH_USER}', '<br /><input class="inputbox" style="width:15%;margin:1px 0" type="text" name="username[]" />');
    <!-- END switch_privmsg -->
    <!-- BEGIN switch_image_resize -->
          resize_images({ 'selector': '.postbody .content', 'max_width': { switch_image_resize.IMG_RESIZE_WIDTH }, 'max_height': { switch_image_resize.IMG_RESIZE_HEIGHT } });
    <!-- END switch_image_resize -->
    });
  //]]>
</script>

<script type="text/javascript">
  function add_dice(dice_number, dice, number) {
    var content = document.getElementById('post_dice').innerHTML;
    document.getElementById('dice_to_del').innerHTML = '';
    document.getElementById('dice_to_del').id = '';

    var new_tr = document.createElement('tr');
    new_tr.appendChild(document.createElement('td'));
    new_tr.firstChild.innerHTML = '{ROLL_DICE_TITLE_LOW} #' + (dice_number + 1) + ' :&nbsp;<select name="post_dice_' + dice_number + '" id="post_dice_' + dice_number + '" value="' + dice + '">' + content + '</select>&nbsp;<label for="nb_rolls">{switch_roll_dice.L_DICE_ROLLS} : </label><input type="text" size="2" maxlength="3" name="nb_rolls_' + dice_number + '" id="nb_rolls" value="' + number + '" />&nbsp;<span id="dice_to_del"><a href="javascript:add_dice(' + (dice_number + 1) + ',\'\',1)">+</a></span>';
    document.getElementById('list_dice').lastChild.appendChild(new_tr);

    var select_dice = document.getElementById('post_dice_' + dice_number);
    if (dice == '') {
      select_dice.selectedIndex = 0;
    }
    for (var i = 1; select_dice.options[i]; i++) {
      select_dice.options[i].selected = (select_dice.options[i].value == dice);
    }
  }

</script>

{SCEDITOR}