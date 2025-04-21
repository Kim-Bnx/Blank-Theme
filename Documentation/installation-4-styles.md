# Installation de la feuille de style CSS

Dans votre panneau d'administration, rendez-vous dans `Affichage » Images et Couleurs » Couleurs & CSS` et collez le contenu du fichier [styles.css](CSS/styles.css) dans la zone de texte. 

> [!WARNING]
> N'oubliez pas de désactiver le CSS de base de Forumactif en réglant l'option présente en dessous de la zone de texte.
> - *Forcer le CSS de base du forum :* **Non**

## Informations importantes à savoir

- Le Blank Theme est une réécriture complète du thème ModernBB de Forumactif, et sa feuille de style est donc extrêmement dense. Aidez-vous des commentaires pour vous y retrouver ;
- Vous trouverez une partie du CSS dans le template `overall_header`. En principe, il s'agit de propriétés que vous n'aurez pas à toucher ;
- Si votre feuille de style finit par dépasser les limites de stockage de Forumactif, vous avez plusieurs solutions :
  - Placez une partie du CSS dans les templates `overall_header`, `overall_footer_begin` et `overall_footer_end`. Est-ce une bonne pratique ? Non. Est ce que ça marche ? Oui. Cependant, cela comporte le risque de vous forcer à devoir constamment vérifier ces templates pour la moindre modification.
  - Essayez de gagner des caractères dans la feuille de style CSS. Retirez les commentaires, retirez des caractères, écrivez chaque règle sur une seule ligne, etc. Vous pouvez également compresser votre CSS si vous travaillez vos styles sur un éditeur de texte plutôt que directement sur le forum. 
  - [Hébergez votre feuille de style sur un hébergeur extérieur](https://blankthemerpg.forumactif.com/t141-heberger-du-css-exterieur). Archivehost, Dropbox voire Github sont des solutions potentielles. Pour que votre forum reste lisible même en cas de lenteur de chargement ou plantage de l'hébergeur, veillez à ce que les styles les plus importants de votre forum restent sur Forumactif.