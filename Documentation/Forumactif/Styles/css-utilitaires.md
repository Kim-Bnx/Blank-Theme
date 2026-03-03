# CSS Utilitaire

Les **classes utilitaires** sont des classes CSS conçues pour appliquer un style précis et réutilisable, indépendamment du contexte.

Contrairement à une classe “structurelle” comme `.header`, `.post` ou `.username`, une classe utilitaire n’a pas pour rôle de décrire un composant complet.

Elle applique un comportement précis qu’on peut répéter sur plein d’élément.

L’idée est simple : créer de petites briques CSS autonomes que l’on peut combiner librement.

## Utilité

En CSS classique, on a tendance à écrire un style complet pour chaque élément.

```css
.avatar {
  width: 50px;
  height: 50px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}

.avatar-small {
	width: 25px;
  height: 25px;
  object-fit: cover;
  object-position: center;
  border-radius: 3px;
}
```

Si plusieurs éléments partagent ce comportement, on finit par répéter du code identique qui occupe de la précieuse place. 

Créer une classes utilitaires permet d’extraire la logique commune pour la rendre réutilisable.

Ici, la logique extraite serait :

```css
.u-img-square {
	width: ...px;
	height: ...px;
	object-fit: cover;
	object-position: center;
	border-radius: ...px;
}
```

## Fonctionnement

En HTML, un élément peut posséder **plusieurs classes en même temps**.

```css
<img src="image.png" class="u-img-square avatar">
```

Ici, l’image possède deux classes :

- `u-img-square`
- `avatar`

Chaque classe applique ses propres règles et le navigateur combine les styles.

C’est ce principe qui rend les utilitaires puissants : on peut empiler les comportements sans créer une nouvelle classe unique à chaque fois.

### Logique

On établit la logique dans la classe utilitaire :

```css
.u-img-square {
	width: var(--size);
	height: var(--size);
	object-fit: cover;
	object-position: center;
	border-radius: var(--round);
}
```

Puisqu’on a besoin d’utiliser la classe utilitaires sur des éléments qui besoin d’avoir la même forme mais avec des valeurs différentes, on utilise également les variables CSS.

### Application

Ainsi, dans la classe unique, il n’y a qu’à définir les valeurs propres :

```css
.avatar {
  --size: 50px;
  --round: 10px;
}
```

Et pour un autre élément plus petit :

```css
.avatar-small {
  --size: 25px;
  --round: 3px;
}
```

Comme prévu, le navigateur combine les deux classes attribués à l’élément HTML. Les valeurs de la classe unique communique avec la classe utilitaire. 

### Autre exemple

Autre exemple que l’on peut retrouver dans le CSS utilitaire du Blank :

```css
.u-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Appliqué à un élément, cette classe utilitaire permet de centrer le contenu.