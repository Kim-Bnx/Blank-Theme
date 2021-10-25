// PLACEMENT : sur toutes les pages

// [FRENCH] by Shadow
// https://forum.forumactif.com/t378492-rendre-le-systeme-de-mentions-plus-facile-a-utiliser

// [ENGLIGH] by Ange tuteur
// https://help.forumotion.com/t140358-make-the-mentioning-system-easier-to-use


$(function() {
   var version = 0;
 
   if (/mode=reply/.test(window.location.search) && my_getcookie('fa_mention')) {
      document.post.message.value += '@"' + my_getcookie('fa_mention') + '" ';
      my_setcookie('fa_mention',''); 
   } if (!/\/t\d+/.test(window.location.pathname)) return;
 
   for (var a = $(['ul.profile-icons'][version]), b, i = 0, j = a.length, t = document.getElementById('text_editor_textarea'); i<j; i++) {
      b = document.createElement('A');
     
      b.title = 'Mentionner ' + $(a[i]).text(); // texte au survol de la souris
      b.style.marginRight = '3px';
      b.className = 'fa-mention'; // .class du lien
      b.innerHTML = 'Taguer'; // texte dans le lien
     
      b.href = '#';
      b.onclick = function() {
         var n = this.title.replace(/^.*?\s/,'');
    
         if ($.sceditor) t.insertText('@"' + n + '" ');
         else {
            my_setcookie('fa_mention', n);
            window.location.href = '/post?t=' + window.location.pathname.replace(/\/t(\d+)-.*/,'$1') + '&mode=reply';
         }
    
         return false;
      };
 
      a[i].parentNode.insertBefore(b, a[i]);
   }
 
   $(function(){
      if (!$.sceditor) return;
      t=$(t).sceditor('instance');
   });
});