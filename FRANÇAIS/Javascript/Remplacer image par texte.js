// PLACEMENT : sur toutes les pages

$(function(){

  // BOUTON DE SUJET 
   $('.newtopic_button').replaceWith("Nouveau"); // Ouvrir un nouveau sujet
   $('.reply_button').replaceWith("Répondre"); // Répondre au sujet
  
   $('.newpm_button img').replaceWith("Nouveau message privé"); // Envoyer un nouveau MP
   $('.replypm_button img').replaceWith("Répondre au message"); // Répondre au MP
  
  // BOUTON EDITION DE MESSAGE
   $('.i_icon_quote').replaceWith("Citer"); // Bouton "citer"
   $('#i_icon_quote').replaceWith("Citer"); // Bouton "citer" dans les MP
   $('.i_icon_edit').replaceWith("Editer"); // Bouton "éditer"
   $('.i_icon_delete').replaceWith("Supprimer"); // Bouton "supprimer"
   $('#i_icon_delete').replaceWith("Supprimer"); // Bouton "supprimer" dans les MP et sondage
   $('.i_icon_ip').replaceWith("IP"); // Bouton "IP"
  
  
  // BOUTON DE CONTACT 
   $('.i_icon_profile, #i_icon_profile').replaceWith("Profil"); // Voir profil
   $('.i_icon_pm, #i_icon_pm').replaceWith("MP"); // Envoyer un MP
  $('.profil_contact a:nth-of-type(3) img').replaceWith("Autre"); // Autres
  
  
  
});