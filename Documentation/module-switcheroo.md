# Switcheroo : le gestionnaire de multicomptes

Switcheroo est un plugin conçu pour la communauté rôliste de Forumactif. Il vous permettra de réunir tous vos comptes sur une barre de navigation rapide afin de pouvoir changer de compte d'un simple clic.

> [!TIP]
> - [La documentation d'origine du plugin](https://blankthemerpg.forumactif.com/t36-switcheroo) est disponible sur le forum de support du Blank Theme.
> - Vous pouvez également consulter [le répertoire Github du plugin](https://github.com/caezd/switcheroo) pour une documentation en français et en anglais.

## Comment désinstaller Switcheroo ?

Si le gestionnaire de multicomptes n'a pas d'intérêt pour vous, voici les instructions nécessaires pour le supprimer du Blank Theme. 

### Modifier les templates

Editez le template `overall_footer_end` et trouvez la partie correspondant au plugin Switcheroo pour la supprimer :

```html
<!-- SWITCHEROO plugin : https://blankthemerpg.forumactif.com/t36-switcheroo -->
<!-- Monomer.js et Switcheroo.js -->
<script src="https://cdn.jsdelivr.net/gh/caezd/switcheroo@1.1-beta/monomer.js"></script> <!-- LAISSEZ CETTE LIGNE !! -->
<script src="https://cdn.jsdelivr.net/gh/caezd/switcheroo@1.1-beta/switcheroo.js"></script>

<!-- Script qui permet d'initialiser le plugin -->
<script>
(function() {
    new Switcheroo('#switcheroo', {
        logo: '<i class="bi bi-house-door-fill"></i>', /* accepte html, permet d'afficher un logo qui retourne à l'accueil du forum */
        enableReorder: true, /* activer le drag&drop pour l'ordre des comptes (true/false) */
        updateAvatar: true, /* activer le clique droit pour charger un nouvel avatar (true/false) */
        confirm: true, /* demande une confirmation avant le changement de compte */
        confirmMsg: 'Confirmer le Switcheroo de personnage ?', /* le message affiché lors de la confirmation */
        deleteIcon: '×', /* accepte html, icone pour supprimer un compte lié */
        addIcon: '<i class="bi bi-plus"></i>', /* accepte html, icone qui ouvre le formulaire de connexion et d'association */
        errorMsg: 'Une erreur est surviendue lors du Switcheroo.',
    });
})();
  
</script>
```

Vous allez également devoir retirer les boutons et autres éléments du plugin de la barre latérale, toujours dans le template `overall_footer_end` :

```html
<!-- Barre switcheroo -->
<nav id="switcheroo" class="switcheroo"></nav>
```

> [!NOTE]
> Vous pouvez retirer la partie `<div class="sidebar_top"> ... </div>` si elle est désormais vide, à moins de vouloir mettre autre chose à la place.

### Modifier le CSS

Cherchez la partie suivante dans le CSS du Blank Theme

```css
/*** ------------------------------- ***/
/*** SWITCHEROO - Par Monomer ------ ***/
/*** Gestionnaire de multicompte --- ***/
```

Supprimez ce commentaire et toutes les instructions CSS qui suivent jusqu'à arriver à :

```css
/*** ------------------------------- ***/
/*** BARRE DE NAVIGATION ----------- ***/
```


> [!TIP]
> - Si pour une obscure raison vous n'avez pas de commentaires CSS, cherchez et supprimez toutes les règles dont les sélecteurs commencent par `.switcheroo`. 
> - Vous pouvez également supprimer les règles dont le sélecteur commence par `.monomer` (pour le moment elles ne sont pas utilisées par d'autres plugins)

