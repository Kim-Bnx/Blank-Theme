// PLACEMENT : sur toutes les pages
// by Ange tuteur https://fmdesign.forumotion.com/t1378-forumactif-messenger-instant-message-application-for-forumotion

!window.FAM &&
	(function () {
		"use strict";
		window.FAM = {
			// Configuration de Forumactif Messenger
			// https://github.com/SethClydesdale/forumactif-messenger/wiki/Config
			config: {
				chat_page: "",
				chat_permission: "all", //  peut etre [all] ou [member] ou [staff]
				main_title: "Messenger",

				// Gestion des onglets initiaux
				// https://github.com/SethClydesdale/forumactif-messenger/wiki/Config#initial_tabs
				tabs: true,
				initial_tabs: [],

				ignore_announcements: false, // [false] pour voir les sujets d'annonces et de note, [true] pour les cacher
			},

			// Sélecteurs CSS
			// Permet d'aller chercher les éléments des pages par leur class
			select: {
				// Titre d'un forum et d'un sujet
				forum_info: ".page-title",
				// Titre d'un sujet dans la liste des sujets ou d'un forum
				forumtitle: "a.forumtitle, a.topictitle",
				// Forum ou sujet dans la liste des sujets
				topic: ".forum, .topicslist_row",
				// Date du dernier message d'un sujet dans la liste des sujets
				lastpost_date: ".lastpost > span",
				// Avatar du dernier posteur d'un sujet dans la liste des sujets
				lastpost_avatar: ".lastpostavatar img",
				// Type d'un sujet (note, annonce, sondage...)
				topic_type: ".topic-type > strong",
				// Un post
				post: ".post_row",
				// Avatar du post
				post_avatar: ".post_avatar img",
				// Pseudo de l'auteur du post
				post_name: ".post_pseudo",
				// Date du post
				post_date: ".post_date time",
				// Contenu du post
				post_message: ".content > div",

				// Réservé
				pagination: ".pagination:not(strong)",
				page_back: ".pag-img:first-child",
				new_topic: '[href$="mode=newtopic"]',
				post_reply: '[href$="mode=reply"]',
			},

			// Texte de l'interface
			lang: {
				loading: "Chargement",
				idle: "Forumactif Messenger est en veille.<br> Cliquez pour reprendre.",
				message_notif_singular: "$N nouveau message",
				message_notif_plural: "$N nouveau messages",
				new_messages: "Nouveaux Messages",

				new_topic: "Nouveau sujet",
				start_topic: "Ouvrir un sujet",
				forum_name: "Forums",
				topic_name: "Sujets",

				msg_placeholder: "Envoyer un message",
				title_placeholder: "Titre du sujet",
				load_older: "Voir les anciens messages",
				delete_message: "Voulez-vous supprimer ce message ?",

				topic_no_subject: "Vous devez indiquer un titre pour votre sujet.",
				topic_no_message: "Vous devez écrire un message avant d'ouvrir votre sujet.",

				no_tabs_title: "Ouvrir un nouvel onglet",
				no_tabs: "Vous n'avez pas d'onglet ouvert. Cliquez pour en ouvrir un.",
				no_tabs_initial: "Voulez-vous ouvrir les onglets de départ ?",

				tooltip_openFAM: "Forumactif Messenger",
				tooltip_back: "Retour",
				tooltip_menu: "Ouvrir le menu",
				tooltip_home: "Page d'accueil",
				tooltip_about: "A propos",
				tooltip_emoji: "Ajouter un smiley",
				tooltip_send: "Envoyer un message",
				tooltip_msg_quote: "Citer",
				tooltip_msg_edit: "Editer",
				tooltip_msg_delete: "Supprimer",

				error_sending: "Une erreur empêche l'envoi de votre message. Réessayer ?",
				error_resend: "Envoyer",
				error_delete: "Supprimer",
				error_report: "Signaler",

				guest: "Invité",
				yes: "Oui",
				no: "Non",
				send: "Envoyer",
				cancel: "Annuler",
				reset: "Réinitialiser",
			},

			// toggles Forumactif Messenger
			toggle: function () {
				if (FAM.cache.chat.dataset.hidden == "true") {
					FAM.cache.chat.dataset.hidden = false;

					if (!FAM.history.restore()) {
						FAM.tab.initial();
						FAM.tab.loaded = true;
					}
				} else {
					FAM.cache.chat.dataset.hidden = true;
				}
			},

			// encode strings for sending over AJAX
			encode: function (string) {
				return /UTF-8/i.test(document.characterSet)
					? encodeURIComponent(string)
					: // URI encoding for NON-UTF8 forums
					  encodeURIComponent(
							escape(string).replace(/%u[A-F0-9]{4}/g, function (match) {
								return "&#" + parseInt(match.substr(2), 16) + ";";
							})
					  ).replace(/%25/g, "%");
			},

			// updates userdata and lang values using page data received via AJAX
			updateUserdata: function (data) {
				var script = document.createElement("SCRIPT");
				script.type = "text/javascript";
				script.text = data.replace(/[\s\S]*?(if\(typeof\(_userdata\) == "undefined"\)[\s\S]*?)if\(typeof\(_board\) == "undefined"\)[\s\S]*/, "$1");
				document.body.appendChild(script);
			},

			// abort ongoing requests
			clearRequest: function () {
				if (FAM.request) {
					if (!FAM.request.statusText) {
						FAM.request.abort();
					}

					delete FAM.request;
				}

				// remove message notifications
				if (FAM.cache.chat.querySelector("#FAM-new-msg-notif")) {
					FAM.message.markRead(true, true);
				}
			},

			// get the specified page and load the contents into FAM
			get: function (url, title, noHistory) {
				var type = /\/c\d+/.test(url)
					? "category"
					: /\/f\d+/.test(url)
					? "forum"
					: /\/t\d+/.test(url)
					? "topic"
					: /\/search|\/st\/|\/sta\//.test(url)
					? "search"
					: "category";

				// push new entry to history
				if (!noHistory) {
					FAM.history.update({
						url: url,
						title: title,
					});
				}

				FAM.clearRequest(); // abort ongoing requests
				FAM.message.listener.stop(); // stop listening for message changes
				FAM.history.toggleBack(); // show / hide back button
				FAM.tab.title(title); // update the main title

				// display loading texts and change content class
				FAM.cache.content.className = "FAM-viewing-" + type;
				FAM.cache.content.innerHTML =
					'<div class="FAM-loading">' + '<i class="bi bi-hourglass"></i>' + '<span class="sr-only">' + FAM.lang.loading + "</span>" + "</div>";
				FAM.cache.actions.innerHTML = "";

				// reset the message log
				if (type == "topic") {
					FAM.message.log = {};
				}

				// get the page
				FAM.request = $.get(url, function (data) {
					var a = $(FAM.select[type == "topic" ? "post" : "forumtitle"], data),
						form = type == "topic" ? $('form[action="/post"]', data)[0] : null,
						i = 0,
						j = a.length,
						html = "";

					// create message / forum structure
					for (; i < j; i++) {
						html +=
							type == "topic"
								? (FAM.message.log[a[i].className.replace(/.*?(post--\d+).*/, "$1")] = FAM.message.parse(a[i], i, a[i + 1]))
								: FAM.topic.parse(a[i]);
					}

					// add message actions if the opened url is a topic
					if (type == "topic") {
						var postReply = $(FAM.select.post_reply, data)[0],
							back = $(FAM.select.page_back, data)[0];

						FAM.cache.content.innerHTML =
							(back // adds button for loading older messages
								? '<button id="FAM-load-older" class="FAM-button" onclick="FAM.message.loadOlder(\'' +
								  (back.tagName == "A" ? back : back.parentNode).href +
								  '\');" type="button">' +
								  FAM.lang.load_older +
								  "</button>"
								: "") + html;

						if (postReply) {
							FAM.cache.content.className += " FAM-reply-open";
							FAM.cache.actions.innerHTML =
								'<span id="FAM-msg-container">' +
								'<textarea id="FAM-msg" placeholder="' +
								FAM.lang.msg_placeholder +
								'" onkeydown="FAM.message.handleKeys(event);" oninput="FAM.message.validate(this.value);"></textarea>' +
								'<span id="FAM-timeout-bar"></span>' +
								"</span>" +
								'<div class="FAM-buttons-container">' +
								'<button id="FAM-send" type="button" onclick="FAM.message.send();" data-disabled="true" title="' +
								FAM.lang.tooltip_send +
								'" type="button"><i class="bi bi-send-fill"></i></button>' +
								'<button id="FAM-emoji" type="button" onclick="FAM.message.emoji(this);" title="' +
								FAM.lang.tooltip_emoji +
								'" type="button"><i class="bi bi-emoji-smile-fill"></i></button>' +
								(form
									? form.outerHTML.replace(/id=".*?"|name=".*?"/, "").replace("<form", '<form id="FAM-post-data" name="fampost" style="display:none"')
									: '<div id="FAM-post-data-placeholder"></div>' + "</div>");

							$("#FAM-msg")
								.each(function () {
									this.setAttribute("style", "height:" + this.scrollHeight + "px;overflow-y:hidden;");
								})
								.on("input", function () {
									this.style.height = "auto";
									this.style.height = this.scrollHeight + "px";
								});

							// authorize the guest for replies
							if (!_userdata.session_logged_in) {
								FAM.message.replyPage = postReply.href;
								FAM.message.authorizeGuest();
							}
						} else {
							FAM.cache.actions.innerHTML = "";
						}

						FAM.message.scroll(); // scroll to the newest message
						FAM.message.listener.start(); // listen for new posts and changes to existing messages

						// parse servimg data for use in uploading
						var servImgData = {
								account: data.match(/servImgAccount = '(.*?)'/),
								id: data.match(/servImgId = '(.*?)'/),
								f: data.match(/servImgF = '(.*?)'/),
								mode: data.match(/servImgMode = '(.*?)'/),
							},
							authorization = "multiupload.php?",
							denied = false,
							i;

						for (i in servImgData) {
							if (servImgData[i] && servImgData[i][0] && servImgData[i][1]) {
								authorization += i + "=" + servImgData[i][1] + "&";
							} else {
								denied = true;
								break;
							}
						}

						FAM.message.servImgData = denied ? "" : authorization;

						// standard forum / category view
					} else {
						var pagination = /forum|search/.test(type) ? $(FAM.select.pagination, data)[0] : null;

						FAM.cache.content.innerHTML =
							(pagination
								? '<div class="FAM-pagination">' +
								  pagination.innerHTML // insert pages
										.replace(
											/&nbsp;|â€¢|<br>|,|•|:|<span class="page-sep">.*?<\/span>|<a.*?href=".*?mark=topics">.*?<\/a>|<a.*?href="javascript:Pagination\(\);"[^>]*?>.*?<\/a>|<a[^>]*?><img.*?><\/a>/g,
											""
										) // cleanup unnecessary elements
										.replace(/>\d+<\/(.*?)>/g, function (match, $1) {
											// adds event handler and class to page numbers
											return (
												' class="FAM-page-link"' +
												($1.toUpperCase() == "A" ? " onclick=\"FAM.get(this.href, '" + title + "'); return false;\"" : "") +
												match
											);
										})
										.replace(/>\s+</g, "><") + // removes whitespace between tags
								  "</div>"
								: "") + html ||
							'<div class="FAM-loading FAM-noclick">' +
								'<p class="FAM-clickable"><i class="bi bi-emoji-frown"></i>' +
								FAM.lang.not_found +
								(_userdata.session_logged_in ? "" : " " + FAM.lang.not_found_offline) +
								"</p>" +
								"</div>";
						FAM.cache.actions.innerHTML = "";

						// add new topic icon if available
						if (type == "forum") {
							var newTopic = $(FAM.select.new_topic, data)[0];

							if (newTopic) {
								FAM.cache.actions.innerHTML =
									'<span id="FAM-new-topic" onclick="FAM.topic.create(\'' +
									newTopic.href +
									'\');" title="' +
									FAM.lang.new_topic +
									'">' +
									'<i class="bi bi-plus-circle-fill"></i>' +
									"</span>";
							}
						}
					}

					FAM.clearRequest();
				});
			},

			// message methods and data
			message: {
				// insert text into the message input
				insert: function (string, pad) {
					var msg = FAM.cache.actions.querySelector("#FAM-msg"),
						addedText = (pad ? " " : "") + string + (pad ? " " : ""),
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
				mention: function (caller) {
					FAM.message.insert('@"' + caller.innerText + '"', true);
				},

				// interact with the specifed message
				interact: function (caller, post) {
					var old = {
						fn: caller.onclick,
						html: caller.innerHTML,
					};

					caller.innerHTML = '<i class="bi bi-hourglass"></i>';
					caller.onclick = null;

					$.get(post, function (data) {
						var form = $('form[action="/post"]', data)[0],
							mode = post.split("=").pop();

						caller.innerHTML = old.html;
						caller.onclick = old.fn;

						if (form) {
							switch (mode) {
								case "quote":
									FAM.message.insert(form.message.value);
									break;

								case "editpost":
									caller = $(caller).closest(".FAM-msg")[0];

									if (FAM.message.edit.placeholder) {
										FAM.message.edit.cancel();
									}

									FAM.message.edit.form = form;
									FAM.message.edit.backup = caller.outerHTML;

									FAM.message.edit.placeholderSettings = {
										id: "FAM-msg-editing",
										avatar: caller.querySelector(".FAM-msg-avatar").innerHTML,
										username: caller.querySelector(".FAM-msg-name").innerHTML,
										notMine: caller.className.indexOf("FAM-my-msg") == -1,
									};

									FAM.message.edit.placeholder = FAM.message.write(
										'<textarea class="FAM-inputbox">' +
											form.message.value +
											"</textarea>" +
											'<div class="FAM-row FAM-center FAM-inline-buttons">' +
											'<button class="FAM-button FAM-edit-confirm" onclick="FAM.message.edit.confirm();"><i class="bi bi-check-circle-fill"></i></button>' +
											'<button class="FAM-button FAM-edit-cancel" onclick="FAM.message.edit.cancel();"><i class="bi bi-x-circle"></i></button>' +
											"</div>",
										FAM.message.edit.placeholderSettings,
										caller
									);

									break;

								case "delete":
									if (confirm(FAM.lang.delete_message)) {
										caller = $(caller).closest(".FAM-msg")[0];
										caller.className += " FAM-msg-placeholder";
										caller.querySelector(".FAM-msg-content").innerHTML = '<div class="FAM-msg-text"><i class="bi bi-hourglass"></i></div>';

										$.post("/post", $(form).serialize() + "&confirm=1", function () {
											FAM.cache.content.removeChild(caller);
											delete FAM.message.log["post--" + form.p.value];
										});
									}
									break;
							}
						} else {
							alert(FAM.lang.actions_error);
						}
					});
				},

				// edit actions
				edit: {
					// send the updated message
					confirm: function () {
						if (FAM.message.edit.placeholder) {
							FAM.message.backup = FAM.message.edit.placeholder.querySelector(".FAM-inputbox").value;
							FAM.message.send(true, FAM.message.edit.form, {
								replacement: FAM.message.edit.placeholder,

								placeholderSettings: {
									id: "FAM-msg-placeholder",
									avatar: FAM.message.edit.placeholderSettings.avatar,
									username: FAM.message.edit.placeholderSettings.username,
									notMine: FAM.message.edit.placeholderSettings.notMine,
								},
							});

							delete FAM.message.edit.placeholder;
						}
					},

					// cancel message editing
					cancel: function () {
						if (FAM.message.edit.placeholder) {
							if (FAM.message.edit.placeholder.parentNode) {
								FAM.message.edit.placeholder.insertAdjacentHTML("afterend", FAM.message.edit.backup);
								FAM.cache.content.removeChild(FAM.message.edit.placeholder);
							}

							delete FAM.message.edit.placeholder;
						}
					},
				},

				// write a custom message into the chat for alerts and placeholders
				write: function (message, data, replacement) {
					data = data || {};

					var msg = document.createElement("DIV");
					msg.dataset.who = data.username;
					msg.className = "FAM-msg " + (data.notMine ? "" : "FAM-my-msg") + " " + (data.id || "");
					msg.innerHTML =
						'<div class="FAM-msg-avatar">' +
						(data.avatar || _userdata.avatar) +
						"</div>" +
						'<div class="FAM-msg-box">' +
						'<div class="FAM-msg-name">' +
						(data.username || "") +
						"</div>" +
						'<div class="FAM-msg-content">' +
						'<div class="FAM-msg-text">' +
						(message || "") +
						"</div>" +
						"</div>" +
						'<div class="FAM-msg-date"></div>' +
						"</div>";

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
				handleKeys: function (e) {
					if (e) {
						var key = e.key || e.which || e.keyCode;

						// handle ENTER key
						if (
							{
								Enter: 1,
								13: 1,
							}[key] &&
							!e.shiftKey
						) {
							FAM.cache.actions.querySelector("#FAM-send").dataset.disabled != "true" && FAM.message.send();
							e.preventDefault();
						}
					}
				},

				// validate a message to make sure there's enough content to post it
				validate: function (message) {
					message = message || null;

					var send = FAM.cache.actions.querySelector("#FAM-send"),
						disabled = send.dataset.disabled == "true";

					if (message && disabled) {
						send.dataset.disabled = false;
					} else if (!message && !disabled) {
						send.dataset.disabled = true;
					}
				},

				// send a message to the topic
				send: function (resend, form, msgData) {
					msgData = msgData || {};

					if (FAM.message.sending) {
						return false;
					} else {
						FAM.message.sending = true;
					}

					FAM.message.clearError(); // removes error messages

					var msg = document.getElementById("FAM-msg"),
						placeholder = FAM.message.write(
							'<i class="bi bi-hourglass"></i>',
							msgData.placeholderSettings || { id: "FAM-msg-placeholder" },
							msgData.replacement
						), // show placeholder message until the sent message is ready
						val = resend ? FAM.message.backup : msg.value,
						i = 0;

					// add attachments to message value
					if (!resend) {
						// reset message field value
						msg.value = "";
						FAM.message.validate();
						FAM.message.backup = val; // backup the current message in case of errors
					}

					// post the message to the topic
					$.post(
						"/post",
						$(form || document.fampost)
							.serialize()
							.replace(/message=.*?(?:&|$)/, "message=" + FAM.encode(val) + "&") + "&post=1&prevent_post=1",
						function (data) {
							var success = $('a[href^="/viewtopic"]', data)[0],
								captcha = $("#funcaptcha", data);

							// update placeholderSettings
							if (msgData.placeholderSettings) {
								var settings = msgData.placeholderSettings;
								settings.id = "FAM-msg-error";
							}

							// get the new message and remove the placeholder + sending restriction
							if (success) {
								FAM.message.check(function () {
									// update message replacement
									if (msgData.replacement) {
										$.get(success.href, function (data) {
											var post = $(FAM.select.post + form.p.value, data)[0];

											if (post) {
												placeholder.insertAdjacentHTML("afterend", (FAM.message.log[form.p.value] = FAM.message.parse(post, 1, "")));
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
									var bar = FAM.cache.actions.querySelector("#FAM-timeout-bar"),
										progress = 5000;

									bar.style.height = "100%";

									FAM.message.timeoutBar = setInterval(function () {
										if ((progress -= 50) <= 0 || !FAM.message.sending) {
											clearInterval(FAM.message.timeoutBar);

											FAM.message.sending = false;
											bar.style.height = "0%";
										} else {
											bar.style.height = (progress / 5000) * 100 + "%";
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
									'<div class="FAM-center"><i class="bi bi-exclamation-circle"></i></div>' +
										captcha
											.closest("form")[0]
											.outerHTML.replace(/<noscript>(.*?)<\/noscript>/g, function (match, $1) {
												return $1.replace(/&lt;|&gt;/g, function (match) {
													return {
														"&lt;": "<",
														"&gt;": ">",
													}[match];
												});
											})
											.replace(/class="gensmall"/g, "")
											.replace(/<div style="[^"]*?">/, '<div class="FAM-row">')
											.replace(/<input([^>]*?)style="[^"]*?"([^>]*?)>/, '<input class="FAM-inputbox" $1 $2>')
											.replace(/<input[^>]*?type="submit"[^>]*?value="(.*?)"[^>]*?>/, '<button class="FAM-button" type="button">$1</button>')
											.replace("<form", '<form class="FAM-center FAM-captcha"'),
									settings || { id: "FAM-msg-error" }
								);

								// submits the captcha form
								FAM.message.error.querySelector(".FAM-button").onclick = function () {
									FAM.message.sending = false;
									FAM.message.send(true, $(this).closest("form").clone()[0], msgData);
									return false;
								};

								// ask to resend if the message was not sent successfully
							} else {
								FAM.message.sending = false;
								FAM.cache.content.removeChild(placeholder);
								FAM.message.error = FAM.message.write(
									'<div class="FAM-center"><i class="bi bi-exclamation-circle"></i></div>' +
										FAM.lang.error_sending +
										'<textarea id="FAM-resend-message" class="FAM-inputbox">' +
										FAM.message.backup +
										"</textarea>" +
										'<a onclick="FAM.message.send(true);">' +
										FAM.lang.error_resend +
										"</a> | " +
										'<a onclick="FAM.message.clearError();">' +
										FAM.lang.error_delete +
										"</a>" +
										'<a href="https://github.com/SethClydesdale/forumactif-messenger/wiki/Reporting-Bugs" target="_blank" style="float:right;">' +
										FAM.lang.error_report +
										"</a>",
									settings || { id: "FAM-msg-error" }
								);

								console.log(data); // log response data for debugging
							}
						}
					);
				},

				// removes unsent message error
				clearError: function () {
					if (FAM.message.error) {
						if (FAM.cache.content.querySelector(".FAM-msg-error")) {
							var txt = FAM.message.error.querySelector("#FAM-resend-message");
							if (txt) {
								FAM.message.backup = txt.value;
							}

							FAM.cache.content.removeChild(FAM.message.error);
						}

						delete FAM.message.error;
					}
				},

				// loads older messages
				loadOlder: function (page) {
					var button = FAM.cache.content.querySelector("#FAM-load-older");

					button.setAttribute("onclick", "");
					button.innerHTML = '<i class="bi bi-hourglass"></i>';

					$.get(page, function (data) {
						var back = $(FAM.select.page_back, data)[0],
							post = $(FAM.select.post, data),
							html = "",
							i = 0,
							j = post.length,
							load,
							pid;

						// parse messages
						for (; i < j; i++) {
							pid = post[i].className.replace(/.*?(post--\d+).*/, "$1");

							if (!FAM.message.log[pid]) {
								console.log(post[i]);
								html += FAM.message.log[pid] = FAM.message.parse(post[i], i, post[i + 1]);
							}
						}

						// restore the load more button functionality or hide it depending if more pages can be loaded
						if (back) {
							button.setAttribute("onclick", "FAM.message.loadOlder('" + (back.tagName == "A" ? back : back.parentNode).href + "')");
							button.innerHTML = FAM.lang.load_older;
						} else {
							button.style.display = "none";
						}

						// add older messages to the message list
						button.insertAdjacentHTML("afterend", html + '<div id="page-load"></div>');
						load = FAM.cache.content.querySelector("#page-load");

						FAM.message.scroll(load.previousSibling.offsetTop - 60); // scroll to the bottom of the old messages
						FAM.cache.content.removeChild(load);
					});
				},

				// returns the parsed message
				parse: function (post, index, nextPost) {
					// filter out sponsored content, since the message is empty
					if (post.id == "p0") {
						return "";
					}

					// ignore first post
					if (index == 0) {
						var indicator = $(FAM.select.post_message + " > strong:first-child", post)[0];

						if (indicator && /&nbsp;/.test(indicator.innerHTML)) {
							return "";
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
					pLink = name ? name.querySelector("a[href]") : null;
					pLink = pLink ? '<a href="' + pLink.href + '">' : null;

					// check if the user is in a group
					group = name ? name.getElementsByTagName("SPAN")[0] : null;
					group = group ? '<span style="' + group.getAttribute("style") + '"><strong>' : null;

					// check if the username is available
					name = name ? name.innerText : FAM.lang.guest;

					// check if the user is online
					online = post.className.indexOf("online") != -1;

					// date and message elements
					date = $(FAM.select.post_date, post)[0];
					msg = $(FAM.select.post_message, post)[0];

					var isHidden = nameNext.indexOf(name) != 0;

					return (
						'<div data-compact="' +
						(isHidden ? "" : "yes") +
						'" class="FAM-msg' +
						(online ? " FAM-msg-online" : "") +
						(name == _userdata.username || (!_userdata.session_logged_in && name == FAM.lang.guest) ? " FAM-my-msg" : "") +
						" " +
						post.className.replace(/.*?(post--\d+).*/, "$1") +
						'">' +
						'<div class="FAM-msg-avatar">' +
						(pLink ? pLink : "") +
						'<img src="' +
						(avatar ? avatar.src : "https://2img.net/i/fa/empty.gif") +
						'" alt="avatar">' +
						(pLink ? "</a>" : "") +
						"</div>" +
						'<div class="FAM-msg-box" title="' +
						(date
							? date.innerHTML
									.split("<")
									.shift()
									.replace(/^\s+|\s+$/g, "")
							: "") +
						' ">' +
						'<div class="FAM-msg-content">' +
						'<div class="FAM-msg-text">' +
						(msg
							? msg.innerHTML
									// replace break tags with line breaks
									// and remove unnecessary white-space / breaks at the beginning / end of messages
									.replace(/<br>/g, "\n")
									.replace(/^\n+|\n+$|^\s+|\s+$/g, "")
									.replace(/\n/g, "<br>")

									// add unique classes to codeboxes and quotes
									.replace(/class="(.*?)"/g, function (match, $1) {
										return $1.indexOf("FAM-") == -1 ? 'class="FAM-' + $1.split(" ").join(" FAM-") + '"' : match;
									})
									.replace(/<blockquote>/g, '<blockquote class="FAM-codebox">')

									// add events to media so they open the media viewer on click
									.replace(/<img/g, '<img onclick="FAM.modal.open(this);"')
									.replace(/<table class="FAM-attachment">([\s\S]*?)<\/table>/, function (match, $1) {
										return '<table class="FAM-attachment">' + $1.replace(/<td/g, '<td onclick="FAM.modal.open(this);"') + "</table>";
									})
							: "") +
						"</div>" +
						'<div class="FAM-msg-actions">' +
						(quote
							? '<span class="FAM-msg-button FAM-quote-button" onclick="FAM.message.interact(this, \'' +
							  quote.href +
							  '\');" title="' +
							  FAM.lang.tooltip_msg_quote +
							  '"><i class="bi bi-reply-fill"></i></span>'
							: "") +
						(edit
							? '<span class="FAM-msg-button FAM-edit-button" onclick="FAM.message.interact(this, \'' +
							  edit.href +
							  '\');" title="' +
							  FAM.lang.tooltip_msg_edit +
							  '"><i class="bi bi-pencil-fill"></i></span>'
							: "") +
						(remove
							? '<span class="FAM-msg-button FAM-delete-button" onclick="FAM.message.interact(this, \'' +
							  remove.href +
							  '\');" title="' +
							  FAM.lang.tooltip_msg_delete +
							  '"><i class="bi bi-x"></i></span>'
							: "") +
						"</div>" +
						"</div>" +
						'<div class="FAM-msg-info">' +
						'<div class="FAM-msg-name">' +
						'<span class="FAM-name-mention" onclick="FAM.message.mention(this);">' +
						(pLink ? pLink : "").replace("<a", '<a onclick="return false;"') +
						(group ? group : "") +
						name +
						(group ? "</strong></span>" : "") +
						(pLink ? "</a>" : "") +
						"</span>" +
						"</div>" +
						'<div class="FAM-msg-date">' +
						(date
							? date.innerHTML
									.split("<")
									.shift()
									.replace(/^\s+|\s+$/g, "")
							: "") +
						"</div>" +
						"</div>" +
						"</div>" +
						"</div>"
					);
				},

				// check for new messages / edits and update the message list
				check: function (callback) {
					FAM.request = $.get(FAM.history.log["tab" + FAM.tab.active][FAM.history.log["tab" + FAM.tab.active].length - 1].url, function (data) {
						for (var a = $(FAM.select.post, data), i = 0, j = a.length, pid, msg, row; i < j; i++) {
							pid = a[i].className.replace(/.*?(post--\d+).*/, "$1");
							msg = FAM.message.parse(a[i], i, a[i + 1]);

							if (msg) {
								// check for edited messages and update them
								if (FAM.message.log[pid]) {
									if (FAM.message.log[pid] != msg) {
										FAM.message.log[pid] = msg;
										row = FAM.cache.content.querySelector(".FAM-msg." + pid);

										if (row) {
											row.outerHTML = msg;
										}
									}

									// add in new messages if there are any
								} else {
									FAM.message.log[pid] = msg;
									FAM.cache.content.insertAdjacentHTML("beforeend", msg);

									if (msg.indexOf("FAM-my-msg") == -1) {
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
						if (typeof callback === "function") {
							callback();
						}
					});
				},

				// unread message list
				unread: [],

				// notify the user of new messages
				notify: function (newMsg) {
					// scroll to the newest message if the last few messages are visible
					if (FAM.message.isVisible(newMsg.previousSibling, 5)) {
						FAM.message.scroll();
					} else {
						FAM.message.unread.unshift(newMsg);

						var notif = FAM.cache.chat.querySelector("#FAM-new-msg-notif"),
							notifMsg = FAM.lang["message_notif_" + (FAM.message.unread.length == 1 ? "singular" : "plural")].replace(
								"$N",
								FAM.message.unread.length
							);

						// insert the new message notif and divider
						if (!notif) {
							FAM.cache.content.insertAdjacentHTML(
								"beforebegin",
								'<div id="FAM-new-msg-notif" onclick="FAM.message.markRead();">' + notifMsg + "</div>"
							);
							newMsg.insertAdjacentHTML("beforebegin", '<div id="FAM-new-msg-divider">' + FAM.lang.new_messages + "</div>");
						} else {
							notif.innerHTML = notifMsg;
						}
					}
				},

				// marks unread messages as read
				markRead: function (noScroll, skipTimeout) {
					var divider = FAM.cache.content.querySelector("#FAM-new-msg-divider"),
						notif = FAM.cache.chat.querySelector("#FAM-new-msg-notif");

					if (!noScroll) {
						FAM.message.scroll(divider ? divider.offsetTop - 90 : null);
					}

					// hide notif before removing
					notif.style.display = "none";

					// wait a few seconds before removing the divider and notif
					window.setTimeout(
						function () {
							if (divider && divider.parentNode) {
								divider.parentNode.removeChild(divider);
							}

							if (notif) {
								FAM.cache.chat.removeChild(notif);
							}
						},
						skipTimeout ? 1 : 10000
					);

					// clear unread messages
					FAM.message.unread = [];
				},

				// reads messages when the user scrolls
				read: function (caller) {
					if (caller.className.indexOf("FAM-viewing-topic") != -1 && FAM.message.unread.length) {
						if (
							caller.scrollTop / (caller.scrollHeight - caller.clientHeight) == 1 ||
							FAM.message.isVisible("unread", FAM.message.unread.length - 1)
						) {
							FAM.message.markRead(true);
						}
					}
				},

				// checks if a message is visible
				// lookBack = how many prev messages we should check the visibility state
				isVisible: function (msg, lookBack) {
					if (typeof lookBack == "undefined") {
						lookBack = 1;
					}

					var visible = false,
						initial = true,
						loopUnread = msg == "unread",
						rect;

					// set the first unread message
					if (loopUnread) {
						msg = FAM.message.unread[lookBack];
					}

					// loop over the specified messages
					while (lookBack-- > 0) {
						// don't switch the msg param on the initial run
						if (initial == true) {
							initial = false;
						} else {
							msg = loopUnread ? FAM.message.unread[lookBack] : msg ? msg.previousSibling : null;
						}

						// check if the message is visible
						if (msg) {
							rect = msg.getBoundingClientRect();

							// if the message is visible we break out of this loop
							if (
								rect.top >= 0 &&
								rect.left >= 0 &&
								rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
								rect.right <= (window.innerWidth || document.documentElement.clientWidth)
							) {
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
				listener: {
					// start listening for changes
					start: function () {
						FAM.message.listener.listening = setInterval(function () {
							if (!FAM.message.sending) {
								FAM.message.check();
							}
						}, 5000);

						FAM.message.listener.idle();
						$(document).on("mousemove keypress click", FAM.message.listener.idle);
					},

					// kill the message listener if it's active
					stop: function () {
						if (FAM.message.listener.listening) {
							FAM.message.sending = false;
							clearInterval(FAM.message.listener.listening);
							delete FAM.message.listener.listening;
						}

						if (FAM.message.listener.idling) {
							clearTimeout(FAM.message.listener.idling);
							delete FAM.message.listener.idling;

							$(document).off("mousemove keypress click", FAM.message.listener.idle);
						}
					},

					// kill listener after a specified period of inactivity
					idle: function () {
						if (FAM.message.listener.idling) {
							clearTimeout(FAM.message.listener.idling);
						}

						FAM.message.listener.idling = setTimeout(function () {
							FAM.message.listener.stop();
							FAM.cache.chat.insertAdjacentHTML(
								"beforeend",
								'<div id="FAM-idle" class="FAM-loading" onclick="FAM.message.listener.resume();">' +
									'<p><i class="bi bi-moon-fill"></i>' +
									FAM.lang.idle +
									"</p>" +
									"</div>"
							);
						}, 10 * 60 * 1000);
					},

					// resume listening after a period of inactivity
					resume: function () {
						var idle = FAM.cache.chat.querySelector("#FAM-idle");

						if (idle) {
							FAM.cache.chat.removeChild(idle);
						}

						FAM.message.check(FAM.message.listener.start);
					},
				},

				// scroll to the newest message or specified amount
				scroll: function (amount) {
					FAM.cache.content.scrollTop = amount || (FAM.cache.content.lastChild ? FAM.cache.content.lastChild.offsetTop - 60 : 0);
				},

				// call the emoji list to the specified element (caller)
				emoji: function (caller) {
					var active = FAM.cache.actions.querySelector("#FAM-emoji-list"),
						selector;

					if (active) {
						active.style.visibility = active.style.visibility == "hidden" ? "visible" : "hidden";
					} else {
						selector = document.createElement("IFRAME");
						selector.src = "/post?mode=smilies";
						selector.id = "FAM-emoji-list";
						selector.className = "FAM-dropdown";

						selector.onload = function () {
							try {
								var doc = this.contentDocument || this.contentWindow.document,
									emoji = doc.querySelectorAll('a[href*="insert_chatboxsmilie"]'),
									close = doc.querySelector('a[href="javascript:window.close();"]'),
									select = doc.getElementById("smilies_categ"),
									i = 0,
									j = emoji.length;

								for (; i < j; i++) {
									emoji[i].dataset.emoji = emoji[i].href.replace(/.*?'(.*?)'.*/, "$1");
									emoji[i].href = "#";
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
									select.setAttribute("style", "text-align:center;padding:3px;");
								}
							} catch (e) {
								console.log(e);
							}
						};

						caller.parentNode.insertBefore(selector, caller);
					}
				},

				// gets the form data for guests
				authorizeGuest: function () {
					$.get(FAM.message.replyPage, function (data) {
						var form = $('form[action="/post"]', data)[0];

						if (form) {
							FAM.cache.actions.querySelector("#FAM-post-data-placeholder").innerHTML = form.outerHTML
								.replace(/id=".*?"|name=".*?"/, "")
								.replace("<form", '<form id="FAM-post-data" name="fampost" style="display:none"');
							document.fampost.username.value = _userdata.username;
						}
					});
				},
			},

			// topic methods
			topic: {
				// open the topic creation page
				create: function (url, noHistory) {
					if (!noHistory) {
						FAM.history.update({
							url: url,
							title: "New topic",
							recall: {
								path: "topic.create",
								args: [url, true],
							},
						});
					}

					FAM.clearRequest();
					FAM.history.toggleBack();
					FAM.tab.title(FAM.lang.new_topic);

					FAM.cache.content.className = "FAM-viewing-newtopic";
					FAM.cache.content.innerHTML =
						'<div class="FAM-loading">' + '<i class="bi bi-hourglass"></i>' + '<span class="sr-only">' + FAM.lang.loading + "</span>" + "</div>";
					FAM.cache.actions.innerHTML = "";

					FAM.request = $.get(url, function (data) {
						var form = $('form[action="/post"]', data)[0];

						FAM.cache.content.innerHTML =
							'<div id="FAM-newtopic-box">' +
							'<form name="fampost">' +
							'<div class="FAM-row"><input id="FAM-topic-subject" class="FAM-inputbox" type="text" placeholder="' +
							FAM.lang.title_placeholder +
							'" name="subject"></div>' +
							'<div class="FAM-row"><textarea id="FAM-topic-message" class="FAM-inputbox" name="message" placeholder="' +
							FAM.lang.msg_placeholder +
							'"></textarea></div>' +
							'<div class="FAM-row FAM-center"><button class="FAM-button-large" type="button" onclick="FAM.topic.publish()" type="button">' +
							FAM.lang.start_topic +
							"</button></div>" +
							'<div style="display:none">' +
							$('input[name="auth[]"]', form)[0].parentNode.innerHTML +
							"</div>" +
							"</form>" +
							"</div>";

						// restore topic data
						if (FAM.topic.backup) {
							document.fampost.subject.value = FAM.topic.backup.subject;
							document.fampost.message.value = FAM.topic.backup.message;

							if (!FAM.topic.backup.subject) {
								document.fampost.subject.insertAdjacentHTML("afterend", '<p class="FAM-error FAM-center">' + FAM.lang.topic_no_subject + "</p>");
							}

							if (!FAM.topic.backup.message) {
								document.fampost.message.insertAdjacentHTML("afterend", '<p class="FAM-error FAM-center">' + FAM.lang.topic_no_message + "</p>");
							}

							delete FAM.topic.backup;
						}
					});
				},

				// posts the topic to the forum
				publish: function () {
					// backup topic data in case of error
					FAM.topic.backup = {
						subject: document.fampost.subject.value,
						message: document.fampost.message.value,
					};

					var formData =
						$(document.fampost)
							.serialize()
							.replace(/(subject|message)=.*?&/g, function (match, key) {
								return (
									key +
									"=" +
									FAM.encode(
										{
											subject: FAM.topic.backup.subject,
											message: FAM.topic.backup.message,
										}[key]
									) +
									"&"
								);
							}) + "&post=1";

					// display loading placeholder
					FAM.cache.content.innerHTML =
						'<div class="FAM-loading">' + '<i class="bi bi-hourglass"></i>' + '<span class="sr-only">' + FAM.lang.loading + "</span>" + "</div>";

					// post the topic
					$.post("/post", formData, function (data) {
						var success = $('a[href^="/viewtopic?t="]', data)[0];

						if (success) {
							FAM.get(
								"/t" +
									success.href.replace(/.*?t=(\d+)&.*/, "$1") +
									"-" +
									encodeURIComponent(FAM.topic.backup.subject.toLowerCase().replace(/\s/g, "-")) +
									"?view=newest",
								FAM.topic.backup.subject
							);
							delete FAM.topic.backup;
						} else {
							var history = FAM.history.log["tab" + FAM.tab.active];
							FAM.topic.create(history[history.length - 1].url, true);
						}
					});
				},

				// returns parsed forum topics and categories
				parse: function (forumtitle) {
					var row = $(forumtitle).closest(FAM.select.topic);

					if (!row.find(".AD_LastPA")[0]) {
						// exclude ad forums
						row = row[0];

						var avatar = $(FAM.select.lastpost_avatar, row)[0],
							date = $(FAM.select.lastpost_date, row)[0],
							type = $(FAM.select.topic_type, row)[0],
							type2 = /c\d+-/.test(forumtitle.href)
								? "category"
								: /f\d+-/.test(forumtitle.href)
								? "forum"
								: /t\d+-/.test(forumtitle.href)
								? "topic"
								: "unknown";

						// ignore special topics (note, annoucement,...)
						if (FAM.config.ignore_announcements && type !== undefined) {
							return "";
						}

						// build the markup for forum and topic containers
						return (
							'<div class="FAM-chat FAM-' +
							type2 +
							($('a[href$="view=newest"]', row)[0] ? " FAM-new-post" : "") +
							'" onclick="FAM.get(\'' +
							forumtitle.href.replace(/\?.*$/, "") +
							(type2 == "topic" ? "?view=newest" : "") +
							"', this.querySelector('.FAM-chat-title').innerText);\">" +
							'<div class="FAM-topic-name">' +
							'<i class="bi bi-chat-fill"></i>' +
							FAM.lang.topic_name +
							"</div>" +
							'<div class="FAM-chat-avatar">' +
							'<img src="' +
							(avatar ? avatar.src : "https://2img.net/i/fa/empty.gif") +
							'" alt="avatar">' +
							"</div>" +
							'<div class="FAM-chat-content">' +
							'<div class="FAM-chat-title">' +
							forumtitle.innerText +
							"</div>" +
							'<div class="FAM-chat-date">' +
							(date ? date.innerHTML : "") +
							"</div>" +
							"</div>" +
							"</div>"
						);
					} else {
						return "";
					}
				},
			},

			// github pages
			page: {
				// information about Forumactif Messenger
				about: {
					open: function (noHistory) {
						FAM.page.setup("about", noHistory);
						FAM.cache.content.innerHTML =
							'<div id="FAM-about">' +
							'<div id="FAM-service-title" class="FAM-title">' +
							'<a href="https://github.com/SethClydesdale/forumactif-messenger">' +
							"<b>Forum</b>actif <b>Messenger</b>" +
							"</a> <br><br>" +
							"</div>" +
							'<div id="FAM-about-info">' +
							'<p>Made by <a href="https://github.com/SethClydesdale">Seth Clydesdale (AngeTuteur)</a></p>' +
							"<p>" +
							"And the awesome " +
							'<a href="https://github.com/SethClydesdale/forumactif-messenger/graphs/contributors">Forumactif Messenger Community</a>' +
							"</p>" +
							"<p>" +
							"Redesign by Kim for the " +
							'<a href="https://blankthemerpg.forumactif.com/">Blank Theme</a>' +
							"</p>" +
							"</div>" +
							"</div>";
					},
				},

				// sets up various settings for custom pages
				setup: function (pageName, noHistory) {
					// open a new tab if no tab is currently open
					if (!FAM.tab.active) {
						FAM.tab.add();
					}

					// update history
					if (!noHistory) {
						FAM.history.update({
							url: "",
							title: FAM.lang["tooltip_" + pageName],
							recall: {
								path: "page." + pageName.replace(/\s/g, "_") + ".open",
								args: [true],
							},
						});
					}

					FAM.clearRequest();
					FAM.history.toggleBack();
					FAM.message.listener.stop();
					FAM.tab.title(FAM.lang["tooltip_" + pageName]);

					FAM.cache.content.className = "FAM-viewing-github";
					FAM.cache.content.innerHTML =
						'<div class="FAM-loading">' + '<i class="bi bi-hourglass"></i>' + '<span class="sr-only">' + FAM.lang.loading + "</span>" + "</div>";
				},

				// parses a page retreived from github
				parse: function (data, vars) {
					var i;

					vars = vars || {};
					data = data
						.replace(/\n\s*?</g, "<")
						.replace(/<a/g, '<a target="_blank"')
						// show new release content
						.replace(/style="\/\*v1\.0\.0\*\/display:none;"/g, "");

					// parse custom variables
					for (i in vars) {
						data = data.replace(new RegExp("{" + i + "}", "g"), vars[i]);
					}

					// parse language variables
					for (i in FAM.lang) {
						data = data.replace(new RegExp("{" + i + "}", "g"), FAM.lang[i]);
					}

					return data;
				},
			},

			// history methods and data
			history: {
				log: {}, // log history so the user can go back

				// save history to localStorage
				save: function () {
					if (window.JSON && window.localStorage) {
						localStorage.fam_data = JSON.stringify({
							active: FAM.tab.active,
							total: FAM.tab.total,
							history: FAM.history.log,
						});
					}
				},

				// restore history
				restore: function () {
					if (window.JSON && window.localStorage && localStorage.fam_data) {
						if (!FAM.tab.loaded) {
							var data = JSON.parse(localStorage.fam_data),
								i;

							FAM.tab.total = data.total;
							FAM.history.log = data.history;

							for (i in FAM.history.log) {
								FAM.tab.add(i.replace("tab", ""), FAM.history.log[i][FAM.history.log[i].length - 1].title);
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
				update: function (history) {
					FAM.history.log["tab" + FAM.tab.active].push(history);

					// save user tabs
					FAM.history.save();
				},

				// goes back in history to the beginning or by 1
				back: function (begin) {
					var history = FAM.history.log["tab" + FAM.tab.active][begin ? 0 : FAM.history.log["tab" + FAM.tab.active].length - 2];

					begin
						? (FAM.history.log["tab" + FAM.tab.active] = FAM.history.log["tab" + FAM.tab.active].slice(0, 1))
						: FAM.history.log["tab" + FAM.tab.active].pop();

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
				recall: function (data) {
					var path = data.path.split("."),
						open = FAM,
						i = 0,
						j = path.length;

					for (; i < j; i++) {
						open = open[path[i]];
					}

					open.apply(null, data.args);
				},

				// toggles the back button
				toggleBack: function () {
					if (FAM.history.log["tab" + FAM.tab.active]) {
						if (FAM.history.log["tab" + FAM.tab.active].length > 1 && FAM.cache.back.style.display == "none") {
							FAM.cache.back.style.display = "";
						} else if (FAM.history.log["tab" + FAM.tab.active].length <= 1 && FAM.cache.back.style.display != "none") {
							FAM.cache.back.style.display = "none";
						}
					} else {
						FAM.cache.back.style.display = "none";
					}
				},
			},

			// tab methods and data
			tab: {
				active: 0, // currently active tab
				total: 0, // total tabs created (used for assigning unique ids)

				// sets up the initial tabs for Forumactif Messenger
				initial: function () {
					FAM.tab.add(); // initial chat_page tab

					for (var i = 0, j = FAM.config.initial_tabs.length, id, title; i < j; i++) {
						id = ++FAM.tab.total; // unique tab id

						// initial history entry
						FAM.history.log["tab" + id] = [
							{
								url: FAM.config.chat_page,
								title: FAM.config.main_title,
							},
						];

						// custom history entry
						FAM.config.initial_tabs[i].url = FAM.config.initial_tabs[i].url || "";
						FAM.config.initial_tabs[i].title = FAM.config.initial_tabs[i].title || "Tab " + id;
						FAM.history.log["tab" + id].push(FAM.config.initial_tabs[i]);

						// creates a new tab w/the custom history entry via the "restore" method
						FAM.tab.add(id, FAM.config.initial_tabs[i].title);
					}
				},

				// add a new tab
				add: function (restore, title) {
					var id = restore || ++FAM.tab.total;

					// general tab markup
					FAM.cache.tabs.insertAdjacentHTML(
						"beforeend",
						'<div id="FAM-tab-' +
							id +
							'" class="FAM-tab">' +
							'<span class="FAM-tab-name" onclick="FAM.tab.focus(' +
							id +
							')">' +
							(title ? title : FAM.lang.loading) +
							"</span>" +
							'<i class="bi bi-x" onclick="FAM.tab.close(' +
							id +
							')"></i>' +
							"</div>"
					);

					// doesn't log history or focus the tab if it was "restored" from localStorage
					if (!restore) {
						FAM.history.log["tab" + id] = [];
						FAM.tab.focus(id);
					}
				},

				// close the specified tab
				close: function (id) {
					var dead = FAM.cache.tabs.querySelector("#FAM-tab-" + id),
						survivor = dead.previousSibling ? dead.previousSibling : dead.nextSibling ? dead.nextSibling : null;

					if (survivor && id == FAM.tab.active) {
						FAM.tab.focus(survivor.id.replace("FAM-tab-", ""));
					} else if (!survivor) {
						FAM.clearRequest();
						FAM.message.listener.stop();

						FAM.tab.title(FAM.lang.no_tabs_title);
						FAM.cache.content.innerHTML =
							'<div id="FAM-no-tabs" class="FAM-loading" onclick="FAM.tab.prompt(this);">' +
							'<p><i class="bi bi-plus"></i>' +
							FAM.lang.no_tabs +
							"</p>" +
							"</div>";
						FAM.cache.actions.innerHTML = "";

						FAM.tab.active = 0;
					}

					dead.parentNode.removeChild(dead);
					delete FAM.history.log["tab" + id];
					FAM.history.save();
					FAM.history.toggleBack();
				},

				// focus the specified tab
				focus: function (id) {
					if (id == FAM.tab.active) {
						return false;
					}

					var active = FAM.cache.tabs.querySelector("#FAM-tab-" + FAM.tab.active),
						tab = FAM.cache.tabs.querySelector("#FAM-tab-" + id),
						history = FAM.history.log["tab" + id];

					if (active) {
						active.className = "FAM-tab";
					}

					tab.className = "FAM-tab FAM-tab-active";
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
						FAM.get(FAM.config.chat_page || "/forum", FAM.config.main_title);
					}
				},

				// bring up a prompt that asks the user if they want to load the initial tabs
				prompt: function (caller) {
					if (FAM.config.initial_tabs.length) {
						caller.style.cursor = "auto";
						caller.onclick = null;
						caller.innerHTML =
							'<div class="FAM-row">' +
							'<p><i class="bi bi-hourglass"></i>' +
							FAM.lang.no_tabs_initial +
							"</p>" +
							'<div class="FAM-inline-buttons">' +
							'<button class="FAM-button" onclick="FAM.tab.initial();" type="button">' +
							FAM.lang.yes +
							"</button>" +
							'<button class="FAM-button" onclick="FAM.tab.add();" type="button">' +
							FAM.lang.no +
							"</button>" +
							"</div>" +
							"</div>";
					} else {
						FAM.tab.add();
					}
				},

				// changes the main title and focused tab title
				title: function (string) {
					FAM.cache.toolbar.querySelector(".FAM-maintitle").innerText = string;
					FAM.cache.tabs.querySelector("#FAM-tab-" + FAM.tab.active + " .FAM-tab-name").innerText = string;
				},
			},

			// initial setup of FAM
			init: function () {
				var initialized = false;

				// add view=newest query to topic urls if it's not there
				if (/\/t\d+/.test(FAM.config.chat_page) && !/view=newest/.test(FAM.config.chat_page)) {
					FAM.config.chat_page = FAM.config.chat_page.replace(/#\d+$/, "") + "?view=newest";
				}

				// parse the update channel
				FAM.config.update_channel = FAM.config.update_channel == "developer" ? "-dev" : "";

				// builds the necessary chat elements
				function build() {
					// delete FAM if the user does not meet the required permissions
					if (
						!{
							all: 1,
							member: _userdata.session_logged_in,
							staff: _userdata.user_level,
						}[FAM.config.chat_permission.toLowerCase()]
					) {
						return;
					}

					var button = document.createElement("A"),
						chat = document.createElement("DIV"),
						audio = document.createElement("AUDIO"),
						frag = document.createDocumentFragment(),
						embed = FAM.config.embed ? document.querySelector(FAM.config.embed) : null;

					chat.id = "FAM";
					chat.className = FAM.config.embed ? "FAM-embedded" : "";
					chat.dataset.hidden = FAM.config.embed ? false : true;
					chat.innerHTML =
						'<div id="FAM-toolbar">' +
						'<div id="FAM-toolbar-inner">' +
						'<span id="FAM-back" class="FAM-toolbar-button" onclick="FAM.history.back()" style="display:none" title="' +
						FAM.lang.tooltip_back +
						'"><i class="bi bi-arrow-left-short"></i></span>' +
						'<h1 class="FAM-maintitle"></h1>' +
						'<div id="FAM-menu-about" class="FAM-menu-option" onclick="FAM.page.about.open();" title="' +
						FAM.lang.tooltip_about +
						'"><i class="bi bi-info-circle"></i></div>' +
						"</div>" +
						"</div>" +
						'<div id="FAM-tab-container" ' +
						(FAM.config.tabs ? "" : 'style="display:none"') +
						">" +
						'<div id="FAM-tabs"></div>' +
						'<div id="FAM-tab-add" onclick="FAM.tab.add()"><i class="bi bi-plus"></i></div>' +
						"</div>" +
						'<div class="FAM-container-content">' +
						'<div id="FAM-content" onscroll="FAM.message.read(this);"></div>' +
						'<div id="FAM-actions"></div>' +
						"</div>";
					frag.appendChild(chat);

					// create button if the chat is not embedded
					if (!FAM.config.embed) {
						button.id = "FAM-button";
						button.title = FAM.lang.tooltip_openFAM;
						button.innerHTML = '<i class="bi bi-chat-fill"></i>';
						button.onclick = FAM.toggle;
						frag.appendChild(button);
					}

					// setup audio element for notifications
					audio.src = FAM.config.sound_notif_file;

					if (audio.canPlayType) {
						audio.id = "FAM-audio-notif";
						frag.appendChild(audio);
					} else {
						audio = null;
					}

					// cache nodes
					FAM.cache = {
						button: button,
						chat: chat,
						audio: audio,
						back: chat.querySelector("#FAM-back"),
						toolbar: chat.querySelector("#FAM-toolbar"),
						tabs: chat.querySelector("#FAM-tabs"),
						content: chat.querySelector("#FAM-content"),
						actions: chat.querySelector("#FAM-actions"),
					};

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

					// embedded initialization
					if (FAM.config.embed) {
						!FAM.history.restore() && FAM.tab.initial();

						// reset fullscreen setting when embedded
						if (window.JSON && window.localStorage && localStorage.fam_settings) {
							var settings = JSON.parse(localStorage.fam_settings);
							settings.fam_fullscreen = "";
							localStorage.fam_settings = JSON.stringify(settings);
						}
					}

					// close drop downs that are left open
					$(document).on("mousedown", function (e) {
						// drop down should be the first element in the arrays, other elements are those that should be excluded
						var close = [
								[FAM.cache.actions.querySelector("#FAM-emoji-list"), FAM.cache.actions.querySelector("#FAM-emoji")],
								[FAM.cache.actions.querySelector("#FAM-attach-options"), FAM.cache.actions.querySelector("#FAM-attachment")],
							],
							i = 0,
							j = close.length,
							a;

						for (; i < j; i++) {
							if (close[i][0] && close[i][0].style.visibility != "hidden") {
								a = $(close[i]);

								if (!a.is(e.target) && !a.has(e.target)[0]) {
									close[i][0].style.visibility = "hidden";
								}
							}
						}
					});

					delete FAM.init; // delete this function as to not initialize FAM again
				}

				try {
					// wait for the doc to be interactive / complete
					function ready() {
						if (!initialized && /interactive|complete/.test(document.readyState)) {
							build();
							initialized = true;
						}
					}

					ready();

					if (!initialized) {
						document.addEventListener("readystatechange", ready);
					}
				} catch (error) {
					$(build); // jQuery fallback
				}
			},

			version: "v1.0.3",
		};

		FAM.init(); // setup FAM
	})();
