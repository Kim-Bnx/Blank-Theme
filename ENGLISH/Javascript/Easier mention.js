// PLACEMENT : sur toutes les pages

// [FRENCH] by Shadow
// https://forum.forumactif.com/t378492-rendre-le-systeme-de-mentions-plus-facile-a-utiliser

// [ENGLIGH] by Ange tuteur
// https://help.forumotion.com/t140358-make-the-mentioning-system-easier-to-use


/* FORUM VERSIONS
 * 0 = PHPBB2
 * 1 = PHPBB3
 * 2 = PUNBB
 * 3 = INVISION
 * 4 = MODERNBB
 */
$(function() {
  var version = 4;
 
  if (/mode=reply/.test(window.location.search) && my_getcookie('fa_mention')) {
    document.post.message.value += '@"' + my_getcookie('fa_mention') + '" ';
    my_setcookie('fa_mention','');
  } if (!/\/t\d+/.test(window.location.pathname)) return;
 
  for (var a = $(['.post-options', '.profile-icons', '.post-options', '.posting-icons', '.profile-icons'][version]), b, c, d = ['.name strong a', '.author a', '.username a', '.author a', '.post_pseudo a'][version], e, i = 0, j = a.length, t = document.getElementById('text_editor_textarea'), l = version == 1 || version == 3 || version == 4; i<j; i++) {
    b = document.createElement('A');
    b.className = 'fa-mention';
    b.innerHTML = '@';
    b.title = 'Mentionner ' + $(a[i]).closest('.post_row').find(d + ':not(.fa-mention)').text();
    b.onclick = function() {
      var n = this.title.replace(/^.*?\s/,'');
 
      if ($.sceditor) t.insertText('@"' + n + '" ');
      else {
        my_setcookie('fa_mention', n);
        window.location.href = '/post?t=' + window.location.pathname.replace(/\/t(\d+)-.*/,'$1') + '&mode=reply';
      }
    };
 
    if (l) {
      c = document.createElement('LI');
      c.appendChild(b);
    }
 
    a[i].insertBefore(l ? c : b, a[i].firstChild);
  }
 
  $(function(){
    if (!$.sceditor) return;
    t=$(t).sceditor('instance');
  });
});