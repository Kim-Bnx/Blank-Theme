# Pages HTML

Forumactif permet de créer des pages supplémentaires en dehors des pages classiques du forum.

Ces pages sont souvent utilisés pour :

- créer des annexes supplémentaire
- faire des bottins
- intégrer un outil spécifique
- créer une page totalement indépendante du forum

Elles offrent une grande liberté de mise en page.

## Fonctionnement

Pour créer une nouvelle page HTML, rendez-vous dans le panneau d’administration :

`Modules → HTML & JavaScript → Gestion des pages HTML`

Cliquez ensuite sur : **Création en mode avancé**

## Choisir la structure

Lors de la création, une option importante apparaît :

**"Voulez-vous utiliser le haut et le bas de page de votre forum ?"**

Cette option définit la structure de la page.

### Option 1 : Oui

La page adopte automatiquement l’apparence et la structure générale du forum. Vous n’avez alors qu’à écrire le contenu central. Elle conserve donc :

- le design global du forum
- le header, la navigation, et tout autre élément globaux à toutes les pages
- le CSS et les scripts

Ce qui représente tout ce qui a été construit dans les templates `overall_header` et `overall_footer`.

### Option 2 : Non

Vous créez une page complètement vierge et indépendante de tout les codes qui ont été écrit sur le reste du forum. Vous devrez alors construire la page entièrement. 

Voici un exemple minimal d’une page construire de façon optimisée :

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- Titre de l'onglet de la page -->
  <title>Page personnalisée</title>

  <!-- CSS -->
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
    }
  </style>
</head>

<!-- Contenu de la page -->
<body>
  <h1>Page indépendante</h1>
  <p>Contenu de la page.</p>
</body>
</html>
```

→ Voir /structure

## Modifier une page HTML

Dans la page :

`Modules → HTML & JavaScript → Gestion des pages HTML`

Cliquez impérativement sur l’icône des trois rouages.

<aside>
<img src="/icons/exclamation-mark_red.svg" alt="/icons/exclamation-mark_red.svg" width="40px" />

Attention : l’icône avec un seul rouage correspond à la modification en mode simplifié. En cliquant dessus, votre code sera complètement altéré et difficilement récupérable. 

</aside>