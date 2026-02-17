/**
 * Personnalisation du lien vers la messageries dans la navbar
 * Isole le nombre de messages non lus dans un élément dédié et ajoute une classe au lien de la messagerie
 * 
 * @placement     Sur toutes les pages
 * @doc           https://blankthemerpg.forumactif.com/t77-edison
 * @version       v1
 *
 * @auteur        Kim
 */
const BetterNavbar = Blanket("Better navbar", function ({ get, ready }) {
  function init() {
    // Réccupère la navbar par défaut
    const data = get("#data_navbar");
    if (!data) return;

    // Si nouveau message, réccupère le nombre
    const alert = get(".toread-message", data, {required: false});
    if (!alert) return;
    const match = alert.textContent.match(/\d+/);
    if (!match) return;
    const unread = Number(match[0]);
    if (!unread) return;

    // Ajoute une classe "new" au nouveau lien messagerie si messages non lus
    const navlink = get(".nav-mp");
    if (!navlink) return;
    navlink.classList.add("new");

    // Intègre le nombre de messages non lus à l'élément .unread-mp
    const unreadEl = get(".unread-mp", navlink);
    if (!unreadEl) return;
    unreadEl.textContent = unread;
  }

  ready(init); // Éxécute le script une fois la page chargée
  return { init };
});