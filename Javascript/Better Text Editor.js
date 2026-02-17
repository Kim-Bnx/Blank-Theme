/*
 * Permet de personnaliser les boutons de l'éditeur de texte
 *
 * @placement     Sur toutes les pages
 * @doc           https://blankthemerpg.forumactif.com/t77-edison
 * @version       v1
 *
 * @auteur        Kim 
 */
const BetterTextEditor = Blanket("Better Text Editor", function ({ get, getAll, ready }) {
  const config = {
    // Contenu TEXTE ou HTML des boutons personnalisés
    icons: {
      bold: '<i class="bi bi-type-bold"></i>',            // Gras
      italic: '<i class="bi bi-type-italic"></i>',        // Italique
      underline: '<i class="bi bi-type-underline"></i>',  // Souligné
      strike: '<i class="bi bi-type-strikethrough"></i>', // Barré

      left: '<i class="bi bi-text-left"></i>',            // Aligné à gauche
      center: '<i class="bi bi-text-center"></i>',        // Centré
      right: '<i class="bi bi-text-right"></i>',          // Aligné à droite
      justify: '<i class="bi bi-justify-left"></i>',      // Justifié

      bulletlist: '<i class="bi bi-list-ul"></i>',        // Liste à puces
      orderedlist: '<i class="bi bi-list-ol"></i>',       // Liste numérotée
      horizontalrule: '<i class="bi bi-hr"></i>',         // Ligne horizontale

      quote: '<i class="bi bi-chat-quote"></i>',          // Citation
      code: '<i class="bi bi-code-slash"></i>',           // Code
      faspoiler: '<i class="bi bi-usb"></i>',             // Spoiler
      fahide: '<i class="bi bi-eye-slash"></i>',          // Hide

      image: '<i class="bi bi-image"></i>',               // Image
      link: '<i class="bi bi-link"></i>',                 // Lien

      size: '<i class="bi bi-type"></i>',                 // Taille de police
      color: '<i class="bi bi-palette"></i>',             // Couleur de texte
      font: '<i class="bi bi-fonts"></i>',                // Police de texte

      mention: '<i class="bi bi-at"></i>',                // Mentionner un membre
      emoticon: '<i class="bi bi-emoji-smile"></i>',      // Smileys
      source: '<i class="bi bi-file-earmark-text"></i>',  // Texte formaté
    },

    // Liste des boutons supprimé
    remove: ["table", "servimg", "youtube", "headers", "date", "time", "pastetext", "removeformat", "more", "embed", "twemojifa"],
  };

  function init() {
    // S'exécute uniquement sur les pages de rédaction de message
    const texteditor = get("#textarea_content", { required: false });
    if (!texteditor) return;

    const buttons = getAll(".sceditor-button");
    if (!buttons.length) return;

    // Personnalisation des boutons
    buttons.forEach((btn) => {
      // Réccupère le nom chaque bouton via data-sceditor-command 
      const command = btn.getAttribute("data-sceditor-command");

      // Supprime les boutons inutiles listés dans config.remove
      const deleteButtons = Object.fromEntries(config.remove.map((k) => [k, true]));
      if (deleteButtons[command]) {
        btn.remove();
        return;
      }
      // Remplace uniquement les boutons listés dans config.icons par les clés correspondantes
      if (Object.prototype.hasOwnProperty.call(config.icons, command)) {
        btn.innerHTML = config.icons[command];
        btn.classList.add("better-texteditor-icon");
      }
    });
  }

  ready(init);
  return { init };
});