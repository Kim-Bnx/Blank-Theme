# Sélecteurs

Un **sélecteur CSS** permet de cibler un ou plusieurs éléments HTML afin de leur appliquer un style.

Exemple HTML :

```html
<div class="box" id="12">Hello!</div>
```

Pour cibler cet élément, on pourrait écrire :

- `div { }` → en le ciblant par sa balise
- `.box { }` → en le ciblant par sa classe
- `#12 { }` → en le ciblant par son identifiant

Il existe plein d’autre sélecteur pour cibler un élément. Combinés entre eux, les sélecteurs permettent de faire des manipulations très poussés. 

Cela permet d’intervenir sur une page sans en modifier le HTML, de cibler des éléments généré par des variables et de contourner certaine limite de Forumactif.

## Sélecteur global

| Sélecteur | Sélectionne |
| --- | --- |
| `*` | **tous** les éléments |
| `.box *` | tous les éléments dans l’élément `class="box"` |

## Sélecteurs classiques

| Sélecteur | Sélectionne le ou les éléments... |
| --- | --- |
| `div` | avec les balises `div` |
| `.box` | avec `class="box"` |
| `#12` | avec `id="12"` |

## Sélecteurs avec attribut

| Sélecteur | Sélectionne le ou les éléments... |
| --- | --- |
| `[href]` | avec l'attribut `href=""` |
| `[href="blank-theme.com"]` | avec l'attribut `href` qui contient strictement `"blank-theme.com"` |
| `[href~="blank"]` | avec l'attribut `href` qui contient une fois "`blank`" |
| `[href*="/"]` | avec l'attribut `href` qui contient au moins un "`/`" |
| `[href^="blank"]` | avec l'attribut `href` qui **commence** par "`blank`" |
| `[href$=".com"]` | avec l'attribut `href` qui **termine** par "`.com`" |

<aside>
<img src="/icons/info-alternate_blue.svg" alt="/icons/info-alternate_blue.svg" width="40px" />

Ici la démonstration utilise l’attribut `href` mais cela fonctionne avec tous les autres attributs : `class`, `name`, `data`, …

</aside>

## Combinaisons de sélecteurs

| Combinaison | Sélectionne le ou les éléments... |
| --- | --- |
| `.box, .text` | classes `box` et `text` |
| `.box p` | balises `p` contenues dans `.box` |
| `.box > a` | liens qui sont l'enfant direct de `.box` |
| `.box + img` | images situées directement après les `.box` |
| `.box ~ img` | images situées après les `.box` |