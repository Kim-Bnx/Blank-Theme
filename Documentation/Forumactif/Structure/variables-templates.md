# Variables de template

Les **variables de templates** permettent d’afficher des données dynamiques dans les templates. Ces connées sont directement issues du serveur puis générée lors du chargement de la page.

Contrairement au HTML classique (qui est statique), une variable change automatiquement selon :

- l’utilisateur connecté
- la page affichée
- le contenu du forum
- les permissions

Elles sont propres à Forumactif.

## Fonctionnement

Une variable est un marqueur spécial entouré d’accolades :

```html
{USERNAME}
{FORUM_NAME}
{POST_SUBJECT}
```

Lors du chargement de la page, Forumactif remplace ces marqueurs par la valeur correspondante.

Par exemple :

```html
<h1>Bienvenue {USERNAME}</h1>
```

Deviendra :

```html
<h1>Bienvenue Kim</h1>
```

On dit qu’une variable contient une information (une donnée) et génère du contenu (texte et/ou éléments HTML).

### Variables simples

Les variables simples contiennent une donnée unique.

Exemples fréquents :

- `{USERNAME}` → nom de l’utilisateur connecté
- `{TOPIC_TITLE}` → titre d’un sujet
- `{AVATAR_IMG}` → image d’avatar
- `{FORUM_DESC}` → description du forum

Elles peuvent être utilisées directement dans le HTML comme du contenu :

```html
<span class="author">{USERNAME}</span>
```

Également comme code dynamique :

```html
<<div class="topicslist_row {topics_list_box.row.TOPIC_READ_STATUS}"> ... </div>
```

Ici, la variable va générer une classe différente en fonction de si le sujet contient un nouveau message ou non.

### Variables conditionnelles

Les variables conditionnelles permettent d’afficher un contenu uniquement si une condition est remplie.

Syntaxe générale :

```html
<!-- BEGIN condition... -->
  Contenu affiché si la condition est vraie
<!-- END doncition... -->
```

Exemple :

```html
<!-- BEGIN switch_user_logged_in -->
<a href="/logout">Déconnexion</a>
<!-- END switch_user_logged_in -->
```

Ici, le lien n’apparaît que si l’utilisateur est connecté.

### Boucles

Les boucles permettent de répéter une structure pour chaque élément d’une liste.

Dans un template, l’élément à répéter est écrit une seule fois. C’est ce bloc de code qui sera dupliqué automatiquement en fonction du nombre d’éléments à afficher.

Elles sont très utilisées pour :

- afficher les catégories
- afficher les sujets
- afficher les messages

Syntaxe générale :

```html
<!-- BEGIN nom_de_la_boucle -->
  Contenu répété
<!-- END nom_de_la_boucle -->
```

Exemple simplifié :

```html
<!-- BEGIN topicrow -->
<div class="topic">
    {topicrow.TOPIC_TITLE}
</div>
<!-- END topicrow -->
```

Ici :

- `topicrow` est le nom de la boucle
- `{topicrow.TOPIC_TITLE}` correspond à une variable propre à cette boucle

### Environnement

La majorité des variables fonctionnent dans un contexte précis. Cela signifie qu’elles ne génèrent du contenu que dans leur template d’origine.

Si vous déplacez une variable hors de son environnement prévu, elle peut :

- ne rien afficher
- générer un résultat incomplet
- produire une erreur d’affichage

Il est donc important de conserver les variables dans le bon contexte.

Il existe cependant quelques variables dites **globales**, utilisables dans la plupart des templates.

→ Voir la section **Variables globales**

## Liste des variables

À ce jour, Forumactif ne fournit aucune documentation officielle complète listant toutes les variables et leur fonctionnement.

La source la plus complète actuellement disponible se trouve dans ce projet GitHub maintenu par Etana et plusieurs contributeurs issus de la communauté Forumactif :

https://github.com/Etana/template

### Variables globales

Ces variables peuvent être utilisées dans la majorité des templates.

**Liste non exhaustive :**

- `switch_user_logged_in` : affichage le contenu seulement si l’utilisateur est connecté

```html
<!-- BEGIN switch_user_logged_in -->
  (contenu)
<!-- END switch_user_logged_in -->
```

- `switch_user_logged_out` : affichage le contenu seulement si l’utilisateur est déconnecté

```html
<!-- BEGIN switch_user_logged_out -->
  (contenu)
<!-- END switch_user_logged_out -->
```

## Problèmes connus et limitations

En plus du manque de documentation officielle, les variables de Forumactif n’ont pas de logique précise sur les données générés. Une variable simple peut autant contenir :

- une simple donnée brute (un nom, un nombre)
- une image complète
- un bloc HTML déjà structuré

Exemple :

```html
{AVATAR_IMG}
```

Va générer sur la page :

```html
<img src="..." alt="...">
```

Il est donc impossible d’ajouter une classe personnaliser à cet élément. Pour manipuler l’image, il faut entourer la variable d’un nouvel élément HTML pour effectuer des modifications.

Autre exemple :

```html
<!-- Date et auteur -->
{catrow.forumrow.USER_LAST_POST}
```

Va générer sur la page : 

```html
<!-- Date et auteur -->
Mar 24 Fév 2026 - 13:35<br>
<strong>
	<a href="/u2" class="gensmall"><span class="group-4 color-groups" style="color:#EB8F5E"><strong>Kim</strong></span></a>
</strong>
&nbsp;
<a href="/t6p30-cey-note#92" class="last-post-icon">
	<img src="https://2img.net/i/fa/modernbb/icon_topic_latest.png" alt="Voir le dernier message" title="Voir le dernier message" loading="lazy">
</a>
```

Dans certains cas (voir exemple), une seule variable peut contenir une grande quantité d’informations.

La variable affichant la date et l’auteur du dernier message d’une catégorie peut générer plusieurs éléments HTML à la fois.

Le contenu injecté peut varier selon le contexte :

- si le dernier posteur est un invité (absence de lien vers un profil)
- si le visiteur est un invité et n’a pas accès au sujet (absence de lien vers le sujet)

C’est dans ces cas très précis que l’édition de template devient fastidieuse. Il faut être astucieux dans l’utilisation de CSS (et parfois de javascript) pour parvenir au résultat désiré.