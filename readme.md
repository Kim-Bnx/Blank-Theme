# Le Blank Theme, qu'est-ce que c'est ?

Le Blank Theme est une réécriture de la version ModernBB de Forumactif. Il s'agit d'un thème au visuel minimaliste dont le code a été revu et simplifié pour le rendre plus accessible aux codeurs moins expérimentés, et de donner ainsi à la communauté un outil plus souple et personnalisable pour leurs besoins.

**Le Blank Theme est déconseillé aux novices de Forumactif**. Prennez le temps de vous familiariser avec le fonctionnement par défaut de Forumactif, ainsi que la version ModernBB, avant de vous intéresser au Blank Theme.

Pour une démonstration du Blank Theme, vous pouvez vous rendre sur le [forum de support](https://blankthemerpg.forumactif.com/). Vous pourrez également y trouver des ressources et du support pour vous aider. 

# Avant toute chose 

En tant que version modifiée de ModernBB, le Blank Theme inclut certains modules externes qui sont fréquemment utilisés dans certaines communautés, et supprime certaines options de base de Forumactif. 

## Les modules ajoutés au Blank Theme

- [Switcheroo](Documentation/module-switcheroo.md) : Gestionnaire de multi-comptes
- [Edison](Documentation/module-edison.md) : Bascule de thème clair/sombre
- [Wombat](Documentation/module-wombat.md) : Visionneuse de profils rapide
- [Notiffi](https://blankthemerpg.forumactif.com/t203-notiffi) : Système de notifications modernisé
- [Bouton de sélection de code](https://blankthemerpg.forumactif.com/t109-copy-code) : Ajout d'un bouton "copier" dans les blocs de code qui copie leur contenu dans le presse-papiers
- [Personnalisation des champs de contact](https://blankthemerpg.forumactif.com/t158-) : Un script de personnalisation des champs de contact dans le profil et dans les messages, pour faire des boutons de contact plus parlants que "Voir le site de l'utilisateur"
- [Personnalisation des champs de profil](https://blankthemerpg.forumactif.com/t188-) : Un script qui attribue un identifiant unique aux champs de profil dans les messages, et permet également de les déplacer
- Avatar du dernier inscrit dans le bloc Qui Est En Ligne
- Un bouton `@` dans l'en-tête des messages pour mentionner l'auteur du message
- D'autres modifications plus discrètes ont étés mises en place pour simplifier certains des éléments de base de Forumactif. C'est le cas pour le système "J'aime", pour le bloc "Qui Est En Ligne", pour l'affichage des sondages, l'affichage des blogs, etc. 

## Les modules optionnels 
- [Forumactif Messenger](https://blankthemerpg.forumactif.com/t76-install-messenger) : Messagerie instantanée créée par Ange Tuteur pour Forumactif Edge. La complexité de ce module et difficulté de personnalisation ont mené à sa suppression du code de base du Blank Theme, mais si vous vous en sentez le courage, une version est toujours disponible dans les fichiers.
- [Persona](https://blankthemerpg.forumactif.com/t178-) : Générateur de fiches automatique, actuellement en beta. Son installation est assez complexe pour les débutants, à utiliser à vos risques et périls !
- Blogs forumactif : Les codes correspondants ont été placés dans un dossier à part

## Les modules supprimés de Forumactif
Voici une liste *non-exhaustive* de ce qui a été supprimé du fonctionnement de base de Forumactif. Ces éléments peuvent généralement être rajoutés à l'aide de quelques lignes de code si vous en avez l'usage, mais leur mise en page n'a pas été prévue dans le Blank Theme.

- Le système de fichiers joints dans les messages
- La chatbox (un [canvas](https://ko-fi.com/s/39f2a09677) est disponible)
- Les widgets
- La citation multiple dans les messages
- Les publications, le calendrier, les évènements, les images partagées récemment
- Le type de forums "Petites Annonces"
- Le système d'amis et de commentaires dans le profil
- Le système de remerciement et de réputation
- La prévisualisation de thèmes Hitskin
- La pop-up de connexion & la connexion rapide par Facebook et TopicIt
- La toolbar (active mais cachée via CSS)
- Les anniversaires, les groupes et le record de connexions dans le bloc Qui Est En Ligne
- L'affichage des permissions et modérateurs en fin de sujets ou liste de sujets
- L'interversion droite/gauche de l'affichage du profil dans les messages
- Les boutons de partage
- Le bouton "je n'aime pas" et la liste de ceux qui ont cliqué sur "J'aime" dans les messages
- L'ajout de liens de bas de page
- La description et le nom du forum dans le header

# Installation

L'installation du Blank Theme est un peu complexe, vous en trouverez donc les détails dans la rubrique [Documentation](Documentation/).

## Les étapes

1. [Configurez votre forum](Documentation/installation-1-prerequis.md)
2. [Installation des templates](Documentation/installation-2-templates.md)
3. [Installation et personnalisation du javascript](Documentation/installation-3-javascript.md)
4. [Installation et personnalisation de la feuille de style CSS](Documentation/installation-4-styles.md)
5. [Les conseils pour bien s'en sortir](Documentation/installation-5-conseils.md)
