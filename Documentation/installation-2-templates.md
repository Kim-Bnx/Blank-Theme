# Installation des templates du Blank Theme

Sur votre forum fraichement configuré pour reçevoir le Blank Theme, rendez-vous dans votre panneau d'administration, cliquez sur l'onglet **Affichage** puis dans le menu latéral, repérez le sous-menu **Templates**. 

Vous allez devoir remplacer le contenu de certains des templates dans les sections **Général**, **Poster & Messges privés** et **Profil**.

Pour cela, commencez par vous rendre dans le dossier [Templates](../Templates/) du répertoire Github du Blank Theme. Pour chaque fichier contenu dans ce répertoire, trouvez le template au nom correspondant sur votre forum, cliquez sur son nom pour l'éditer, puis remplacez son code par celui du Blank Theme. 

Par exemple, le fichier `index_body.tpl` dans le répertoire `Main/` contient le code que vous devrez placer dans le template `Général » index_body`. 

Une fois que vous avez remplacé le code, **cliquez sur le bouton Enregistrer**. Forumactif vous renvoie automatiquement vers la page listant tous les templates de la rubrique en cours de modification. Votre template modifié devrait désormais s'afficher en rouge, avec l'indication "En attente" dans la colonne de statut. **Cliquez sur l'icone en forme de coche ✓ pour le publier** et valider définitivement cette modification.

## Le cas des blogs

Si vous utilisez la fonctionnalité des Blogs sur votre forum, vous trouverez les deux templates correspondants dans le dossier [Blogs](../Blogs/). Assurez-vous d'avoir au préalable activé cette fonctionnalité dans `Modules » Blogs » Configuration`, option *Activer les blogs* : **Oui**.

# Comment fonctionnent les templates ?

Forumactif construit les différentes pages d'un forum en utilisant les templates. Ce sont, en quelque sorte, des modèles à suivre pour générer le contenu du forum. 

Chaque page d'un forum est construite à partir d'un ou de plusieurs templates. Si l'on prend la page d'accueil du forum, elle est en réalité construite à partir des templates `overall_header`, `index_body`, `index_box`, `overall_footer_begin` et `overall_footer_end`. 

Cependant :

- Tous les éléments du forum ne disposent pas nécessairement d'un template correspondant. Par exemple, la Chatbox ne dispose pas de template associé. 
- Lorsque Forumactif assemble les templates, il peut insérer du code en plus. C'est notamment le cas de la publicité, ou des liens dans le pied de page.

Les pièces maîtresses de ce système sont les **boucles** et les **variables**. 

## Qu'est-ce qu'une boucle ?

Si vous regardez les templates d'un peu plus près, vous avez probablement remarqué ces commentaires HTML bien particuliers dans les templates, dont le contenu commence par `BEGIN` ou par `END` :

```html
<!-- BEGIN nom_du_bloc -->
Votre contenu HTML qui apparaitra ou non selon certaines conditions.
<!-- END nom_du_bloc -->
```

Contrairement à leur apparence, ce ne sont pas de simples commentaires ! Ils sont nécessaires au bon fonctionnement des templates. On appelle ces blocs des **boucles** parce que leur contenu est souvent destiné à être répété plusieurs fois, autant de fois qu'il y a de contenu à afficher. 

Par exemple, lorsque vous codez vos catégories, vous n'avez besoin de coder le code correspondant à l'affichage d'un forum qu'une seule fois, dans la boucle `forumrow`. Au moment d'afficher la catégorie, Forumactif récupèrera les données de chaque forum pour les insérer dans ce template, puis affichera le résultat final. Et il recommencera pour le forum suivant, jusqu'à ce qu'il n'y ait plus de forum à afficher.

- Le nom de la boucle est le mot clef qui suit `BEGIN` (ou `END`) ;
- Une boucle ouverte (avec `BEGIN`) doit impérativement être fermée (avec `END`) ;
- Vous ne pouvez pas "inventer" de nouvelles boucles. C'est Forumactif qui gère tout ça ;
- Certaines boucles sont dépendantes d'une boucle "parente". Par exemple `forumrow` est une boucle qui ne fonctionne qu'à l'intérieur de la boucle `catrow` ;
- Vous pouvez réagencer le contenu d'une boucle comme vous le souhaitez ;

Certaines boucles ne bouclent pas. Elles ont plutôt comme objectif de n'afficher leur contenu que si certaines conditions sont remplies. Par exemple, si l'utilisateur est connecté, ou bien si une option a été cochée dans le panneau d'administration. 

## Qu'est-ce qu'une variable ?

Les variables sont ces bouts de texte en majuscules entre accolades `{` et `}` que vous voyez un peu partout dans les templates. Elles contiennent une information : un nombre, du texte, voire des lignes de code. Elles permettent d'indiquer quelle donnée placer à quel endroit dans un template. 

Bien que les variables soient toujours en majuscules, elles sont également souvent précédées par les noms des boucles auxquelles elles sont liées. Ainsi, si l'on prend `{catrow.forumrow.FORUM_DESC}`, le nom de la variable est `FORUM_DESC` (c'est la description d'un forum !), et elle s'utilise à l'intérieur de la boucle `forumrow`, qui est elle-même à l'intérieur de la boucle `catrow`. Si vous tentez de l'utiliser ailleurs, son contenu sera toujours vide, et Forumactif n'affichera donc rien à son emplacement.

