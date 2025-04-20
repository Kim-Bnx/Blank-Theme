# Edison : Le switch de thèmes

Edison est un plugin tout simple qui vous permet de mettre à diposition des visiteurs du forum un thème de couleurs alternatif (généralement pour avoir une bascule "clair/sombre").

> [!TIP] 
> Vous trouverez [la documentation du plugin Edison](https://blankthemerpg.forumactif.com/t77-edison) sur le forum de support du Blank Theme.

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

> [!NOTE] Remarque
> Pensez à **vider le cache de votre forum** après le changement, en particulier si vous avez déjà utilisé le plugin, volontairement ou non.