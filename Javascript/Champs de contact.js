/**
 * Script for Forumotion
 * Customizes contact fields by giving it a unique tooltip and/or replacing the original picture content
 * Works both in topics & in the profile page
 * 
 * Script pour Forumactif
 * Personnalise les champs de contact en leur attribuant une infobulle personnelle et/ou en remplaçant l'image d'origine
 * Fonctionne aussi bien dans les messages que sur la page de profil
 *
 * @placement Sur toutes les pages
 * @documentation  https://blankthemerpg.forumactif.com/t158-
 *
 * @author 'Christa Lostmindy
 */

/* -----------------------------
 * VOS REGLAGES SE FONT ICI
 * ----------------------------- */

const contactFields_selectorInTopic = ".post_contact"; // Sélecteur des champs de contact dans les messages
const contactFields_selectorInProfile = ".profile_contact"; // Sélecteur des champs de contact dans la page de profil

/* Liste des champs à personnaliser */
const contactFields_list = [
  {
    text: "MP", // Texte du lien pour envoyer un MP
  },

  /* Pour chaque champ de contact à personnaliser, dupliquez le code suivant */
  {
    urlImg: "image.png", // Nom de l'image du champ de contact (voir documentation)
    text: 'Nom du champ', // Texte du champ de contact
    info: 'Information du lien en infobulle', // Infobulle au survol du lien
  },

];

/* -----------------------------
 * NE PAS TOUCHER A CE QUI SUIT
 * ----------------------------- */

let logStyle = '';

/**
 * Function that uses the provided data to edit the targeted element
 * Fonction utilitaire qui utilise les données fournies pour modifier l'élément ciblé
 * @param {{text: string, info: string}} data - Un objet contenant le texte de remplacement et le texte de l'infobulle
 * @param {HTMLObjectElement} target - L'objet ciblé à modifier, en principe un lien
 */
function customizeField(data, target) {
  if(data.info?.trim().length) target.parentElement.setAttribute("title", data.info);
  if(data.text?.trim().length) target.parentElement.innerHTML = data.text;
}

/**
 * Customize the contact fields in topics
 * Personnalise les champs de contact dans les messages
 * @param {{urlImg, text, info}[]} customFields - The contact fields list
 * @param {string} selector - The selector needed to target the contact fields' links
 */
function customContactField_inTopic(customFields, selector) {
  const allFields = document.querySelectorAll(selector + ' a');
  if (!allFields.length) {
    console.log(
      "%c ⚠️ Script des champs de contact personnalisés — Aucun champ de profil n'a été trouvé sur cette page. Vérifiez le sélecteur contactFields_selectorInTopic dans la configuration du script.",
      logStyle
    );
    return;
  }
  customContactField(customFields, allFields);
}

/**
 * Customize the contact fields in the profile page
 * Personnalise les champs de contact dans la page de profil
 * @param {{urlImg, text, info}[]} customFields - The contact fields list
 * @param {string} selector - The selector need to target the contact fields' links
 */
function customContactField_inProfile(customFields, selector) {
  const contactFields = document.querySelector(selector);
  if (!contactFields) {
    console.log(
      "%c ⚠️ Script des champs de contact personnalisés — Aucun champ de profil n'a été trouvé sur cette page. Vérifiez le sélecteur contactFields_selectorinProfile dans la configuration du script.",
      logStyle
    );
    return;
  }

  /* Suppression des contacts vides de la page de profil */
  contactFields.querySelectorAll('.field_uneditable').forEach(field => {if(!field.querySelector('a')) field.parentElement.remove()});

  customContactField(customFields, contactFields.querySelectorAll('a'));
}

/**
 * Collective function to customize the contact fields
 * Fonction commune de personnalisation des champs de contact (quelle que soit la page)
 * @param {{urlImg, text, info}[]} customFields - The custom fields list
 * @param {HTMLObjectElement[]} allFields - The array of contact field links 
 */
function customContactField (customFields, allFields) {
  let listByUrl = {};
  for (let i = 1; i < customFields.length; i++) {
    listByUrl[customFields[i].urlImg] = customFields[i];
  }

  const missingFields = [];

  allFields.forEach(field => {
    const fieldImg = field.querySelector("img");
    if (!fieldImg) console.error("Il n'y a aucune image dans le champ " + field);

    const fieldImgUrl = fieldImg.src.substring(fieldImg.src.lastIndexOf("/") + 1);

    if (field.href.includes("/privmsg?mode=post&u=")) {
      field.innerHTML = customFields[0].text;
    } else if (!listByUrl[fieldImgUrl]) {
      if(!missingFields.includes(fieldImgUrl)) missingFields.push(fieldImgUrl);
    } else if (fieldImg.src.includes(listByUrl[fieldImgUrl].urlImg)) {
      customizeField(listByUrl[fieldImgUrl], fieldImg);
    };
  });

  if (missingFields.length) {
    console.log(
      "%c ⚠️ Script des champs de contact personnalisés — Certaines images des champs de contact n'ont pas de correspondance dans la configuration du script : %s",
      logStyle, missingFields.join(', ')
    );
  }
}

/**
 * Script exécuté après le chargement de la page
 */
document.addEventListener("DOMContentLoaded", () => {

  // Mise en forme des logs
  logStyle = (typeof blankError === 'undefined') ? "background-color:rgba(255, 119, 85, 0.26); padding: 5px; border-radius: 5px" : blankError; 

  if (document.URL.includes("/u")) {
    customContactField_inProfile(contactFields_list, contactFields_selectorInProfile);
  } else if (document.URL.includes("/t")) {
    customContactField_inTopic(contactFields_list, contactFields_selectorInTopic);
  }
});
