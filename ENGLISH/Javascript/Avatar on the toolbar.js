// PLACEMENT : in all the pages

// [FRENCH] by Tech
// https://forum.forumactif.com/t355862-afficher-l-avatar-du-membre-dans-la-toolbar

// [ENGLIGH] by Ange tuteur
// https://help.forumotion.com/t133635-display-the-avatar-of-a-member-on-the-toolbar

$(function() {
    $(function() {
        $('#fa_welcome').prepend('<span class="fa_avatar">' + _userdata.avatar + '</span>')
    })
});