/**
 * Permet d'afficher l'avatar et le nom d'utilisateur du compte contecté dans des éléments HTML ciblés
 * Utilise le plugin Potion de Poumon
 *
 * @placement     Sur toutes les pages
 * @doc           https://blankthemerpg.forumactif.com/t77-edison
 * @version       v1
 *
 * @auteur        Kim
 */
const Mirror = Blanket("Mirror", function ({ getUserId, getAvatar, getUsername, getGroupColor, isConnected, ready, getAll, warn }) {
  function init() {
    // Vérifie que l'utilisateur est connecté et que les templates existent
    if (!isConnected()) return;
    const mirrors = getAll('template[data-name="mirror"]');
    if (!mirrors.length) {
      warn('Impossible de trouver l\'élément template[data-name="mirror"].');
      return;
    }

    // Récupère les données de l'utilisateur
    const data = {
      id: getUserId(),
      username: getUsername(),
      avatar: getAvatar(),
      groupColor: getGroupColor(),
      postCount: _userdata["user_posts"],
    };

    // Avec le plugin potion, génère le HTML des données
    mirrors.forEach((me) => {
      potion.render("mirror", data);
    });
  }

  ready(init); // Éxécute le script une fois la page chargée
  return { init };
});
