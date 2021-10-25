// PLACEMENT : In all the pages


$(function(){

  // TOPIC BUTTONS
   $('.newtopic_button').replaceWith("New topic"); // Open a new topic
   $('.reply_button').replaceWith("Post reply"); // Reply a topic
  
   $('.newpm_button img').replaceWith("New PM"); // new private message
   $('.replypm_button img').replaceWith("Reply"); // reply to a private message
  
  // POST BUTTONS
   $('.i_icon_quote').replaceWith("Quote"); // "quote" button
   $('#i_icon_quote').replaceWith("Quote"); // "quote button in private message
   $('.i_icon_edit').replaceWith("Edit"); // "edit" button
   $('.i_icon_delete').replaceWith("Delete"); // "delete" button
   $('#i_icon_delete').replaceWith("Delete"); // "delete" button in PM and poll
   $('.i_icon_ip').replaceWith("IP"); // "ip" button
  
  
  // CONTACT BUTTONS
   $('.i_icon_profile, #i_icon_profile').replaceWith("Profile"); // Show profile
   $('.i_icon_pm, #i_icon_pm').replaceWith("PM"); // Send a PM
   $('.profil_contact a:nth-of-type(3) img').replaceWith("Other"); // Other
  
  
  
});