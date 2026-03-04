# CSS Utilitaire

Les **classes utilitaires** sont des classes CSS conçues pour appliquer un style précis et réutilisable, indépendamment du contexte.

Contrairement à une classe “structurelle” comme `.header`, `.post` ou `.username`, une classe utilitaire n’a pas pour rôle de décrire un composant complet.

Elle applique un comportement précis qu’on peut répéter sur plein d’élément.

L’idée est simple : créer de petites briques CSS autonomes que l’on peut combiner librement.

## Fonctionnement

### Combinaison logique

En HTML, un élément peut posséder **plusieurs classes en même temps**.

```html
<img src="image.png" class=".post-avatar circle size-50">
```

Ici, l’image possède 3 classes :

- `.post-avatar` la classe principale qui le définit et qui donne du contexte (l’avatar d’un post)
- `.circle` une classe utilitaire qui transforme les éléments en rond
- `.size-50` une classe utilitaire qui donne la taille 50px

Chaque classe applique ses propres règles et le navigateur combine les styles.

C’est ce principe qui rend les utilitaires puissants : on peut empiler les comportements sans créer une nouvelle classe unique à chaque fois.

Dans ce cas ci, le CSS se présente ainsi :

```css
.post-avatar {
	background-image: url('/avatar.png');
	background-size: cover;
}

.circle {
	border-radius: 100%;
}

.size-50 {
	width: 50px;
	height: 50px;
}
```

Si vous observez l’élément HTML dans votre page, il aura toutes ces propriétés :

```css
... {
	background-image: url('/avatar.png');
	background-size: cover;
	border: 1px solid white;
	border-radius: 100%;
	width: 50px;
	height: 50px;
}
```

Une même classe utilitaire peut être appliquée à plusieurs élément, c’est même son but premier. 

Voici un autre exemple d’élément :

```html
<div class="sunny-decoration circle size-50">...<.div>
```

Pas besoin de réécrire les classes `.circle` et `.size-50`. Seul la classe principale de l’élément `.sunny-decoration` suffit :

```css
.sunny-decoration {
	background-color: yellow;
	box-shadow: 0 0 20px yellow;
}
```

En observant l’élément dans la page, il aura toutes ces propriétés :

```css
... {
	background-color: yellow;
	box-shadow: 0 0 20px yellow;
	border: 1px solid white;
	border-radius: 100%;
	width: 50px;
	height: 50px;
}
```

### Utiliser les variables

Les classes utilitaires peuvent être encore plus puissantes avec l’utilisation des variables. 

En suivant les exemples précédents, il y a la classe utilitaire size-50 qui définit une taille de 50px.

Dans le cas où vous auriez besoin d’élément de 50px, 100px, 200px, … il faudrait créer une classe utilitaire pour chaque taille (`.size-50` `.size-100` et `.size-200`). Soudainement, l’intérêt de créer une classe utilitaire perd de l’intérêt car le but premier est d’écrire le moins possible. 

C’est là que les variables CSS interviennent. Transformons la valeur 50px en une valeur “fictive” qui attendu d’être définie :

```html
.size {
	width: var(--width);
	height: var(--height);
}
```

La valeur des variables `--width` et `--height` sont définit nul part. En observant un élément avec ces propriétés, le navigateur indiquerait “*--width n’est pas définit*”.

Reprenons l’élément :

```html
<div class="sunny-decoration circle size-50">...<.div>
```

Cette fois, ajoutons la valeur des variables à sa classe principale :

```css
.sunny-decoration {
  --width: 200px;
  --height: 200px;
	background-color: yellow;
	box-shadow: 0 0 20px yellow;
}
```

Et le soleil est soudainement plus grand ! 

En poussant encore plus loin la logique, puisque l’idée est toujours définir des éléments qui ont un aspect-ratio carré (même largeur, même longueur), la classe utilitaire pourrait changer de nom et avoir une logique simplifiée :

```css
.square {
	width: var(--size);
	aspect-ratio: 1/1;
}
```

Et dans la classe principale :

```css
.sunny-decoration {
  --size: 200px;
	background-color: yellow;
	box-shadow: 0 0 20px yellow;
}
```

Même chose avec la classe principale d’un petit avatar en rond : 

```css
.post-avatar {
	--size: 50px;
	background-image: url('/avatar.png');
	background-size: cover;
}
```

## En pratique

Le Blank utilise un petit répertoire de classe utilitaire. C’est ce qui lui permet d’avoir un CSS aussi concis alors qu’il doit personnaliser autant de page. 

→ Voir /theme/css