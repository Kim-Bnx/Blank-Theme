# Edison : Le switch de thèmes

Edison est un plugin tout simple qui vous permet de mettre à diposition des visiteurs du forum un thème de couleurs alternatif (généralement pour avoir une bascule "clair/sombre").

> [!TIP] 
> Vous trouverez [la documentation du plugin Edison](https://blankthemerpg.forumactif.com/t77-edison) sur le forum de support du Blank Theme.

## Comment ça marche ?

Le plugin a pour objectif de rajouter un attribut `data-color-scheme` à l'élément `<html>` du forum. La valeur de celle-ci sera réglée à `dark` ou `light` selon vos préférences, et stockée par votre navigateur pour pouvoir garder votre choix en mémoire pour vos prochaines visites du forum.

Tout le reste, cependant, se passe dans le CSS du forum. 

Les couleurs du Blank Theme sont définies à l'aide de [propriétés customisées](https://developer.mozilla.org/fr/docs/Web/CSS/--*), ou variables CSS. Si cela ne vous dit rien, il s'agit des propriétés CSS qui sont précédées de deux tirets : `--couleur-machin`. Une fois définies (généralements dans une règle `:root{}` de votre CSS, mais ce n'est pas impératif), on pourra ensuite les utiliser dans le CSS en utilisant la fonction `var()`, comme ceci : `var(--couleur-machin)`.

> [!TIP]
> Vous pourrez obtenir plus de détails [dans le tutoriel des variables CSS sur le forum du Blank Theme](https://blankthemerpg.forumactif.com/t139-utiliser-les-variables-css).

Par défaut, ces propriétés customisées sont définies dans la règle `:root {}` du Blank Theme :

```css
:root {
  color-scheme: light;
  --header: url('https://images2.imgbox.com/e5/fb/TTqPoDcu_o.png');

  --neutral: #fafbfc;
  --neutralDark: #f2f4f9;
  --neutralDarker: #dce3f4;

  /* ETC... */
}
```

Mais en CSS, il est possible d'écrire "par dessus" une règle si on utilise un sélecteur plus précis. Dans notre cas, on va définir une nouvelle règle CSS, qui se traduirait en français par "si l'attribut `data-color-scheme` existe et vaut `dark`, alors on va appliquer ces nouvelles propriétés" :

```css
[data-color-scheme="dark"] {
  color-scheme: dark;
  --header: url('https://images2.imgbox.com/89/30/IXFzrs0y_o.png');

  --neutral: #1e212a;
  --neutralDark: #181a21;
  --neutralDarker: #313543;

  /* ETC... */
}
```

Par la suite, le reste du CSS utilisera toujours les variables de couleurs (ou de polices, images de fond, etc...) avec l'attribut `var()`. Au moment de l'affichage du forum, selon la valeur de `data-color-scheme`, la valeur des propriétés customisées CSS telles que `--neutral` sera différente. 

## Comment désinstaller Edison ?

Si vous souhaitez supprimer cette fonctionnalité du forum, suivez les instructions ci-après !

### Supprimer le plugin des templates

Dans le template `overall_header` trouvez et supprimez cette partie du code :
```html
<!------------------------------------->
<!-- INITIALISATION DU PLUGIN EDISON -->    
<script>
    (function () {
        const html = document.documentElement;
        const userThemePreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const colorScheme = localStorage.getItem('color-scheme');
    
        if (!colorScheme && userThemePreference) {
            html.setAttribute('data-color-scheme', 'dark');
        }

        colorScheme && html.setAttribute('data-color-scheme', colorScheme);
    })();
</script>
```

Dans le template `overall_footer_end` trouvez cette partie du code :
```html
<!-- EDISON plugin : https://blankthemerpg.forumactif.com/t77-edison -->
<script>
(function () {
    const html = document.documentElement;
    const themeControls = document.querySelector("[data-theme-controls]");
    const toggle = themeControls.querySelector(".color-scheme-toggle");
    
    const setToggleLabel = function () {
    	let mode = html.dataset.colorScheme;
        toggle.setAttribute(
            "title",
            "Activer le mode " + (mode === "dark" ? "clair" : "sombre")
        );
    };

    const setColorScheme = function (value) {
        html.dataset.colorScheme = value;
        localStorage.setItem("color-scheme", value);
        setToggleLabel();
    };

    const init = function () {
        setToggleLabel();
    };

    toggle.addEventListener("click", function () {
        const scheme = html.dataset.colorScheme === "dark" ? "light" : "dark";
        setColorScheme(scheme);
    });

    init();

})();
</script>
```

Il ne vous reste plus qu'à retirer le bouton proprement dit, dans le même template :

```html
<!-- Switch thème button -->
<div data-theme-controls>
    <button class="color-scheme-toggle" title="Activer le mode sombre" aria-describedby="theme-controls-focus-text">
        <!-- Light theme -->
        <div class="icon light"><i class="ion-ios-sunny"></i></div>
        <!-- Dark theme -->
        <div class="icon dark"><i class="ion-ios-moon"></i></div>
    </button>
</div>
```

### Modifier le CSS

Vous n'avez plus besoin du mode sombre désormais, vous pouvez donc retirer la partie du CSS qui définit les variables du mode sombre :
```css
[data-color-scheme="dark"] {
  color-scheme: dark;
  /* plein de trucs ici */
}
```
Ainsi que toute la partie concernant le bouton de changement de thème :
```css
/* BOUTON CHANGEMENT DE THEME ---*/
@media (prefers-color-scheme: dark) {
  .color-scheme-toggle .dark {
    display: none;
  }
}

@media (prefers-color-scheme: light) {
  .color-scheme-toggle .light {
    display: none;
  }
}

.color-scheme-toggle,
[data-color-scheme="light"] .color-scheme-toggle .dark,
[data-color-scheme="dark"] .color-scheme-toggle .light {
  display: block;
  width: 100%;
}

[data-color-scheme="dark"] .color-scheme-toggle .dark,
[data-color-scheme="light"] .color-scheme-toggle .light {
  display: none;
}

.color-scheme-toggle {
  background-color: var(--neutralDark);
  padding: 5px 8px;
  font-size: 36px;
  text-align: center;
  border-radius: 5px;
  color: var(--textColor);
}

.color-scheme-toggle:hover {
  color: var(--accentClr);
}
```

> [!NOTE] 
> Pensez à **vider le cache de votre forum** après le changement, en particulier si vous avez déjà utilisé le plugin, volontairement ou non.