# Introduction

Le **Blank** est une réécriture complète de la version ModernBB de Forumactif.

Il propose une base plus minimaliste et plus fonctionnelle. Le code source a été simplifié et optimisé afin de rendre la personnalisation plus souple et plus accessible aux créateurs de forum.

Les choix esthétiques et structurels du Blank s’appuient sur les standards largement adoptés par la communauté RPG de Forumactif.

Cependant, chaque forum porte une identité et une passion qui lui sont propres. Le Blank n’est donc pas réservé au RPG : il peut servir de base à tout créateur souhaitant repenser et personnaliser l’apparence de son forum.

## Utilisation

Le Blank est un projet gratuit, collaboratif et entièrement libre d’utilisation. 

Il n’impose aucune limite de personnalisation. Au contraire : il a été conçu pour être remodelé, que ce soit par de simples ajustements visuels ou par une transformation complète.

Il peut également servir de base à des projets en libre-service, à des expérimentations ou à des forks personnalisés.

Son architecture est modulaire : il n’est pas nécessaire d’installer l’ensemble du thème pour profiter de certains modules ou plugins. Plusieurs ajouts peuvent être utilisés indépendamment du reste du projet.

## Prérequis

L’accès au compte fondateur d’un forum Forumactif est indispensable pour installer le thème.

Si le forum n’existe pas encore, il est recommandé de choisir la version ModernBB à sa création (choix par défaut).

La documentation accompagne pas à pas l’installation et explique en détail les mécanismes de personnalisation propres à Forumactif.

Cependant, des bases en HTML et en CSS sont recommandées pour tirer pleinement parti du thème.

## Changements natifs

La réécriture du Blank supprime certaines fonctionnalités jugées superflues et intègre nativement plusieurs modules utilitaires populaires au sein de la communauté Forumactif.

### Ajouts

- [Switcheroo](https://github.com/Lostmindy/Blank-Theme--fork/blob/Documentation/Documentation/module-switcheroo.md) : gestionnaire de multi-comptes
- [Edison](https://github.com/Lostmindy/Blank-Theme--fork/blob/Documentation/Documentation/module-edison.md) : bascule de thème clair/sombre
- [Wombat](https://github.com/Lostmindy/Blank-Theme--fork/blob/Documentation/Documentation/module-wombat.md) : visionneuse de profils rapide
- [Notiffi](https://blankthemerpg.forumactif.com/t203-notiffi) : système de notifications modernisé
- *Hub : Affichage modernisé du “Qui Est En Ligne ?”
- *Mirror : Affichage des informations du membre connecté (avatar, pseudo, couleur de groupe, …)
- *Barre de navigation plus souple
- [Bouton de sélection de code](https://blankthemerpg.forumactif.com/t109-copy-code) : ajout d'un bouton "copier" dans les blocs de code
- [Personnalisation des champs de contact](https://blankthemerpg.forumactif.com/t158-) : transforme les liens de contact (utilisé pour les fiches, liens, …) en texte personnalisable
- [Personnalisation des champs de profil](https://blankthemerpg.forumactif.com/t188-) : attribut un identifiant unique aux champs de profil dans les messages, et permet de les déplacer
- Affichage simplifié du profil lors de la prévisualisation d’un message
- *Amélioration de l’éditeur par défaut
- Bouton de mention pour tagguer l’auteur d’un message
- Des boutons de navigation rapide vers le haut et le bas de la page
- *CSS core et utilitaires
- *Blanket

### Modifications

- Toolbar active mais masquée visuellement
- Modification de divers textes par défaut (bloc QEEL, textes de modération, statistiques, etc.)
- Remplacement de plusieurs images par du texte (“Créer un nouveau sujet”, “Répondre au sujet”, etc.)
- Simplification de l’affichage des sondages, du bouton « J’aime », de la prévisualisation d’un profil au survol d’un tag utilisateur, etc., via CSS

### Suppressions

- **Généralité**
    - Annonces défilantes (à venir)
        - Chatbox (un [canvas](https://ko-fi.com/s/39f2a09677) est disponible)
        - Blogs (à venir)
        - Prévisualisation de thèmes Hitskin
        - Widgets
        - Pages annexes et leurs liens de navigation :
            - Publications
            - Calendrier
            - Événements
            - Images partagées récemment
            - Activité (à venir)
        - Pop-up de notification d’un nouveau MP
        - Pop-up de bienvenue
        - Pop-up de recherche rapide
        - Google Analytics
        - Bloc “Sauter vers un forum”
- **Page d’accueil**
    - Nom et description du forum dans le header
    - Anniversaires, groupes et record de connexions dans le bloc QEEL
    - Configuration de l’emplacement de la Chatbox et de la fenêtre de connexion rapide (placées sous le bloc QEEL par défaut)
    - Pop-up de connexion, connexion rapide via Facebook et TopicIt
    - Ajout des liens en bas de page
    - Informations et statistiques : date et heure actuelle, dernières visites de l’utilisateur
    - Barre de recherche
- **Forums et sujets**
    - Type de forum “Petites Annonces”
    - Affichage liste des sujets en grille
    - Bouton “Je n’aime pas” et liste des membres ayant cliqué sur “J’aime”
    - Affichage des permissions et modérateurs en bas des sujets ou des listes de sujets
    - Boutons de partage
    - Citation multiple dans les messages
    - Système de fichiers joints dans les messages
    - Mention « Ce message a été édité X fois »
- **Membres**
    - Système de remerciement et de réputation
    - Système d’amis et commentaires dans le profil
    - Configuration de l’affichage du profil à gauche ou à droite dans les messages (gauche par défaut)
    - Mention du pourcentage de participation (« xx % du total / xx messages par jour »)
    - Champs par défaut Forumactif : genre, date de naissance, localisation, emploi, humeur
    - Contacts par défaut Forumactif : Facebook, Twitter, Pinterest, Skype
    - Import d’avatar par URL
    - Galerie d’avatars

<aside>
<img src="https://www.notion.so/icons/info-alternate_blue.svg" alt="https://www.notion.so/icons/info-alternate_blue.svg" width="40px" />

Ces éléments ne sont pas supprimés définitivement. 

Ils peuvent être réimplémentés en ajoutant leur code dans les templates concernés. Pour retrouver leur version d’origine : cliquez sur le lien « valeur par défaut » du template correspondant.

Il sera également nécessaire d’adapter leur mise en page en CSS afin d’assurer leur bon fonctionnement dans l’environnement du Blank.

</aside>

## Méthodes d’installation

Deux méthodes : 

<aside>

Installation automatique

- Nécessite l’installation du kit de démarrage
- Implémentation automatique en quelques secondes
- Idéale pour les utilisateurs ayant déjà travaillé avec le Blank

`/theme/installation ->`

</aside>

<aside>

Installation guidée

- Configuration préalable du forum requise
- Installation manuelle étape par étape
- Idéale pour découvrir en détail le fonctionnement du Blank

`/theme/configuration ->`

</aside>