/**
 * Plugin Edison : gestion du thème clair/sombre 
 * Permet de basculer entre un thème clair et un thème sombre 
 * Applique le thème aux images (via <picture><source data-theme>) et aux iframes
 * 
 * @placement     Sur toutes les pages
 * @doc           https://blankthemerpg.forumactif.com/t77-edison
 * @version       v2.0
 * 
 * @auteur        Poumon (v1) Kim (v2)
 */
const Edison = Blanket("Edison", function ({ ready, warn, get, getAll, mergeOptions }) {
  const defaults = {
    button: ".theme-toggle", // Sélecteur du bouton de switch thème
  };
  const storageKey = "colorTheme"; // Nom du stockage du thème en localStorage
  const attrName = "data-color-scheme"; // Attribut du thème sur la balise <html>
  let themeObserver = null;

  /**
   * Récupère le thème courant depuis le data attribut de la balise <html>
   * @returns {"dark"|"light"}
   */
  function getTheme() {
    const html = document.documentElement;
    const v = html.getAttribute(attrName) || "light";
    return v === "dark" ? "dark" : "light";
  }

  /**
   * Modifie le thème appliqué et sauvegarde le choix en localStorage
   * @param {string} theme - "dark" | "light"
   */
  function setTheme(theme) {
    document.documentElement.setAttribute(attrName, theme);
    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      /* ignore */
    }
  }

  /**
   * Définit le thème initial en fonction du choix sauvegardé ou de la préférence système
   * @returns {"dark"|"light"}
   */
  function resolveInitialTheme() {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      return stored;
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
  }

  /**
   * Met à jour les URL d'images selon le thème actuel 
   * (grâce aux balises <picture><source data-theme>)
   * @param {string} theme - "dark" | "light"
   */
  function setImgSource(theme) {
    getAll("picture source[data-theme]").forEach((source) => {
      source.media = source.getAttribute("data-theme") === theme ? "all" : "none";
    });
  }

  /**
   * Met à jour le label et la classe du bouton de switch thème
   * @param {NodeElement} btn - Le bouton de switch thème
   */
  function updateToggleLabel(btn) {
    const theme = getTheme();
    btn.classList.toggle("is-dark", theme === "dark");
    btn.classList.toggle("is-light", theme === "light");
    btn.setAttribute("title", "Activer le mode " + (theme === "dark" ? "clair" : "sombre"));
  }

  /**
   * Applique le thème courant à la page HTML intégrée dans l'iframe
   * @param {HTMLIFrameElement} frame 
   */
  function syncIframe(frame) {
    try {
      const doc = frame.contentDocument || (frame.contentWindow && frame.contentWindow.document);
      if (doc && doc.documentElement) {
        doc.documentElement.setAttribute(attrName, getTheme());
      }
    } catch (e) {
      /* ignore */
    }
  }

  /**
   * Synchronise le thème de toutes les iframes de la page
   */
  function syncAllIframes() {
    const iframes = getAll("iframe");
    if (!iframes.length) return;
    iframes.forEach((frame) => {
      // Évite de binder plusieurs fois la même iframe si elle recharge
      if (frame.__edisonBound) {
        syncIframe(frame);
        return;
      }

      frame.__edisonBound = 1;
      const prev = frame.onload;

      frame.onload = function (e) {
        if (typeof prev === "function") prev.call(this, e);
        syncIframe(frame);
        setTimeout(() => syncIframe(frame), 50);
      };
      syncIframe(frame);
    });
  }

  /**
   * Observe le DOM pour détecter les changements de thème
   */
  function observeTheme() {
    if (themeObserver) return; // Évite les doublons
    themeObserver = new MutationObserver(syncAllIframes);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [attrName],
    });
  }

  /**
   * Bascule le thème entre clair et sombre
   */
  function toggle() {
    const next = getTheme() === "dark" ? "light" : "dark";
    setTheme(next);            // Applique le thème
    updateToggleLabel(get(defaults.button)); // Update le bouton de switch
    setImgSource(next);        // Met à jour les images
    syncAllIframes();          // Sync les iframes
  }

  /**
   * Déinit le thème à appliquer au chargement de la page
   * @returns {"dark" | "light"} - pour debug
   */
  function load() {
    const theme = resolveInitialTheme();
    document.documentElement.setAttribute(attrName, theme);
    return theme;
  }

  /** Initialisation : lie le bouton de switch thème et applique le thème aux images et iframes
   * @param {Object} [options]
   * @param {string} [options.button] Selector du bouton de switch thème
   */
  function init(options) {
    const opts = mergeOptions(defaults, options);

    const button = get(opts.button);
    if (!button) return;

    const theme = getTheme();
    setImgSource(theme);
    updateToggleLabel(button);

    button.addEventListener("click", toggle);

    syncAllIframes();
    if (getAll("iframe").length) observeTheme();
  }
  ready(init); // Éxécute le script une fois la page chargée
  return { load, init };
  // Edison.load(); dans overall_header avant </head> pour définir le thème pendant le chargement de la page
});