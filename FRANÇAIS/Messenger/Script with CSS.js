!window.FAM && (function() {
    'use strict';
    
    window.FAM = {
  
      // Configuration de Forumactif Messenger
      // Documentation des paramÃ¨tres : https://github.com/SethClydesdale/forumactif-messenger/wiki/Config
      config : {
        chat_page : '',
        chat_permission : 'all',  //  peut Ãªtre [all] ou [member] ou [staff]
        main_title : 'Messenger Forumactif',
        
        // Gestion des onglets initiaux 
        // https://github.com/SethClydesdale/forumactif-messenger/wiki/Config#initial_tabs
        tabs : true, // [true] pour activer les onglets
        initial_tabs : [], 
  
        refresh : 5000, // Taux de rafraichissement du plugin pour vÃ©rifier des nouveaux messages, en milliseconds (ne peut aller sous 3000ms, 3s)
        timeout : 10*60*1000, // Temps avant le mode veille (ici 10 minutes, 10*60*1000ms)
        flood_control : 5000, // Delais necessaire entre chaque message envoye, 0ms peut provoquer un message d'erreur (non recommande)
        max_attachments : 10, // Nombre de médias (image, gif, vidéo) qui peut être ajoutés par message
  
        ignore_announcements : false, // [false] pour voir les sujets d'annonces et de note, [true] pour les cacher
        ignore_firstpost : true, // [true] pour cacher le rappel du premier message, [false] pour l'afficher
        hide_menu_avatar : false, // [false] pour montrer l'avatar de l'utilisateur dans le menu, [true] pour le cacher
      
        no_avatar : 'https://2img.net/i/fa/empty.gif', // url de l'avatar par defaut, vide par defaut
        no_name : 'Invité', // Nom des invites ou des bots
  
        lang : {
          loading : 'Chargement',
          idle : 'Forumactif Messenger est en veille.<br> Cliquez pour reprendre.',
          message_notif_singular : '$N nouveau message',
          message_notif_plural : '$N nouveau messages',
          new_messages : 'Nouveaux Messages',
  
          new_topic : 'Nouveau sujet',
          start_topic : 'Ouvrir un sujet',
          forum_name : 'Forums',
          topic_name : 'Sujets',
  
          msg_placeholder : 'Envoyer un message',
          title_placeholder : 'Titre du sujet',
          not_found : 'Aucun forums ou sujets correspondent à votre recherche.',
          not_found_offline : '<a href="/login">Connectez-vous</a> ou <a href="/register">incrivez-vous</a> pour voir ce forum.',
          load_older : 'Voir les anciens messages',
          delete_message : 'Voulez-vous supprimer ce message ?',
          actions_error : 'Une erreur est survenue en cherchant le message.',
          
          topic_no_subject : 'Vous devez indiquer un titre pour votre sujet.',
          topic_no_message : 'Vous devez écrire un message avant d\'ouvrir votre sujet.',
  
          no_tabs_title : 'Ouvrir un nouvel onglet',
          no_tabs : 'Oh non ! Vous n\'avez pas d\'onglet ouvert. Cliquez pour en ouvrir un.',
          no_tabs_initial : 'Voulez-vous ouvrir les onglets de départ ?',
          
          login_username : 'Nom d\'utilisateur',
          login_password : 'Mot de passe',
          login_auto : 'Connexion automatique : ',
          login_sign_in : 'Connexion',
          login_forgot : 'Mot de passe oublié',
          login_error :  'Le nom d\'utilisateur ou le mot de passe sont invalides.',
          login_logged_in : 'Vous êtes déjà  connecté. <a href="javascript:FAM.page.profile.open();">Cliquez ici</a> pour voir votre profil ou <a href="javascript:FAM.history.back(true);">cliquez ici</a> pour retourner à  la page d\'accueil.',
          
          profile_posts : 'Posts : ',
          profile_PMs : 'MPs : ',
          profile_reputation : 'Réputation : ',
          profile_sign_out : 'Déconnexion',
          profile_confirm_sign_out : 'Voulez-vous vous déconnecter ?',
          profile_logged_out : 'Connectez-vous pour voir votre profil. <a href="javascript:FAM.page.login.open();">Cliquez ici</a> pour vous connecter ou <a href="javascript:FAM.history.back(true);">cliquez ici</a> pour retourner à  la page d\'accueil.',
          profile_my_topics : 'Voir vos sujets',
          profile_my_posts : 'Voir vos messages',
          profile_mark_read : 'Tous marquer comme lus',
          profile_confirm_mark_read : 'Tous les forums et les sujets seront indiqués comme lus, voulez-vous continuer ?',
          profile_forums_marked : 'Tous les forums et les sujets sont indiqués comme lus !',
          profile_delete_cookies : 'Supprimer les cookies',
          profile_confirm_delete_cookies : 'Tous les cookies seront supprimés et votre compte sera déconnecté, voulez-vous continuer ?',
          profile_cookies_deleted : 'Tous les cookies ont été supprimés !',
  
          about_releases : 'Mises à jour',
          about_latest : 'Dernère mise à jour',
          about_sync : 'Sync',
          about_update : 'Update',
          about_updated : 'Forumactif Messenger est à jour !',
          about_new_update : 'Une nouvelle version de Forumactif Messenger est disponible !',
          about_update_info : 'Attention! Il s\'agit du code de base de AngeTuteur. Il n\'est pas adapté à la nouvelle version du Blank Theme.',
          about_help : 'Comment mettre à jour',
          about_bug : 'Signaler un bug',
          
          search_view : 'Voir tous les résultats',
          search_searching : 'Recherche...',
          search_no_results : 'Aucun résultat.',
          search_tip : 'Utilisez la barre de recherche pour trouver un sujet.',
          search_help : 'Voir le guide de recherche',
          search_last_visit : 'Voir les messages depuis votre dernières visite',
          search_active : 'Voir les sujets actifs du jour',
          search_my_posts : 'Voir vos messages',
          search_unanswered : 'Voir les sujets sans réponse',
  
          attach_image : 'Ajouter une image',
          attach_gif : 'Ajouter un GIF',
          attach_video : 'Ajouter une video',
          attach_remove : 'Gestion des médias',
          attach_upload : 'Envoyer',
          attach_uploading : 'La fenêtre d\'upload est des images est déjà ouverte.',
          attach_searchYT : 'Chercher sur Youtube',
          attach_searchingYT : 'Youtube est déjà  ouvert.',
          attach_max : 'Vous avez atteint le nombre maximum de médias à envoyer pour ce message.',
          attach_success : 'Média ajouté !',
          attach_none : 'Il n\'y a aucun média',
  
          giphy_search : 'Rerche de GIF...',
          giphy_searching : 'Recherche...',
          giphy_not_found : 'Aucun résultat trouvé.',
  
          tooltip_openFAM : 'Forumactif Messenger',
          tooltip_back : 'Retour',
          tooltip_menu : 'Ouvrir le menu',
          tooltip_home : 'Page d\'accueil',
          tooltip_login : 'Connexion',
          tooltip_profile : 'Profil',
          tooltip_search : 'Rechercher',
          tooltip_settings : 'Paramètres',
          tooltip_config : 'Paramètres de Forumactif Messenger',
          tooltip_about : 'A propos',
          tooltip_attachments : 'Ajouter un média',
          tooltip_emoji : 'Ajouter un smiley',
          tooltip_send : 'Envoyer un message',
          tooltip_msg_quote : 'Citer',
          tooltip_msg_edit : 'Editer',
          tooltip_msg_delete : 'Supprimer',
  
          error_sending : 'Une erreur empêche l\'envoi de votre message. Réessayer ?',
          error_resend : 'Envoyer',
          error_delete : 'Supprimer',
          error_report : 'Signaler',
  
          guest : 'Invité',
          yes : 'Oui',
          no : 'Non',
          send : 'Envoyer',
          cancel : 'Annuler',
          reset : 'Réinitialiser'
        }
      }, // config_end
      
      // toggles Forumactif Messenger
      toggle : function () {
        if (FAM.cache.chat.dataset.hidden == 'true') {
          FAM.cache.chat.dataset.hidden = false;
  
          if (!FAM.history.restore()) {
            FAM.tab.initial();
            FAM.tab.loaded = true;
          }
  
          if (FAM.fullscreen) {
            document.body.style.overflow = 'hidden';
          }
  
        } else {
          FAM.cache.chat.dataset.hidden = true;
  
          if (FAM.fullscreen) {
            document.body.style.overflow = '';
          }
        }
      },
      // encode strings for sending over AJAX
      encode : function (string) {
        return /UTF-8/i.test(document.characterSet) ?
          encodeURIComponent(string) :
          // URI encoding for NON-UTF8 forums
          encodeURIComponent(escape(string).replace(/%u[A-F0-9]{4}/g, function(match) {
            return '&#' + parseInt(match.substr(2), 16) + ';'
          })).replace(/%25/g, '%')
      },
      
      
      // updates userdata and lang values using page data received via AJAX
      updateUserdata : function (data) {
        var script = document.createElement('SCRIPT');
        script.type = 'text/javascript';
        script.text = data.replace(/[\s\S]*?(if\(typeof\(_userdata\) == "undefined"\)[\s\S]*?)if\(typeof\(_board\) == "undefined"\)[\s\S]*/, '$1');
        document.body.appendChild(script);
      },
  
  
      // abort ongoing requests
      clearRequest : function () {
        if (FAM.request) {
          if (!FAM.request.statusText) {
            FAM.request.abort();
          }
  
          delete FAM.request;
        }
        
        // remove message notifications
        if (FAM.cache.chat.querySelector('#FAM-new-msg-notif')) {
          FAM.message.markRead(true, true);
        }
      },
  
  
      // get the specified page and load the contents into FAM
      get : function (url, title, noHistory) {
        var type = /\/c\d+/.test(url) ? 'category' :
                   /\/f\d+/.test(url) ? 'forum' :
                   /\/t\d+/.test(url) ? 'topic' :
                   /\/search|\/st\/|\/sta\//.test(url) ? 'search' : 'category';
  
        // push new entry to history
        if (!noHistory) {
          FAM.history.update({
            url : url,
            title : title
          });
        }
  
        FAM.clearRequest(); // abort ongoing requests
        FAM.message.listener.stop(); // stop listening for message changes
        FAM.history.toggleBack(); // show / hide back button
        FAM.tab.title(title); // update the main title
  
        // display loading texts and change content class
        FAM.cache.content.className = 'FAM-viewing-' + type;
        FAM.cache.content.innerHTML =
        '<div class="FAM-loading">'+
          '<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>'+
          '<span class="sr-only">' + FAM.config.lang.loading + '</span>'+
        '</div>';
        FAM.cache.actions.innerHTML = '';
  
        // reset the message log
        if (type == 'topic') {
          FAM.message.log = {};
        }
  
        // get the page
        FAM.request = $.get(url, function (data) {
          var a = $(FAM.select[type == 'topic' ? 'post' : 'forumtitle'], data),
              form = type == 'topic' ? $('form[action="/post"]', data)[0] : null,
              i = 0,
              j = a.length,
              html = '';
  
          // create message / forum structure
          for (; i < j; i++) {
            html += type == 'topic' ?
              FAM.message.log[a[i].className.replace(/.*?(post--\d+).*/, '$1')] = FAM.message.parse(a[i], i, a[i+1]) :
              FAM.topic.parse(a[i]);
          }
  
          // add message actions if the opened url is a topic
          if (type == 'topic') {
            var postReply = $(FAM.select.post_reply, data)[0],
                back = $(FAM.select.page_back, data)[0];
  
            FAM.cache.content.innerHTML = (
              back ? // adds button for loading older messages
                '<button id="FAM-load-older" class="FAM-button" onclick="FAM.message.loadOlder(\'' + (back.tagName == 'A' ? back : back.parentNode).href + '\');" type="button">' + FAM.config.lang.load_older + '</button>'
                : ''
            ) + html;
  
            if (postReply) {
              FAM.cache.content.className += ' FAM-reply-open';
              FAM.cache.actions.innerHTML =
              '<span id="FAM-msg-container">'+
                '<textarea id="FAM-msg" placeholder="' + FAM.config.lang.msg_placeholder + '" onkeydown="FAM.message.handleKeys(event);" oninput="FAM.message.validate(this.value);"></textarea>'+
                '<span id="FAM-timeout-bar"></span>'+
              '</span>'+'<div class="FAM-buttons-container">'+
              '<button id="FAM-send" type="button" onclick="FAM.message.send();" data-disabled="true" title="' + FAM.config.lang.tooltip_send + '" type="button"><i class="bi bi-send-fill"></i></button>'+
              '<button id="FAM-attachment" type="button" onclick="FAM.attachments.open(this);" title="' + FAM.config.lang.tooltip_attachments + '" type="button"><i class="bi bi-file-earmark-arrow-up-fill"></i><span id="FAM-attachment-total">0</span></button>'+'<button id="FAM-emoji" type="button" onclick="FAM.message.emoji(this);" title="' + FAM.config.lang.tooltip_emoji + '" type="button"><i class="bi bi-emoji-smile-fill"></i></button>'+( form ? form.outerHTML.replace(/id=".*?"|name=".*?"/, '').replace('<form', '<form id="FAM-post-data" name="fampost" style="display:none"') : '<div id="FAM-post-data-placeholder"></div>'+'</div>'
              
              
              );
  
              $("#FAM-msg").each(function () {
                this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
              }).on("input", function () {
                this.style.height = "auto";
                this.style.height = (this.scrollHeight) + "px";
              });
  
              // authorize the guest for replies
              if (!_userdata.session_logged_in) {
                FAM.message.replyPage = (FAM.fVersion == 5 ? postReply : postReply.parentNode).href;
                FAM.message.authorizeGuest();
              }
            } else {
              FAM.cache.actions.innerHTML = '';
            }
  
            FAM.message.scroll(); // scroll to the newest message
            FAM.message.listener.start(); // listen for new posts and changes to existing messages
  
            // parse servimg data for use in uploading
            var servImgData = {
              account : data.match(/servImgAccount = '(.*?)'/),
              id : data.match(/servImgId = '(.*?)'/),
              f : data.match(/servImgF = '(.*?)'/),
              mode : data.match(/servImgMode = '(.*?)'/)
            },
            authorization = 'multiupload.php?',
            denied = false, i;
  
            for (i in servImgData) {
              if (servImgData[i] && servImgData[i][0] && servImgData[i][1]) {
                authorization += i + '=' + servImgData[i][1] + '&';
              } else {
                denied = true;
                break;
              }
            }
  
            FAM.message.servImgData = denied ? '' : authorization;
  
          // standard forum / category view
          } else {
            var pagination = /forum|search/.test(type) ? $(FAM.select.pagination, data)[0] : null;
  
            FAM.cache.content.innerHTML = (
              pagination ?
              '<div class="FAM-pagination">' +
                (FAM.fVersion == 0 ? pagination.parentNode : pagination).innerHTML // insert pages
                .replace(/&nbsp;|â€¢|<br>|,|:|<span class="page-sep">.*?<\/span>|<a.*?href=".*?mark=topics">.*?<\/a>|<a.*?href="javascript:Pagination\(\);"[^>]*?>.*?<\/a>|<a[^>]*?><img.*?><\/a>/g, '') // cleanup unnecessary elements
                .replace(/>\d+<\/(.*?)>/g, function (match, $1) {
                  // adds event handler and class to page numbers
                  return ' class="FAM-page-link"' + (
                    $1.toUpperCase() == 'A' ? ' onclick="FAM.get(this.href, \'' + title + '\'); return false;"' : ''
                  ) + match;
  
                }).replace(/>\s+</g, '><') + // removes whitespace between tags
              '</div>' : ''
            ) + html ||
            '<div class="FAM-loading FAM-noclick">'+
              '<p class="FAM-clickable"><i class="bi bi-emoji-frown"></i>' + FAM.config.lang.not_found + ( _userdata.session_logged_in ? '' : ' ' + FAM.config.lang.not_found_offline ) + '</p>'+
            '</div>';
            FAM.cache.actions.innerHTML = '';
  
            // add new topic icon if available
            if (type == 'forum') {
              var newTopic = $(FAM.select.new_topic, data)[0];
  
              if (newTopic) {
                FAM.cache.actions.innerHTML =
                '<span id="FAM-new-topic" onclick="FAM.topic.create(\'' + ( FAM.fVersion == 5 ? newTopic : newTopic.parentNode ).href + '\');" title="' + FAM.config.lang.new_topic + '">'+
                  '<i class="bi bi-plus-circle-fill"></i>'+
                '</span>';
              }
            }
  
          }
  
          FAM.clearRequest();
        });
      },
  
  
      // message methods and data
      message : {
        // insert text into the message input
        insert : function (string, pad) {
          var msg = FAM.cache.actions.querySelector('#FAM-msg'),
              addedText = (pad ? ' ' : '') + string + (pad ? ' ' : ''),
              position = 0;
  
          if (msg) {
  
            try {
              position = msg.selectionEnd;
              msg.value = msg.value.slice(0, position) + addedText + msg.value.slice(position, msg.length);
              msg.selectionEnd = position + addedText.length;
            } catch (e) {
              msg.value += addedText;
            }
  
            msg.focus();
            FAM.message.validate(msg.value);
          }
        },
  
  
        // inserts the user @handle into the textarea after clicking a username
        mention : function (caller) {
          FAM.message.insert('@"' + caller.innerText + '"', true);
        },
  
  
        // interact with the specifed message
        interact : function (caller, post) {
          var old = {
            fn : caller.onclick,
            html : caller.innerHTML
          };
  
          caller.innerHTML = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>';
          caller.onclick = null;
  
  
          $.get(post, function (data) {
            var form = $('form[action="/post"]', data)[0],
                mode = post.split('=').pop();
  
            caller.innerHTML = old.html;
            caller.onclick = old.fn;
  
            if (form) {
  
              switch (mode) {
                case 'quote' :
                  FAM.message.insert(form.message.value);
                  break;
  
                case 'editpost' :
                  caller = $(caller).closest('.FAM-msg')[0];
  
                  if (FAM.message.edit.placeholder) {
                    FAM.message.edit.cancel();
                  }
  
                  FAM.message.edit.form = form;
                  FAM.message.edit.backup = caller.outerHTML;
                  
                  FAM.message.edit.placeholderSettings = {
                    id : 'FAM-msg-editing',
                    avatar : caller.querySelector('.FAM-msg-avatar').innerHTML,
                    username : caller.querySelector('.FAM-msg-name').innerHTML,
                    notMine : caller.className.indexOf('FAM-my-msg') == -1
                  };
                  
                  FAM.message.edit.placeholder = FAM.message.write(
                    '<textarea class="FAM-inputbox">' + form.message.value + '</textarea>'+
                    '<div class="FAM-row FAM-center FAM-inline-buttons">'+
                      '<button class="FAM-button FAM-edit-confirm" onclick="FAM.message.edit.confirm();"><i class="bi bi-check-circle-fill"></i></button>'+
                      '<button class="FAM-button FAM-edit-cancel" onclick="FAM.message.edit.cancel();"><i class="bi bi-x-circle"></i></button>'+
                    '</div>',
                    FAM.message.edit.placeholderSettings,
                  caller);
  
                  break;
  
                case 'delete' :
                  if (confirm(FAM.config.lang.delete_message)) {
                    caller = $(caller).closest('.FAM-msg')[0];
                    caller.className += ' FAM-msg-placeholder';
                    caller.querySelector('.FAM-msg-content').innerHTML = '<div class="FAM-msg-text"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i></div>';
  
                    $.post('/post', $(form).serialize() + '&confirm=1', function () {
                      FAM.cache.content.removeChild(caller);
                      delete FAM.message.log['post--' + form.p.value];
                    });
                  }
                  break;
              }
  
            } else {
              alert(FAM.config.lang.actions_error);
            }
          });
        },
  
  
        // edit actions
        edit : {
          // send the updated message
          confirm : function () {
            if (FAM.message.edit.placeholder) {
              FAM.message.backup = FAM.message.edit.placeholder.querySelector('.FAM-inputbox').value;
              FAM.message.send(true, FAM.message.edit.form, {
                replacement : FAM.message.edit.placeholder,
                
                placeholderSettings : {
                  id : 'FAM-msg-placeholder',
                  avatar : FAM.message.edit.placeholderSettings.avatar,
                  username : FAM.message.edit.placeholderSettings.username,
                  notMine : FAM.message.edit.placeholderSettings.notMine
                }
              });
              
              delete FAM.message.edit.placeholder;
            }
          },
  
          // cancel message editing
          cancel : function () {
            if (FAM.message.edit.placeholder) {
              if (FAM.message.edit.placeholder.parentNode) {
                FAM.message.edit.placeholder.insertAdjacentHTML('afterend', FAM.message.edit.backup);
                FAM.cache.content.removeChild(FAM.message.edit.placeholder);
              }
  
              delete FAM.message.edit.placeholder;
            }
          }
        },
  
  
        // write a custom message into the chat for alerts and placeholders
        write : function (message, data, replacement) {
          data = data || {};
          
          var msg = document.createElement('DIV');
          msg.dataset.who = data.username;
          msg.className = 'FAM-msg ' + ( data.notMine ? '' : 'FAM-my-msg' ) + ' ' + (data.id || '');
          msg.innerHTML =
          '<div class="FAM-msg-avatar">' + (data.avatar || _userdata.avatar) + '</div>'+
          '<div class="FAM-msg-box">'+
            '<div class="FAM-msg-name">' + (data.username || '') + '</div>'+
            '<div class="FAM-msg-content">'+
              '<div class="FAM-msg-text">' + (message || '') + '</div>'+
            '</div>'+
            '<div class="FAM-msg-date"></div>'+
          '</div>';
  
          if (replacement) {
            FAM.cache.content.insertBefore(msg, replacement);
            FAM.cache.content.removeChild(replacement);
          } else {
            FAM.cache.content.appendChild(msg);
            FAM.message.scroll();
          }
  
          return msg;
        },
  
  
        // handles key events for the message field
        handleKeys : function (e) {
          if (e) {
            var key = e.key || e.which || e.keyCode;
  
            // handle ENTER key
            if ({
              'Enter' : 1,
              '13' : 1
            }[key] && !e.shiftKey) {
              FAM.cache.actions.querySelector('#FAM-send').dataset.disabled != 'true' && FAM.message.send();
              e.preventDefault();
            }
  
          }
        },
  
  
        // validate a message to make sure there's enough content to post it
        validate : function (message) {
          message = message || FAM.attachments.list.length || null;
  
          var send = FAM.cache.actions.querySelector('#FAM-send'),
              disabled = send.dataset.disabled == 'true';
  
          if (message && disabled) {
            send.dataset.disabled = false;
  
          } else if (!message && !disabled) {
            send.dataset.disabled = true;
          }
        },
  
  
        // send a message to the topic
        send : function (resend, form, msgData) {
          msgData = msgData || {};
          
          if (FAM.message.sending) {
            return false;
          } else {
            FAM.message.sending = true;
          }
  
          FAM.message.clearError(); // removes error messages
  
          var msg = document.getElementById('FAM-msg'),
              placeholder = FAM.message.write('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>', msgData.placeholderSettings || { id : 'FAM-msg-placeholder' }, msgData.replacement), // show placeholder message until the sent message is ready
              val = resend ? FAM.message.backup : msg.value,
              attachments = '',
              i = 0,
              j = FAM.attachments.list.length;
  
          // add attachments to message value
          if (!resend) {
            if (j) {
              for (; i < j; i++) {
                attachments += '[tr][td]' + FAM.attachments.list[i] + '[/td][/tr]';
              }
  
              val += '\n[table class="FAM-attachment"]' + attachments + '[/table]';
  
              FAM.attachments.list = [];
              FAM.cache.actions.querySelector('#FAM-attachment-total').innerText = 0;
            }
  
            // reset message field value
            msg.value = '';
            FAM.message.validate();
            FAM.message.backup = val; // backup the current message in case of errors
          }
  
          // post the message to the topic
          $.post('/post', $(form || document.fampost).serialize().replace(
            /message=.*?(?:&|$)/,
            'message=' + FAM.encode(val) + '&'
          ) + '&post=1&prevent_post=1', function (data) {
            var success = $('a[href^="/viewtopic"]', data)[0],
                captcha = $('#funcaptcha', data);
            
            // update placeholderSettings
            if (msgData.placeholderSettings) {
              var settings = msgData.placeholderSettings;
              settings.id = 'FAM-msg-error';
            }
  
            // get the new message and remove the placeholder + sending restriction
            if (success) {
              FAM.message.check(function () {
  
                // update message replacement
                if (msgData.replacement) {
                  $.get(success.href, function (data) {
                    var post = $('.post--' + form.p.value, data)[0];
  
                    if (post) {
                      placeholder.insertAdjacentHTML('afterend', FAM.message.log[form.p.value] = FAM.message.parse(post, 1, ''));
                      FAM.cache.content.removeChild(placeholder);
                    }
                  });
  
                  // remove placeholder and add new message
                } else {
                  FAM.cache.content.removeChild(placeholder);
                  FAM.message.scroll();
                }
  
                // wait the specified time before sending another message
                // and display an indicator so the user knows when the timeout is over
                var bar = FAM.cache.actions.querySelector('#FAM-timeout-bar'),
                    progress = FAM.config.flood_control;
  
                bar.style.height = '100%';
  
                FAM.message.timeoutBar = setInterval(function () {
                  if ((progress -= 50) <= 0 || !FAM.message.sending) {
                    clearInterval(FAM.message.timeoutBar);
  
                    FAM.message.sending = false;
                    bar.style.height = '0%';
  
                  } else {
                    bar.style.height = progress / FAM.config.flood_control * 100 + '%';
                  }
                }, 40);
  
                // update form data for the guest
                if (!_userdata.session_logged_in) {
                  FAM.message.authorizeGuest();
                }
              });
  
            // insert the captcha form if it's what prevented the message from being sent
            } else if (captcha.length) {
              FAM.cache.content.removeChild(placeholder);
  
              // cleanup the noscript captcha form for usage
              FAM.message.error = FAM.message.write(
                '<div class="FAM-center"><i class="fa fa-exclamation-circle fa-2x"></i></div>'+
                captcha.closest('form')[0].outerHTML.replace(/<noscript>(.*?)<\/noscript>/g, function (match, $1) {
                  return $1.replace(/&lt;|&gt;/g, function (match) {
                    return {
                      '&lt;' : '<',
                      '&gt;' : '>'
                    }[match];
                  });
                })
                .replace(/class="gensmall"/g, '')
                .replace(/<div style="[^"]*?">/, '<div class="FAM-row">')
                .replace(/<input([^>]*?)style="[^"]*?"([^>]*?)>/, '<input class="FAM-inputbox" $1 $2>')
                .replace(/<input[^>]*?type="submit"[^>]*?value="(.*?)"[^>]*?>/, '<button class="FAM-button" type="button">$1</button>')
                .replace('<form', '<form class="FAM-center FAM-captcha"'),
              settings || { id : 'FAM-msg-error' });
  
              // submits the captcha form
              FAM.message.error.querySelector('.FAM-button').onclick = function () {
                FAM.message.sending = false;
                FAM.message.send(true, $(this).closest('form').clone()[0], msgData);
                return false;
              };
  
            // ask to resend if the message was not sent successfully
            } else {
              FAM.message.sending = false;
              FAM.cache.content.removeChild(placeholder);
              FAM.message.error = FAM.message.write(
                '<div class="FAM-center"><i class="fa fa-exclamation-circle fa-2x"></i></div>'+
                FAM.config.lang.error_sending+
                '<textarea id="FAM-resend-message" class="FAM-inputbox">' + FAM.message.backup + '</textarea>'+
                '<a onclick="FAM.message.send(true);">' + FAM.config.lang.error_resend + '</a> | '+
                '<a onclick="FAM.message.clearError();">' + FAM.config.lang.error_delete + '</a>'+
                '<a href="https://github.com/SethClydesdale/forumactif-messenger/wiki/Reporting-Bugs" target="_blank" style="float:right;">' + FAM.config.lang.error_report + '</a>',
              settings || { id : 'FAM-msg-error' });
  
              console.log(data); // log response data for debugging
            }
          });
        },
  
        // removes unsent message error
        clearError : function () {
          if (FAM.message.error) {
            if (FAM.cache.content.querySelector('.FAM-msg-error')) {
              var txt = FAM.message.error.querySelector('#FAM-resend-message');
              if (txt) {
                FAM.message.backup = txt.value;
              }
  
              FAM.cache.content.removeChild(FAM.message.error);
            }
  
            delete FAM.message.error;
          }
        },
  
  
        // loads older messages
        loadOlder : function (page) {
          var button = FAM.cache.content.querySelector('#FAM-load-older');
  
          button.setAttribute('onclick', '');
          button.innerHTML = '<i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i>';
  
          $.get(page, function (data) {
            var back = $(FAM.select.page_back, data)[0],
                post = $(FAM.select.post + (FAM.fVersion == 6 ? '-wrap' : '') + '[class*="post--"]', data),
                html = '',
                i = 0,
                j = post.length,
                load,
                pid;
  
            // parse messages
            for (; i < j; i++) {
              pid = post[i].className.replace(/.*?(post--\d+).*/, '$1');
  
              if (!FAM.message.log[pid]) {
                console.log(post[i]);
                html += FAM.message.log[pid] = FAM.message.parse(post[i], i, post[i+1]);
              }
            }
  
            // restore the load more button functionality or hide it depending if more pages can be loaded
            if (back) {
              button.setAttribute('onclick', "FAM.message.loadOlder('" + ( back.tagName == 'A' ? back : back.parentNode ).href + "')");
              button.innerHTML = FAM.config.lang.load_older;
  
            } else {
              button.style.display = 'none';
            }
  
            // add older messages to the message list
            button.insertAdjacentHTML('afterend', html + '<div id="page-load"></div>');
            load = FAM.cache.content.querySelector('#page-load');
            
            FAM.message.scroll(load.previousSibling.offsetTop - 60); // scroll to the bottom of the old messages
            FAM.cache.content.removeChild(load);
          });
        },
  
  
        // returns the parsed message
        parse : function (post, index, nextPost) {
          // filter out sponsored content, since the message is empty
          if (post.className.indexOf('post--0') != -1) {
            return '';
          }
          
          // ignore first post
          if (FAM.config.ignore_firstpost && index == 0) {
            var indicator = $(FAM.select.post_message + ' > strong:first-child', post)[0];
  
            if (indicator && /&nbsp;/.test(indicator.innerHTML)) {
              return '';
            }
          }
  
          var avatar, name, pLink, group, date, online, msg, quote, edit, remove, nameNext;
  
          quote = $('a[href$="mode=quote"]', post)[0];
          edit = $('a[href$="mode=editpost"]', post)[0];
          remove = $('a[href$="mode=delete"]', post)[0];
  
          avatar = $(FAM.select.post_avatar, post)[0];
  
          // get username
          name = $(FAM.select.post_name, post)[0];
          nameNext = $($(FAM.select.post_name, nextPost)[0]).text();
  
          // check if the user link is available
          pLink = name ? name.querySelector('a[href]') : null;
          pLink = pLink ? '<a href="' + pLink.href + '">' : null;
  
          // check if the user is in a group
          group = name ? name.getElementsByTagName('SPAN')[0] : null;
          group = group ? '<span style="' + group.getAttribute('style') + '"><strong>' : null;
  
          // check if the username is available
          name = name ? name.innerText : FAM.config.no_name;
  
          // check if the user is online
          online = post.className.indexOf('online') != -1 ||
                   (FAM.fVersion == 2 && post.querySelector('.i_icon_online')) ||
                   (FAM.fVersion == 0 && post.nextSibling && post.nextSibling.querySelector('.i_icon_online'));
          
          // date and message elements
          date = $(FAM.select.post_date, post)[0];
          msg = $(FAM.select.post_message, post)[0];
  
          var isHidden = (nameNext.indexOf(name) != 0);
  
          return '<div data-compact="'+ (isHidden ? '' : 'yes') + '" class="FAM-msg' + ( online ? ' FAM-msg-online' : '' ) + ( (name == _userdata.username || !_userdata.session_logged_in && name == FAM.config.lang.guest) ? ' FAM-my-msg' : '' ) + ' ' + post.className.replace(/.*?(post--\d+).*/, '$1') + '">'+
            '<div class="FAM-msg-avatar">'+
              (pLink ? pLink : '')+
              '<img src="' + ( avatar ? avatar.src : FAM.config.no_avatar ) + '" alt="avatar">'+
              (pLink ? '</a>' : '')+
            '</div>'+
  
            '<div class="FAM-msg-box" title="'+( date ? (FAM.fVersion == 5 ? date.innerHTML.split('<').shift() : date.innerHTML.split('>').pop()).replace(/^\s+|\s+$/g, '') : '' )+' ">'+
              '<div class="FAM-msg-content">'+
                '<div class="FAM-msg-text">' + (
                  msg ? msg.innerHTML
                  // replace break tags with line breaks
                  // and remove unnecessary white-space / breaks at the beginning / end of messages
                  .replace(/<br>/g, '\n')
                  .replace(/^\n+|\n+$|^\s+|\s+$/g, '')
                  .replace(/\n/g, '<br>')
  
                  // add unique classes to codeboxes and quotes
                  .replace(/class="(.*?)"/g, function (match, $1) {
                    return $1.indexOf('FAM-') == -1 ? 'class="FAM-' + $1.split(' ').join(' FAM-') + '"' : match;
                  })
                  .replace(/<blockquote>/g, '<blockquote class="FAM-codebox">')
  
                  // add events to media so they open the media viewer on click
                  .replace(/<img/g, '<img onclick="FAM.modal.open(this);"')
                  .replace(/<table class="FAM-attachment">([\s\S]*?)<\/table>/, function (match, $1) {
                    return '<table class="FAM-attachment">' + $1.replace(/<td/g, '<td onclick="FAM.modal.open(this);"') + '</table>';
                  }) : ''
                ) + '</div>'+
                '<div class="FAM-msg-actions">'+
                  (quote ? '<span class="FAM-msg-button FAM-quote-button" onclick="FAM.message.interact(this, \'' + quote.href + '\');" title="' + FAM.config.lang.tooltip_msg_quote + '"><i class="bi bi-reply-fill"></i></span>' : '' )+
                  (edit ? '<span class="FAM-msg-button FAM-edit-button" onclick="FAM.message.interact(this, \'' + edit.href + '\');" title="' + FAM.config.lang.tooltip_msg_edit + '"><i class="bi bi-pencil-fill"></i></span>' : '' )+
                  (remove ? '<span class="FAM-msg-button FAM-delete-button" onclick="FAM.message.interact(this, \'' + remove.href + '\');" title="' + FAM.config.lang.tooltip_msg_delete + '"><i class="bi bi-x"></i></span>' : '' )+
                '</div>'+
              '</div>'+
              
              '<div class="FAM-msg-info">'+
                '<div class="FAM-msg-name">'+
                  '<span class="FAM-name-mention" onclick="FAM.message.mention(this);">'+
                    (pLink ? pLink : '').replace('<a', '<a onclick="return false;"')+
                      (group ? group : '')+
                        name+
                      (group ? '</strong></span>' : '')+
                    (pLink ? '</a>' : '')+
                  '</span>'+
                '</div>'+
  
                  '<div class="FAM-msg-date">' + ( date ? (FAM.fVersion == 5 ? date.innerHTML.split('<').shift() : date.innerHTML.split('>').pop()).replace(/^\s+|\s+$/g, '') : '' ) + '</div>'+
                  '</div>'+
              '</div>'+
          '</div>';
        },
  
  
        // check for new messages / edits and update the message list
        check : function (callback) {
          FAM.request = $.get(FAM.history.log['tab' + FAM.tab.active][FAM.history.log['tab' + FAM.tab.active].length - 1].url, function (data) {
  
            for (var a = $('.post' + (FAM.fVersion == 6 ? '-wrap' : '') + '[class*="post--"]', data), i = 0, j = a.length, pid, msg, row; i < j; i++) {
              pid = a[i].className.replace(/.*?(post--\d+).*/, '$1');
              msg = FAM.message.parse(a[i], i, a[i+1]);
  
              if (msg) {
                // check for edited messages and update them
                if (FAM.message.log[pid]) {
                  if (FAM.message.log[pid] != msg) {
                    FAM.message.log[pid] = msg;
                    row = FAM.cache.content.querySelector('.FAM-msg.' + pid);
  
                    if (row) {
                      row.outerHTML = msg;
                    }
  
                  }
  
                // add in new messages if there are any
                } else {
                  FAM.message.log[pid] = msg;
                  FAM.cache.content.insertAdjacentHTML('beforeend', msg);
                  
                  if (msg.indexOf('FAM-my-msg') == -1) {
                    // display a message notification if the user is viewing older messages
                    FAM.message.notify(FAM.cache.content.lastChild);
                    
                    // play a sound notification if enabled
                    if (FAM.cache.audio && FAM.message.sound) {
                      FAM.cache.audio.play();
                    }
                  }
                }
              }
  
            }
  
            // optional callback to execute, mainly used for send()
            if (typeof callback === 'function') {
              callback();
            }
          });
        },
        
        
        // unread message list
        unread : [],
        
        // notify the user of new messages
        notify : function (newMsg) {
          
          // scroll to the newest message if the last few messages are visible
          if (FAM.message.isVisible(newMsg.previousSibling, 5)) {
            FAM.message.scroll();
            
          } else {
            FAM.message.unread.unshift(newMsg);
            
            var notif = FAM.cache.chat.querySelector('#FAM-new-msg-notif'),
                notifMsg = FAM.config.lang['message_notif_' + (FAM.message.unread.length == 1 ? 'singular' : 'plural')].replace('$N', FAM.message.unread.length);
            
            // insert the new message notif and divider
            if (!notif) {
              FAM.cache.content.insertAdjacentHTML('beforebegin', '<div id="FAM-new-msg-notif" onclick="FAM.message.markRead();">' + notifMsg + '</div>');
              newMsg.insertAdjacentHTML('beforebegin', '<div id="FAM-new-msg-divider">' + FAM.config.lang.new_messages + '</div>');
              
            } else {
              notif.innerHTML = notifMsg;
            }
          }
        },
        
        
        // marks unread messages as read
        markRead : function (noScroll, skipTimeout) {
          var divider = FAM.cache.content.querySelector('#FAM-new-msg-divider'),
              notif = FAM.cache.chat.querySelector('#FAM-new-msg-notif');
          
          if (!noScroll) {
            FAM.message.scroll(divider ? divider.offsetTop - 90 : null);
          }
          
          // hide notif before removing
          notif.style.display = 'none';
          
          // wait a few seconds before removing the divider and notif
          window.setTimeout(function () {
            if (divider && divider.parentNode) {
              divider.parentNode.removeChild(divider);
            }
            
            if (notif) {
              FAM.cache.chat.removeChild(notif);
            }
          }, skipTimeout ? 1 : 10000);
          
          // clear unread messages
          FAM.message.unread = [];
        },
        
        
        // reads messages when the user scrolls
        read : function (caller) {
          if (caller.className.indexOf('FAM-viewing-topic') != -1 && FAM.message.unread.length) {
            
            if (caller.scrollTop / (caller.scrollHeight - caller.clientHeight) == 1 || FAM.message.isVisible('unread', FAM.message.unread.length - 1)) {
              FAM.message.markRead(true);
            }
            
          }
        },
        
        
        // checks if a message is visible
        // lookBack = how many prev messages we should check the visibility state
        isVisible : function (msg, lookBack) {
          if (typeof lookBack == 'undefined') {
            lookBack = 1;
          }
          
          var visible = false,
              initial = true,
              loopUnread = msg == 'unread',
              rect;
          
          // set the first unread message
          if (loopUnread) {
            msg = FAM.message.unread[lookBack];
          }
          
          // loop over the specified messages
          while (lookBack --> 0) {
            // don't switch the msg param on the initial run
            if (initial == true) {
              initial = false;
              
            } else {
              msg = loopUnread ? FAM.message.unread[lookBack] : 
                    msg ? msg.previousSibling : null;
            }
            
            // check if the message is visible
            if (msg) {
              rect = msg.getBoundingClientRect();
  
              // if the message is visible we break out of this loop
              if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
                visible = true;
                break;
              }
              
            // break out of the loop if the msg is null
            } else {
              break;
            }
          }
          
          return visible;
        },
  
  
        // methods that listen for message changes and user activity
        listener : {
          // start listening for changes
          start : function () {
            FAM.message.listener.listening = setInterval(function () {
              if (!FAM.message.sending) {
                FAM.message.check();
              }
            }, FAM.config.refresh < 3000 ? 3000 : FAM.config.refresh);
  
            FAM.message.listener.idle();
            $(document).on('mousemove keypress click', FAM.message.listener.idle);
          },
  
  
          // kill the message listener if it's active
          stop : function () {
            if (FAM.message.listener.listening) {
              FAM.message.sending = false;
              clearInterval(FAM.message.listener.listening);
              delete FAM.message.listener.listening;
            }
  
            if (FAM.message.listener.idling) {
              clearTimeout(FAM.message.listener.idling);
              delete FAM.message.listener.idling;
  
              $(document).off('mousemove keypress click', FAM.message.listener.idle);
            }
          },
  
  
          // kill listener after a specified period of inactivity
          idle : function () {
            if (FAM.message.listener.idling) {
              clearTimeout(FAM.message.listener.idling);
            }
  
            FAM.message.listener.idling = setTimeout(function () {
              FAM.message.listener.stop();
              FAM.cache.chat.insertAdjacentHTML('beforeend',
                '<div id="FAM-idle" class="FAM-loading" onclick="FAM.message.listener.resume();">'+
                  '<p><i class="bi bi-moon-fill"></i>' + FAM.config.lang.idle + '</p>'+
                '</div>'
              );
            }, FAM.config.timeout > 15*60*1000 ? 15*60*1000 : FAM.config.timeout);
          },
  
  
          // resume listening after a period of inactivity
          resume : function () {
            var idle = FAM.cache.chat.querySelector('#FAM-idle');
  
            if (idle) {
              FAM.cache.chat.removeChild(idle);
            }
  
            FAM.message.check(FAM.message.listener.start);
          }
        },
  
  
        // scroll to the newest message or specified amount
        scroll : function (amount) {
          FAM.cache.content.scrollTop = amount || (FAM.cache.content.lastChild ? FAM.cache.content.lastChild.offsetTop - 60 : 0);
        },
  
  
        // call the emoji list to the specified element (caller)
        emoji : function (caller) {
          var active = FAM.cache.actions.querySelector('#FAM-emoji-list'),
              selector;
  
          if (active) {
            active.style.visibility = active.style.visibility == 'hidden' ? 'visible' : 'hidden';
  
          } else {
            selector = document.createElement('IFRAME');
            selector.src = '/post?mode=smilies';
            selector.id = 'FAM-emoji-list';
            selector.className = 'FAM-dropdown';
  
            selector.onload = function () {
              try {
                var doc = this.contentDocument || this.contentWindow.document,
                    emoji = doc.querySelectorAll('a[href*="insert_chatboxsmilie"]'),
                    close = doc.querySelector('a[href="javascript:window.close();"]'),
                    select = doc.getElementById('smilies_categ'),
                    i = 0,
                    j = emoji.length;
                
                for (; i < j; i++) {
                  emoji[i].dataset.emoji = emoji[i].href.replace(/.*?'(.*?)'.*/, '$1');
                  emoji[i].href = '#';
                  emoji[i].onclick = function () {
                    FAM.message.insert(this.dataset.emoji, true);
                    return false;
                  };
                }
  
                // remove the close button
                if (close) {
                  close.parentNode.removeChild(close);
                }
                
                // removes unnecessary contents from the emoji category selector
                if (select) {
                  select.innerHTML = select.categ.outerHTML + select.mode.outerHTML;
                  select.setAttribute('style', 'text-align:center;padding:3px;');
                }
  
              } catch (e) {
                console.log(e);
              }
            };
  
            caller.parentNode.insertBefore(selector, caller);
          }
  
        },
  
  
        // gets the form data for guests
        authorizeGuest : function () {
          $.get(FAM.message.replyPage, function (data) {
            var form = $('form[action="/post"]', data)[0];
  
            if (form) {
              FAM.cache.actions.querySelector('#FAM-post-data-placeholder').innerHTML = form.outerHTML.replace(/id=".*?"|name=".*?"/, '').replace('<form', '<form id="FAM-post-data" name="fampost" style="display:none"');
              document.fampost.username.value = _userdata.username;
            }
          });
        }
      },
  
  
       // attachment methods and data
       attachments : {
        list : [], // list of attachments to add
  
        // opens the attachment drop down
        open : function (caller) {
          var active = FAM.cache.actions.querySelector('#FAM-attach-options'),
              attach;
  
          if (active) {
            active.style.visibility = active.style.visibility == 'hidden' ? 'visible' : 'hidden';
  
          } else {
            attach = document.createElement('DIV');
            attach.id = 'FAM-attach-options';
            attach.className = 'FAM-dropdown';
            attach.innerHTML =
            '<div class="FAM-dropdown-title">' + FAM.config.lang.tooltip_attachments + '</div>'+
            '<div class="FAM-block-option" onclick="FAM.attachments.addImage();"><span class="FAM-option-icon"><i class="fa fa-camera"></i></span> ' + FAM.config.lang.attach_image + '</div>'+
            '<div class="FAM-block-option" onclick="FAM.attachments.addGIF();"><span class="FAM-option-icon FAM-text-icon">GIF</span> ' + FAM.config.lang.attach_gif + '</div>'+
            '<div class="FAM-block-option" onclick="FAM.attachments.addVideo();"><span class="FAM-option-icon"><i class="fa fa-film"></i></span> ' + FAM.config.lang.attach_video + '</div>'+
            '<div class="FAM-block-option" onclick="FAM.attachments.manage();"><span class="FAM-option-icon"><i class="fa fa-wrench"></i></span> ' + FAM.config.lang.attach_remove + '</div>';
  
            caller.parentNode.insertBefore(attach, caller);
          }
        },
  
  
        // completely deletes the old attachment drop down
        close : function () {
          var attach = FAM.cache.actions.querySelector('#FAM-attach-options');
      console.log(attach, FAM.cache.actions);
          if (attach) {
            attach.remove();
          }
        },
  
  
        // go back to the attachments page
        back : function () {
          FAM.attachments.close();
          FAM.attachments.open(FAM.cache.actions.querySelector('#FAM-attachment'));
        },
  
  
        // adds an attachment to the attachment list
        add : function (caller, tag) {
          if (FAM.attachments.list.length >= FAM.config.max_attachments) {
            return alert(FAM.config.lang.attach_max);
          }
  
          var value = caller.tagName == 'INPUT' ? caller.value :
                      caller.tagName == 'IMG' ? caller.src :
                      null;
  
          // change tags and edit values based on video host
          if (tag == 'video') {
            if (/youtube/.test(value)) {
              tag = 'youtube';
  
            } else if (/dailymotion/.test(value)) {
              tag = 'dailymotion';
              value = value.split('_')[0].split('/').pop();
  
            } else {
              tag = 'url';
            }
          }
  
          if (value) {
            FAM.attachments.list.push('[' + tag + ']' + ( /giphy/.test(value) ? value.replace('200w.gif', 'giphy.gif') : value) + '[/' + tag + ']');
            FAM.message.validate();
  
            if (caller.tagName == 'INPUT') {
              caller.value = '';
            }
  
            FAM.cache.actions.querySelector('#FAM-attachment-total').innerText = FAM.attachments.list.length;
  
            // show success notification so the user knows the attachment was added
            if (!FAM.cache.actions.querySelector('#FAM-attach-success')) {
              FAM.cache.actions.querySelector('#FAM-attach-options').insertAdjacentHTML('beforeend',
                '<div id="FAM-attach-success"><i class="fa fa-check-circle"></i>' + FAM.config.lang.attach_success + '</div>'
              );
  
              // remove success message after 300ms
              setTimeout(function () {
                var success = FAM.cache.actions.querySelector('#FAM-attach-success');
  
                if (success) {
                  success.parentNode.removeChild(success);
                }
              }, 300);
            }
          }
        },
  
  
        // remove an attachment from the attachment list
        remove : function (caller) {
          var row = caller.parentNode,
              parent = row.parentNode,
              index = Array.prototype.indexOf.call(parent.children, row);
  
          FAM.attachments.list.splice(index, 1);
          FAM.message.validate();
          FAM.cache.actions.querySelector('#FAM-attachment-total').innerText = FAM.attachments.list.length;
  
          parent.removeChild(row);
  
          if (!parent.children.length) {
            parent.innerHTML = '<p class="FAM-center">' + FAM.config.lang.attach_none + '</p>';
          }
        },
  
  
        // update the selected attachment when its value changes
        update : function (caller) {
          var thumb = caller.previousSibling,
              row = caller.parentNode,
              index = Array.prototype.indexOf.call(row.parentNode.children, row),
              val = caller.value,
              tag = 'img';
  
          if (thumb.tagName == 'IMG') {
            thumb.src = val.replace('giphy.gif', '100w_s.gif');
  
          } else {
            if (/youtube/.test(val)) {
              tag = 'youtube';
  
            } else if (/dailymotion/.test(val)) {
              tag = 'dailymotion';
              val = val.split('_')[0].split('/').pop();
  
            } else {
              tag = 'url';
            }
  
            thumb.href = (tag == 'dailymotion' ? 'https://www.dailymotion.com/video/' : '') + val;
            thumb.firstChild.className = thumb.firstChild.className.replace(/fa-.*/,
              'fa-' + (tag == 'dailymotion' ? 'film' : tag == 'youtube' ? 'youtube-play' : 'external-link')
            );
          }
  
          FAM.attachments.list[index] = '[' + tag + ']' + val + '[/' + tag + ']';
        },
  
  
        // opens the image manager for attaching images
        addImage : function () {
          var attach = FAM.cache.actions.querySelector('#FAM-attach-options');
  
          attach.innerHTML =
          '<div class="FAM-dropdown-inner">'+
            '<div class="FAM-dropdown-title"><span class="FAM-toolbar-button FAM-dropdown-back" onclick="FAM.attachments.back();"><i class="bi bi-arrow-left-short"></i></span>' + FAM.config.lang.attach_image + '</div>'+
            '<div class="FAM-button-input FAM-row">'+
              '<input type="text" class="FAM-inputbox" placeholder="' + FAM.config.lang.attach_image + '">'+
              '<button class="FAM-button-large" onclick="FAM.attachments.add(this.previousSibling, \'img\');" type="button"><i class="bi bi-plus"></i></button>'+
            '</div>'+
            '<div class="FAM-row">'+
              '<button id="FAM-upload" class="FAM-button-large" onclick="FAM.attachments.upload();" type="button">' + FAM.config.lang.attach_upload + '</button>'+
            '</div>'+
          '</div>';
        },
  
  
        // opens Giphy search for attaching a GIF
        addGIF : function () {
          var attach = FAM.cache.actions.querySelector('#FAM-attach-options');
  
          attach.innerHTML =
          '<div class="FAM-dropdown-inner">'+
            '<div class="FAM-dropdown-title"><span class="FAM-toolbar-button FAM-dropdown-back" onclick="FAM.attachments.back();"><i class="fa fa-arrow-left"></i></span>' + FAM.config.lang.attach_gif + '</div>'+
            '<div class="FAM-row">'+
              '<input type="text" id="FAM-giphy-search" class="FAM-inputbox" onkeyup="FAM.attachments.giphy.keyHandler(this, event);" placeholder="' + FAM.config.lang.giphy_search + '">'+
            '</div>'+
            '<div class="FAM-row">'+
              '<div id="FAM-giphy-results" onscroll="FAM.attachments.giphy.scrolling(this);"></div>'+
              '<div id="FAM-giphy-mark"></div>'+
            '</div>'+
          '</div>';
  
          attach.querySelector('#FAM-giphy-search').focus();
        },
  
  
        // opens the video manager for attaching videos
        addVideo : function () {
          var attach = FAM.cache.actions.querySelector('#FAM-attach-options');
  
          attach.innerHTML =
          '<div class="FAM-dropdown-inner">'+
            '<div class="FAM-dropdown-title"><span class="FAM-toolbar-button FAM-dropdown-back" onclick="FAM.attachments.back();"><i class="fa fa-arrow-left"></i></span>' + FAM.config.lang.attach_video + '</div>'+
            '<div class="FAM-button-input FAM-row">'+
              '<input type="text" class="FAM-inputbox" placeholder="' + FAM.config.lang.attach_video + '">'+
              '<button class="FAM-button" onclick="FAM.attachments.add(this.previousSibling, \'video\');" type="button"><i class="fa fa-plus"></i></button>'+
            '</div>'+
            '<div class="FAM-row">'+
              '<button id="FAM-youtube" class="FAM-button" onclick="FAM.attachments.openYoutube();" type="button">' + FAM.config.lang.attach_searchYT + '</button>'+
            '</div>'+
          '</div>';
        },
  
  
        // opens the attachment manager so the user can delete attachments
        manage : function () {
          var attach = FAM.cache.actions.querySelector('#FAM-attach-options'),
              i = 0,
              j = FAM.attachments.list.length,
              attachments = '',
              manager,
              dmotion,
              val;
  
          attach.innerHTML =
          '<div class="FAM-dropdown-inner">'+
            '<div class="FAM-dropdown-title"><span class="FAM-toolbar-button FAM-dropdown-back" onclick="FAM.attachments.back();"><i class="fa fa-arrow-left"></i></span>' + FAM.config.lang.attach_remove + '</div>'+
            '<div id="FAM-attachment-manager"></div>'+
          '</div>';
  
          manager = attach.querySelector('#FAM-attachment-manager');
  
          if (j) {
            for (attachments = ''; i < j; i++) {
              val = FAM.attachments.list[i].replace(/\[.*?\]/g, '');
              dmotion = ( /dailymotion/.test(FAM.attachments.list[i]) ? 'https://www.dailymotion.com/video/' : '' );
  
              attachments +=
              '<div id="FAM-attachment-' + i + '" class="FAM-row">'+
                (/\[img\]/.test(FAM.attachments.list[i]) ?
                  '<img class="FAM-attachment-thumb" src="' + val.replace('giphy.gif', '100w_s.gif') + '" alt="attachment ' + i + '" onmouseover="this.src=this.src.replace(\'100w_s.gif\', \'100w.gif\')" onmouseout="this.src=this.src.replace(\'100w.gif\', \'100w_s.gif\')">' :
                  '<a href="' + dmotion + val + '" class="FAM-attachment-thumb" target="_blank"><i class="fa fa-' + ( dmotion ? 'film' : /youtube/.test(val) ? 'youtube-play' : 'external-link' ) + '"></i></a>'
                )+
                '<input class="FAM-inputbox" type="text" value="' + dmotion + val + '" onkeyup="FAM.attachments.update(this);">'+
                '<span class="FAM-attachment-delete fa-stack" onclick="FAM.attachments.remove(this);">'+
                  '<i class="fa fa-circle fa-stack-2x"></i>'+
                  '<i class="fa fa-times fa-stack-1x fa-inverse"></i>'+
                '</span>'+
              '</div>';
            }
  
          } else {
            attachments = '<p class="FAM-center">' + FAM.config.lang.attach_none + '</p>';
          }
  
          manager.innerHTML = attachments;
        },
  
  
        // opens youtube in a new window
        openYoutube : function (caller) {
          if (FAM.attachments.youtube && !FAM.attachments.youtube.closed) {
            return alert(FAM.config.lang.attach_searchingYT);
          }
  
          FAM.attachments.youtube = window.open('https://www.youtube.com/', '', 'scrollbars=yes,resizable=yes,width=780,height=530');
        },
  
  
        // call the servimg image uploader
        upload : function () {
          if (FAM.attachments.uploader && !FAM.attachments.uploader.closed) {
            return alert(FAM.config.lang.attach_uploading);
          }
  
          FAM.attachments.uploader = window.open('https://servimg.com/' + FAM.message.servImgData, '', 'scrollbars=yes,resizable=yes,width=780,height=530');
        },
  
  
        // giphy search methods and data
        giphy : {
          key : 'Im7J66vBL5I5ROXUq56lCEahyuMrmKif', // PUBLIC BETA KEY dc6zaTOxFJmzC
          limit : 26, // max image results
          delay : 200, // delay before searches commence (200ms)
  
          // search for a GIPHY gif
          search : function (query) {
            if (FAM.attachments.giphy.timeout) {
              FAM.attachments.giphy.abort(); // abort ongoing searches and requests
            }
  
            if (query) {
  
              // set a small timeout in case the user is still typing
              FAM.attachments.giphy.timeout = setTimeout(function () {
                FAM.attachments.giphy.reset(true, FAM.config.lang.giphy_searching);
                FAM.attachments.giphy.query = encodeURIComponent(query);
  
                FAM.attachments.giphy.request = $.get('http://api.giphy.com/v1/gifs/search?q=' + FAM.attachments.giphy.query + '&limit=' + FAM.attachments.giphy.limit + '&rating=pg-13&api_key=' + FAM.attachments.giphy.key, function(data) {
                  // update global data such as page offsets for scrolling
                  FAM.attachments.giphy.request = null;
                  FAM.attachments.giphy.offset = data.pagination.offset + FAM.attachments.giphy.limit;
                  FAM.attachments.giphy.offset_total = data.pagination.total_count;
  
                  FAM.attachments.giphy.reset(true); // reset HTML content
                  FAM.attachments.giphy.addGIF(data); // send data to be parsed
                });
  
              }, FAM.attachments.giphy.delay);
  
            } else {
              FAM.attachments.giphy.reset(true);
            }
          },
  
  
          // abort ongoing searches and requests
          abort : function () {
            if (FAM.attachments.giphy.timeout) {
              clearInterval(FAM.attachments.giphy.timeout);
              FAM.attachments.giphy.timeout = null;
            }
  
            if (FAM.attachments.giphy.request) {
              FAM.attachments.giphy.request.abort();
              FAM.attachments.giphy.request = null;
            }
          },
  
  
          // add gifs to the result list
          addGIF : function (data, loadMore) {
            // setup data and begin parsing results
            var gif = data.data,
                i = 0,
                j = gif.length,
                list = $('<div class="FAM-giphy-imagelist" />')[0];
  
            if (j) {
              for (; i < j; i++) {
                list.appendChild($('<img id="' + gif[i].id + '" src="' + gif[i].images.fixed_width.url + '" />').click(function() {
                  FAM.attachments.add(this, 'img');
                })[0]);
              }
            } else if (!loadMore) {
              FAM.attachments.giphy.reset(true, FAM.config.lang.giphy_not_found);
            }
  
            // add results to the result list
            $('#FAM-giphy-results', FAM.cache.actions).append(list);
          },
  
  
          // listen to the scrolling so we can add more gifs when the user reaches the bottom
          scrolling : function (that) {
            if (that.scrollHeight - that.scrollTop === that.clientHeight) {
              FAM.attachments.giphy.loadMore();
            }
          },
  
  
          // load more results once the user has scrolled through the last results
          loadMore : function () {
            if (FAM.attachments.giphy.offset < FAM.attachments.giphy.offset_total) {
              FAM.attachments.giphy.request = $.get('http://api.giphy.com/v1/gifs/search?q=' + FAM.attachments.giphy.query + '&offset=' + FAM.attachments.giphy.offset + '&limit=' + FAM.attachments.giphy.limit + '&rating=pg-13&api_key=' + FAM.attachments.giphy.key, function (data) {
                FAM.attachments.giphy.request = null;
                FAM.attachments.giphy.offset = data.pagination.offset + FAM.attachments.giphy.limit;
                FAM.attachments.giphy.offset_total = data.pagination.total_count;
  
                FAM.attachments.giphy.addGIF(data, true); // send data to be parsed
              });
            }
          },
  
  
          // reset the dropdown fields
          reset : function (resultsOnly, newContent) {
            $('#FAM-giphy-results', FAM.cache.actions).html(newContent ? newContent : '');
  
            if (!resultsOnly) {
              $('#FAM-giphy-search', FAM.cache.actions).val('');
            }
          },
  
  
          // key handler for search input
          keyHandler : function (caller, e) {
            var k = e.which || e.keyCode;
  
            // ignore specific key inputs to prevent unnecessary requests
            if (k && (k == 16 || k == 17 || k == 18 || k == 20 || k == 37 || k == 38 || k == 39 || k == 40)) {
              return;
            } else {
              FAM.attachments.giphy.search(caller.value);
            }
          }
        }
      },
  
  
      // topic methods
      topic : {
        // open the topic creation page
        create : function (url, noHistory) {
          if (!noHistory) {
            FAM.history.update({
              url : url,
              title : 'New topic',
              recall : {
                path : 'topic.create',
                args : [url, true]
              }
            });
          }
  
          FAM.clearRequest();
          FAM.history.toggleBack();
          FAM.tab.title(FAM.config.lang.new_topic);
  
          FAM.cache.content.className = 'FAM-viewing-newtopic';
          FAM.cache.content.innerHTML =
          '<div class="FAM-loading">'+
            '<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>'+
            '<span class="sr-only">' + FAM.config.lang.loading + '</span>'+
          '</div>';
          FAM.cache.actions.innerHTML = '';
  
          FAM.request = $.get(url, function (data) {
            var form = $('form[action="/post"]', data)[0];
  
            FAM.cache.content.innerHTML =
            '<div id="FAM-newtopic-box" class="FAM-content-block">'+
              '<form name="fampost">'+
                '<div class="FAM-row"><input id="FAM-topic-subject" class="FAM-inputbox" type="text" placeholder="' + FAM.config.lang.title_placeholder + '" name="subject"></div>'+
                '<div class="FAM-row"><textarea id="FAM-topic-message" class="FAM-inputbox" name="message" placeholder="' + FAM.config.lang.msg_placeholder + '"></textarea></div>'+
                '<div class="FAM-row FAM-center"><button class="FAM-button-large" type="button" onclick="FAM.topic.publish()" type="button">' + FAM.config.lang.start_topic + '</button></div>'+
                '<div style="display:none">' + $('input[name="auth[]"]', form)[0].parentNode.innerHTML + '</div>'+
              '</form>'+
            '</div>';
            
            // restore topic data
            if (FAM.topic.backup) {
              document.fampost.subject.value = FAM.topic.backup.subject;
              document.fampost.message.value = FAM.topic.backup.message;
              
              if (!FAM.topic.backup.subject) {
                document.fampost.subject.insertAdjacentHTML('afterend', '<p class="FAM-error FAM-center">' + FAM.config.lang.topic_no_subject + '</p>');
              }
              
              if (!FAM.topic.backup.message) {
                document.fampost.message.insertAdjacentHTML('afterend', '<p class="FAM-error FAM-center">' + FAM.config.lang.topic_no_message + '</p>');
              }
              
              delete FAM.topic.backup;
            }
          });
        },
  
  
        // posts the topic to the forum
        publish : function () {
          // backup topic data in case of error
          FAM.topic.backup = {
            subject : document.fampost.subject.value,
            message : document.fampost.message.value
          };
          
          var formData = $(document.fampost).serialize().replace(/(subject|message)=.*?&/g, function (match, key) {
            return key + '=' + FAM.encode({
              subject : FAM.topic.backup.subject,
              message : FAM.topic.backup.message
            }[key]) + '&';
          }) + '&post=1';
  
          // display loading placeholder
          FAM.cache.content.innerHTML =
          '<div class="FAM-loading">'+
            '<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>'+
            '<span class="sr-only">' + FAM.config.lang.loading + '</span>'+
          '</div>';
  
          // post the topic
          $.post('/post', formData, function (data) {
            var success = $('a[href^="/viewtopic?t="]', data)[0];
            
            if (success) {
              FAM.get('/t' + success.href.replace(/.*?t=(\d+)&.*/, '$1') + '-' + encodeURIComponent(FAM.topic.backup.subject.toLowerCase().replace(/\s/g, '-')) + '?view=newest', FAM.topic.backup.subject);
              delete FAM.topic.backup;
              
            } else {
              var history = FAM.history.log['tab' + FAM.tab.active];
              FAM.topic.create(history[history.length - 1].url, true);
            }
  
          });
        },
  
  
        // returns parsed forum topics and categories
        parse : function (forumtitle) {
          if (FAM.config.ignore_announcements && $(forumtitle).closest(FAM.select.forum_info).find((FAM.fVersion == 4 ? '.topic-type ' : '> ') + ' strong').length) {
            return '';
          }
  
          var row = $(forumtitle).closest(FAM.select.row);
  
          if (!row.find('.AD_LastPA')[0]) { // exclude ad forums
            row = row[0];
  
            var avatar = $(FAM.fVersion == 6 ? '.lastpostavatar img' : '.lastpostavatar img' || '.lastpostavatar img', row)[0],
            date = $(FAM.select.row_date, row)[0],
            type2 = /c\d+-/.test(forumtitle.href) ? 'category' :
                    /f\d+-/.test(forumtitle.href) ? 'forum' :
                    /t\d+-/.test(forumtitle.href) ? 'topic' : 'unknown';
                    
            // remove dfn/i texts on phpbb3, modernbb, and awesomebb
            if (date && FAM.fVersion == 6 && /<a/.test(date.innerHTML)) {
              date.innerHTML = date.innerHTML.replace(/<a.*?\/a>/g, 'bb');
            }
  
            // build the markup for forum and topic containers
            return '<div class="FAM-chat FAM-' + type2 + ( $('a[href$="view=newest"]', row)[0] ? ' FAM-new-post' : '' ) +'" onclick="FAM.get(\'' + forumtitle.href.replace(/\?.*$/, '') + ( type2 == 'topic' ? '?view=newest' : '' ) + '\', this.querySelector(\'.FAM-chat-title\').innerText);">'+
  
              
              '<div class="FAM-topic-name">'+
                '<i class="bi bi-chat-fill"></i>' + FAM.config.lang.topic_name +
              '</div>'+
  
              '<div class="FAM-chat-avatar">'+
                '<img src="' + ( avatar ? avatar.src : FAM.config.no_avatar ) + '" alt="avatar">'+
              '</div>'+
  
              '<div class="FAM-chat-content">'+
                '<div class="FAM-chat-title">' + forumtitle.innerText + '</div>'+
                '<div class="FAM-chat-date">' + ( date ? date.innerHTML : '' ) + '</div>'+
              '</div>'+
            '</div>';
          } else {
            return '';
          }
        }
      },
  
  
      // github pages
      page : {
        // pages directory
        dir : 'https://raw.githubusercontent.com/SethClydesdale/forumactif-messenger/master/pages/',
        
        // information about Forumactif Messenger
        about : {
          open : function (noHistory) {
            FAM.page.setup('about', noHistory);
  
            FAM.request = $.get(FAM.page.dir + 'about' + FAM.config.update_channel + '.html', function (data) {
              FAM.cache.content.innerHTML = FAM.page.parse(data, {
                client_version : '<a href="https://github.com/SethClydesdale/forumactif-messenger/releases/tag/' + FAM.version + '" target="_blank">' + FAM.version + '</a>'
  
              }).replace('<textarea', '<textarea style="display:none;"');
  
              var status = FAM.cache.content.querySelector('#FAM-version-status'),
                  icon = FAM.cache.content.querySelector('#FAM-version-status-icon'),
                  update = FAM.cache.content.querySelector('#FAM-update');
              
              // hides the sync/update button for non-admins
              if (_userdata.user_level != 1) {
                update.style.display = 'none';
              }
  
              // display the version status of FAM
              if (FAM.version == FAM.cache.content.querySelector('#FAM-version-github').innerHTML) {
                status.innerHTML = FAM.config.lang.about_updated;
                icon.innerHTML = '<i class="fa fa-check-circle"></i>';
  
              } else {
                status.innerHTML = FAM.config.lang.about_new_update;
                icon.innerHTML = '<i class="fa fa-exclamation-circle"></i>';
                update.innerHTML = '<i class="fa fa-arrow-circle-up"></i> ' + FAM.config.lang.about_update;
              }
  
            });
          },
  
  
          // get the latest version of Forumactif Messenger from Github
          update : function () {
            FAM.cache.content.querySelector('#FAM-update').outerHTML = '<p id="FAM-update" style="text-align:center;"><i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i></p>';
  
            $.get('https://raw.githubusercontent.com/SethClydesdale/forumactif-messenger/master/fam' + FAM.config.update_channel + '.js', function (data) {
              var config = data.replace(/[\s\S]*?(config.*?:.*?\{[\s\S]*?\},)[\s\S]*/, '$1').replace(/config.*?:/, 'window.fam_new_config = ').replace(/,$/, ';'),
                  lang = data.replace(/[\s\S]*?(lang.*?:.*?\{[\s\S]*?\})[\s\S]*/, '$1').replace(/lang.*?:/, 'window.fam_new_lang = '),
                  script = document.createElement('SCRIPT'),
                  update = FAM.cache.content.querySelector('#FAM-update-code'),
                  k;
  
              script.type = 'text/javascript';
              script.text = config + '\n' + lang;
              document.body.appendChild(script);
  
              for (k in fam_new_lang) {
                if (typeof FAM.config.lang[k] === 'undefined') {
                  FAM.config.lang[k] = fam_new_lang[k];
                }
              }
  
              for (k in fam_new_config) {
                if (typeof FAM.config[k] === 'undefined') {
                  FAM.config[k] = fam_new_config[k];
                }
              }
  
              FAM.cache.content.querySelector('#FAM-update').outerHTML = '<div class="FAM-row">' + FAM.config.lang.about_update_info + '</div>';
  
              update.value = data.replace(/config.*?:.*?\{[\s\S]*?\},/, 'config : ' + JSON.stringify(FAM.config, null, 2) + ',');
              update.style.display = '';
            });
          }
        },
  
  
        // general settings for Forumactif Messenger that the user can personalize
        settings : {
          // opens the settings page
          open : function (noHistory) {
            FAM.page.setup('settings', noHistory);
  
            FAM.request = $.get(FAM.page.dir + 'settings.html', function (data) {
              var settings =  window.JSON && window.localStorage && localStorage.fam_settings ? JSON.parse(localStorage.fam_settings) : {},
                  theme = 'value="' + settings.fam_active_theme + '"';
  
              FAM.cache.content.innerHTML = FAM.page.parse(data, {
                fam_fullscreen : settings.fam_fullscreen || '',
                fam_window_width : settings.fam_window_width || '',
                fam_window_height : settings.fam_window_height || '',
                fam_theme_color : settings.fam_theme_color || '#3399FF',
                fam_sound_notif : typeof settings.fam_sound_notif != 'undefined' ? settings.fam_sound_notif : (FAM.config.sound_notif_auto_enabled == true ? 'checked' : '')
                
              }).replace(
                theme, 
                theme + ' selected'
              );
              
              // show admin config for admins only
              if (_userdata.user_level == 1) {
                FAM.cache.content.querySelector('#FAM-settings-admin').style.display = '';
              }
  
            });
          },
  
  
          // update FAM settings when changes are made
          update : function (caller, noCache) {
            var id = caller ? caller.id.replace(/-/g, '_').toLowerCase() : '';
  
            // take action depending on the setting that was changed
            switch (id) {
              case 'fam_fullscreen' :
                if (caller.checked) {
                  FAM.fullscreen = true;
                  FAM.cache.chat.className += ' FAM-fullscreen';
                  document.body.style.overflow = 'hidden';
  
                } else {
                  FAM.fullscreen = false;
                  FAM.cache.chat.className = FAM.cache.chat.className.replace('FAM-fullscreen', '');
                  document.body.style.overflow = '';
                }
                break;
  
              case 'fam_window_width' :
                FAM.cache.chat.style.width = caller.value ? (caller.value + '%') : '';
                break;
  
              case 'fam_window_height' :
                FAM.cache.chat.style.height = caller.value ? (caller.value + '%') : '';
                break;
                
              case 'fam_active_theme' :
                FAM.page.settings.changeTheme(caller.value);
                break;
                
              case 'fam_theme_color' :
                FAM.page.settings.changeColor(caller.value);
                break;
                
              case 'fam_sound_notif' :
                FAM.message.sound = caller.checked;
                break;
            }
  
            // cache user settings to localStorage
            if (!noCache && window.JSON && window.localStorage) {
              var settings = localStorage.fam_settings ? JSON.parse(localStorage.fam_settings) : {};
  
              settings[id] = caller.type == 'checkbox' ? caller.checked ? 'checked' : '' : caller.value;
  
              localStorage.fam_settings = JSON.stringify(settings);
            }
          },
  
  
          // reset FAM settings to their default states
          reset : function () {
            if (confirm(FAM.config.lang.settings_default_confirm)) {
              // reset fields to their default value
              FAM.cache.content.querySelector('#FAM-fullscreen').checked = false;
              FAM.cache.content.querySelector('#FAM-window-width').value = '';
              FAM.cache.content.querySelector('#FAM-window-height').value = '';
              FAM.cache.content.querySelector('#FAM-active-theme').firstChild.selected = true;
              FAM.cache.content.querySelector('#FAM-sound-notif').checked = FAM.config.sound_notif_auto_enabled;
  
              // update the settings
              for (var a = FAM.cache.content.querySelectorAll('input, select'), i = 0, j = a.length; i < j; i++) {
                switch (a[i].id) {
                  case 'FAM-theme-color' :
                    FAM.page.settings.resetColor(a[i].nextSibling, true);
                    break;
                    
                  default :
                    FAM.page.settings.update(a[i], true);
                    break;
                }
              }
  
              // delete locally cached settings
              if (window.localStorage && localStorage.fam_settings) {
                localStorage.removeItem('fam_settings');
              }
            }
          },
  
  
          // applies cached settings on startup
          apply : function () {
            
            // auto enable sound notif if setting is unset
            function applySoundNotif (settings) {
              settings = settings || {};
              
              if (typeof settings.fam_sound_notif == 'undefined' && FAM.config.sound_notif_auto_enabled) {
                FAM.message.sound = true;
              }
            };
            
            // apply all settings
            if (window.JSON && window.localStorage && localStorage.fam_settings) {
              var settings = JSON.parse(localStorage.fam_settings), i;
  
              for (i in settings) {
                switch (i) {
                  case 'fam_fullscreen' :
                    if (settings[i] == 'checked' && !FAM.config.embed) {
                      FAM.cache.chat.className += ' FAM-fullscreen';
                      FAM.fullscreen = true;
                    }
                    break;
  
                  case 'fam_window_width' :
                    FAM.cache.chat.style.width = settings[i] ? settings[i] + '%' : '';
                    break;
  
                  case 'fam_window_height' :
                    FAM.cache.chat.style.height = settings[i] ? settings[i] + '%' : '';
                    break;
                    
                  case 'fam_active_theme' :
                    FAM.page.settings.changeTheme(settings[i]);
                    break;
  
                  case 'fam_theme_color' :
                    FAM.page.settings.changeColor(settings[i]);
                    break;
                    
                  case 'fam_sound_notif' :
                    FAM.message.sound = settings[i] == 'checked';
                    break;
                }
              }
  
              applySoundNotif(settings);
            } else {
              applySoundNotif();
            }
          },
          
          
          // changes the main theme for Forumactif Messenger
          // changes the primary color of Forumactif Messenger
          // resets the primary theme color
         
  
        },
        
        
        // opens the internal configuration page of Forumactif Messenger
        config : {
          // open the configuration page
          open : function (noHistory) {
            FAM.page.setup('config', noHistory);
  
            FAM.request = $.get(FAM.page.dir + 'config.html', function (data) {
              var config = {},
                  permission = 'value="' + FAM.config.chat_permission + '"',
                  channel = 'value="' + (FAM.config.update_channel == '-dev' ? 'developer' : 'production') + '"',
                  
                  check = {
                    tabs : 1,
                    ignore_announcements : 1,
                    ignore_firstpost : 1,
                    hide_menu_avatar : 1,
                    sound_notif_auto_enabled : 1
                  },
                  
                  int = {
                    refresh : 1000,
                    timeout : 60*1000,
                    flood_control : 1000
                  },
                  
                  i, lang = '', q;
              
              // setup config variables for the config page
              for (i in FAM.config) {
                config['fam_' + i] = check[i] ? FAM.config[i] ? 'checked' : '' :
                                     int[i] ? FAM.config[i] / int[i] :
                                     FAM.config[i];
              }
              
              // apply page html
              FAM.cache.content.innerHTML = FAM.page.parse(
                data, 
                config
              ).replace(permission, permission + ' selected')
               .replace(channel, channel + ' selected');
              
              // add help icons
              for (var a = FAM.cache.content.querySelectorAll('label'), i = 0, j = a.length, id; i < j; i++) {
                id = a[i].getAttribute('for');
                
                if (id) {
                  a[i].nextSibling.insertAdjacentHTML('beforeend', '<a class="FAM-icon-link" href="https://github.com/SethClydesdale/forumactif-messenger/wiki/Config#' + id.replace('FAM-config-', '') + '" target="_blank"><i class="fa fa-question-circle"></i></a>');
                }
              }
              
              // insert initial tabs if there are any
              if (FAM.config.initial_tabs.length) {
                FAM.page.config.addInitialTab(FAM.config.initial_tabs);
              }
              
              // insert lang fields
              for (i in FAM.config.lang) {
                q = FAM.config.lang[i].indexOf('"') != -1 ? "'" : '"';
                lang += 
                '<div class="FAM-row">'+
                  '<label for="FAM-lang-' + i + '" class="FAM-label">' + i + ' : </label>'+
                  '<div class="FAM-label-value">'+
                    '<input id="FAM-lang-' + i + '" class="FAM-inputbox" type="text" value=' + q + FAM.config.lang[i] + q + '>'+
                  '</div>'+
                '</div>';
              }
              
              FAM.cache.content.querySelector('#FAM-config-lang-data').firstChild.insertAdjacentHTML('afterend', lang);
            });
          },
          
          
          // imports the selected language file
          importLang : function () {
            var select = FAM.cache.content.querySelector('#FAM-config-lang-import'),
                lang = select.value,
                langName = select.querySelector('[value="' + lang + '"]').innerText;
            
            if (lang && confirm(FAM.config.lang.config_import_lang_confirm.replace('$LANG', langName))) {
              var button = FAM.cache.content.querySelector('#FAM-config-lang-import-confirm'),
                  html = button.innerHTML,
                  click = button.getAttribute('onclick');
              
              // show a placeholder while loading the lang file
              button.innerHTML = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>';
              button.setAttribute('onclick', '');
              
              // get the language file from github
              $.get('https://raw.githubusercontent.com/SethClydesdale/forumactif-messenger/master/lang/' + lang + '.js', function (data) {
                var script = document.createElement('SCRIPT'),
                    newAlias = '',
                    alias,
                    i,
                    q;
                
                script.type = 'text/javascript';
                script.text = data;
                document.body.appendChild(script);
                
                for (i in fam_lang_import) {
                  alias = FAM.cache.content.querySelector('#FAM-lang-' + i);
                  
                  // change alias value
                  if (alias) {
                    alias.value = fam_lang_import[i];
                    
                  // create a new alias if it doesn't exist
                  } else {
                    q = fam_lang_import[i].indexOf('"') != -1 ? "'" : '"';
                    newAlias += 
                    '<div class="FAM-row">'+
                      '<label for="FAM-lang-' + i + '" class="FAM-label">' + i + ' : </label>'+
                      '<div class="FAM-label-value">'+
                        '<input id="FAM-lang-' + i + '" class="FAM-inputbox" type="text" value=' + q + fam_lang_import[i] + q + '>'+
                      '</div>'+
                    '</div>';
                  }
                }
                
                // add the new aliases to the list
                if (newAlias) {
                  FAM.cache.content.querySelector('#FAM-config-lang-data').firstChild.insertAdjacentHTML('afterend', newAlias);
                }
  
                // restore button state and display a success message
                button.innerHTML = html;
                button.setAttribute('onclick', click);
                alert(FAM.config.lang.config_import_lang_success.replace('$LANG', langName));
              });
            }
          },
          
          
          // exports the admin's lang file for sharing
          exportLang : function () {
            var a = FAM.cache.content.querySelectorAll('#FAM-config-lang-data .FAM-inputbox[id^="FAM-lang-"]'),
                textarea = FAM.cache.content.querySelector('#FAM-config-lang-file'),
                lang = {},
                i = 0,
                j = a.length;
  
            for (; i < j; i++) {
              lang[a[i].id.replace('FAM-lang-', '')] = a[i].value;
            }
            
            FAM.cache.content.querySelector('#FAM-config-lang-success').innerHTML = FAM.config.lang.config_export_lang_success;
            textarea.value = JSON.stringify(lang, null, 2);
            textarea.style.display = '';
          },
          
          
          // adds an initial tab to the list
          addInitialTab : function (tabList, scroll) {
            tabList = tabList || [{
              title : '',
              url : '',
              html : ''
            }];
            
            var list = FAM.cache.content.querySelector('#FAM-config-initial_tabs'),
                tabs = '',
                i = 0,
                j = tabList.length,
                // returns a row for the tab fields
                addRow = function (label, value) {
                  return '<div class="FAM-row">'+
                    '<label class="FAM-label">' + label + ' : </label>'+
                    '<div class="FAM-label-value">'+
                      '<input class="FAM-inputbox FAM-init-tab-' + label + '" type="text" value="' + ( value || '' ) + '">'+
                    '</div>'+
                  '</div>'; 
                };
            
            // put together the tab fields
            for (; i < j; i++) {
              tabs += 
              '<div class="FAM-init-tab FAM-border-box">'+
                addRow('title', tabList[i].title)+
                addRow('url', tabList[i].url)+
                addRow('html', tabList[i].html)+
                '<div class="FAM-init-tab-controls FAM-center">'+
                  '<a href="#" class="FAM-icon-link" onclick="FAM.page.config.moveInitialTab(this, \'up\'); return false;"><i class="fa fa-arrow-circle-up"></i></a>'+
                  '<a href="#" class="FAM-icon-link" onclick="FAM.page.config.moveInitialTab(this, \'down\'); return false;"><i class="fa fa-arrow-circle-down"></i></a>'+
                  '<a href="#" class="FAM-icon-link" onclick="FAM.page.config.removeInitialTab(this); return false;"><i class="fa fa-times-circle"></i></a>'+
                '</div>'+
              '</div>';
            }
            
            list.insertAdjacentHTML('beforeend', tabs);
            
            if (scroll) {
              FAM.cache.content.scrollTop = list.lastChild.offsetTop - 80;
            }
          },
          
          
          // moves a tab in the initial tab list
          moveInitialTab : function (caller, direction) {
            var tab = caller.parentNode.parentNode,
                tabList = tab.parentNode;
            
            switch (direction) {
              case 'up' :
                var next = tab.previousSibling;
                if (next && next.className.indexOf('FAM-init-tab') != -1) {
                  tabList.insertBefore(tab, tab.previousSibling);
                  
                } else {
                  tabList.appendChild(tab);
                }
                
                break;
                
              case 'down' :
                var next = tab.nextSibling,
                    nextNext = next ? next.nextSibling : null;
                
                if (!next) {
                  tabList.insertBefore(tab, tabList.querySelector('.FAM-init-tab'));
                  
                } else if (nextNext) {
                  tabList.insertBefore(tab, nextNext);
                  
                } else if (!nextNext) {
                  tabList.appendChild(tab);
                }
                break;
            }
            
            FAM.cache.content.scrollTop = tab.offsetTop - 80;
          },
          
          
          // removes a tab from the initial tab list
          removeInitialTab : function (caller) {
            if (confirm(FAM.config.lang.config_remove_tab)) {
              var tab = caller.parentNode.parentNode;
              tab.parentNode.removeChild(tab);
            } 
          },
          
          
          // update the configuration
          update : function () {
            var button = FAM.cache.content.querySelector('#FAM-config-update'),
                update = FAM.cache.content.querySelector('#FAM-config-code'),
                click = button.getAttribute('onclick');
            
            // display a spinner while things load
            button.innerHTML = '<i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i>';
            button.setAttribute('onclick', '');
  
            // get the latest version of FAM
            $.get('https://raw.githubusercontent.com/SethClydesdale/forumactif-messenger/master/fam' + FAM.config.update_channel + '.js', function (data) {
              var configClone = Object.assign({}, FAM.config),
                  int = {
                    refresh : 1000,
                    timeout : 60*1000,
                    flood_control : 1000
                  },
                  field,
                  i;
  
              // update the configuration object
              for (i in configClone) {
                field = FAM.cache.content.querySelector('#FAM-config-' + i);
                
                if (field) {
                  configClone[i] = field.type == 'checkbox' ? field.checked :
                                   int[i] ? +field.value * int[i] :
                                   field.value;
                }
              }
              
              // update initial tabs
              configClone.initial_tabs = [];
              for (var a = FAM.cache.content.querySelectorAll('.FAM-init-tab'), i = 0, j = a.length; i < j; i++) {
                configClone.initial_tabs.push({
                  title : a[i].querySelector('.FAM-init-tab-title').value,
                  url : a[i].querySelector('.FAM-init-tab-url').value,
                  html : a[i].querySelector('.FAM-init-tab-html').value
                });
              }
              
              // update lang data
              for (i in configClone.lang) {
                field = FAM.cache.content.querySelector('#FAM-lang-' + i);
                
                if (field) {
                  configClone.lang[i] = field.value;
                }
              }
  
              // return the button's normal state
              button.innerHTML = FAM.config.lang.config_update;
              button.setAttribute('onclick', click);
  
              // display the updated code with a help message
              FAM.cache.content.querySelector('#FAM-config-code-success').innerHTML = FAM.config.lang.about_update_info;
              update.value = data.replace(/config.*?:.*?\{[\s\S]*?\},/, 'config : ' + JSON.stringify(configClone, null, 2) + ',');
              update.style.display = '';
            });
          }
        },
  
  
        // search page that allows the user to search for specific topics
        search : {
          // opens the search page
          open : function (noHistory) {
            FAM.page.setup('search', noHistory);
  
            FAM.request = $.get(FAM.page.dir + 'search.html', function (data) {
              FAM.cache.content.innerHTML = FAM.page.parse(data);
              FAM.page.search.button = FAM.cache.content.querySelector('#FAM-search-view');
              FAM.page.search.results = FAM.cache.content.querySelector('#FAM-search-results');
            });
          },
  
  
          // performs an AJAX search with the given string
          query : function (str) {
            FAM.page.search.clear();
            FAM.page.search.data = {
              URI : '/search?search_keywords=' + encodeURIComponent(str) + '*',
              key : str
            };
  
            // only perform search with 3 letter (or greater) words
            if (str.length >= 3) {
              FAM.page.search.results.innerHTML = '<p class="FAM-center">' + FAM.config.lang.search_searching + '</p>';
  
              // show view search button
              if (FAM.page.search.button.style.display == 'none') {
                FAM.page.search.button.style.display = '';
              }
  
              // wait a few seconds before sending the request
              FAM.page.search.wait = setTimeout(function () {
  
                // perform a search with the specified keywords
                FAM.page.search.request = $.get(FAM.page.search.data.URI, function (data) {
                  var a = $(FAM.select.forumtitle, data),
                      i = 0,
                      j = a.length,
                      html = '';
  
                  for (; i < j; i++) {
                    html += FAM.topic.parse(a[i]);
                  }
  
                  FAM.page.search.results.innerHTML = html ? html : '<p class="FAM-center">' + FAM.config.lang.search_no_results + '</p>';
                });
  
              }, 100);
  
            } else if (FAM.page.search.button.style.display != 'none') {
              FAM.page.search.button.style.display = 'none';
              FAM.page.search.results.innerHTML = '<p class="FAM-center">' + FAM.config.lang.search_tip + '</p>';
            }
  
          },
  
  
          // bring up the search results as a normal page
          get : function () {
            FAM.page.search.clear();
            FAM.get(FAM.page.search.data.URI, FAM.config.lang.tooltip_search + ' - ' + FAM.page.search.data.key);
          },
  
  
          // clear ongoing queues and searches
          clear : function () {
            // clear ongoing timeout
            if (FAM.page.search.wait) {
              clearTimeout(FAM.page.search.wait);
              delete FAM.page.search.wait;
            }
  
            // clear ongoing requests
            if (FAM.page.search.request) {
              FAM.page.search.request.abort();
              delete FAM.page.search.request;
            }
          }
        },
        
        
        // allows the user to sign into their account if logged out
        login : {
          // opens the login page
          open : function (noHistory) {
            FAM.page.setup('login', noHistory);
            FAM.page.login.submitting = false;
  
            // get the login form if the user is logged out
            if (!_userdata.session_logged_in) {
              FAM.request = $.get(FAM.page.dir + 'login.html', function (data) {
                FAM.cache.content.innerHTML = FAM.page.parse(data);
                FAM.cache.content.querySelector('#FAM-login-username').focus();
              });
              
            } else { // otherwise show an error message
              FAM.cache.content.innerHTML = '<div class="FAM-content-block FAM-center"><p>' + FAM.config.lang.login_logged_in + '</p></div>';
            }
  
          },
          
          
          // submits the login information to the server to sign the user in
          submit : function () {
            if (!FAM.page.login.submitting) {
              var button = document.getElementById('FAM-login-submit'),
                  error = document.getElementById('FAM-login-error');
              
              FAM.clearRequest();
              FAM.page.login.submitting = true;
              button.innerHTML = '<i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i>';
              error.style.display = 'none';
              
              FAM.request = $.post('/login', $(document.fam_form_login).serialize() + '&login=1', function (data) {
                FAM.page.login.submitting = false;
                button.innerHTML = FAM.config.lang.login_sign_in;
                
                // check for successful login by searching for session_logged_in status
                if (/_userdata\["session_logged_in"\] = 1/.test(data)) {
                  // update userdata and lang values
                  FAM.updateUserdata(data);
                  
                  // change the menu avatar
                  if (!FAM.config.hide_menu_avatar) {
                    document.getElementById('FAM-menu-avatar').innerHTML = _userdata.avatar;
                  }
                  
                  // open the profile page
                  FAM.page.profile.open();
                  FAM.page.login.toggleMenuActions();
                  
                } else { // show an error message if login is unsuccessful
                  error.style.display = '';
                }
              });
            }
          },
          
          
          // toggles the login and profile menu actions 
          toggleMenuActions : function () {
            document.getElementById('FAM-menu-login').style.display = _userdata.session_logged_in ? 'none' : '';
            document.getElementById('FAM-menu-profile').style.display = _userdata.session_logged_in ? '' : 'none';
          }
        },
        
        
        // let's the user view their profile and log out of their account
        profile : {
          // opens the profile page
          open : function (noHistory) {
            FAM.page.setup('profile', noHistory);
            FAM.page.profile.logging_out = false;
  
            // get the user profile if logged in
            if (_userdata.session_logged_in) {
              FAM.request = $.get(FAM.page.dir + 'profile.html', function (data) {
                FAM.cache.content.innerHTML = FAM.page.parse(data, {
                  fam_profile_avatar : _userdata.avatar,
                  fam_profile_username : _userdata.username,
                  fam_profile_rank : _lang.rank_title || '',
                  fam_profile_posts : _userdata.user_posts,
                  fam_profile_PMs : _userdata.user_nb_privmsg,
                  fam_profile_reputation : _userdata.point_reputation || 0,
                  username : _userdata.username
                });
  
              });
              
            } else { // otherwise show an error message
              FAM.cache.content.innerHTML = '<div class="FAM-content-block FAM-center"><p>' + FAM.config.lang.profile_logged_out + '</p></div>';
            }
          },
          
          
          // log out of the current profile
          logout : function () {
            if (!FAM.page.profile.logging_out && confirm(FAM.config.lang.profile_confirm_sign_out)) {
              var logout = document.getElementById('logout'),
                  button = document.getElementById('FAM-profile-logout');
              
              FAM.clearRequest();
              FAM.page.profile.logging_out = true;
              button.innerHTML = '<i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i>';
              
              // if the default login link is present we can get the data from the href attribute. (FASTER)
              FAM.request = $.get('/login?logout=true&change_version=prosilver', function (data) {
                var form = $('form[action^="/login?logout"]', data)[0];
  
                // if the logout form is preset we can proceed with logging the user out
                if (form) {
                  FAM.request = $.get(form.action + '&key=' + form.key.value, function (data) {
                    FAM.updateUserdata(data);
                    FAM.page.profile.logging_out = false;
                    FAM.page.login.open();
                    FAM.page.login.toggleMenuActions();
                  });
  
                } else { // otherwise we should send them to the logout page directly
                  window.location.href = '/login?logout=1';
                }
              });
            }
          },
          
          
          // process specific actions, such as marking forums read and deleting cookies
          process : function (caller, action) {
            if (confirm(FAM.config.lang['profile_confirm_' + action])) {
              // store old values so they can be restored later
              var click = caller.getAttribute('onclick'),
                  html = caller.innerHTML;
              
              // show loading spinner
              caller.setAttribute('onclick', 'return false;');
              caller.innerHTML = '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>';
              
              $.get(caller.href, function (data) {
                
                switch (action) {
                  case 'mark_read' :
                    alert(FAM.config.lang.profile_forums_marked);
                    
                    // restores the caller state
                    if (caller) {
                      caller.setAttribute('onclick', click);
                      caller.innerHTML = html;
                    } 
                    break;
                    
                  case 'delete_cookies' :
                    var form = $('form[action="/?mode=delete_cookies"]', data)[0];
                    
                    // post the cookie deletion form
                    if (form) {
                      $.post(form.action, $(form).serialize() + '&confirm=1', function (data) {
                        alert(FAM.config.lang.profile_cookies_deleted);
                        
                        // open the login page since this essentially logs the user out
                        _userdata.username = 'Anonymous';
                        _userdata.session_logged_in = 0;
                        _userdata.user_level = 0;
                        FAM.page.login.open();
                      });
                    }
                    break;
                }
                
              });
            }
          }
        },
  
  
        // sets up various settings for custom pages
        setup : function (pageName, noHistory) {
          // open a new tab if no tab is currently open
          if (!FAM.tab.active) {
            FAM.tab.add();
          }
          
          // update history
          if (!noHistory) {
            FAM.history.update({
              url : '',
              title : FAM.config.lang['tooltip_' + pageName],
              recall : {
                path : 'page.' + pageName.replace(/\s/g, '_') + '.open',
                args : [true]
              }
            });
          }
  
          FAM.clearRequest();
          FAM.history.toggleBack();
          FAM.message.listener.stop();
          FAM.tab.title(FAM.config.lang['tooltip_' + pageName]);
  
          FAM.cache.content.className = 'FAM-viewing-github';
          FAM.cache.content.innerHTML =
          '<div class="FAM-loading">'+
            '<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>'+
            '<span class="sr-only">' + FAM.config.lang.loading + '</span>'+
          '</div>';
        },
  
  
        // parses a page retreived from github
        parse : function (data, vars) {
          var i;
          
          vars = vars || {};
          data = data.replace(/\n\s*?</g, '<')
                     .replace(/<a/g, '<a target="_blank"')
                     // show new release content
                     .replace(/style="\/\*v1\.0\.0\*\/display:none;"/g, '');
  
          // parse custom variables
          for (i in vars) {
            data = data.replace(new RegExp('{' + i + '}', 'g'), vars[i]);
          }
  
          // parse language variables
          for (i in FAM.config.lang) {
            data = data.replace(new RegExp('{' + i + '}', 'g'), FAM.config.lang[i]);
          }
  
          return data;
        }
  
      },
  
  
      // history methods and data
      history : {
        log : {}, // log history so the user can go back
  
  
        // save history to localStorage
        save : function () {
          if (window.JSON && window.localStorage) {
            localStorage.fam_data = JSON.stringify({
              active : FAM.tab.active,
              total : FAM.tab.total,
              history : FAM.history.log
            });
          }
        },
  
  
        // restore history
        restore : function () {
          if (window.JSON && window.localStorage && localStorage.fam_data) {
  
            if (!FAM.tab.loaded) {
              var data = JSON.parse(localStorage.fam_data), i;
  
              FAM.tab.total = data.total;
              FAM.history.log = data.history;
  
              for (i in FAM.history.log) {
                FAM.tab.add(i.replace('tab', ''), FAM.history.log[i][FAM.history.log[i].length - 1].title);
              }
  
              if (data.active) {
                FAM.tab.focus(data.active);
              } else {
                FAM.tab.initial();
              }
  
              FAM.tab.loaded = true;
            }
  
            return true;
          } else {
            return false;
          }
        },
  
  
        // update history with new entry
        update : function (history) {
          FAM.history.log['tab' + FAM.tab.active].push(history);
  
          // save user tabs
          FAM.history.save();
        },
  
  
        // goes back in history to the beginning or by 1
        back : function (begin) {
          var history = FAM.history.log['tab' + FAM.tab.active][begin ? 0 : FAM.history.log['tab' + FAM.tab.active].length - 2];
  
          begin ? FAM.history.log['tab' + FAM.tab.active] = FAM.history.log['tab' + FAM.tab.active].slice(0, 1) : FAM.history.log['tab' + FAM.tab.active].pop();
  
          if (history.recall) {
            FAM.history.recall(history.recall);
  
          } else {
            FAM.get(history.url, history.title, true);
          }
  
          // stop listening for message changes
          FAM.message.listener.stop();
  
          // save user tabs
          FAM.history.save();
        },
  
  
        // recall a page opened by a function
        recall : function (data) {
          var path = data.path.split('.'),
              open = FAM,
              i = 0,
              j = path.length;
  
          for (; i < j; i++) {
            open = open[path[i]];
          }
  
          open.apply(null, data.args);
        },
  
  
        // toggles the back button
        toggleBack : function () {
          if (FAM.history.log['tab' + FAM.tab.active]) {
            if (FAM.history.log['tab' + FAM.tab.active].length > 1 && FAM.cache.back.style.display == 'none') {
              FAM.cache.back.style.display = '';
  
            } else if (FAM.history.log['tab' + FAM.tab.active].length <= 1 && FAM.cache.back.style.display != 'none') {
              FAM.cache.back.style.display = 'none';
            }
            
          } else {
            FAM.cache.back.style.display = 'none';
          }
        }
      },
  
  
      // tab methods and data
      tab : {
        active : 0, // currently active tab
        total : 0, // total tabs created (used for assigning unique ids)
  
        // sets up the initial tabs for Forumactif Messenger
        initial : function () {
          FAM.tab.add(); // initial chat_page tab
  
          for (var i = 0, j = FAM.config.initial_tabs.length, id, title; i < j; i++) {
            id = ++FAM.tab.total; // unique tab id
  
            // initial history entry
            FAM.history.log['tab' + id] = [{
              url : FAM.config.chat_page,
              title : FAM.config.main_title
            }];
  
            // custom history entry
            FAM.config.initial_tabs[i].url = FAM.config.initial_tabs[i].url || '';
            FAM.config.initial_tabs[i].title = FAM.config.initial_tabs[i].title || 'Tab ' + id;
            FAM.history.log['tab' + id].push(FAM.config.initial_tabs[i]);
  
            // creates a new tab w/the custom history entry via the "restore" method
            FAM.tab.add(id, FAM.config.initial_tabs[i].title);
          }
        },
  
  
        // add a new tab
        add : function (restore, title) {
          var id = restore || ++FAM.tab.total;
  
          // general tab markup
          FAM.cache.tabs.insertAdjacentHTML('beforeend',
            '<div id="FAM-tab-' + id + '" class="FAM-tab">'+
              '<span class="FAM-tab-name" onclick="FAM.tab.focus(' + id + ')">' + ( title ? title : FAM.config.lang.loading ) + '</span>'+
              '<i class="bi bi-x" onclick="FAM.tab.close(' + id + ')"></i>'+
            '</div>'
          );
  
          // doesn't log history or focus the tab if it was "restored" from localStorage
          if (!restore) {
            FAM.history.log['tab' + id] = [];
            FAM.tab.focus(id);
          }
        },
  
  
        // close the specified tab
        close : function (id) {
          var dead = FAM.cache.tabs.querySelector('#FAM-tab-' + id),
              survivor = dead.previousSibling ? dead.previousSibling :
                         dead.nextSibling ? dead.nextSibling :
                         null;
  
          if (survivor && id == FAM.tab.active) {
            FAM.tab.focus(survivor.id.replace('FAM-tab-', ''));
  
          } else if (!survivor) {
            FAM.clearRequest();
            FAM.message.listener.stop();
  
            FAM.tab.title(FAM.config.lang.no_tabs_title);
            FAM.cache.content.innerHTML =
            '<div id="FAM-no-tabs" class="FAM-loading" onclick="FAM.tab.prompt(this);">'+
              '<p><i class="fa fa-plus fa-3x"></i>' + FAM.config.lang.no_tabs + '</p>'+
            '</div>';
            FAM.cache.actions.innerHTML = '';
  
            FAM.tab.active = 0;
          }
  
          dead.parentNode.removeChild(dead);
          delete FAM.history.log['tab' + id];
          FAM.history.save();
          FAM.history.toggleBack();
        },
  
  
        // focus the specified tab
        focus : function (id) {
          if (id == FAM.tab.active) {
            return false;
          }
  
          var active = FAM.cache.tabs.querySelector('#FAM-tab-' + FAM.tab.active),
              tab = FAM.cache.tabs.querySelector('#FAM-tab-' + id),
              history = FAM.history.log['tab' + id];
  
          if (active) {
            active.className = 'FAM-tab';
          }
  
          tab.className = 'FAM-tab FAM-tab-active';
          FAM.cache.tabs.scrollLeft = tab.offsetLeft - tab.getBoundingClientRect().width;
          FAM.tab.active = id;
  
          if (history.length) {
            history = history[history.length - 1];
  
            if (history.html) {
              FAM.cache.content.innerHTML = history.html;
              FAM.clearRequest();
            } else {
              history.recall ? FAM.history.recall(history.recall) : FAM.get(history.url, history.title, true);
            }
  
            FAM.history.save();
  
          } else {
            FAM.get(FAM.config.chat_page || '/forum', FAM.config.main_title);
          }
        },
  
  
        // bring up a prompt that asks the user if they want to load the initial tabs
        prompt : function (caller) {
          if (FAM.config.initial_tabs.length) {
            caller.style.cursor = 'auto';
            caller.onclick = null;
            caller.innerHTML =
            '<div class="FAM-row">'+
              '<p><i class="fa fa-question-circle fa-3x"></i>' + FAM.config.lang.no_tabs_initial + '</p>'+
              '<div class="FAM-inline-buttons">'+
                '<button class="FAM-button" onclick="FAM.tab.initial();" type="button">' + FAM.config.lang.yes + '</button>'+
                '<button class="FAM-button" onclick="FAM.tab.add();" type="button">' + FAM.config.lang.no + '</button>'+
              '</div>'+
            '</div>';
  
          } else {
            FAM.tab.add();
          }
        },
  
  
        // changes the main title and focused tab title
        title : function (string) {
          FAM.cache.toolbar.querySelector('.FAM-maintitle').innerText = string;
          FAM.cache.tabs.querySelector('#FAM-tab-' + FAM.tab.active + ' .FAM-tab-name').innerText = string;
        }
      },
  
  
      // modal methods and data
      modal : {
        // opens the modal
        open : function (caller) {
          // closes media modal if it's already open
          if (FAM.modal.box) {
            FAM.modal.close();
          }
  
          // selects the media element inside the attachment cell
          if (caller.tagName == 'TD') {
            caller = caller.querySelector('img, iframe, a') || caller;
          }
  
          var box = document.createElement('DIV'),
              attachments = $(caller).closest('.FAM-attachment')[0];
  
          box.id = 'FAM-modal';
          box.innerHTML =
          '<div id="FAM-modal-overlay"></div>'+
          '<div id="FAM-modal-content">'+
            '<div id="FAM-media-viewer">'+
              '<i id="FAM-modal-prev" class="FAM-modal-controls FAM-modal-arrows fa fa-arrow-left fa-2x" onclick="FAM.modal.showMedia(-1, true);" style="display:none;"></i>'+
              '<i id="FAM-modal-next" class="FAM-modal-controls FAM-modal-arrows fa fa-arrow-right fa-2x" onclick="FAM.modal.showMedia(+1, true);" style="display:none;"></i>'+
              '<i id="FAM-modal-close" class="FAM-modal-controls fa fa-times fa-2x" onclick="FAM.modal.close();"></i>'+
              '<a id="FAM-view-media" class="FAM-modal-controls" href="#" target="_blank"><i class="fa fa-external-link-square fa-2x"></i></a>'+
              '<div id="FAM-media-list"></div>'+
            '</div>'+
          '</div>';
  
          FAM.modal.box = box;
          FAM.modal.list = box.querySelector('#FAM-media-list');
          FAM.modal.view = box.querySelector('#FAM-view-media');
          FAM.modal.media = [];
          FAM.modal.mediaIndex = 0;
  
          if (attachments) {
            for (var a = attachments.querySelectorAll('img, iframe, a'), i = 0, j = a.length; i < j; i++) {
              FAM.modal.addMedia(a[i]);
  
              if (a[i] == caller) {
                FAM.modal.mediaIndex = i;
              }
            }
  
          } else {
            FAM.modal.addMedia(caller);
          }
  
          if (FAM.modal.media.length) {
            FAM.modal.showMedia(FAM.modal.mediaIndex);
            document.body.appendChild(FAM.modal.box);
  
            if (!FAM.fullscreen) {
              document.body.style.overflow = 'hidden';
            }
  
          } else {
            delete FAM.modal.box;
          }
        },
  
  
        // closes the modal
        close : function () {
          if (FAM.modal.box) {
            document.body.removeChild(FAM.modal.box);
  
            if (!FAM.fullscreen) {
              document.body.style.overflow = '';
            }
  
            delete FAM.modal.box;
          }
        },
  
  
        // adds media to the media list
        addMedia : function (media) {
          media = media.cloneNode(true);
          media.style.display = 'none';
          media.onclick = null;
  
          FAM.modal.media.push(media);
          FAM.modal.list.appendChild(media);
        },
  
  
        // show the specified media
        showMedia : function (id, arrow) {
          var back = FAM.modal.box.querySelector('#FAM-modal-prev'),
              next = FAM.modal.box.querySelector('#FAM-modal-next'),
              max = FAM.modal.media.length - 1;
  
          FAM.modal.media[FAM.modal.mediaIndex].style.display = 'none'; // hide the old media
          FAM.modal.mediaIndex = arrow ? FAM.modal.mediaIndex + id : id; // update media index
  
          // hide arrows and reset index if it has reached the max or min value
          if (FAM.modal.mediaIndex >= max) {
            next.style.display = 'none';
            FAM.modal.mediaIndex = max;
          } else if (FAM.modal.mediaIndex <= 0) {
            back.style.display = 'none';
            FAM.modal.mediaIndex = 0;
          }
  
          // show arrows if they're hidden
          if (next.style.display == 'none' && FAM.modal.mediaIndex < max) {
            next.style.display = '';
          }
  
          if (back.style.display == 'none' && FAM.modal.mediaIndex > 0) {
            back.style.display = '';
          }
  
          // update view media link
          FAM.modal.view.href = FAM.modal.media[FAM.modal.mediaIndex][/IMG|IFRAME/.test(FAM.modal.media[FAM.modal.mediaIndex].tagName) ? 'src' : 'href'];
  
          // show newly active media
          FAM.modal.media[FAM.modal.mediaIndex].style.display = '';
        }
      },
  
  
      // initial setup of FAM
      init : function () {
        var initialized = false;
        
  
        // add view=newest query to topic urls if it's not there
        if (/\/t\d+/.test(FAM.config.chat_page) && !/view=newest/.test(FAM.config.chat_page)) {
          FAM.config.chat_page = FAM.config.chat_page.replace(/#\d+$/, '') + '?view=newest';
        }
        
        // parse the update channel
        FAM.config.update_channel = FAM.config.update_channel == 'developer' ? '-dev' : '';
  
        // builds the necessary chat elements
        function build () {
          // delete FAM if the user does not meet the required permissions
          if (!{
            'all' : 1,
            'member' : _userdata.session_logged_in,
            'staff' : _userdata.user_level
          }[FAM.config.chat_permission.toLowerCase()]) {
            return;
          }
  
          var button = document.createElement('A'),
              chat = document.createElement('DIV'),
              audio = document.createElement('AUDIO'),
              frag = document.createDocumentFragment(),
              embed = FAM.config.embed ? document.querySelector(FAM.config.embed) : null;
  
          chat.id = 'FAM';
          chat.className = FAM.config.embed ? 'FAM-embedded' : '';
          chat.dataset.hidden = FAM.config.embed ? false : true;
          chat.innerHTML =
          '<div id="FAM-toolbar">'+
            '<div id="FAM-toolbar-inner">'+
              '<span id="FAM-back" class="FAM-toolbar-button" onclick="FAM.history.back()" style="display:none" title="' + FAM.config.lang.tooltip_back + '"><i class="bi bi-arrow-left-short"></i></span>'+
              '<h1 class="FAM-maintitle"></h1>'+
              '<span id="FAM-menu-toggle" class="FAM-toolbar-button" title="' + FAM.config.lang.tooltip_menu + '"><i class="bi bi-three-dots"></i></span>'+
              '<div id="FAM-menu" style="visibility:hidden;">'+
                '<div id="FAM-menu-login" class="FAM-menu-option" onclick="FAM.page.login.open();" title="' + FAM.config.lang.tooltip_login + '"' + ( _userdata.session_logged_in ? ' style="display:none"' : '' ) + '><i class="fa fa-sign-in"></i></div>'+
                '<div id="FAM-menu-profile" class="FAM-menu-option" onclick="FAM.page.profile.open();" title="' + FAM.config.lang.tooltip_profile + '"' + ( !_userdata.session_logged_in ? ' style="display:none"' : '' ) + '>' + ( !FAM.config.hide_menu_avatar ? '<span id="FAM-menu-avatar">' + _userdata.avatar + '</span>' : '<i class="fa fa-user"></i>' ) + '</div>'+
                '<div id="FAM-menu-search" class="FAM-menu-option" onclick="FAM.page.search.open();" title="' + FAM.config.lang.tooltip_search + '"><i class="bi bi-search"></i></div>'+
                '<div id="FAM-menu-about" class="FAM-menu-option" onclick="FAM.page.about.open();" title="' + FAM.config.lang.tooltip_about + '"><i class="bi bi-question-circle-fill"></i></div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div id="FAM-tab-container" ' + ( FAM.config.tabs ? '' : 'style="display:none"' ) + '>'+
            '<div id="FAM-tabs"></div>'+
            '<div id="FAM-tab-add" onclick="FAM.tab.add()"><i class="bi bi-plus"></i></div>'+
          '</div>'+
          '<div class="FAM-container-content">'+
          '<div id="FAM-content" onscroll="FAM.message.read(this);"></div>'+
          '<div id="FAM-actions"></div>'+
          '</div>';
          frag.appendChild(chat);
  
          // create button if the chat is not embedded
          if (!FAM.config.embed) {
            button.id = 'FAM-button';
            button.title = FAM.config.lang.tooltip_openFAM;
            button.innerHTML = '<i class="bi bi-chat-fill"></i>';
            button.onclick = FAM.toggle;
            frag.appendChild(button);
          }
          
          // setup audio element for notifications
          audio.src = FAM.config.sound_notif_file;
          
          if (audio.canPlayType) {
            audio.id = 'FAM-audio-notif';
            frag.appendChild(audio);
            
          } else {
            audio = null;
          }
  
          // cache nodes
          FAM.cache = {
            button : button,
            chat : chat,
            audio : audio,
            back : chat.querySelector('#FAM-back'),
            toolbar : chat.querySelector('#FAM-toolbar'),
            tabs : chat.querySelector('#FAM-tabs'),
            content : chat.querySelector('#FAM-content'),
            actions : chat.querySelector('#FAM-actions')
          };
  
          // toggle FAM menu on click
          chat.querySelector('#FAM-menu-toggle').onclick = function () {
            var menu = FAM.cache.toolbar.querySelector('#FAM-menu');
            menu.style.visibility = menu.style.visibility == 'hidden' ? 'visible' : 'hidden';
            return false;
          };
  
  
          // set forum version
          FAM.fVersion = 5;
  
          // css selectors by version
          FAM.select = {
            forumtitle : (FAM.fVersion == 6 ? '.forum-description h3 a[href^="/f"], .posts-description h3 a[href^="/t"]' : 
                          'a.forum' + ( FAM.fVersion == 0 ? 'link' : 'title' ) + ', a.topictitle'),
            post : '.post_row',
  
            row : '.row',
  
            row_date : '.lastpost > span',
  
            forum_info : '.page-title',
  
            new_topic : '[href$="mode=newtopic"]',
  
            post_reply : '[href$="mode=reply"]',
  
            post_avatar : '.post_avatar img',
  
            post_name : '.post_pseudo',
  
            post_date : '.post_date time',
  
            post_message : '.content > div',
  
            pagination : '.pagination:not(strong)',
  
            page_back : '.pag-img:first-child'
          };
          
          // FAM styles
          // NOTE : this is getting pretty big.. we should consider looking for a CDN.
          $('head').append('<style type="text/css" id="FAM-main-stylesheet">;@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);#FAM,#FAM .FAM-inputbox,#FAM-msg{font-family:var(--font)}.FAM-clear,.FAM-msg-date,.FAM-msg:after{clear:both}#modernbb #FAM i.fa,#modernbb #FAM-button i.fa,#modernbb #FAM-send{margin:initial;vertical-align:initial}#FAM{display:grid;grid-template-rows:max-content max-content 1fr;color:var(--FAM-fontClr);font-size:var(--FAM-fontSize);background:var(--FAM-pluginBackground);position:fixed;height:100%;width:90%;max-width:var(--FAM-windowSize);left:0;padding-left:65px;z-index:99;visibility:visible;opacity:1;bottom:0;transition-property:top,right,bottom,left,height,width,margin,opacity,visibility;transition-duration:700ms;grid-template-columns:100%;box-shadow:var(--shadowBox)}#FAM[data-hidden=true]{visibility:hidden;opacity:0;left:calc(-100% + 65px)}#FAM.FAM-embedded{position:relative;bottom:0;right:0;width:100%;height:500px;margin:12px auto;z-index:1}#FAM-button{color:var(--accentClr);font-size:18px;background-color:var(--neutralDark);border-radius:10px;position:fixed;width:45px;height:45px;left:10px;top:15px;cursor:pointer;z-index:999;transition-property:right;transition-duration:500ms;display:grid;place-items:center}#FAM-button:hover{background:var(--FAM-accentClr);color:var(--FAM-pluginBackground)}#FAM[data-hidden="false"]~#FAM-button{background:var(--FAM-accentClr);color:var(--FAM-pluginBackground)}#FAM-toolbar{color:var(--FAM-titleClr);position:relative;margin:20px 15px 15px}#FAM-toolbar-inner{display:flex;justify-content:space-between;align-items:center;gap:15px}.FAM-maintitle{text-align:left;font-size:var(--FAM-titleSize);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-grow:99;margin:0}.FAM-toolbar-button{color:var(--FAM-button);font-size:24px;cursor:pointer}.FAM-toolbar-button i:hover{color:var(--FAM-buttonHover)}#FAM-menu{color:var(--FAM-buttonsClr);position:absolute;right:30px;top:0;min-width:50px;z-index:2;border-radius:10px;display:flex;gap:10px;padding:5px 10px;flex-direction:row}#FAM-idle,.FAM-button{color:var(--FAM-buttonsClr);cursor:pointer}.FAM-menu-option{font-size:24px;text-align:center;cursor:pointer}.FAM-menu-option:hover{color:var(--FAM-buttonsHover)}#FAM-back[style*=none]~#FAM-menu .FAM-menu-option:first-child{display:none}.FAM-container-content{display:grid;grid-template-rows:1fr max-content;overflow:auto;background:var(--FAM-chatBackground);border-radius:10px 10px 0 0;margin:10px 15px 0 15px}#FAM-content{overflow-y:auto;overflow-x:hidden;margin:0 15px;padding:30px 20px;position:relative}.FAM-viewing-topic{padding:0 20px!important}.FAM-viewing-topic:before,.FAM-viewing-topic:after{content:"";display:block;position:sticky;right:0;left:0;height:80px;z-index:8;pointer-events:none}.FAM-viewing-topic:before{top:0;background:var(--FAM-gradientTop)}.FAM-viewing-topic:after{bottom:0;background:var(--FAM-gradientBot)}#FAM-attach-success,.FAM-block-option{text-overflow:ellipsis;white-space:nowrap;font-weight:700;overflow:hidden}.FAM-content-block{font-size:14px;padding:12px}.FAM-border-box{border:1px solid #DDD;border-radius:5px;padding:3px;margin:12px 6px}.FAM-loading,.FAM-loading p{font-size:18px;font-weight:700}.FAM-loading{display:flex;justify-content:center;align-items:center;text-align:center;position:absolute;top:0;left:0;right:0;bottom:0}.FAM-loading i{display:block;margin-bottom:12px}#FAM-no-tabs{top:69px;cursor:pointer}#FAM-tab-container[style*=none]+#FAM-content #FAM-no-tabs{top:39px}#FAM-idle{background:var(--FAM-sleepModeBackground);z-index:999;transition:300ms}.FAM-button{background-color:var(--FAM-accentClr);color:var(--FAM-pluginBackground);border-radius:8px;padding:5px 12px 6px;border:none;display:block;margin:3px auto;outline:0;font-weight:700}.FAM-button:hover{color:var(--FAM-fontClr)}.FAM-inline-buttons{margin:0 0 0 15px!important;width:6%}.FAM-inline-buttons .FAM-button{display:inline-block;margin:3px;background-color:transparent;font-size:18px;color:var(--FAM-accentClr)}.FAM-button-large{background-color:var(--FAM-accentClr);border-radius:4px;font-weight:700;padding:5px 15px;color:var(--FAM-pluginBackground);margin:0 auto}.FAM-button-large:hover{background-color:var(--FAM-secondClr)}#FAM .FAM-inputbox{color:var(--FAM-fontClr);font-size:var(--FAM-fontSize);background-color:var(--FAM-pluginBackground);border:none;border-radius:10px;padding:10px;width:100%;vertical-align:baseline;cursor:text;outline:0;height:auto;line-height:normal}#FAM .FAM-inputbox[type=color],#FAM select.FAM-inputbox{cursor:pointer}#FAM textarea.FAM-inputbox{height:150px;resize:none}#FAM .FAM-button-input .FAM-inputbox{width:calc(100% - 40px);height:20px;margin:0}#FAM .FAM-button-input .FAM-button{font-size:24px;vertical-align:-4px;width:40px;height:40px;display:inline-block;margin:0;padding:0;border-radius:0 4px 4px 0}#FAM .FAM-button-input-small .FAM-inputbox{width:50px;height:30px;padding:0 2px;vertical-align:top}#FAM .FAM-button-input-small .FAM-button{font-size:18px;width:30px;height:30px;padding:0}.FAM-title{font-size:24px;font-weight:700;margin-bottom:12px}.FAM-title a{text-decoration:none!important}.FAM-title i{font-size:36px;vertical-align:-2px;margin-right:3px}.FAM-section-title{color:#39F;font-size:18px;font-weight:700;border-bottom:2px solid #39F;margin:12px auto;padding-bottom:3px}hr.FAM-hr{border:none;border-top:2px solid #DDD;margin:24px 0}.FAM-icon-link{font-size:18px;vertical-align:middle;display:inline-block;margin:0 6px}#FAM .FAM-list li{margin:0;padding:3px 0;position:relative}#FAM .FAM-connected-buttons a{color:#333;background:#FFF;border:1px solid #DDD;display:inline-block;height:30px;line-height:28px;padding:0 12px;margin-left:-1px;text-decoration:none}#FAM .FAM-connected-buttons a:hover{background:#EEE;border-color:#CCC;position:relative}#FAM .FAM-connected-buttons a:active{background:#DDD;border-color:#BBB;position:relative}#FAM .FAM-connected-buttons>a:first-child,#FAM .FAM-connected-buttons>span:first-child>a{border-radius:4px 0 0 4px;margin-left:0}#FAM .FAM-connected-buttons>a:last-child,#FAM .FAM-connected-buttons>span:last-child>a{border-radius:0 4px 4px 0}#FAM .FAM-connected-buttons i{font-size:20px;margin-right:3px;vertical-align:-2px}.FAM-label{font-weight:700;text-align:right;vertical-align:top;word-wrap:break-word;display:inline-block;width:30%;padding-right:6px;margin:0}.FAM-label-value{display:inline-block;width:70%}#FAM .FAM-label-value .FAM-inputbox:not([type=color]){width:60%}#FAM .FAM-label-value .FAM-init-tab.FAM-border-box .FAM-inputbox{width:90%;padding:8px}.FAM-init-tab-controls .FAM-icon-link{font-size:24px}.FAM-symmetrical-label .FAM-label,.FAM-symmetrical-label .FAM-label-value{width:50%}.FAM-left,.FAM-symmetrical-label .FAM-label-value{text-align:left}.FAM-right{text-align:right}#FAM-attach-success,#FAM-giphy-results,.FAM-center,.FAM-dropdown-title,.FAM-option-icon{text-align:center}.FAM-float-left{float:left}.FAM-float-right{float:right}.FAM-clear:after{content:"";display:table;clear:both}#FAM p,.FAM-row{margin:10px 0}#FAM .FAM-center-block{width:50%;margin-left:auto;margin-right:auto}.FAM-error{color:#F66;font-weight:700}.FAM-noclick{pointer-events:none}.FAM-clickable{pointer-events:all}#FAM-content::-webkit-scrollbar{display:none}#FAM ::-webkit-scrollbar-track{background-color:transparent}#FAM ::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.1);border:none}#FAM ::-webkit-scrollbar-button:single-button{height:0;width:0}#FAM-actions{background-color:var(--FAM-textareaBackground);border-radius:10px;margin:10px 35px;align-items:end;position:relative}.FAM-viewing-forum+#FAM-actions,.FAM-viewing-topic+#FAM-actions{display:block}.FAM-viewing-forum+#FAM-actions{background:transparent;margin:10px 35px;display:flex;justify-content:flex-end}#FAM-actions:empty{display:none}#FAM-new-topic{cursor:pointer;font-size:28px;color:var(--FAM-accentClr);margin-bottom:20px}#FAM-new-topic:hover{color:var(--FAM-fontClr)}.FAM-buttons-container{position:absolute;bottom:15px;right:15px}.FAM-buttons-container>button{color:var(--FAM-accentClr);background-color:transparent;font-size:20px;border:none;cursor:pointer;outline:0}.FAM-buttons-container>button:hover{color:var(--FAM-secondClr)}.FAM-buttons-container>button[data-disabled=true]{pointer-events:none}.FAM-buttons-container>button[data-disabled=true]>*{opacity:.5}.FAM-buttons-container>button#FAM-attachment{border:none;position:relative}#FAM-attachment-total{color:var(--FAM-light);font-size:9px;font-weight:700;background:var(--FAM-secondClr);border-radius:100%;position:absolute;top:12px;right:-2px;padding:1px 3px;width:15px}#FAM-attach-success{color:#FFF;font-size:16px;background:#8B5;position:absolute;top:-1px;left:-1px;right:-1px;height:40px;line-height:40px;padding:0 6px}#FAM-attach-success i{font-size:26px;margin-right:6px;vertical-align:-3px}#FAM-actions .FAM-dropdown{background:var(--FAM-pluginBackground);border:var(--FAM-border);position:absolute;right:0;bottom:30px;width:300px;height:270px;padding:10px;z-index:999}.FAM-block-option,.FAM-dropdown-title,.FAM-option-icon{line-height:40px;height:40px}.FAM-dropdown .FAM-row{display:flex}.FAM-dropdown-title{color:var(--FAM-titleClr);font-weight:600;font-size:18px;position:relative;display:flex;align-items:center;justify-content:center}.FAM-dropdown-back{left:3px;position:absolute}.FAM-block-option{width:100%;cursor:pointer;display:flex;align-items:center}.FAM-block-option:hover{color:var(--FAM-accentClr)}.FAM-block-option:active{color:#000;background:#DDD}.FAM-option-icon{font-size:20px;font-weight:400;display:inline-block;width:50px;opacity:.4}.FAM-option-icon i{line-height:40px}.FAM-option-icon.FAM-text-icon{font-size:18px;font-weight:700;font-stretch:condensed}#FAM-giphy-results{height:260px;margin:10px auto;overflow-x:hidden;overflow-y:auto}.FAM-giphy-imagelist{line-height:0;column-count:2;column-gap:3px}.FAM-giphy-imagelist img{width:100%;margin-bottom:3px;cursor:pointer}#FAM #FAM-giphy-mark{background:url(https://i.servimg.com/u/f35/18/21/60/73/powere11.png) 50% 50% no-repeat;height:22px;width:100%}#FAM-attachment-manager{height:340px;overflow-y:auto;overflow-x:hidden}#FAM-attachment-manager .FAM-inputbox{width:65%}.FAM-attachment-thumb{text-align:center;border:1px solid #DDD;border-radius:4px;display:inline-block;width:50px;height:50px;margin-right:6px;object-fit:cover;vertical-align:-20px}a.FAM-attachment-thumb{vertical-align:-5px}.FAM-attachment-thumb i{font-size:24px;line-height:50px}.FAM-attachment-delete{margin-left:6px;cursor:pointer}.FAM-attachment-delete:hover .fa-circle{color:#F33}#FAM-msg-container{display:inline-block;vertical-align:top;position:relative;width:100%}#FAM-timeout-bar{background:#CCC;position:absolute;left:0;bottom:0;width:5px;z-index:-1}.FAM-chat{position:relative;cursor:pointer;display:grid;grid-template-columns:max-content 1fr;color:var(--FAM-fontLightClr)}.FAM-chat:hover,.FAM-chat:hover a{color:var(--FAM-titleClr)}.FAM-chat:hover .FAM-chat-avatar,.FAM-chat:hover .FAM-chat-content{background-color:var(--FAM-pluginBackground)}.FAM-forum-name,.FAM-topic-name{display:none;font-size:12px;margin:20px 20px 10px;text-transform:uppercase;grid-column:1 / span 2;font-weight:600}.FAM-forum-name i,.FAM-topic-name i{margin-right:5px}.FAM-forum:nth-of-type(1) .FAM-forum-name,.FAM-pagination+.FAM-forum:nth-child(2) .FAM-forum-name{display:block}.FAM-forum{margin-bottom:10px}.FAM-forum .FAM-chat-title{text-transform:uppercase}.FAM-forum a.lastpost_link:before{content:"\uF132";font-family:bootstrap-icons!important;margin-right:5px;font-weight:400;top:2px;position:relative}.FAM-chat-date>a.lastpost_link:after{content:","}.FAM-forum .FAM-chat-avatar,.FAM-forum .FAM-chat-content{background-color:var(--FAM-pluginBackground)}.FAM-topic:nth-of-type(4) .FAM-topic-name{display:block}.FAM-chat-avatar{grid-row:2;align-self:center;padding:15px 5px 15px 20px;border-radius:10px 0 0 10px;opacity:.8}.FAM-chat-avatar img{height:40px;width:40px;border-radius:100%;object-fit:cover;object-position:center}.FAM-chat-content{grid-column:2;grid-row:2;align-self:center;padding:15px 20px 15px 10px;border-radius:0 10px 10px 0;min-height:70px;display:grid;align-items:center}.FAM-chat-date,.FAM-chat-title{width:100%}.FAM-chat-title{font-weight:600}.FAM-chat-date{font-size:12px;margin-top:4px}.FAM-chat-date>a.lastpost_link{font-weight:600;color:var(--FAM-fontClr)!important;margin-right:5px}.FAM-chat-date>strong{margin-left:5px;background-color:var(--FAM-msgBackground);padding:0 4px 0;border-radius:4px}.FAM-chat-date>strong a{display:initial!important}.FAM-chat-date>strong:empty,.FAM-topic .FAM-chat-date i,.FAM-chat-date br,.FAM-chat-date .last-post-icon,.FAM-chat-date a:last-of-type{display:none}.FAM-new-post,.FAM-new-post a,.FAM-new-post .FAM-chat-title{color:var(--FAM-titleClr);font-weight:bold!important}.FAM-new-post .FAM-chat-avatar{opacity:1}.FAM-new-post .FAM-chat-avatar img{box-shadow:0 0 0 0 rgb(255,255,255,1);transform:scale(1);animation:FAMpulse 3s infinite}@keyframes FAMpulse{0%{transform:scale(1);box-shadow:0 0 0 0 var(--FAM-newMsgAnimation)}70%{transform:scale(1);box-shadow:0 0 0 8px transparent}100%{transform:scale(1);box-shadow:0 0 0 0 transparent}}.FAM-pagination:empty{display:none}.FAM-pagination span{display:flex;gap:5px;justify-content:end}#FAM a.FAM-page-link,.FAM-page-link{color:#FFF;font-size:12px;text-decoration:none;background:var(--FAM-accentClr);color:var(--FAM-pluginBackground);display:inline-block;padding:1px 6px 2px;border-radius:5px}#FAM a.FAM-page-link:hover{background:var(--FAM-buttonsClr)}#FAM a.FAM-page-link:active{background:var(--FAM-buttonsClr)}b.FAM-page-link,strong.FAM-page-link{background:var(--FAM-pluginBackground);font-weight:400;color:var(--FAM-fontClr)}#FAM-msg{color:var(--FAM-fontClr);font-size:var(--normal-size);background:0 0;border:none;width:100%;margin:0;padding:15px;padding-right:110px;outline:0;resize:vertical}.FAM-msg[data-compact="yes"]{margin-bottom:5px}.FAM-msg{position:relative;display:flex;margin-bottom:30px;gap:10px}.FAM-msg-avatar{width:35px;height:35px;padding:2px;border-radius:100%;overflow:hidden;position:relative;top:50%;align-self:flex-end}.FAM-msg-online .FAM-msg-avatar{border-color:#39F}.FAM-msg-avatar img{height:100%;width:100%;border-radius:100%;object-fit:cover;object-position:center}.FAM-msg.FAM-my-msg{flex-direction:row-reverse}.FAM-msg-box{float:right;width:80%;width:calc(100% - 48px);padding-left:10px}.FAM-msg-content{display:flex;gap:7px;position:relative}.FAM-msg-editing .FAM-msg-text{width:100%;display:flex;align-items:flex-end}.FAM-my-msg .FAM-msg-text{background:var(--FAM-myMsgBackground);border-radius:17px 17px 6px 17px;padding:8px 15px 8px 20px;float:right}.FAM-msg-text{font-size:14px;background:var(--FAM-msgBackground);border-radius:17px 17px 17px 6px;padding:8px 20px 8px 15px}.FAM-my-msg .FAM-msg-content{flex-direction:row-reverse}.FAM-msg-text .fa-circle-o-notch{font-size:20px}#FAM .FAM-msg-text a{color:inherit!important;text-decoration:underline;cursor:pointer}#FAM .FAM-msg-text a:hover{text-decoration:none}.FAM-msg-text *{max-width:100%}.FAM-msg-text img{max-height:200px}.FAM-msg-info{display:flex;gap:5px;clear:both}.FAM-msg-date,.FAM-msg-name{font-size:12px;width:100%;height:20px;line-height:24px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-basis:fit-content;color:var(--FAM-fontLightClr)}.FAM-name-mention{cursor:pointer}.FAM-my-msg .FAM-msg-info{flex-direction:row-reverse}.FAM-msg-error .FAM-msg-content:before{border-left-color:#F33}.FAM-msg-text .FAM-attachment,.FAM-msg-text .FAM-attachment *{display:block}.FAM-msg-text .FAM-attachment tbody{line-height:0;column-count:2;column-gap:5px}.FAM-msg-text .FAM-attachment tr{width:100%;max-height:200px;overflow:hidden;-webkit-column-break-inside:avoid;page-break-inside:avoid;break-inside:avoid}.FAM-msg-text .FAM-attachment tr:only-child{column-span:all;margin:0}.FAM-msg-text .FAM-attachment td{color:var(--FAM-fontClr);font-size:14px;min-height:20px;line-height:20px;position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.FAM-msg-text .FAM-attachment td *{width:100%;object-fit:cover}.FAM-msg-text .FAM-attachment td,.FAM-msg-text .FAM-attachment td *{border-radius:5px;max-height:200px}#FAM .FAM-msg-actions{margin-top:-12px;height:25px;white-space:nowrap;visibility:hidden;opacity:0;display:flex;align-items:center;gap:5px;transition:300ms}#FAM .FAM-msg:hover .FAM-msg-actions{visibility:visible;margin-top:5px;opacity:1}#FAM .FAM-my-msg .FAM-msg-actions{display:flex;align-items:center;gap:5px}[data-compact="yes"]{padding:0}.FAM-msg[data-compact="yes"] .FAM-msg-avatar{visibility:hidden}.FAM-msg[data-compact="yes"] .FAM-msg-text{border-radius:20px}[data-compact="yes"] .FAM-msg-info{visibility:hidden;height:0}.FAM-msg-button{font-size:14px;width:20px;cursor:pointer}.FAM-msg-button:hover{color:var(--FAM-buttonHover)}.FAM-edit-button{font-size:10px}.FAM-delete-button{margin-left:-7px;font-size:18px}.FAM-msg-text .FAM-attachment td:after{position:absolute;top:0;left:0;right:0;bottom:0;cursor:pointer}#FAM [onclick="FAM.modal.open(this);"]{cursor:pointer}.FAM-msg-text .FAM-attachment td a{overflow:hidden;text-overflow:ellipsis}.FAM-msg-text ol,.FAM-msg-text ul{padding-left:30px;margin:12px 0}.FAM-msg-text ol>br:first-child,.FAM-msg-text ul>br:first-child{display:none}.FAM-codebox,.FAM-spoiler{padding:0;margin:0;display:block;font-size:12px}.FAM-codebox cite a,.FAM-codebox dt a{color:var(--FAM-titleClr)}.FAM-codebox cite,.FAM-codebox dt,.FAM-spoiler dt{color:var(--FAM-titleClr);font-weight:600;margin:0;cursor:auto!important}#FAM-tab-add,.FAM-tab{height:30px;cursor:pointer}.FAM-codebox dd,.FAM-spoiler dd{padding:3px;margin:0}.FAM-codebox code{display:block;max-height:150px;max-width:none;padding:3px;margin:-3px;overflow:auto}#FAM-new-msg-divider,#FAM-tabs{white-space:nowrap;overflow:hidden}blockquote.FAM-codebox{position:relative;margin-bottom:17px}blockquote.FAM-codebox:before{display:block;position:absolute;z-index:1;content:"";background:var(--FAM-quoteBackground);inset:-8px -20px -10px -15px;border-radius:17px 17px 0 0}.FAM-my-msg blockquote.FAM-codebox:before{inset:-8px -15px -10px -20px}blockquote.FAM-codebox>div{margin:0;padding:0;z-index:2;position:relative}.FAM-spoiler_content{position:relative;display:inline-block}.FAM-spoiler_content:after{content:"";background:var(--FAM-chatBackground);position:absolute;inset:-3px;visibility:visible;border-radius:5px}.FAM-spoiler_content:hover:after{visibility:hidden}.FAM-msg-text .FAM-post-content,.FAM-msg-text font[color]{color:inherit}#fc-token.FAM-inputbox{width:308px}.FAM-captcha p:first-child b,.FAM-captcha p:first-child strong{font-size:24px;display:inline-block;margin-bottom:6px}#FAM-new-msg-notif{color:#FFF;font-size:14px;font-weight:700;text-align:center;background:#39F;position:absolute;height:30px;line-height:30px;left:0;right:0;z-index:1;opacity:.8;cursor:pointer}#FAM-new-msg-notif:after{content:"\\f00d";font-size:18px;font-weight:400;font-family:FontAwesome;position:absolute;right:6px}#FAM-new-msg-notif:hover{opacity:1}#FAM-new-msg-notif+#FAM-content{padding-top:30px}#FAM-new-msg-divider{color:#39F;font-size:18px;text-align:center;margin:12px}#FAM-new-msg-divider:after,#FAM-new-msg-divider:before{content:"";background:#39F;display:inline-block;width:25%;height:2px;position:relative;top:-4px}#FAM-new-msg-divider:before{margin-right:12px}#FAM-new-msg-divider:after{margin-left:12px}#FAM-tab-container{height:30px;position:relative;margin:0 15px;display:flex}#FAM-tab-add{z-index:99;font-size:13px;text-align:center;right:0;top:0;display:flex;align-items:center;background:var(--FAM-chatBackground);color:var(--FAM-fontClr);border-radius:5px;padding:0 8px;margin-left:5px}#FAM-tab-add:hover{background:var(--FAM-accentClr);color:var(--FAM-pluginBackground)}#FAM-tabs{display:flex;gap:5px;position:relative;padding-bottom:3px}#FAM-tabs:hover{overflow-x:auto;position:relative;z-index:2}#FAM-tab-container:after{content:"";display:block;position:absolute;right:0;top:0;bottom:0;width:20%;background:var(--FAM-gradient);z-index:5;pointer-events:none}#FAM-tabs::-webkit-scrollbar{height:4px}#FAM-tabs::-webkit-scrollbar-thumb{background-color:var(--FAM-accentClr);border-radius:3px}#FAM-tabs::-webkit-scrollbar-track{background:transparent}#FAM-menu-avatar,#FAM-profile-avatar,.FAM-tab-name{display:inline-block;overflow:hidden}.FAM-tab{background:var(--FAM-chatBackground);border-radius:5px;position:relative;display:inline-block;align-items:center;justify-content:space-between;padding:0 8px;display:flex;width:130px}.FAM-tab i{display:none;font-size:18px;width:12px;height:16px}.FAM-tab:hover{background:var(--FAM-accentClr);color:var(--FAM-pluginBackground)}.FAM-tab:hover i{display:initial}.FAM-tab.FAM-tab-active{font-weight:700;background:var(--FAM-accentClr);color:var(--FAM-pluginBackground)}.FAM-tab-name{font-size:12px;width:80%;width:calc(100% - 16px);white-space:nowrap;text-overflow:ellipsis}.FAM-tab-close{cursor:pointer}.FAM-tab-close:hover{color:#F33}#FAM-profile-username{font-size:18px;font-weight:700}#FAM-profile-rank{font-weight:700}#FAM-profile-avatar{width:108px;height:108px;padding:2px;border:2px solid #DDD;border-radius:100px}#FAM-menu-avatar{height:24px;width:24px;border-radius:30px}#FAM-menu-avatar img,#FAM-profile-avatar img{width:100%;height:100%;border-radius:100%;object-fit:cover;object-position:center}#FAM #FAM-service-title a{color:#333;font-weight:400}#FAM-service-title b,#FAM-service-title i{color:#39C}#FAM-service-title b:last-child,#FAM-version-status-icon .fa-check-circle{color:#39F}#FAM-version-card{background-color:var(--FAM-pluginBackground);border-radius:4px;text-align:left;width:80%;margin:30px auto 12px;white-space:nowrap;overflow-x:auto;position:relative}#FAM-version-status-icon{text-align:center;position:absolute;width:50px;left:0;top:50%;margin-top:-18px}#FAM-version-status-icon i{font-size:36px}#FAM-version-status-icon .fa-exclamation-circle{color:#F93}#FAM-version-info{width:100%;padding-left:50px}#FAM-version-info>div{margin:10px 0}#FAM-version-status{font-weight:700}#FAM-creator-info{text-align:center;margin-top:30px}#FAM-creator-info i{font-size:18px;vertical-align:middle}#FAM #FAM-search-keywords{font-size:18px;height:40px;padding:0 8px}#FAM-search-results{border-bottom:2px solid var(--FAM-pluginBackground);padding:5px 0;font-style:italic;max-height:300px;overflow:auto}#FAM-search-results .FAM-chat-avatar,.FAM-viewing-search .FAM-chat-avatar{display:none}#FAM-search-results .FAM-chat-icon,.FAM-viewing-search .FAM-chat-icon{left:10px;top:50%;margin-top:-17px}#FAM-modal-content,#FAM-modal-overlay{position:fixed;z-index:999999;top:0;left:0;right:0;bottom:0}#FAM-modal-overlay{background:rgba(0,0,0,.8)}#FAM-media-viewer,#FAM-modal-content,.FAM-modal-arrows{display:flex;justify-content:center;align-items:center;text-align:center}#FAM-media-viewer{background:#FFF;border-radius:8px;position:relative;min-width:100px;min-height:100px;max-width:100%;max-width:calc(100% - 96px);max-height:100%;max-height:calc(100% - 96px);padding:16px}#FAM-media-list{width:100%;max-height:100vh;max-height:calc(100vh - 96px);overflow:hidden}#FAM-media-list>iframe,#FAM-media-list>img{max-width:100%;max-height:100vh;max-height:calc(100vh - 96px)}#FAM-media-list>a{font-size:24px;max-width:90%;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.FAM-modal-controls{color:#999;position:absolute;cursor:pointer;opacity:1}.FAM-modal-controls:hover{color:#FFF}.FAM-modal-arrows{top:0;bottom:0;width:41px}#FAM-modal-prev{left:-25px;justify-content:flex-start}#FAM-modal-next{right:-25px;justify-content:flex-end}#FAM-modal-close{top:0;right:-25px;z-index:1}#FAM-view-media{top:30px;right:-26px;z-index:1}</style>');
  
          // add Forumactif Messenger to the document
          if (FAM.config.embed) {
            if (embed) {
              embed.appendChild(frag);
              
            } else {
              return;
            }
            
          } else {
            document.body.appendChild(frag);
          }
          
  
          // apply cached settings
          FAM.page.settings.apply();
  
          // embedded initialization
          if (FAM.config.embed) {
            !FAM.history.restore() && FAM.tab.initial();
  
            // reset fullscreen setting when embedded
            if (window.JSON && window.localStorage && localStorage.fam_settings) {
              var settings = JSON.parse(localStorage.fam_settings);
              settings.fam_fullscreen = '';
              localStorage.fam_settings = JSON.stringify(settings);
            }
          }
  
          // close drop downs that are left open
          $(document).on('mousedown', function (e) {
            // drop down should be the first element in the arrays, other elements are those that should be excluded
            var close = [
              [FAM.cache.toolbar.querySelector('#FAM-menu'), FAM.cache.toolbar.querySelector('#FAM-menu-toggle')],
              [FAM.cache.actions.querySelector('#FAM-emoji-list'), FAM.cache.actions.querySelector('#FAM-emoji')],
              [FAM.cache.actions.querySelector('#FAM-attach-options'), FAM.cache.actions.querySelector('#FAM-attachment')]
            ], i = 0, j = close.length, a;
  
            for (; i < j; i++) {
              if (close[i][0] && close[i][0].style.visibility != 'hidden') {
                a = $(close[i]);
  
                if (!a.is(e.target) && !a.has(e.target)[0]) {
                  close[i][0].style.visibility = 'hidden';
                }
              }
            }
          });
  
          delete FAM.init; // delete this function as to not initialize FAM again
        };
  
  
        try {
          // wait for the doc to be interactive / complete
          function ready () {
            if (!initialized && /interactive|complete/.test(document.readyState)) {
              build();
              initialized = true;
            }
          };
  
          ready();
  
          if (!initialized) {
            document.addEventListener('readystatechange', ready);
          }
  
        } catch (error) {
          $(build); // jQuery fallback
        }
      },
  
      version : 'v1.0.3'
    };
  
  
    FAM.init(); // setup FAM
  }());