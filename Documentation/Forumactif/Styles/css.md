# CSS

Le **CSS** (*Cascading Style Sheets*) est le langage qui permet de styliser une page web.

Il est systématiquement utilisé avec du HTML. Il est très important de comprendre comment les deux langages communiques pour l’utiliser à son plein potentiel. 

# Lexique

- **Sélecteur** : cible un ou plusieurs éléments HTML (`.bloc`, `#12`, `img`)
- **Propriété** : ce que l’on veut modifier (`color`, `margin`, `display`…)
- **Valeur** : la valeur appliquée à la propriété (`red`, `20px`, `flex`…)
- **Déclaration** : une ligne `propriété: valeur;`
- **Règle CSS** : un sélecteur + un bloc de déclarations
- **Cascade** : système de priorité des règles CSS
- **Spécificité** : priorité d’un sélecteur
- **Overwrite** : écrasement d’un style existant

## Syntaxe

Le CSS se présente ainsi :

```
.title {
  color: red;
  font-size:16px;
}
```

- `.title` → sélecteur
- `color` → propriété
- `red` → valeur
- `color: red;` → déclaration
- `{ ... }` → bloc de déclaration
Chaque déclaration :
    - se termine par un `;`
    - utilise `:` pour séparer propriété et valeur
- Le tout forme une `règle CSS`

---

## Les sélecteurs

Pour appliquer des modifications à un élément HTML, le CSS doit cibler l’élément. Il existe différente façon de cibler un élément, c’est ce qu’on appelle un sélecteur.

### Par balise

```
div {
  margin:10px;
}
```

Cible toutes les balises `<div>`.

### Par classe

```
.container {
  padding:20px;
}
```

Cible tous les éléments avec `class="container"`.

### Par combinaison

```
.post > .username {
  font-weight:bold;
}
```

Cible `.username` uniquement s’il est à l’intérieur de `.post`.

La combinaison de sélecteurs est très utile sur Forumactif pour tout les éléments HTML inaccessible dans les templates. 

→ Voir /style/sélecteurs

## Imbrication CSS

Aussi appelé CSS nesting, c’est la possibilité d’imbriquer des règles CSS ensemble :

```css
.post {
  padding: 10px;

  .username {
    font-weight: bold;
  }
}

/* équivalent à */
.post .username {
	 font-weight: bold;
}
```

ou encore

```css
.username {
	color: red;
	
	&:hover {
		color: green
	}
}

/* équivalent à */
.username:hover {
	color: green;
}
```

Cela permet de rendre le code plus lisible en créant des blocs plus organisés. 

C’est une façon plus avancé d’utiliser la combinaison de sélecteurs. 

Dans le deuxième exemple, le sélecteur `&` permet de répéter le sélecteur parent. 

## Cascade, ordre et spécificité

Le nom CSS contient le principe de cascade. 

Ce qui veut dire que les règles CSS sont déclarées les une après les autres (en cascade). Cette hiérarchie détermine comment le navigateur interprète le code. 

D’autres règles d’interprétation s’appliquent :

### Ordre des règles

Dans le cas où deux règles CSS ont un sélecteur identique, c’est toujours la dernière règle qui sera interprété et appliqué. 

```css
.box {
  color: blue;
}

.box {
  color: red;
}
```

Résultat → la couleur rouge sera appliquée au texte.

### Spécificité

Chaque sélecteur a un ordre de “priorité”. Plus le sélecteur sera précis, plus il prendra le dessus sur les autres règles. 

Par ordre (du plus faible au plus fort) :

- balise → `div`
- classe → `.box`
- ID → `#box`
- style inline → `style=""`
- overwrite `!important`

Par exemple, sur l’élément suivant :

```css
<h1 id="introduction" class="title">Pour débuter</h1>
```

```css
#introduction {
	color: red;
}

.title {
	color: blue;
}
```

Résultat → le titre sera rouge, même si le rouge a été appliqué en premier. 

```css
#introduction {
	color: red;
}

.title {
	color: blue!important;
}
```

Résultat → le titre sera de couleur blue car la spécification `!important` l’emporte sur tout.

### Overwrite

Le principe d’overwrite c’est le mécanisme d’écraser des sélecteurs selon la priorité de déclaration. 

La façon la plus dure d’overwrite, est d’utiliser  `!important` à la fin d'une valeur :

```css
width: 100%!important;
```

Il est généralement déconseillé de l’utiliser mais sur Forumactif, c’est parfois la seule solution qui nous reste pour forcer la personnalisation de certain élément. 

Par exemple, il est beaucoup utilisé pour la personnalisation de l’éditeur de texte car un CSS par défaut inaccessible s’applique. 

Utilisez-le avec parcimonie. 

## Commentaires

En CSS (et comme dans la majorité des langages de code), il est possible d’écrire des commentaires dans le code.

Vous trouvez de nombreux de commentaire dans les codes CSS du Blank. Ils sont essentiels pour indiquer ce à quoi on a à faire.

Pour écrire un commentaire CSS, il faut l’entourer de marqueurs spéciaux `/*` et `*/`

```css
/* C'est un commentaire */
```

## Apprentissage

Le CSS est un langage accessible dans sa syntaxe, mais qui s’apprend réellement avec la pratique.

Il faut le pratiquer et expérimenter. C’est en cherchant à reproduire des mises en page précise que l’on progresse. Il n’existe pas une mise en page qui n’a pas été essayé en CSS. Il sera très aisé de faire des recherches googles pour trouver quelle propriété utilisée pour reproduire un effet.

Voici une liste non-exhaustive de tutoriaux et de jeux pour apprendre le CSS : 

- Maîtriser les sélecteurs :
    - [CSS Diner](https://flukeout.github.io/)
    - [CSS speedrun](https://css-speedrun.netlify.app/)
- Maîtriser le Flex :
    - Guide de [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) (anglais)
    - Jeu [Flexbox Froggy](https://flexboxfroggy.com/#fr)
- Maîtriser le Grid :
    - Guide de [CSS Tricks](https://css-tricks.com/complete-guide-css-grid-layout/) (anglais)
    - Jeu [CSS Garden](https://cssgridgarden.com/#fr)
- Pour pratiquer :
    - Jeu [CSS Guess](https://www.guess-css.app/)