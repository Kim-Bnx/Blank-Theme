/** * Script pour ForumActif * Attribue un identifiant unique aux champs de profil dans les messages * Optionnellement, permet de déplacer ces champs de profil
 *
 * Placement : sur les sujets
 * Documentation : https://blankthemerpg.forumactif.com/t188-personnaliser-les-champs-de-profil-dans-les-messages
 * Contributeurs : Flerex, Monomer, 'Christa Lostmindy
 */

!(function () {
  const SETTINGS_PROFILE = {
      semicolon: false, //false = retire les (:) après un nom de champ
      selectorField: ".user_field", //Le sélecteur d'un champ de profil
      selectorPost: ".post", //Le sélecteur d'un message entier

      // Optionnel : déplacer les éléments
      moveFromTo: [
        {
          target: ".classeCible1",
          fields: ["elementDeplace1", "elementDeplace2", "elementDeplace3"],
        },
        {
          target: ".classeCible2",
          fields: ["elementDeplace5", "elementDeplace6"],
        },
      ],
    },
    /**
     * Turns the given string into a slug
     * Transforme la chaine de caractères donnée en identifiant
     * @param {String} str The field text label
     * @returns {String} The newly generated slug
     */
    slugify = (str) => {
      const from = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;",
        to = "aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------",
        reg = new RegExp(from.split("").join("|"), "g");

      return str
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(reg, (c) => to.charAt(from.indexOf(c)))
        .replace(/&/g, "-and-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    },
    /**
     * Find if a given field's slug is among the list of fields that should be moved elsewhere, and returns the selector of the target
     * Vérifie qu'un identifant attribué à un champ fait partie de la liste de champs à déplacer, et renvoie le sélecteur de la cible
     * @param {String} slug The slug attributed to the field
     * @return {String} The selector of the target if the tested field should be moved
     */
    findTarget = (slug) => {
      let target;
      SETTINGS_PROFILE.moveFromTo.forEach((i) => {
        if (i.fields.includes(slug)) target = i.target;
      });
      return target;
    },
    main = (_) => {
      document.querySelectorAll(SETTINGS_PROFILE.selectorField).forEach((champ) => {
        const label = champ.querySelector(".label"),
          name = label.textContent.replace(/ *: *$/, ""),
          slug = slugify(name);

        champ.classList.add("field-" + slug);

        let movingSomewhere = findTarget(slug);
        if (movingSomewhere) {
          champ.closest(SETTINGS_PROFILE.selectorPost).querySelector(movingSomewhere)?.appendChild(champ);
        }

        label.textContent = SETTINGS_PROFILE.semicolon ? name + ": " : name;
      });
    };
  document.addEventListener("DOMContentLoaded", main);
})();
