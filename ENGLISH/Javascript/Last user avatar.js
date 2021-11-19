// PLACEMENT : in the home page
// Display the avatar of the last user registered 

// [FRENCH] by No_way and optimized by Monomer
// https://forum.forumactif.com/t379011-avatar-du-dernier-membre-inscrit-dans-le-qui-est-en-ligne#3196239

$(function () {
  try {
    $.get($('#newest_user a[href^=\'/u\']') [0].href, function (d) {
        (a = $('#user_avatar img', $(d))).length && $('#lastuser_avatar').html(a)
    })
  } catch(e) {}
});