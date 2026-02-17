/**
 * Blank plugin factory
 */
function Blanket(name, factory) {
  const blankLog = "background:#6F50FB24; padding:10px;border-radius:5px";
  const utils = {
    name,
    warn: function (message) {
      console.log(`%c📦 [BLANK : ${name}] ${message}`, blankLog);
    },
    get(selector, root = document, options = {}) {
      if (root && root.nodeType === undefined && typeof root === "object") {
        options = root;
        root = document;
      }

      const { required = true } = options;
      const warnIf = (msg) => required && utils.warn(msg);

      if (!root || !root.querySelector) {
        warnIf(`Élément parent invalide pour le sélecteur "${selector}"`);
        return null;
      }

      const el = root.querySelector(selector);

      if (!el) warnIf(`Impossible de retrouver l'élément "${selector}"`);

      return el;
    },
    getAll: function (selector, root = document) {
      if (!root || !root.querySelectorAll) {
        warn(`Parent invalide pour le sélecteur "${selector}"`);
        return [];
      }

      return Array.from(root.querySelectorAll(selector));
    },

    ready: function (fn) {
      if (document.readyState !== "loading") {
        fn();
      } else {
        document.addEventListener("DOMContentLoaded", fn);
      }
    },
    attr: function (el, name, value) {
      if (!el) return null;
      if (value === undefined) {
        return el.getAttribute(name);
      } else {
        el.setAttribute(name, value);
      }
    },
    toggleClass: function (el, className) {
      if (!el) return;
      el.classList.toggle(className);
    },
    createElement: function (tag, options = {}) {
      const element = document.createElement(tag);
      Object.entries(options).forEach(([key, value]) => {
        if (key === "class") {
          element.className = value;
        } else if (key === "text") {
          element.textContent = value;
        } else {
          element.setAttribute(key, value);
        }
      });
      return element;
    },
    mergeOptions: function (defaults, options) {
      const o = options && typeof options === "object" ? options : {};
      return Object.assign({}, defaults || {}, o);
    },
    isConnected: function () {
      return _userdata["session_logged_in"] === 1 ? true : false;
    },
    getUsername: function () {
      return _userdata["username"];
    },
    getUserId: function () {
      return _userdata["user_id"];
    },
    getAvatar: function () {
      return _userdata["avatar_link"];
    },
    getGroupColor: function () {
      return _userdata["groupcolor"];
    },

    createPopUp: function ({ button, panel }) {
      const buttonElement = document.querySelector(button);
      const panelElement = document.querySelector(panel);

      if (!buttonElement || !panelElement) {
        console.log(`%c📦 [BLANK : ${name}] Impossible de créer le pop-up, élément ${buttonElement ? panel : button} non trouvé.`, blankLog);
        return;
      }

      function togglepanel() {
        buttonElement.classList.toggle("active");
        panelElement.classList.toggle("open");
      }

      function closepanel() {
        buttonElement.classList.remove("active");
        panelElement.classList.remove("open");
      }

      function handleClickOutside(event) {
        if (!buttonElement.contains(event.target) && !panelElement.contains(event.target) && panelElement.classList.contains("open")) {
          closepanel();
        }
      }

      buttonElement.addEventListener("click", togglepanel);
      document.addEventListener("click", handleClickOutside);
    },

    /**
     * Récupère l'URL de l'avatar d'un utilisateur
     * @param {string} user - Nom d'utilisateur (exactement comme dans le profil)
     * @param {number|string} id - ID de l'utilisateur
     * @param {boolean} [forceUpdate=false] - Forcer la mise à jour même si le cache est valide
     * @returns {Promise<string|null>} URL de l'avatar ou null si non trouvé
     */
    getUserAvatar: async function (user, id, forceUpdate = false) {
      const CACHE_KEY = "avatarCache"; // Nom de la clé de stockage dans le localStorage
      const CACHE_TTL = 14 * 24 * 60 * 60 * 1000; // 14 jours = délai de sauvegarde du cache avant rafraîchissement
      const MAX_ENTRIES = 100; // Maximum d'avatar enregistrés
      const now = Date.now();

      // Si l'avatar demandé est celui du membre connecté, reccupère l'avatar depuis les variables FA
      if (String(id) === String(utils.getUserId())) {
        return utils.getAvatar() || null;
      }

      // Vérifie l'état du cache
      let cache = {};
      try {
        cache = JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
      } catch (err) {
        cache = {};
      }

      // Vérifie si l'avatar demandé est dans le cache
      if (!forceUpdate && cache[id] && now - cache[id].timestamp < CACHE_TTL) {
        return cache[id].avatar;
      }

      // Fetch l'avatar depuis le profil du membre
      let avatarUrl = null;
      try {
        const res = await fetch(`/u${id}`);
        if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
        const html = await res.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Réccupère l'url de l'avatar grace au texte alt dans l'image
        const img = utils.get(`img[alt="${CSS.escape(user)}"]`, doc, { required: false });
        avatarUrl = img ? img.src : null;

        // Mise à jour du cache
        cache[id] = {
          user,
          avatar: avatarUrl,
          timestamp: now,
        };

        // Gère le nombre d'entré du cache
        const entries = Object.entries(cache);
        if (entries.length > MAX_ENTRIES) {
          entries.sort((a, b) => a[1].timestamp - b[1].timestamp);
          cache = Object.fromEntries(entries.slice(-MAX_ENTRIES));
        }

        // Sauvegarde le cache
        localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
      } catch (err) {
        console.log(`%c📦 [BLANK : ${name} in getUserAvatar] Impossible de récupérer l'avatar pour ${user} (#${id})`, blankLog);
      }

      return avatarUrl;
    },
  };

  const plugin = factory(utils);

  if (!plugin || typeof plugin !== "object") {
    utils.warn("Factory: le plugin retourné n'est pas un objet.");
    return {};
  }

  return plugin;
}
