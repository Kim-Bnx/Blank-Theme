// PLACEMENT : sur toutes les pages
// [FRENCH] by Shadow
// https://forum.forumactif.com/t378492-rendre-le-systeme-de-mentions-plus-facile-a-utiliser

// [ENGLIGH] by Ange tuteur
// https://help.forumotion.com/t140358-make-the-mentioning-system-easier-to-use

$(function () {
	if (/mode=reply/.test(window.location.search) && my_getcookie("fa_mention")) {
		document.post.message.value += '@"' + my_getcookie("fa_mention") + '" ';
		my_setcookie("fa_mention", "");
	}
	if (!/\/t\d+/.test(window.location.pathname)) return;

	if (_userdata.session_logged_in == 1) {
		for (
			var a = $(".profile-icons"),
				b,
				c,
				d = [".post_pseudo a"],
				i = 0,
				j = a.length,
				t = document.getElementById("text_editor_textarea"),
				l = 4;
			i < j;
			i++
		) {
			b = document.createElement("A");
			b.className = "fa-mention";
			b.innerHTML = "@";
			b.title =
				"Mentionner " +
				$(a[i])
					.closest(".post_row")
					.find(d + ":not(.fa-mention)")
					.text();
			b.onclick = function () {
				var n = this.title.replace(/^.*?\s/, "");

				if ($.sceditor) t.insertText('@"' + n + '" ');
				else {
					my_setcookie("fa_mention", n);
					window.location.href =
						"/post?t=" +
						window.location.pathname.replace(/\/t(\d+)-.*/, "$1") +
						"&mode=reply";
				}
			};

			if (l) {
				c = document.createElement("LI");
				c.appendChild(b);
			}

			a[i].insertBefore(l ? c : b, a[i].firstChild);
		}
	}

	$(function () {
		if (!$.sceditor) return;
		t = $(t).sceditor("instance");
	});
});
