/**
 * Ajoute un bouton pour mentionner un membre depuis un post
 * 
 * @placement     Sur les sujets
 * @doc           https://blankthemerpg.forumactif.com/t77-edison
 * @version       v1
 *
 * @auteur        Kim
 */
const MentionTag = Blanket("MentionTag", function (utils) {
  const { warn, get, getAll, mergeOptions, ready } = utils;

  const defaults = {
    button: ".btn-tag",               // bouton mention (déjà présent en HTML)
    post: ".post",                    // conteneur du post
    postPseudo: ".post_pseudo",       // conteneur pseudo dans le post
    editor: "#text_editor_textarea",  // textarea cible (Forumactif / SCEditor)
  };

  let isBound = false;

  /**
   * Reccupère l'instance SCEditor (zone de texte où écrire son message)
   * @param {Node} textarea - élément de la zone de texte
   * @returns
   */
  function getSceditorInstance(textarea) {
    try {
      const $ = window.jQuery || window.$;
      if ($ && $.sceditor && textarea) {
        return $(textarea).sceditor("instance") || null;
      }
    } catch (e) {
      /* ignore */
    }
    return null;
  }

  /**
   * Récupère le pseudo associé au bouton de mention
   * @param {Node} btn - bouton de mention
   * @param {Object} opts - l'objet des sélecteurs de la page
   * @returns {string} le pseudo
   */
  function getPseudoFromButton(btn, opts) {
    const postEl = btn.closest(opts.post);
    if (!postEl) {
      warn(`Impossible de trouver le post parent "${opts.post}"`);
      return null;
    }

    const pseudoEl = postEl.querySelector(opts.postPseudo);
    if (!pseudoEl) {
      warn(`Impossible de trouver le pseudo "${opts.postPseudo}" dans le post`);
      return null;
    }

    const name = (pseudoEl.textContent || "").trim();
    return name || null;
  }

  /**
   * Éxécution du script
   * @param {Object} options - object des sélecteurs de la page
   */
  function init(options) {
    // S'active seulement sur les pages de sujets /t
    const isTopic = /\/t\d+/.test(window.location.pathname);
    if (!isTopic) return;

    const opts = mergeOptions(defaults, options);

    // Supprime les boutons pour les invités
    if (window._userdata && window._userdata.session_logged_in == 0) {
      getAll(opts.button).forEach((btn) => btn.remove());
      return;
    }

    // Cible la zone de texte
    const textarea = get(opts.editor);
    if (!textarea) return;

    const editor = getSceditorInstance(textarea);
    if (!editor || typeof editor.insertText !== "function") {
      warn("SCEditor introuvable ou non initialisé.");
      return;
    }

    // Évite d'attribuer plusieurs fois l'eventListener sur les boutons
    if (isBound) return;
    isBound = true;

    // Créer le tag de mention dans la zone de texte au clic du bouton
    document.addEventListener("click", function (e) {
      const btn = e.target && e.target.closest ? e.target.closest(opts.button) : null;
      if (!btn) return;

      const name = getPseudoFromButton(btn, opts);
      if (!name) {
        warn("Impossible de réccupérer le pseudo à mentionner.");
        return;
      }

      editor.insertText(`@"${name}" `);
    });
  }

  ready(init); // Éxécute le script une fois la page chargée
  return { init };
});