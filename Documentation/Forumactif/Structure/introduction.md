# Structure

<aside>
<img src="/icons/info-alternate_blue.svg" alt="/icons/info-alternate_blue.svg" width="40px" />

## Activer le mode avancé

Pour accéder à l’ensemble des outils de personnalisation, il est nécessaire d’activer le mode avancé du panneau d’administration :

![image.png](attachment:4559ab98-e9ee-4bb5-8e45-09a0135c5645:image.png)

</aside>

Pour modifier correctement un forum, il faut d’abord comprendre comment une page est construite.

## Les briques d’une page Forumactif

Sur Forumactif, chaque page repose sur 3 éléments complémentaires.

<aside>

### HTML

Le HTML est le nom du language qui permet de créer la structure et le contenu de la page. C’est les balises visibles dans les templates et parfois dans les sujets.

→ Voir la section **`/html`**

</aside>

<aside>

### Templates

Les templates sont les fichiers modèles qui vont composer une page. Chaque template représente une page ou une section de page prédéfinie.

→ Voir la section **`/templates`**

</aside>

<aside>

### Variable de template

Les variables affichent les données dynamique du forum : utilisateurs, catégories, statistiques, … Elles sont insérées dans les templates et leur contenu s’adapte en fonction du contexte. 

→ Voir la section **`/variables`**

</aside>

## Comment une page web est construite

Avant d’entrer dans les détails des templates, il est utile de comprendre la structure générale d’une page HTML.

Une page web suit toujours la même organisation de base :

```html
<!DOCTYPE html>
<html>
	<!-- Informations invisibles -->
  <head>
	  <!-- Titre de la page -->
	  <!-- Meta-donnée -->
	  
	  <!-- Importation du CSS -->
	  <!-- Importation du script avant le chargement de la page -->
  </head>
  
  <!-- Contenu visible -->
  <body>
	  <!-- Header -->
	  <!-- Navigation -->
	  
	  <!-- Template de catégorie : 
				  - titre catégorie
				  - forum
				  - liens
		-->
		
		<!-- Template du QEEL :
					-- nouvel inscrit
					-- membre connectés
					-- stastiques
		-->
		
		<!-- Importation du script après le chargement de la page -->
  </body>
</html>
```

### Le `<head>`

Le `head` contient les informations invisibles de la page, nécessaire à sa construction :

- le titre affiché dans l’onglet
- les liens vers les feuilles de style (CSS)
- les scripts JavaScript
- d’autres informations techniques

Ces éléments permettent à la page de s’afficher correctement dès son ouverture.
Le CSS est chargé dans le `<head>` pour que la mise en forme soit prête avant l’affichage du contenu, ce qui évite de voir brièvement la page sans style.

Sur Forumactif, cette partie est gérée par le template `overall_header`

### Le `<body>`

Le `body` est le corps de la page. C’est la partie visible à toute personne naviguant sur la page web. Sur un forum, on y verrait les catégories, les profils, les sujets, …

On peut également y ajouter du CSS et des scripts. Ces éléments sont exécutés après le chargement initial de la page. Lorsqu’ils sont bien optimisés (valable dans la majorité des cas) les modifications qu’ils apportent sont invisibles pour l’utilisateur. Dans le cas contraire, ils peuvent provoquer un changement brusque de mise en page ou un léger délai d’apparition de certains éléments.

C’est dans cette partie que la majorité des templates viennent s’insérer. Elle se termine dans le template `overall_footer_end`

## Construire sa propre page web

Forumactif donne la possibilité de créer des nouvelles pages vierges attachés à son forum. Elles peuvent servir à créer du contenu supplémentaires : annexes, règlement, outils, …

<aside>

### Pages HTML personnalisées

→ Voir la section **`/pages-html`**

</aside>