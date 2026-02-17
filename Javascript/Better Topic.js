/**
 * Ajoute une classe unique à chaque champs de profil
 * Permet de déplacer les champs dans d'autres conteneurs
 *
 * @placement     Sur les sujets
 * @doc           https://blankthemerpg.forumactif.com/t77-edison
 * @version       v3
 *
 * @auteur        Kim
 * @contribution  Flerex (v1) Poumon et Christa Lostmindy (v2)
 */
const BetterTopic = Blanket("Better topic", function (utils) {
  const { warn, getAll, mergeOptions, ready } = utils;

  const defaults = {
    postSelector: ".post",        // Conteneur d'un post
    fieldSelector: ".user_field", // Conteneur d'un champ de profil
    removeColon: false,           // True = retire le ":" après le nom du champ

    /**
     * Déplacement de champs :
     * 1 - ajoutez une ligne par déplacement
     * 2 - retirez les "//" au début de la ligne
     * 3 - modifiez les valeurs
     *   - ".conteneur-exemple" est l'élément HTML où placer les champs
     *   - "champ-1", "champ-2" sont les noms des champs (sans majuscule, sans accent, un tiret à la place des espaces)
     */
    move: {
      //".conteneur-exemple": ["champ-1", "champ-2"],
      //".conteneur-exemple": ["champ-1", "champ-2"],
    },
  };

  /**
   * Transforme le nom d'un champs en slug
   * @param {string} str - nom du champ
   * @returns {string} - nom slugifié
   */
  function slugify(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  /**
   * Détecte les champs à déplacer
   * @param {string} slug - nom slugifié du champ
   * @param {Object} map - tableau de déplacement des champs
   * @returns {string|null} - sélecteur de l'élément cible ou null
   */
  function getMoveTarget(slug, map) {
    for (const target in map) {
      if (map[target].includes(slug)) {
        return target;
      }
    }
    return null;
  }

  /**
   * Éxécution du script
   * @param {Object} options - object des sélecteurs de la page
   */
  function init(options = {}, root = document) {
    const opts = mergeOptions(defaults, options);

    getAll(opts.fieldSelector, root).forEach((field) => {
      const label = field.querySelector(".label");
      if (!label) return;

      const name = label.textContent.replace(/\s*:\s*$/, "");
      const slug = slugify(name);

      field.classList.add("field-" + slug);

      const target = getMoveTarget(slug, opts.move);
      if (target) {
        const container = field.closest(opts.postSelector)?.querySelector(target);
        if (!container) {
          warn("Impossible de trouver l'élément " + target + " et déplacer " + slug);
          return;
        }
        container?.appendChild(field);
      }

      label.textContent = opts.removeColon ? name : name + " :";
    });
  }

  ready(init); // Éxécute le script une fois la page chargée
  return { init };
});