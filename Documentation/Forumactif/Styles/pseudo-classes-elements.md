# Pseudo-class & elements

Les **pseudo-classes** et **pseudo-éléments** permettent de cibler un élément selon :

- son état
- sa position
- son contenu
- une condition particulière

Ils complètent les sélecteurs classiques et offrent un niveau de précision supplémentaire.

## Pseudo-classes

### `:hover`

Cible un élément lorsqu’il est survolé par la souris.

```css
.button:hover {
  background: black;
  color: white;
}
```

### `:empty`

Cible un élément **sans contenu**.

```css
div:empty {
  display: none;
}
```

Utile pour masquer des blocs vides

<aside>
<img src="/icons/report_orange.svg" alt="/icons/report_orange.svg" width="40px" />

Un espace ou un retour à la ligne compte comme du contenu.

</aside>

### `:not()`

Permet d’exclure un élément d’une sélection.

```css
a:not(.button) {
  text-decoration: underline;
}
```

Ici, tous les liens sauf ceux ayant la classe `.button`.

### `:has()`

Cible un élément **en fonction de son contenu**.

```css
.card:has(img) {
  border: 2px solid red;
}
```

Ici, seules les `.card` contenant une image sont ciblées.

## Pseudo-classes basées sur la position

Ces pseudo-classes ciblent un élément selon sa position dans son parent.

### `:first-child` et `:last-child`

```
li:first-child {
  font-weight:bold;
}

li:last-child {
  border:none;
}
```

- `:first-child` → premier enfant
- `:last-child` → dernier enfant

### `:nth-child()`

Cible un élément selon son index (numéro de sa position dans la liste).

```
li:nth-child(2) {
  color:red;
}
```

- `nth-child(2)` → cible le 2e enfant `<li>` du parent

On peut aussi cibler les éléments pairs ou impairs.

```
li:nth-child(even)
li:nth-child(odd)
```

- `nth-child(even)` → cible tous les enfants `<li>` dont l’index est paire
- `nth-child(odd)` → cible tous les enfants `<li>` dont l’index est impaire

### `:first-of-type`, `:last-of-type`, `:nth-of-type()`

Similaire à `nth-child`, mais basé sur le type de balise, et non sur la position absolue.

```
p:first-of-type {
  margin-top:0;
}
```

Différence importante :

- `nth-child()` compte tous les enfants
- `nth-of-type()` compte uniquement les éléments du même type de balise

# Pseudo-éléments

### `::before` et `::after`

Permettent d’insérer du contenu décoratif avant ou après un élément

```
.title::before {
  content:"★ ";
  color: red;
}
```

Utile pour :

- ajouter des icônes
- créer des séparateurs
- insérer des éléments visuels sans modifier le HTML

<aside>
<img src="/icons/report_orange.svg" alt="/icons/report_orange.svg" width="40px" />

Sans la propriété `content` le pseudo-element n’apparaîtra pas.

</aside>

### `::first-line` et `::first-letter`

```
p::first-letter {
  font-size: 26px;
}
```

Ciblent seulement la première ligne ou la première lettre du contenu de l’élément `<p>`