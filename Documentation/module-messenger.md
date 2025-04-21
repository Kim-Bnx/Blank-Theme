# Messenger : La messagerie instantanée

Le [Forumactif Messenger](https://github.com/SethClydesdale/forumactif-messenger), ou FAM pour les initiés, est un plugin créé en 2017 par Ange Tuteur qui permet d'ajouter un système de messagerie instantanée à vos forums. Une **version simplifiée du FAM** a été intégrée au Blank Theme dans les premières années de son développement, cependant sa difficulté de personnalisation a conduit à son abandon dans la version actuelle.

Le code adapté aux précédentes versions du Blank Theme est cependant toujours disponible à ce jour dans le dossier [Messenger](Messenger/).

> [!NOTE]
> Le [tutoriel d'installation d'origine du Messenger](https://blankthemerpg.forumactif.com/t76-messenger) est disponible sur le forum du Blank Theme, mais ce qui suit contient peu ou prou les mêmes informations.

## Installation de Forumactif Messenger

### Modification des templates
Vous aurez besoin d'insérer un bouton d'accès à la messagerie, que vous pouvez placer n'importe où dans un des templates de haut ou bas de page. Puisqu'on travaille avec le Blank Theme, l'emplacement d'origine du bouton se situe dans la barre latérale qui inclut Switcheroo et Edison. 

Dans votre template `overall_footer_end`, trouvez le conteneur `<div class="siderbar_top"> ... </div>` et placez-y le code suivant :

```html
<a id="FAM-button-open" title="Forumactif Messenger"><i class="bi bi-chat-fill"></i></a>
```

> ![NOTE]
> Le code `<i class="bi bi-chat-fill"></i>` est une icone de [la bibliothèque Bootstrap](https://icons.getbootstrap.com/) installée par défaut sur le Blank Theme. Vous pouvez naturellement remplacer cet icone par ce que vous voulez.

### Installation du Javascript

Dans votre panneau d'administration, section `Modules » HTML & JAVASCRIPT » Gestion des codes Javascript`, créez un nouveau Javascript.
- *Titre* : Forumactif Messenger
- *Placement :* Sur toutes les pages
- *Code javascript :* Collez dans cet emplacement le contenu du fichier [script-messenger.js](Messenger/script-messenger.js)
Enregistrez vos modifications.

### Installation du CSS
La feuille de style du plugin Messenger prend beaucoup de volume, en plus de celle du Blank Theme. On préfèrera l'héberger sur une plateforme extérieure. Si vous ne faites pas de modifications à la feuille de style par défaut, vous pouvez utiliser celle hébergée ici via JSDelivr.

Pour cela, dans votre template `overall_header`, avant la balise de fermeture `</head>`, rajoutez cette ligne de code :

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gp-kim/Blank-Theme@main/Messenger/css-messenger.css">
```

Si vous préférez faire des modifications et avoir votre propre version du CSS, copiez le fichier [css-messenger](Messenger/css-messenger.css) et [hébergez vous-même votre version personnalisée](https://blankthemerpg.forumactif.com/t141-heberger-du-css-exterieur).

Vous devrez cependant rajouter les variables CSS fournies par le Blank Theme dans votre feuille de style habituelle, comme ceci :

```css
:root {
  /* Ici les propriétés de base du :root du Blank Theme */ 
  
  /* Vous rajoutez tout ce qui suit : */
  --FAM-windowSize: 750px;

  --FAM-fontSize: 14px;
  --FAM-titleFont: 'Open Sans';
  --FAM-titleSize: 24px;

  --FAM-light: white;
  --FAM-dark: black;

  --FAM-accentClr: #4B57C5;
  --FAM-secondClr: #333c92;
  --FAM-fontClr: #232657;
  --FAM-fontLightClr: #484a65;
  --FAM-linkClr: #4B57C5;
  --FAM-titleClr: #171938;
  --FAM-buttonsClr: #171938;

  --FAM-pluginBackground: #fafbfc;
  --FAM-chatBackground: #f2f4f9;
  --FAM-textareaBackground: #fafbfc;
  --FAM-msgBackground: #dce3f4;
  --FAM-myMsgBackground: #fafbfc;
  --FAM-quoteBackground: #8a9fd236;

  --FAM-shadowBox: 0 0 20px var(--neutralDarker);

  /* Pas besoin de les modifier, elles sont relatives aux variables au-dessus */
  --FAM-gradient: linear-gradient(-90deg, var(--FAM-pluginBackground) 20%, color-mix(in srgb, var(--FAM-pluginBackground), transparent 100%) 100%);
  --FAM-gradientTop: linear-gradient(180deg, var(--FAM-chatBackground) 20%, color-mix(in srgb, var(--FAM-chatBackground), transparent 100%) 100%);
  --FAM-gradientBot: linear-gradient( 0deg, var(--FAM-chatBackground) 20%, color-mix(in srgb, var(--FAM-chatBackground), transparent 100%) 100%);
  --FAM-sleepModeBackground: color-mix(in srgb, var(--FAM-chatBackground), transparent 30%);
  --FAM-newMsgAnimation: color-mix(in srgb, var(--FAM-accentClr), transparent 20%);
}

:root[data-color-scheme="dark"] {
  /* Ici les propriétés :root du thème sombre du Blank Theme */

  /* Et vous rajoutez ces propriétés pour le Messenger en mode sombre : */
  --FAM-accentClr: #7583ff;
  --FAM-secondClr: #333c92;
  --FAM-fontClr: #c7c5cd;
  --FAM-fontLightClr: #9a96a3;
  --FAM-linkClr: #7583ff;
  --FAM-titleClr: #f0f0f8;
  --FAM-buttonsClr: #E5E5E5;

  --FAM-pluginBackground: #1e212a;
  --FAM-chatBackground: #181a21;
  --FAM-textareaBackground: #1e212a;
  --FAM-msgBackground: #0B0E17;
  --FAM-myMsgBackground: #1e212a;
  --FAM-quoteBackground: rgba(255,255,255,0.04);

  --FAM-shadowBox: 0 0 20px var(--neutralDark);
}
```

Si vous n'utilisez pas Edison, vous pouvez ignorer la règle `:root[data-color-scheme="dark"]`.


## Considérations de personnalisation

> [!WARNING]
> La complexité de Forumactif Messenger réside dans ce qui suit. Si vous souhaitez avoir une version lourdement modifiée du Blank Theme et y intégrer le FAM, <ins>posséder une solide connaissance du concept de sélecteurs CSS</ins> est impératif, et comprendre comment personnaliser les options d'un script est un plus.

### Ajuster le FAM à vos templates

Vous aurez certainement remarqué que Forumactif Messenger ne dispose pas de template spécifique. A part un bouton, vous n'avez pas eu à installer de mise en page complète ! C'est parce que son affichage est généré à partir de vos templates existants, et **dépend des classes CSS utilisées dans les templates**. 

En cas de modification conséquente de vos templates, Forumactif Messenger ne saura plus où trouver les éléments dont il a besoin pour s'afficher. 

Pour y remédier, vous devrez aller éditer le script du Messenger et mettre à jour les variables correspondant à vos nouvelles classes et sélecteurs :

```js
// Sélecteurs CSS
// Permet d'aller chercher les éléments des pages par leur class
select: {
    // Titre d'un forum et d'un sujet
    forum_info: ".page-title",
    // Titre d'un sujet dans la liste des sujets ou d'un forum
    forumtitle: "a.forumtitle, a.topictitle",
    // Forum ou sujet dans la liste des sujets
    topic: ".forum, .topicslist_row",
    // Date du dernier message d'un sujet dans la liste des sujets
    lastpost_date: ".lastpost > span",
    // Avatar du dernier posteur d'un sujet dans la liste des sujets
    lastpost_avatar: ".lastpostavatar img",
    // Type d'un sujet (note, annonce, sondage...)
    topic_type: ".topic-type > strong",
    // Un post
    post: ".post_row",
    // Avatar du post
    post_avatar: ".post_avatar img",
    // Pseudo de l'auteur du post
    post_name: ".post_pseudo",
    // Date du post
    post_date: ".post_date time",
    // Contenu du post
    post_message: ".content > div",

    // Réservé
    pagination: ".pagination:not(strong)",
    page_back: ".pag-img:first-child",
    new_topic: '[href$="mode=newtopic"]',
    post_reply: '[href$="mode=reply"]',
},
```

### Paramétrer le FAM

Le Forumactif Messenger dispose de nombreux paramètres pour personnaliser le plugin, que vous pouvez configurer dans le script à ce niveau :

```js
config: {
    chat_page: "",
    chat_permission: "all", //  peut etre [all] ou [member] ou [staff]
    main_title: "Messenger",

    // Gestion des onglets initiaux
    // https://github.com/SethClydesdale/forumactif-messenger/wiki/Config#initial_tabs
    tabs: true,
    initial_tabs: [],

    ignore_announcements: false, // [false] pour voir les sujets d'annonces et de note, [true] pour les cacher
},
```

La liste complète des options de personnalisation et de leur utilité se trouve, en anglais, sur [la page de documentation officielle du FAM](https://github.com/SethClydesdale/forumactif-messenger/wiki/Config). A noter, cependant, que **certains des paramètres ne s'appliquent pas à cette version simplifiée du FAM**. 

#### Options intéressantes

- `chat_page` :

    Détermine la page initiale chargée dans le plugin. Par défaut, laisser vide `''` charge toutes les catégories du forum.
    Vous pouvez changer cette option en liant une catégorie, un forum, ou un sujet de la sorte : `chat_page : '/f15-plugins-and-stuff'`

- `chat_permission` : Autorise l'accès au plugin aux membres ayant un accès staff `'staff'`, membre `'member'` ou invité `'all'`

- `main_title` : Change le titre principal du plugin à son initialisation.

- `initial_tabs` : Permet d'afficher plusieurs onglets à l'initialisation du plugin. A noter que ce paramètre attend un tableau `[]` d'objets `{}`, donc attention à ne pas perdre de crochets et accolades pendant vos modifications !

```js
    initial_tabs : [
      {
        url : 'http://fmdesign.forumotion.com/f1-general-discussion',
        title : 'General Discussion'
      }
    ],
```	

Ajouter plusieurs onglet :

```js
    initial_tabs : [
      {
        url : '/f9-community',
        title : 'Community'
      },

      {
        url : '/f15-plugins-and-stuff',
        title : 'Plugins and stuff'
      },

      {
        url : '/f3-support-help',
        title : 'Support'
      }
    ],	
```

Il est également possible de lier des page HTML custom !

```js
    {
      html : '<iframe id="FAM-chatbox" src="/h8-fr-structures"></iframe>',
      title : 'Chatbox'
    },	
```

### Traduction du FAM

Si vous faites partie des utilisateurs non-francophones du Blank Theme et que le Messenger vous intéresse, vous trouverez les variables de langue du Plugin dans le script du messenger :

```js
lang: {
    loading: "Chargement",
    idle: "Forumactif Messenger est en veille.<br> Cliquez pour reprendre.",
    /* ETC. */
},
```

Des traductions en allemand, grec, anglais, italien et portugais sont disponibles [directement dans le répertoire Github d'origine du FAM](https://github.com/SethClydesdale/forumactif-messenger/tree/master/lang).


