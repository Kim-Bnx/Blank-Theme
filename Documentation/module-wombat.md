# Wombat : La visionneuse de profil

Le plugin Wombat change le fonctionnement de l'affichage du profil pour que celui-ci s'affiche dans un volet dans la page en cours de lecture, sans avoir besoin d'aller dans une page à part. 

> [!TIP]
> La [documentation du plugin Wombat](https://blankthemerpg.forumactif.com/t74-wombat) est disponible sur le forum de support du Blank Theme. 
> Vous trouverez le code d'origine du plugin sur son [repository Github](https://github.com/caezd/Wombat).

## Désactiver le plugin

Si vous n'êtes pas intéressé par le mode d'affichage de Wombat, vous pouvez désactiver le plugin en suivant ces instructions :

### Modification des templates

Ouvrez votre template `overall_footer_end` et supprimez les lignes suivantes :

```html
<!-- WOMBAT plugin : https://blankthemerpg.forumactif.com/t74-wombat -->
<script src="https://cdn.jsdelivr.net/gh/caezd/wombat/dist/wombat.min.js"></script>
<!-- Script qui permet d'initialiser le plugin -->
<script>
  new Wombat({
      afterLoad: function(aside, overlay) {
  	/* Personnalisation des champs de contact du profil */
          try { customContactField_inProfile(contactFields_list, contactFields_inProfile + " a"); }
          catch { console.log("⚠️ Erreur profils Wombat : Il manque le script de personnalisation des champs de contact")};

          /* D'autres scripts peuvent être ajoutés en plus de celui là !*/
      }
  });
</script>
```

### Modification du CSS

Vous pouvez vous passer des lignes de CSS dédiées au plugin Wombat, que vous reconnaitrez par l'usage du mot `wombat` dans les sélecteurs :

```css
/*** ------------------------------- ***/
/*** WOMBAT PROFILS EN POP UP ---- ***/

/* Fond atténué */
.wombat-overlay {
  position: fixed;
  z-index: 990;
  inset: 0;
  opacity: 0;
  visibility: hidden;
  width: 100%;
  height: 100%;
  transition: 0.2s opacity ease;
  background: var(--neutral);
}

/* effet de transition du fond atténué */
.wombat-overlay.open {
  opacity: 0.5;
  visibility: visible;
}

/* Fenêtre du popup */
.wombat-aside {
  position: fixed;
  inset: 0;
  margin: auto;
  z-index: 999;
  transition: 0.2s all ease;
  visibility: hidden;
  opacity: 0;
  width: 90%;
  max-width: 800px;
  box-shadow: var(--shadowBox);
  border-radius: 10px;
  height: max-content;
  transform: translateX(-20%);
}

/* effet de transition pour la fenêtre */
.wombat-aside.open {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}
```