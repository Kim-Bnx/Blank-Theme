/**
 * Description : Script PhpBB3 & ModernBB pour faciliter le placement des icônes de messages 
 * (définies par l'admin, comme "En cours", "résolu", "trigger warning", ...) dans les templates. 
 * Le script supprime l'icone (c'est une image de fond) par défaut et la transforme en image 
 * placée dans un conteneur que vous pourrez placer plus facilement dans votre template.
 * 
 * Template correspondant pour les sélecteurs : topics_list_box
 * Placement : Sur toutes les pages
 *  
 * Source : Inspiré par un script de Milouze14 - https://forum.forumactif.com/t400216-#3340636
 * 
 * @version 2025.02.06
 * @author 'Christa Lostmindy
 */

const selecteurTopic = '.topicslist_row'; // Le sélecteur du conteneur d'un sujet
const selecteurIcon = '.topicslist_infos'; // repérez l'élément HTML dans lequel se trouve {topics_list_box.row.ICON} et utilisez la valeur de son attribut class
const selecteurCible = '.topic_msgicon'; // La classe de l'élément cible qui récupèrera l'image de l'icone de sujet
const keepStyle = false; // Conserver l'attribut style ou non

document.addEventListener("DOMContentLoaded", () => { 
    document.querySelectorAll(selecteurTopic + ' ' + selecteurIcon + '[style*="background-image"]').forEach(icon => {
        let iconUrl = icon.style.backgroundImage.split(/\("?/)[1].split(/"?\)/)[0];
        if(iconUrl) {
            keepStyle ? icon.style.removeProperty('background-image') : icon.removeAttribute('style') ;
            const iconImg = document.createElement('img');
            iconImg.src = iconUrl;
            icon.closest(selecteurTopic).querySelector(selecteurCible).append(iconImg);
        }
    });
});