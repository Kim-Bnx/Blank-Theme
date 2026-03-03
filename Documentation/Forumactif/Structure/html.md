# HTML

Le HTML (*HyperText Markup Language / langage de balisage pour l’hypertexte*) est le langage utilisé pour créer et structurer le contenu d’une page web.

On peut le voir comme le squelette : il décrit ce qui existe sur la page (titres, paragraphes, boutons, images…).

La mise en page se fait ensuite avec le CSS, et les interactions avec le JavaScript.

## Lexique

- **Balise** : tags entre `< >` comme `<div>` `<span>` `<a>` `<img>`
- **Élément HTML** : combinaison d’une balise et du contenu
- **Parent / enfant** : relation hiérarchique entre des éléments imbriqués
- **Attribut** : information ajoutée dans la balise (`class="…"`, `id="…"`, `href="…"`, `data-*="…"`)
- **Commentaire** : texte ignoré par le navigateur qui permet d’annoter le code

## Syntaxe

Le HTML est composé de balises qui entourent du contenu.

```html
<div>Bonjour !</div>
```

- `<div>` : balise d’ouverture
- `</div>` : balise de fermeture
- `Bonjour !` : le contenu

La combinaison de ces éléments forme **un élément HTML**.

## Balises

`<div>`, `<span>`, `<a>`, `<img>` sont des balises courantes que vous avez probablement déjà croisées.

Il en existe une grande variété, car chaque balise a un rôle précis. Certaines ont une utilité évidente, d’autres sont plus subtiles.

Par exemple :

- `<a>` pour créer un lien
- `<img>` pour afficher une image

Mais quelle est la différence entre `<div>` et `<span>` ?

- `<span>` est un élément **inline** : il entoure du texte sans provoquer de retour à la ligne.
- `<div>` est un élément **block** : il crée un bloc qui occupe toute la largeur disponible et force un retour à la ligne.

<aside>
<img src="/icons/info-alternate_blue.svg" alt="/icons/info-alternate_blue.svg" width="40px" />

Il n’est pas toujours possible de deviner le comportement par défaut d’une balise. Ces connaissances s’acquièrent avec la pratique et la consultation de la documentation officielle.

Voir la [documentation officielle](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements) de toutes les balises HTML.

</aside>

### Balises personnalisées

Il est tout à fait possible de créer ses propres balises HTML personnalisés.

```html
<blank>Bonjour !</blank>
```

Elles sont parfois utilisées dans les mises en page de sujets pour améliorer la lisibilité ou créer une structure plus claire.

Cependant :

- elles n’ont aucun comportement par défaut
- elles n’ont aucune signification particulière pour le navigateur

La plupart du temps, ce comportement neutre est recherché. Mais dans certains cas, cela peut produire des résultats inattendus si elles ne sont pas correctement stylisées en CSS.

## Imbrication

Les éléments HTML peuvent être placés à l’intérieur d’autres éléments.

```html
<div>
	<h1>Le Blank Thème est un thème Forumactif</h1>
</div>
```

Cela créer une hiérarchie entre les éléments qu’on définit avec les termes parents / enfants : 

- `<div>` est le parent de **h1**
- `<h1>` et `<p>` sont les enfants de **<div>**

Un élément enfant doit toujours être fermé **avant** son parent.

```html
<div>
	<h1>Le Blank Thème est un thème Forumactif</div>
```

C’est l’erreur la plus courante en HML. Elle engendre un résultat inattendu (et parfois spectaculaire) : signe que le problème est une simple erreur de syntax.

## Attributs

Une balise HTML peut contenir des attributs. Ce qui permet de donner des informations supplémentaire sur l’élément. Les attributs ne génèrent pas de contenu visible.

```html
<a href="blank-theme.com" class="button">Accéder au Blank</a>
```

- `class` et `href` sont des attributs
- `"blank.com"` et `"button"` sont les valeurs
- il y a toujours un espace entre le nom de la balise et les attributs
- les valeurs sont placées entre guillemets
- une balise peut contenir plusieurs attributs

Les attributs les plus courants :

### `class`

Une **classe** sert à identifier un élément pour :

- lui appliquer du CSS
- le cibler en JavaScript

```html
<div class="container">...</div>
```

Une classe peut contenir plusieurs valeurs, séparées par des espaces :

```html
<div class="container large topic">...</div>
```

### `id`

Un **id** identifie un élément de façon unique sur une page. En règle général, un ID ne doit pas être utilisé plusieurs fois.

```html
<div id="profile">...</div>
```

### `href` / `src`

- `href` : destination d’un lien (`<a>`)
- `src` : source d’une image, d’une vidéo, etc.

```html
<a href="/t123">Voir le sujet</a>
<img src="avatar.png" alt="Avatar">
```

### `data-*` (attributs personnalisés)

Les attributs `data-` sont très utiles pour stocker une information personnalisée. Ils sont très utiles pour changer dynamiquement les informations d’un élément HTML avec du Javascript.

```html
<body data-color-theme="light">...</body>
```

<aside>
<img src="/icons/info-alternate_blue.svg" alt="/icons/info-alternate_blue.svg" width="40px" />

Certain attribut sont utilisables sur toutes les balises (`class`, `id`). D’autre attribut sont spécifiques à certaine balise, comme le href d’une balise lien `<a>`. 

Ces différences s’apprennent avec la pratique et la lecture de la documentation.

Exemple : [documentation officielle](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/a#attributs) de la balise <a>

</aside>

## Commentaires

En HTML (et comme dans la majorité des langages de code), il est possible d’écrire des commentaires dans le code. Ils sont ignorés par le navigateur et invisibles par les visiteurs de la page. 

Vous trouvez de nombreux de commentaire dans les codes du Blank. Ils sont essentiels pour indiquer ce à quoi on a à faire.

Pour écrire un commentaire HTML, il faut l’entourer de marqueurs spéciaux `<!--` et `-->`

```html
<!-- C'est un commentaire -->
```