# Configuration du forum

Avant d'installer le Blank Theme, vous devez préparer votre forum en activant ou désactivant plusieurs options. Les instructions ci-après vous indiqueront le chemin à parcourir dans votre panneau d'administration pour faire vos réglages.

## Sélectionner la version du forum
- `Affichage » Thèmes : Choisir un thème » Version : Général`
  - Choisissez *ModernBB*

## Réglages du CSS
La feuille de style du Blank Theme remplacera le CSS de base de la version ModernBB. Pour cela, vous aurez à cocher plusieurs cases.

- `Affichage » Images et Couleurs : Couleurs & CSS » Feuille de style CSS » Options du CSS` (en bas de la page) :
  - *Désactiver le CSS de base* : **Oui**
  - *Optimiser votre CSS* : **Non**

## Activation du javascript
- `Modules » HTML & Javascript : Gestion des codes Javascript`
    - *Activer la gestion des codes Javascript* : **Oui**. 

## Configurer l'affichage de l'index et des forums
- `Affichage » Page d'accueil : Structure et hiérarchie`
  - Niveau de compression de l'index : Choisisez *Séparer les catégories sur l'index : Moyen*
  - Hiérarchie :
    -  *Afficher le titre du dernier message* : **Oui**
    -  *Afficher les avatars du dernier message* : **Oui**
    -  *Afficher les liens vers les sous-forums* : **Oui**
    -  *Afficher les modérateurs d'un forum* : **Non**
- `Affichage » Page d'accueil : généralités`
  - *Afficher les membres connectés ces xx dernières heures* : **Oui** (vous pouvez changer la durée)
- `Général » Messages et Emails : Configuration`
  - *Afficher la description des sujets* à **Oui**

## Configurer l'affichage des profils
- `Utilisateurs & Groupes » Permissions spéciales` : 
  - *Voir le profil* : **Invités**. 
  - Cette modification est nécessaire pour le bon fonctionnement de l'affichage de l'avatar sur le QEEL et de la visionneuse Wombat.
- `Utilisateurs » Utilisateurs : Profils » Options générales`
  - *Voir le profil avancé* : **Non**

## Activer la toolbar 
- `Modules › Toolbar › Configuration`
  - *Activer la toolbar* : **Oui**

## Autoriser les formulaires AJAX
Cette option est nécessaire pour certains modules comme Switcheroo
- `Général › Forum › Sécurité`
  - *Interdire les formulaires non officiels à poster des messages et messages privés sur le forum* : **Non**

## (optionnel) Activer le HTML dans les messages

- `Général » Messages et Emails : Configuration` 
  - *Autoriser le HTML* : **Oui**
  - *Autoriser le HTML non protégé* : **Tous les membres**

Note : En cas de problème, vérifiez également que l'option *Toujours autoriser le HTML* est bien activée dans les préférences de votre profil.

