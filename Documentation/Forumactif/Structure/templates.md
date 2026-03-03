# Templates

Les **templates** sont les fichiers qui définissent la structure des pages d’un forum. Cette structure est définit par la version du forum (phpBB3, modernBB, …) qui génère le thème de base créé par Forumactif.

Le Blank se base sur la structure de la version modernBB, c’est pourquoi ne pas respecter la version peut causer des différences à l’installation du thème.

## Fonctionnement

Un template définit :

- le contenu entier d’une page ****(exemple : `memberlist_body` pour la liste des membres et `search_body` pour la page de recherche)
- une section ou un élément précis d’une page (exemple : `topics_list_box` contient strictement la liste des sujets dans un forum)

Il est écrit avec du HTML et il contient des variables Forumactif qui affichent dynamiquement les informations nécessaires pour générer le contenu de la page. 

→ Voir /variables-de-templates

### Templates globaux

Deux templates définissent la structure commune à toutes les pages du forum :

- `overall_header` contient le début de toutes les pages du forum, ce qui comprend le <head> et le début du <body> (avec le header, la barre de navigation, …)
- `overall_footer_...` contient la fin de toutes les pages du forum, ce qui comprend la fin du </body> (avec les liens de Forumactif, …)
Ce template existe en deux parties, modifiés par le Blank :
    - `..._begin` : qui contient les derniers éléments affichés tout en bas de la page ainsi que les éléments globaux que l’on veut afficher sur toutes les pages (top ou sidebar, des liens rapides, …)
    - `..._end` : qui contient uniquement l’importation de code Javascript (→ voir /interactions/integration)

Toute modification dans ces templates impactent l’ensemble du forum.

### Templates imbriqués

Certains templates fonctionnent ensemble. Les templates qui définissent seulement des sections très précises d’une page sont généralement contenu dans un template plus grand.

Exemple :

- `index_body` définit la structure générale de la page d’accueil
- `index_box` définit l’affichage d’une catégorie

`index_box` est appelé à l’intérieur de `index_body` de cette façon : 

```html
<!-- EMPLACEMENT DES CATEGORIES ------>
<!-- (template : index_box) ---------->
{BOARD_INDEX}
```

Autre exemple :

- `viewtopic_body` définit la structure général d’un sujet
- `viewtopic_poll_ballot` définit l’affichage d’un sondage (quand il y en a un)

`viewtopic_poll_ballot` est appelé à l’intérieur de `viewtopic_body` de cette façon :

```html
<!-- Sondage (template : viewtopic_poll_ballot) -->
{POLL_DISPLAY}
```

## Modifier un template

<aside>
<img src="/icons/info-alternate_blue.svg" alt="/icons/info-alternate_blue.svg" width="40px" />

### Prérequis

- L’édition des templates est strictement réservé au compte fondateur du forum.
- Accès à la section concernée, est visible seulement dans le mode avancé du panneau d’administration.
</aside>

### Édition

Pour accéder aux templates, rendez-vous dans le panneau d’administration : `Affichage → Templates`

Pour éditer un template :

1. Cliquez sur l’icône en forme de **roue crantée**
2. Modifiez le code
3. Enregistrez

### Prévisualisation

L’enregistrement de vos modifications crée une version en prévisualisation. C’est version n’impacte pas le design du forum. Il s’agit d’un status “en attente” qui permet d’ajuster ces modifications si besoin.

Cliquez sur publier pour mettre à jour officiellement votre template pour tous.

### Bonnes pratiques

Les templates peuvent impressionner au premier abord, mais ils sont plus accessibles qu’il n’y paraît.

Voici quelques conseils :

- Lisez attentivement les commentaires présents dans le code. Ils définissent la nature de chaque bloc de code et ce qu’ils font.
- Aidez-vous du mode prévisualisation, il est commun de faire des aller-retours entre le code et l’aperçu pour comprendre ce que l’on fait.
- Osez essayer : déplacez les éléments et observez résultat. Les blocs de code sont comme des briques de lego qu’on emboîte pour donner vie au design.
- Ajoutez des marqueurs test pour repérer où il apparait dans la page et comprendre comme le template impacte le contenu de la page.
- Sauvegardez votre progression régulièrement.
- Revenez en arrière ou retrouvez des éléments perdus grâces aux liens :
    - **Valeur par défaut** : version originale Forumactif
    - **Valeur actuelle** : dernière version publié

## Problèmes connus et limites

Tous les éléments de Forumactif ne sont pas accessibles via les templates. Certaines pages ne disposent pas de template modifiable. Par exemple, la page d’inscription et de connexion n’ont pas de templates. Pour les modifier, il convient d’utiliser du CSS, ou d’autre méthode plus technique.

Certains templates sont partiels. Ils ne donnent pas accès à tous les éléments de la page, pour des raisons parfois inconnus. A rappeler que Forumactif compte beaucoup d’année à son actif et que leur organisation sont parfois désuète. 

Des mises à jours sont régulièrement annoncés sur le Forum des Forums.

Exemple de template partiels :

Le template `profile_add_body` permet de modifier la page d’édition du profil, mais ne contient pas toutes les sections disponibles (signature, sujets surveillés, etc.).

Il est donc parfois nécessaire d’adapter sa méthode ou d’utiliser du CSS ou du JavaScript pour compléter une modification.