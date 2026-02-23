/**
 * Refonte du QEEL
 * Nouvelle structure HTML pour créer un hub où retrouver l'activité du forum
 * Utilise le plugin Potion de Poumon
 *
 * @placement     Sur toutes les pages
 * @doc           https://blankthemerpg.forumactif.com/t77-edison
 * @version       v1
 *
 * @auteur        Kim
 */
const Hub = Blanket("Hub", function (utils) {
  const { warn, ready, get, getUser, getUserIDFromUrl } = utils;

  // OPTIONS :
  const hubSettings = {
    groups: {
      enable_count: true,
      // True = activer l'affichage du nombre de membres par groupe
      // False = désactiver l'affichage du nombre de membres par groupe
    },
    // Textes des statistiques du QEEL
    text: {
      // Nombre total d'utilisateurs du forum
      total_users: {
        one: "utilisateur",
        many: "utilisateurs",
      },
      // Nombre total de messages du forum
      total_posts: {
        one: "message",
        many: "messages",
      },

      // Texte pour la liste des utilisateurs actuellement connectés
      now_connected: {
        one: "Actuellement connecté",
        many: "Actuellement connectés",
      },

      // Textes pour le nombre total d'utilisateurs en ligne
      total_connected: {
        one: "utilisateur en ligne",
        many: "utilisateurs en ligne",
      },
      registered: {
        one: "enregistré",
        many: "enregistrés",
      },
      invisible: {
        one: "invisible",
        many: "invisibles",
      },
      guest: {
        one: "invité",
        many: "invités",
      },

      // Texte pour la liste des derniers utilisateurs connectés
      last_connected: {
        one: "Connecté récemment : ",
        many: "Connectés récemment : ",
        none: "Aucun utilisateur connecté récemment",
      },
    },
  };

  /**
   * Fetch des données générales du forum : nombre d'utilisateurs, de messages, dernier utilisateur + avatar
   * @typedef {Object} ForumVars
   * @property {string} FORUMCOUNTPOST - Nombre total de messages
   * @property {string} FORUMCOUNTUSER - Nombre total d'utilisateurs
   * @property {string} FORUMLASTUSER - Nom du dernier utilisateur inscrit
   * @property {string} FORUMLASTUSERLINK - Lien vers le profil du dernier utilisateur inscrit
   * @returns {Promise<ForumVars>} Un objet contenant les variables du forum
   */
  async function getForumVar() {
    try {
      const res = await fetch("/popup_help.forum?l=miscvars&i=mes_txt");
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, "text/html");

      const wanted = ["FORUMCOUNTPOST", "FORUMCOUNTUSER", "FORUMLASTUSER", "FORUMLASTUSERLINK"];

      const vars = {};

      const lis = Array.from(doc.querySelectorAll("li"));

      lis.forEach((li) => {
        const a = li.querySelector('a[onclick^="insert_misc_vars"]');
        if (!a) return;

        const varName = a.textContent.replace(/[{}]/g, "").trim();
        if (!wanted.includes(varName)) return;
        const fullText = li.textContent.trim();
        const parts = fullText.split(":");
        if (parts.length >= 2) {
          vars[varName] = parts.slice(1).join(":").trim();
          vars[varName] = vars[varName].replace(/\(.+\)$/, "").trim();
        }
      });

      return vars;
    } catch (err) {
      warn("Une erreur est survenue lors du fetch de données du forum :", err);
    }
  }

  /**
   * Récupère les utilisateurs à partir d'un conteneur HTML
   * @param {HTMNode} list - L'élément HTML contenant la liste des utilisateurs
   * @param {boolean} withAvatar - Indique si l'avatar doit être fetché
   * @typedef {Object} UserInfo
   * @property {string} HREF
   * @property {string} NAME
   * @property {string|null} AVATAR
   * @property {string|null} GROUP
   * @property {string|null} COLOR
   * @returns {Promise<UserInfo[]>} Un tableau d'objets des infos utilisateurs
   */
  async function getUsers(list, withAvatar = false) {
    const userLinks = Array.from(list.querySelectorAll('a[href^="/u"]'));
    if (userLinks.length === 0) {
      warn(`Aucun utilisateur trouvé dans l'élément HTML ${list}`);
      return [];
    }

    // Récupère les informations des utilisateurs depuis les liens
    const users = await Promise.all(
      userLinks.map(async (a) => {
        const span = a.querySelector("span"),
          style = span?.getAttribute("style") || "";

        const name = a.textContent,
          id = getUserIDFromUrl(a.href),
          userInfo = await getUser({ name, id });

        return {
          HREF: a.href,
          NAME: name,
          AVATAR: withAvatar ? userInfo.avatar : null,
          GROUP: span?.className || null,
          COLOR: style.match(/color:\s*(#[0-9a-f]{3,6})/i)?.[1] || null,
        };
      }),
    );

    return users;
  }

  /**
   * Extrait les statistiques des utilisateurs en ligne à partir du texte par défaut
   * @typedef {Object} OnlineUsersStats
   * @property {number} total - Nombre total d'utilisateurs en ligne
   * @property {number} registered - Nombre d'enregistrés en ligne
   * @property {number} invisible - Nombre d'invisibles en ligne
   * @property {number} guest - Nombre d'invités en ligne
   * @returns {Object|null} Un objet contenant les statistiques des utilisateurs en ligne
   */
  function getOnlineUsers() {
    const el = document.getElementById("total_users");
    if (!el) {
      warn("Impossible d'extraire les statistiques des utilisateurs en ligne : l'élément #total_users est introuvable.");
      return null;
    }

    const text = el.textContent.trim();

    const allMatch = text.match(/en tout\s+(\d+)\s+utilisateur/i);
    const registeredMatch = text.match(/(\d+)\s+Enregistré/i);
    const invisibleMatch = text.match(/(\d+)\s+Invisibl/i);
    const guestMatch = text.match(/(\d+)\s+Invit/i);

    return {
      total: allMatch ? Number(allMatch[1]) : 0,
      registered: registeredMatch ? Number(registeredMatch[1]) : 0,
      invisible: invisibleMatch ? Number(invisibleMatch[1]) : 0,
      guest: guestMatch ? Number(guestMatch[1]) : 0,
    };
  }

  /**
   * Transforme un texte en un format slug
   * @param {string} input - Le texte à transformer
   * @returns {string} Le texte transformé en format slug
   */
  function slugifyGroup(input) {
    if (!input) {
      console.warn("[BLANK : enhancedHUB] Aucun texte à transformer en slug.");
      return "";
    }
    let slug = input.toLowerCase().trim();
    slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim();
    slug = slug.replace(/[\s-]+/g, "-");

    return slug;
  }

  /**
   * Récupère les noms des groupes et leur nombre de membres par groupe depuis la page /groups
   * @param {boolean} [forceUpdate=false] - Ignore le cache et force un nouveau fetch pour mettre à jour les données
   * @typedef {Object.<string, number>} GroupCountResult
   * @returns {Promise<GroupCountResult>} Objet : { [groupSlug]: count }
   */
  async function getGroupCount(forceUpdate = false) {
    // Vérifie si le compte des groupes est activé dans les paramètres
    if (!hubSettings.groups?.enable_count) {
      utils.warn("[Hub] Group count is not enabled or invalid.");
      return {};
    }

    const CACHE_TTL = 12 * 60 * 60 * 1000; // 12h
    const CACHE_ID = "__data";
    const store = utils.storage("groupCount", { ttl: CACHE_TTL });

    // Retourne le cache si valide
    const cached = store.get(CACHE_ID);
    if (cached && typeof cached.data === "object") return cached.data;

    // Fetch de la page /groups
    let res;
    try {
      res = await fetch("/groups", { credentials: "same-origin" });
    } catch (err) {
      warn("Erreur réseau lors de la récupération de /groups:", err);
      const stale = store.getAll?.()?.[CACHE_ID];
      return stale?.data || {};
    }

    if (!res.ok) {
      warn("Erreur lors de la récupération de /groups:", res.status);
      const stale = store.getAll?.()?.[CACHE_ID];
      return stale?.data || {};
    }

    // Parse
    const text = await res.text();
    const doc = new DOMParser().parseFromString(text, "text/html");

    // Récupère tous les liens de groupes
    const links = Array.from(doc.querySelectorAll(".group_list a"));

    // Liste des slugs de groupes
    const groups = links.filter((a) => a.getAttribute("style")).map((a) => slugifyGroup(a.textContent));

    if (groups.length === 0) {
      warn("Aucun groupe trouvé sur la page /groups.");
      const stale = store.getAll?.()?.[CACHE_ID];
      return stale?.data || {};
    }

    const result = {};
    // Réccupère le nombre de membres par groupe
    for (const groupName of groups) {
      const link = links.find((a) => a.href && a.href.includes(groupName));

      if (!link) {
        warn(`Impossible de trouver le lien du groupe ${groupName}`);
        continue;
      }

      const match = link.href.match(/\/(g\d+)-/);
      const groupId = match ? match[1] : null;

      if (!groupId) {
        warn(`Impossible d'extraire l'ID du groupe ${groupName}`);
        continue;
      }

      const countEl = doc.querySelector(`#nb-users-${groupId}`);
      const count = countEl ? parseInt(countEl.textContent.trim(), 10) : 0;

      result[groupName] = Number.isFinite(count) ? count : 0;
    }

    // Sauvegarde via storage()
    store.set(CACHE_ID, { data: result });

    return result;
  }

  /**
   * Met à jour l'avatar au clic droit en relançant une requête
   */
  async function updateAvatar() {
    const target = event.target;
    const src = target.getAttribute("src");
    const alt = target.alt;

    const all = utils.storage("avatarCache").getAll();

    let id = null;
    // Cherche l'ID du membre dans le cache par son nom ou l'url de son avatar
    if (!src && alt) {
      for (const key in all) {
        const entry = all[key];
        if (entry?.name === alt) {
          id = key;
          break;
        }
      }
    }

    if (!id && src) {
      for (const key in all) {
        if (all[key]?.avatar === target.src) {
          id = key;
          break;
        }
      }
    }

    if (!id) {
      utils.warn("Impossible de retrouver l'id correspondant à cet avatar.");
      return;
    }

    // Lance une nouvelle requête
    const updatedInfos = await utils.getUser({ name: target.alt, id }, true);
    // Met à jour l'avatar
    target.src = updatedInfos.avatar || target.src;
  }

  /**
   * Transforme l'élément <template type="template/potion" data-name="enhancedHUB"> de index_body grâce au plugin Potion
   */
  async function init() {
    if (!get('template[data-name="hub"]', { required: false })) return;

    const forumVar = await getForumVar();
    const newUser = {
        name: forumVar.FORUMLASTUSER,
        id: getUserIDFromUrl(forumVar.FORUMLASTUSERLINK),
        profileLink: forumVar.FORUMLASTUSERLINK,
      },
      newUserInfo = await getUser({ name: newUser.name, id: newUser.id });

    const onlineUsers = getOnlineUsers();
    const connectedList = await getUsers(document.querySelector("#online_users"), true);
    const lastConnectedList = await getUsers(document.querySelector("#last_connected"));

    // Génère les données à injecter dans le template
    const data = {
      NEW_USER_AVATAR: newUserInfo.avatar,
      NEW_USER: newUser.name,
      NEW_USER_PROFILE: newUser.profileLink,

      TOTAL_USERS: forumVar.FORUMCOUNTUSER,
      TOTAL_USERS_TEXT: forumVar.FORUMCOUNTUSER > 1 ? hubSettings.text.total_users.many : hubSettings.text.total_users.one,
      TOTAL_POSTS: forumVar.FORUMCOUNTPOST,
      TOTAL_POSTS_TEXT: forumVar.FORUMCOUNTPOST > 1 ? hubSettings.text.total_posts.many : hubSettings.text.total_posts.one,

      USERS_ONLINE_COUNT: onlineUsers.total,
      USERS_ONLINE_TEXT: onlineUsers.total > 1 ? hubSettings.text.total_connected.many : hubSettings.text.total_connected.one,

      REGISTERED_COUNT: onlineUsers.registered,
      REGISTERED_TEXT: onlineUsers.registered > 1 ? hubSettings.text.registered.many : hubSettings.text.registered.one,
      INVISIBLE_COUNT: onlineUsers.invisible,
      INVISIBLE_TEXT: onlineUsers.invisible > 1 ? hubSettings.text.invisible.many : hubSettings.text.invisible.one,
      IF_GUEST: onlineUsers.guest > 0,
      GUEST_COUNT: onlineUsers.guest,
      GUEST_TEXT: onlineUsers.guest > 1 ? hubSettings.text.guest.many : hubSettings.text.guest.one,

      NOW_CONNECTED_LIST: connectedList,
      NOW_CONNECTED_TEXT: connectedList.length === 1 ? hubSettings.text.now_connected.one : hubSettings.text.now_connected.many,

      LAST_CONNECTED_LIST: lastConnectedList,
      LAST_CONNECTED_TEXT:
        forumVar.FORUMLASTUSER == 0
          ? hubSettings.text.last_connected.none
          : forumVar.FORUMLASTUSER == 1
            ? hubSettings.text.last_connected.one
            : hubSettings.text.last_connected.many,

      GRP_COUNT: await getGroupCount(),
      updateAvatar,
    };

    // Avec le plugin potion, génère le HTML des données
    potion.sync("hub", data, {
      tag: "div",
    });
  }

  ready(init); // Éxécute le script une fois la page chargée
  return { init };
});
