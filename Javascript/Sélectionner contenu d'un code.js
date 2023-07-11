// PLACEMENT : sur toutes les pages

// [ENGLISH] by Ange Tuteur
// https://fmdesign.forumotion.com/t1337-copy-code

// Code alternatif pour simplement sélectionner le code
// [FRENCH] by Ea : https://forum.forumactif.com/t309759-bouton-selectionner-le-contenu-pour-les-balises-de-code

$.getScript('https://cdn.jsdelivr.net/clipboard.js/1.5.16/clipboard.min.js', function() {
  window.fae_copyCode = {
    copy : 'Copier',
    copied : '<i class="bi bi-check2"></i> Copié'
  };
 
  $(function() {
    $('code').closest('.codebox').attr('id','codeBox');
    
    var a = $('.codebox dt').not('.spoiler > dt, .hidecode > dt'),
        i = 0,
        j = a.length;
 
    if (a[0]) {
      $('head').append('<style type="text/css">.fae_copy-code{float:right;cursor:pointer;}.fae_copy-code:hover{text-decoration:underline}</style>');
 
      for (; i < j; i++) {
        a[i].insertAdjacentHTML('beforeend', '<div class="copyCode">' + fae_copyCode.copy + '</div>');
      }
 
      new Clipboard('.copyCode',{
        target : function (copy) {
          if (copy.innerHTML != fae_copyCode.copied) {
            return $(copy).closest('.codebox').find('.cont_code, code')[0];
          }
        }
 
      }).on('success', function (e) {
        var copy = e.trigger;
 
        if (copy.innerHTML != fae_copyCode.copied) {
          copy.innerHTML = fae_copyCode.copied;
          copy.className += ' copiedCode';
 
          window.setTimeout(function() {
            copy.innerHTML = fae_copyCode.copy;
            copy.className = copy.className.replace('copiedCode', '');
          }, 2000);
        }
 
        e.clearSelection();
      });
    }
 
  });
});