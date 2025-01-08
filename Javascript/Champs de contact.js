/**
 * Personnalise les champs de contact (MP, fiche de présentation, lien, ...) dans les posts et les profils
 *
 * @placement Sur toutes les pages
 * @documentation  https://blankthemerpg.forumactif.com/t158-personnaliser-les-champs-de-contact
 *
 * @author 'Christa Lostmindy
 */

const contactFields_selectorInTopic = ".post_contact"; // Conteneur des champs de contact dans les profils visible dans les posts
const contactFields_selectorinProfile = ".profile_contact"; // Conteneur des champs de contact dans les profils seuls

const contactFields_list = [
  {
    text: "MP", // Texte du lien pour envoyer un MP
  },

  /* Ajoutez autant de champs de contact que vous en avez créé
   * en respectant la structure ci-dessus et en retirant les commentaires entre /*
  {
    text: 'Nom du champ', // Texte du champs de contact
    action: "Information du lien en infobulle", // Infobulle au survol du lien
    urlImg: "image.png", // Nom de l'image du champ de contact (voir documentation)
  },
   */
];

/**
 * Function that uses the provided data to edit the targeted element
 * Fonction utilitaire qui utilise les données fournies pour modifier l'élément ciblé
 * @param {{text: string, action: string}} data
 * @param {HTMLObjectElement} target
 */
function createNewField(data, target) {
  target.parentElement.setAttribute("title", data.action);
  target.parentElement.innerHTML = data.text;
}

/**
 * Customize the contact fields
 * Personnalise les champs de contact
 * @param {{urlImg, text, action}[]} customFields - The contact fields list
 * @param {string} selector - The selector needed to target the contact fields' images
 */
function customContactField(customFields, selector) {
  let listByUrl = {};
  for (let i = 1; i < customFields.length; i++) {
    listByUrl[customFields[i].urlImg] = customFields[i];
  }

  document.querySelectorAll(selector).forEach((field, i) => {
    const fieldImg = field.querySelector("img");
    if (!fieldImg) console.error("Il n'y a aucune image dans le champs :" + field);

    const fieldImgUrl = fieldImg.src.substring(fieldImg.src.lastIndexOf("/") + 1);

    if (field.href.includes("/privmsg?mode=post&u=")) {
      field.innerHTML = customFields[0].text;
    } else if (!listByUrl[fieldImgUrl]) {
      let contactIndex = i + 1;
      console.log(
        `%c ⚠️ Script des champs de contact personnalisé : Il semblerait y avoir une erreur avec le champ de contact numéro ${contactIndex}. Vérifiez la configuration du script.`,
        blankError
      );
      return;
    } else if (fieldImg.src.includes(listByUrl[fieldImgUrl].urlImg)) {
      createNewField(listByUrl[fieldImgUrl], fieldImg);
    }
  });
}

/**
 * Customize the contact fields in the profile page
 * Personnalise les champs de contact dans la page de profil
 * @param {{selector, text, action}[]} liste - The contact fields list
 */
function customContactField_inProfile(customFields, selector) {
  const contactField = document.querySelector(contactFields_selectorinProfile);
  const contactEmail = contactField.querySelector('.contact a[href^="/profile?mode=email&u"]');
  if (contactEmail) contactEmail.remove();

  const emptyFields = contactField.querySelectorAll(".field_uneditable");
  emptyFields.forEach((field) => {
    if (field.textContent.includes("\u00A0")) {
      field.parentElement.remove();
    }
  });
  customContactField(customFields, selector);
}

/**
 * Script executed after page loading
 * Script exécuté après le chargement de la page
 */
document.addEventListener("DOMContentLoaded", () => {
  if (document.URL.includes("/u")) {
    customContactField_inProfile(contactFields_list, contactFields_selectorinProfile + " a");
  } else if (document.URL.includes("/t")) {
    customContactField(contactFields_list, contactFields_selectorInTopic + " a");
  }
});
