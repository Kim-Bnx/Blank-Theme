/**
 * Créer un bouton qui copie automatiquement le contenu d'un bloc code
 *
 * @placement     Sur les sujets
 * @doc           https://blankthemerpg.forumactif.com/t77-edison
 * @version       v1
 *
 * @auteur        Kim
 */
const CopyCode = Blanket("CopyCode", function ({ warn, get, getAll, createElement, mergeOptions, ready }) {
  const defaults = {
    buttonText: "Copier",                         // Texte du bouton
    copiedHtml: '<i class="bi bi-check"></i>',    // Texte du bouton après avoir copié
    buttonClass: "copy-button",                   // Classe CSS du bouton
    copiedClass: "copied",                        // classe ajoutée au bouton après copie
    resetDelay: 2000,                             // Délai avant de réinitialiser (1000ms = 1s)
  };

  /**
   * Ajoute la fonctionnalité de copie au bouton
   * @param {Node} btn - élément html du bouton
   * @param {Object} opts - options de config du plugin
   */
  function copy(btn, opts) {
    btn.addEventListener("click", async () => {
      const text = getTargetText(btn, opts);
      if (!text) return;

      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) {
          warn("Clipboard API indisponible.");
          return;
        }

        await navigator.clipboard.writeText(text);
        reset(btn, opts);
      } catch (e) {
        warn("Copie impossible (navigateur/permissions).");
      }
    });
  }

  /**
   * Créer un bouton pour chaque bloc de code
   * @param {Object} opts
   */
  function addButtons(opts) {
    const codes = getAll(".codebox:not(.spoiler, .hidecode)");
    if (!codes.length) return;

    codes.forEach((code) => {
      const container = get("dd", code);
      if (!container) return;

      // évite doublon
      if (container.querySelector("." + opts.buttonClass)) return;

      const btn = createElement("button", {
        type: "button",
        class: opts.buttonClass,
        text: opts.buttonText,
      });

      copy(btn, opts);
      container.insertAdjacentElement("afterbegin", btn);
    });
  }

  /**
   * Reccupère le code à copier
   * @param {Node} btn - élément html du bouton
   * @param {Object} opts - options de config du plugin
   * @returns {string|null} - texte à copier ou null si introuvable
   */
  function getTargetText(btn, opts) {
    const code = btn.closest(".codebox");
    if (!code) return null;

    const target = code.querySelector(".cont_code, code");
    if (!target) return null;

    const text = target.innerText || target.textContent || "";
    return text;
  }

  /**
   * Réinitialise l'état du bouton après copie
   * @param {Node} btn - élément html du bouton
   * @param {Object} opts - options de config du plugin
   */
  function reset(btn, opts) {
    const prev = btn.innerHTML;
    btn.innerHTML = opts.copiedHtml;
    btn.classList.add(opts.copiedClass);

    window.setTimeout(() => {
      btn.innerHTML = prev || opts.buttonText;
      btn.classList.remove(opts.copiedClass);
    }, opts.resetDelay);
  }

  /**
   * Éxécution du script
   * @param {Object} options
   */
  function init(options) {
    const opts = mergeOptions(defaults, options);
    addButtons(opts);
  }

  ready(init); // Éxécute le script une fois la page chargée
  return { init };
});