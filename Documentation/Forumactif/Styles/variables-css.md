# Variables CSS

Les **variables CSS** (appelées aussi *custom properties*) permettent de stocker une valeur réutilisable.

Elles servent principalement à :

- centraliser des couleurs
- définir des tailles cohérentes
- uniformiser des typographies
- simplifier la personnalisation

Au lieu d’écrire plusieurs fois la même valeur dans le CSS, on la définit une seule fois, puis on la réutilise.

## Syntaxe

Une variable CSS se déclare ainsi :

```css
:root {
--color: #174E0D;
}
```

- `--colorAccent` → nom de la variable
- `#174E0D` → valeur

Les variables commencent toujours par `--`.

Pour l’utiliser :

```css
.button {
  background: var(--color);
}

.link {
	color: var(--color);
}

.box {
	border: 1px solid var(--color);
}
```

La fonction `var()` permet de récupérer la valeur de la variable.

## Déclaration

On déclare généralement les variables dans `:root`.

```css
:root {
	--primary: #174E0D;
}
```

`:root` représente l’élément racine du document (équivalent à `<html>`).

Cela rend les variables accessibles partout.

Il est également possible de déclarer une variable dans un sélecteur spécifique :

```css
.dark-mode {
	--background: #000;
}
```

Dans ce cas, la variable ne s’applique qu’à l’intérieur de `.dark-mode`.

<aside>
<img src="/icons/info-alternate_blue.svg" alt="/icons/info-alternate_blue.svg" width="40px" />

Le principe de cascade et de spécificité de CSS s’applique aussi pour la déclaration des variables. Une variable du même nom déclaré deux fois (une fois dans :root et une fois dans un autre bloc), sera redéfinie par le dernière règle CSS.

→ Voir /styles/css#cascade-ordre-specificite

</aside>

## En pratique

### Nomenclature

Nommer ses variables peut devenir un exercice délicat.

Il existe deux logiques principales :

- utiliser un nom descriptif : `-white: #FFFFFF;`
- utiliser un nom utilitaire : `-lightColor: #FFFFFF;`

Dans le Blank Theme, la seconde logique est privilégiée.

Les variables sont conçues pour faciliter la personnalisation sans avoir à modifier toute la feuille de style.

Changer la valeur de la variable `--white` par `#174E0D` et le nom de la variable perd de son sens puisqu'elle renvoi désormais du vert. Donc un nom utilitaire reste cohérent même si la valeur change.

### Que définir ?

Les variables peuvent stocker n'importe quelle valeur de CSS. Ici, on a surtout vu des couleurs, mais on peut définir des typographies, des tailles, des bordures, des ombres, ...

En poussant un peu leur utilisation, on peut se créer des petites librairies de valeurs.

Exemple : 

```css
:root {
  --darkColor: #000000;
  --colorAccent: #174E0D;

  --small: 12px;
  --medium: 14px;
  --large: 16px;

  --laborFont: 'Arial', sans-serif;
  --titleFont: 'Bebas', sans-serif;

  --boxBorder: var(--small) solid var(--colorAccent);
  --heading1: var(--large) var(--titleFont);
}
```