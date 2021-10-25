// PLACEMENT : In all the page

// [FRENCH] by Milouze14
// https://forum.forumactif.com/t400216-afficher-les-icones-de-sujets-dans-la-colonne-derniers-messages#3340636
// Easier display of the message icons (if enable), like "topic solved", "trigger warning", ...

$(function () {
    $('.topicslist_row').find('.topicslist_infos[style*="background-image"]').each(function () {
        var a = $(this).css('background-image');
        a = a.replace('url(', '').replace(')', '').replace(/\"/gi, "");
        if (a) {
            $(this).css('background-image', 'url(https://2img.net/i/fa/empty.gif)');
            $(this).find('.topic_msgicon').append('<img src="' + a + '"/>');
        }
    });
});
