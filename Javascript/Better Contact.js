/**
 * Personnalisation du lien vers la messageries dans la navbar
 * Isole le nombre de messages non lus dans un élément dédié et ajoute une classe au lien de la messagerie
 *
 * @placement     Sur toutes les pages
 * @doc           https://blankthemerpg.forumactif.com/t77-edison
 * @version       v2
 *
 * @auteur        'Christa Lostmindy (v1) Kim (v2)
 */
const BetterContact = Blanket("Better contact", function (utils) {
  const { warn, get, getAll, mergeOptions, ready } = utils;

  const defaults = {
    selectorInTopic: ".post_contact",               // Sélecteur des champs de contact dans les sujets
    selectorInProfile: ".profile_contact",          // Sélecteur des champs de contact dans la page de profil
	  selectorInMemberlist: ".userlist_contact",      // Sélecteur des champs de contact dans la liste des membres

    // Liste des champs à personnaliser
    fields: [
      { text: "MP" },                               // Texte du lien pour envoyer un MP

      // Pour chaque champ de contact à personnaliser, dupliquez le code suivant
      {
        urlImg: "fiche.png",                        // Nom de l'image du champ de contact (voir documentation)
        text: "Fiche",                              // Texte du champ de contact
        info: "Information du lien en infobulle",   // Infobulle au survol du lien
      },
	  // Fin du bloc à dupliquer, ajoutez autant de bloc que nécessaire, juste en dessous de cette ligne
    ],
  };

  /**
   * Réccupère le nom de l'image à partir de son URL
   * @param {HTMLElement} img - élément html <img>
   * @returns {string} - fin de l'url de l'image
   */
  function getImgFilename(img) {
    const src = img && img.src ? img.src : "";
    return src.split("/").pop().split("?")[0];
  }

  /**
   * Modifie les liens des champs de contact
   * @param {HTMLElement} link - <a> de chaque contact
   * @param {Object} data - données de personnalisation
   */
  function insertText(link, data) {
    if (!link || !data) return;

    if (data.text && data.text.trim().length) {
      link.innerHTML = data.text;
    }

    if (data.info && data.info.trim().length) {
      link.setAttribute("title", data.info);
    }
  }

  /**
   * Permet de mieux identifier les champs de contact via leur image
   * @param {Array} fields - donnée de personnalisation des champs
   * @returns {Object} - champs de contact par image
   */
  function buildMap(fields) {
    const map = {};
    for (let i = 1; i < fields.length; i++) {
      if (fields[i] && fields[i].urlImg) {
        map[fields[i].urlImg] = fields[i];
      }
    }
    return map;
  }

  /**
   * Applique la personnalisation à tous les liens fournis
   * @param {Array} fields - donnée de personnalisation des champs
   * @param {HTMLElement} links - <a> de chaque contact
   */
  function customizeAllLinks(fields, links) {
    const byImg = buildMap(fields);
    const missing = [];

    links.forEach((a) => {
      // MP
      if (a.href.includes("/privmsg?mode=post")) {
        insertText(a, fields[0]);
        return;
      }

      const img = a.querySelector("img");
      if (!img) return;

      const key = getImgFilename(img);
      const data = byImg[key];

      if (!data) {
        if (key && !missing.includes(key)) missing.push(key);
        return;
      }

      insertText(a, data);
    });

    if (missing.length) {
      warn("Images sans correspondance dans la config : " + missing.join(", "));
    }
  }

  /**
   * Éxécution dans les sujets
   * @param {Object} opts - options de personnalisation
   */
  function inTopic(opts) {
    const wombat = get(opts.selectorInProfile, { required: false });
    if (!wombat) {
      const links = getAll(opts.selectorInTopic + " a");
      customizeAllLinks(opts.fields, links);
    } else if (wombat) {
      inProfile(opts);
    }
  }

  /** Éxécution dans les pages de profil
   * @param {Object} opts - options de personnalisation
   */
  function inProfile(opts) {
    const wrap = get(opts.selectorInProfile);
    if (!wrap) return;

    // Suppression des champs vides
    getAll(".field_uneditable", wrap).forEach((field) => {
      if (!field.querySelector("a")) {
        const row = field.parentElement;
        if (row) row.remove();
      }
    });

    // Retire le champs "email"
    const email = get("a[href^='/profile?mode=email&u=']", wrap);
    if (email) email.remove();

    const links = getAll("a", wrap);
    if (!links.length) return;

    customizeAllLinks(opts.fields, links);
  }
	
  /** Éxécution dans la liste des membres
   * @param {Object} opts - options de personnalisation
   */
  function inMemberlist(opts) {
	 const links = getAll(opts.selectorInMemberlist + " a");
	  console.log(links);
	 customizeAllLinks(opts.fields, links);
  }

  /**
   * Éxécution du script
   * @param {Object} options - object des sélecteurs de la page
   */
  function init(options) {
    const opts = mergeOptions(defaults, options);

    if (!opts.fields || !opts.fields.length) {
      warn("Aucune config fournie dans fields.");
      return;
    }

    if (document.URL.includes("/t")) inTopic(opts);
    else if (get(opts.selectorInProfile, {required: false})) inProfile(opts);
	else if (get("form[action='/memberlist']", {required: false})) inMemberlist(opts);
  }

  ready(init); // Éxécute le script une fois la page chargée
  return { init };
});