- Si une variable n'a pas de boucle associée, il est possible en théorie de l'utiliser n'importe où, mais ce n'est pas toujours le cas, à vous d'expérimenter.
- Le contenu d'une variable n'est pas toujours le même d'une version de Forumactif à l'autre, méfiez-vous des tutoriels un peu trop datés !

## Comment savoir ce qui affiche quoi ?

Une bonne connaissance de l'anglais sera votre meilleur atout pour déterminer à quoi servent une boucle ou variable donnée. En raison de son ancienneté, Forumactif a parfois nommé ses éléments de façon étrange (comme la boucle `disable_viewonline` dont le rôle est, contrairement à ce que son nom laisse entendre, d'afficher le QEEL), mais il y a quelques conventions de nommage qui pourront vous mettre la puce à l'oreille pour le reste :
- Une variable dont le nom commence par `L_`, par exemple `{L_POST_NEW_TOPIC}`, contiendra généralement du texte, dans la langue de l'utilisateur. C'est ce qu'on appelle une variable de langue ;
- Une variable dont le nom commence par `U_`, par exemple `{U_POST_NEW_TOPIC}`, contiendra généralement un lien (une url) ;
- Une variable dont le nom se termine par `_IMG`, par exemple `{postrow.displayed.QUOTE_IMG}`, contiendra généralement soit le lien d'une image, soit du code HTML destiné à afficher une image ;
- Les boucles dont le nom commence par `switch_`, par exemple `switch_description` sont souvent des boucles conditionnelles qui n'affichent leur contenu que si certaines conditions sont remplies
- Les templates dont le nom contient `_body` ont des chances de contenir un ou plusieurs templates supplémentaires, par exemple :
  - Le template `index_body` intègre le template `index_box` via la variable `{BOARD_INDEX}`
  - Le template `viewforum_body` intègre lui aussi le template `index_box`, mais également le template `topic_list_box` (via la variable `{TOPICS_LIST_BOX}`)

## Quelques remarques utiles

### Boucles et imbrications de balises

Généralement, quand on ouvre un conteneur dans une boucle (par exemple un `<div>`), il faudra le fermer (avec `</div>` par exemple) avant la fin de la boucle. Cependant, il y a des exceptions. Par exemple, la structure de boucles pour l'affichage d'une catégorie (dans le template `index_box`) est la suivante :

```html
  <!-- BEGIN catrow -->
    <!-- BEGIN tablehead -->En-tête de la section<!-- END tablehead -->
    <!-- BEGIN forumrow -->Affichage d'un forum<!-- END forumrow -->
    <!-- BEGIN tablefoot -->Pied de la section<!-- END tablefoot -->
  <!-- END catrow -->
```

Lors que Forumactif "construit" la page d'index, il va suivre les instructions en fonction des boucles : 
- La boucle `tablehead` contient l'en-tête d'une catégorie (ou de début de l'ensemble des catégories s'il n'y a pas de séparation des catégories)
- La boucle `forumrow` sera répétée autant de fois qu'il y a de forums présents dans la catégorie,
- La boucle `tablefoot` affiche son contenu en fin de catégorie (ou à la fin de l'ensemble des catégories s'il n'y a pas de séparation entre les catégories)

Il est donc possible d'ouvrir un conteneur `<div>` dans la boucle `tablehead` et de le fermer dans la boucle `tablefoot`. 

C'est le cas dans le Blank Theme, qui ouvre un conteneur `<div class="category">` et un conteneur `<div class="forums">` dans la boucle d'en-tête, et les ferme ensuite dans la boucle `tablefoot` :

```html
<!-- BEGIN tablehead -->
<div class="category" id="{catrow.tablehead.ID}">
    <!-- Titre catégorie -->
    <div class="cate_title">{catrow.tablehead.L_FORUM}</div>
    <!-- Conteneur liste des forums -->
    <div class="forums">
<!-- END tablehead -->

[...]

<!-- BEGIN tablefoot -->
    </div>
    <!-- Fin liste des forums -->
</div>
<!-- END tablefoot -->
```

Lorsque vous codez vos templates, vous devez donc vous poser les questions suivantes :
- Est ce que le code de la page reste valide si le contenu de cette boucle est retiré ? Vérifiez l'emplacement des balises de fermeture sinon. 
- Est-ce que cette boucle possède une paire associée, comme c'est le cas pour `tablehead`/`tablefoot` ? Peut-être faudra-t-il y ajouter des balises de fermeture.
- Est-ce que ce template possède une paire associée, comme c'est le cas pour `overall_header`/`overall_footer` ? Vérifiez qu'une balise ouverte dans le premier possède bien une balise de fermeture dans le second.

### Les options

Certaines boucles et variables ne s'affichent que si vous utilisez certaines options sur votre forum. Si vous avez décidé qu'une option ne vous servira pas, vous pouvez donc simplifier votre template en la retirant du code.

Par exemple, si vous décidez de ne pas utiliser le système de likes du forum, vous pouvez parfaitement supprimer la boucle `switch_likes_active` et le code qu'elle contient.
