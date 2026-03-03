# Styles

<aside>
<img src="/icons/info-alternate_blue.svg" alt="/icons/info-alternate_blue.svg" width="40px" />

## Activer le mode avancé

Pour accéder à l’ensemble des outils de personnalisation, il est nécessaire d’activer le mode avancé du panneau d’administration :

![image.png](attachment:4559ab98-e9ee-4bb5-8e45-09a0135c5645:image.png)

</aside>

La personnalisation visuelle d’un forum Forumactif repose principalement sur le **CSS** (*Cascading Style Sheets*).

Si le HTML définit la structure d’une page (titres, blocs, liens, images…), le CSS définit son apparence : couleurs, typographies, espacements, tailles, positionnements, animations, …

## Rôle du CSS

Le CSS permet de :

- Modifier l’apparence d’un élément existant
- Réorganiser visuellement la mise en page
- Masquer ou afficher certains éléments
- Adapter le forum aux formats mobiles

Sur Forumactif (et donc avec le Blank), **la** quasi-totalité de la personnalisation passe par le CSS.

## Installer du CSS

### CSS principal

L’endroit prévu par Forumactif se situe dans le panneau d’administration : 

`Affichage → Images et Couleurs → CSS Principal`

Le CSS écrit dans cette section créer le fichier CSS principal du forum. C’est donc ici que doit se trouver la majorité du CSS car il va être appliqué à toutes les pages du forum. 

L’intégration de ce fichier à toutes les pages est géré automatiquement par Forumactif. Vous pouvez en retrouver la trace dans le template `overall_header` :

```html
<!-- CSS ajouté via le panneau d'administration -->
{T_HEAD_STYLESHEET}{CSS}
```

Cette variable sera transformé la partie `<head>` de la page en :

```html
<link rel="stylesheet" href="/42-ltr.css" type="text/css">
```

Si vous entrer l’URL `https://votreforum.forumactif.com/42-ltr.css` vous aurez accès au fichier CSS.

<aside>
<img src="/icons/report_orange.svg" alt="/icons/report_orange.svg" width="40px" />

Ce fichier a une limitation de 65000 charactères (espaces, tabulation et sauts de ligne compris).

C’est une limitation qui est facilement atteinte car le CSS du Blank occupe déjà un peu plus de la moitié de l’espace disponible avec 38000 charactères.

Envisagez de supprimer de condenser le code de base, supprimer les commentaires et les espaces une fois que vous avez bien pris en main le thème.

</aside>

### CSS brute

Parce que le CSS travaille de paire avec le HTML, il est possible de l’intégrer directement dans une balise HTML n’importe où dans la page. La balise `<style>` s’utilise ainsi : 

```html
<style>
  .text {
    color: red;
  }
</style>
```

Elle peut être utilisé dans la partie `<head>` de la page (recommandé) ou directement à côté d’un élément HTML concerné. 

Ca peut être très pratique pour des personnalisations très ciblées mais ça disperse le code ce qui peut compliqué la maintenance.

### CSS importé

Il est également possible de créer son propre fichier de CSS (appelé feuille de styles) en local sur son ordinateur, de l’héberger et de l’importer sur le forum. 

→ Voir /héberger-css

Le CS s’importe toujours dans la partie <head>, avec la balise : 

```html
<link rel="stylesheet" href="LIEN DU FICHIER">
```

### Comparer

Il n’y a pas de version meilleure qu’une autre. Les trois solutions peuvent être utilisé ensembles (c’est d’ailleurs le cas dans le Blank). 

Voici un récapitulatif de ce qu’elles apportent :

| Solutions | ✅ | ⛔ |
| --- | --- | --- |
| CSS principal | Centralisé, appliqué sur toutes les pages, modifiables par tout le staff | Taille limitée (65000 charactères) |
| CSS brute | Simple, rapide à mettre en place, utilisable dans les sujets | Code dispersé, difficile à mettre à jour, mauvaise visibilité |
| CSS importé | Espace illimité, meilleur organisation, éditable en local | Plus technique, dépend d’un hébergement, accessible par une personne unique |