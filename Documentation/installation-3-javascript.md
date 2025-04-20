# Installation et personnalisation des scripts

Sur votre forum fraichement configuré pour reçevoir le Blank Theme, rendez-vous dans votre panneau d'administration, cliquez sur l'onglet **Modules** puis **Gestion des codes Javascript**. 

Sur la page qui s'affiche, vérifiez que l'option *Activer la gestion des codes Javascript* est bien réglée à **Oui**, comme indiqué dans les prérequis. 

Sur le répertoire du Blank Theme, allez dans le dossier `Javascript`. Pour chacun des fichiers `.js` qui s'y trouve, vous allez devoir créer un nouveau script sur votre forum.

Par exemple, pour le script `Champs de contact.js`, ouvrez le fichier pour en voir le contenu.  

Sur votre forum, dans la page de gestion des codes Javascript, cliquez sur le bouton *Créer un nouveau Javascript". 

Dans la page qui s'affiche, vous avez quelques champs et options à remplir :
- *Titre* : Donnez au script le titre que vous voulez, idéalement en rapport avec le script, par exemple "`[BT] Personnalisation des champs de contact`". 
- *Placement* : Normalement, les scripts fournis par le Blank Theme indiquent au début du code quelle case cocher. Dans l'exemple des Champs de contact, c'est "Sur toutes les pages".
- *Code Javascript* : Collez ici le code contenu dans le fichier `.js`

Une fois que vous avez terminé, cliquez sur le bouton *Valider*. 

Forumactif vous renvoie sur la page listant tous les scripts, répéter le processus pour chacun des scripts fournis par le Blank Theme.

## La personnalisation des scripts

Certains des scripts fournis dans le Blank Theme vont nécessiter une étape de personnalisation de votre part pour fonctionner correctement. 

### Personnalisation des champs de contact
Le tutoriel d'origine de ce script est disponible sur [le forum de support](https://blankthemerpg.forumactif.com/t158-personnaliser-les-champs-de-contact).

En résumé, pour chacun des champs de contact (`Utilisateurs & Groupes → Utilisateurs → Profils → Champs contact`) que vous aurez défini, donnez à chaque champ une image unique qui servira d'identifiant (elle ne s'affichera pas, c'est le nom de fichier qui est important).

Puis, dans le script, vous avez essentiellement besoin de repérer cette partie :
```js
/* -----------------------------
 * VOS REGLAGES SE FONT ICI
 * ----------------------------- */

const contactFields_selectorInTopic = ".post_contact"; // Sélecteur des champs de contact dans les messages
const contactFields_selectorInProfile = ".profile_contact"; // Sélecteur des champs de contact dans la page de profil

/* Liste des champs à personnaliser */
const contactFields_list = [
  {
    text: "MP", // Texte du lien pour envoyer un MP
  },

  /* Pour chaque champ de contact à personnaliser, dupliquez le code suivant */
  {
    urlImg: "image.png", // Nom de l'image du champ de contact (voir documentation)
    text: "Nom du champ", // Texte du champ de contact
    info: "Information du lien en infobulle", // Infobulle au survol du lien
  },
];

/* -----------------------------
 * NE PAS TOUCHER A CE QUI SUIT
 * ----------------------------- */
```

Notez la partie à dupliquer pour chacun de vos champs de contact à personnaliser. Prenons l'exemple d'un champ "Fiche de personnage", vous pourriez par exemple vouloir afficher un bouton "Dossier Personnel" avec une infobulle "Voir la fiche de personnage". Ce qui vous ferait rajouter ceci :

```js
  {
    urlImg: "img-fiche.png",
    text: "Dossier Personnel",
    info: "Voir la fiche de personnage",
  },
```

Mise en contexte dans le code précédemment cité :
```js
/* -----------------------------
 * VOS REGLAGES SE FONT ICI
 * ----------------------------- */

const contactFields_selectorInTopic = ".post_contact"; // Sélecteur des champs de contact dans les messages
const contactFields_selectorInProfile = ".profile_contact"; // Sélecteur des champs de contact dans la page de profil

/* Liste des champs à personnaliser */
const contactFields_list = [
  {
    text: "MP", // Texte du lien pour envoyer un MP
  },

  /* Pour chaque champ de contact à personnaliser, dupliquez le code suivant */
  {
    urlImg: "image.png", // Nom de l'image du champ de contact (voir documentation)
    text: "Nom du champ", // Texte du champ de contact
    info: "Information du lien en infobulle", // Infobulle au survol du lien
  },

  { /* Le bouton de contact pour la fiche de personnage */
    urlImg: "img-fiche.png",
    text: "Dossier Personnel",
    info: "Voir la fiche de personnage",
  }, /* <-- ATTENTION : Ne pas supprimer l'accolade fermante et sa virgule */

  /* On rajoute ici les autres configurations */ 

]; /* <-- ATTENTION : Ne pas supprimer le crochet fermant et sa virgule */ 

/* -----------------------------
 * NE PAS TOUCHER A CE QUI SUIT
 * ----------------------------- */
```

### Personnalisation des champs de profil
Le tutoriel d'origine de ce script est disponible sur [le forum de support](https://blankthemerpg.forumactif.com/t188-). 

> [!WARNING] Attention
> Ce script est voué à évoluer, surveillez les mises à jour du Blank Theme à ce sujet. 

Le fonctionnement principal de ce script est d'attribuer à chacun de vos champs de profil une classe personnalisée, par exemple, pour les champs par défaut, `field-date-dinscription` sera la classe attribuée au champ qui affiche la date d'inscription du membre. C'est la partie `date-dinscription` (sans le `field-` devant) qui sera importante pour la suite.

Le script comporte une option **facultative** qui vous permet de déplacer facilement les champs de profil (par exemple si vous codez un affichage du profil en onglets). Vous cherchez cette partie là :

```js
      // Optionnel : déplacer les éléments
      moveFromTo: [
        {
          target: ".classeCible1",
          fields: ["elementDeplace1", "elementDeplace2", "elementDeplace3"],
        },
        {
          target: ".classeCible2",
          fields: ["elementDeplace5", "elementDeplace6"],
        },
      ],
```
Si vous souhaitez par exemple déplacer la date d'inscription dans un autre bloc que celui d'origine, par exemple un `<div class="profil-hrp"></div>` que vous aurez mis dans le code de votre template, alors vous pourrez ajouter ce réglage comme ceci :
```js
{ 
    target : ".profil-hrp",
    fields : ["date-dinscription"],
},
```

Ce qui dans le code d'origine pourrait vous donner ceci :
```js
// Optionnel : déplacer les éléments
moveFromTo: [
    {
        target: ".classeCible1",
        fields: ["elementDeplace1", "elementDeplace2", "elementDeplace3"],
    },

    {
        target: ".classeCible2",
        fields: ["elementDeplace5", "elementDeplace6"],
    },

    { 
        target : ".profil-hrp",
        fields : ["date-dinscription"],
    }, /* <-- ATTENTION à ne pas oublier l'accolade fermante et sa virgule */

], /* <-- ATTENTION à ne pas supprimer le crochet fermant et sa virgule */
```

Comme le code d'origine l'indique, vous pouvez déplacer plusieurs champs d'un coup à un endroit donné. Vous pouvez supprimer les définitions entre accolades `{...}` qui ne vous servent à rien si vous voulez, mais elles ne posent pas de problème si elles sont laissées là.