# Configuration

Accédez au panneau d’administration afin de paramétrer les options nécessaires à l’installation du thème.

<aside>
<img src="/icons/info-alternate_blue.svg" alt="/icons/info-alternate_blue.svg" width="40px" />

Ces paramètres concernent uniquement l’affichage général du forum.

Une configuration plus approfondie des fonctionnalités pourra être nécessaire selon vos besoins.

</aside>

## Configuration rapide

Si votre forum est déjà en place ou si vous êtes familier avec les réglages Forumactif, assurez-vous que :

- [ ]  la version du forum est **ModernBB**
- [ ]  le **CSS de base est désactivé**
- [ ]  la gestion des **JavaScript est activée**
- [ ]  la **Toolbar est activée**
- [ ]  les **formulaires non officiels sont autorisés**
- [ ]  le **profil avancé est désactivé**
- [ ]  la permission “Voir le profil” est accessible aux **Invités**
- [ ]  le **HTML est activé**
- [ ]  le HTML non protégé est **autorisé pour tous les membres**

Si tous les éléments sont validés, vous pouvez passer à l’installation du thème.

## Configuration détaillée

### Version du forum

Le choix de version d’un forum se fait à sa création. Forumactif recommande la version ModernBB, plus adaptée aux nouveaux besoins du web et plus modulaires : c’est pourquoi le Blank se repose sur cette version. 

Assurez-vous que votre forum utilise la bonne version ou modifiez-la si nécessaire :

- `Affichage → Thèmes → Choisir un thème → Version`
    - Changer de version : ****ModernBB**

<aside>
<img src="/icons/report_orange.svg" alt="/icons/report_orange.svg" width="40px" />

### Changer de version

Il est possible de changer la version de son forum après sa création. Attention : ce changement opère une réinitialisation complète des templates et du CSS. Pensez à sauvegarder vos modifications avant toute manipulation.

</aside>

### **Réglages du CSS**

Désactivez le CSS de base afin de retirer le thème par défaut de Forumactif.

- `Affichage → Images et Couleurs → CSS principal → Options du CSS` (en bas de la page) :
    - *Désactiver le CSS de base* : **Oui**
    - *Optimiser votre CSS* : **Non**

### **Utilisation du javascript**

Activez la gestion des codes JavaScript afin d’ajouter les fonctionnalités du Blank.

- `Modules → HTML & Javascript → Gestion des codes Javascript`
    - *Activer la gestion des codes Javascript* : **Oui**.

### **Affichage du forum**

Paramétrez la structure et l’affichage des informations principales du forum.

- `Affichage → Page d'accueil → Généralités`
    - *Afficher les membres connectés ces xx dernières heures* : **Oui** (vous pouvez changer la durée)
- `Affichage → Page d'accueil → Structure et hiérarchie`
    - Niveau de compression de l'index : Choisisez *Séparer les catégories sur l'index : Moyen*
    - Hiérarchie :
        - *Afficher le titre du dernier message* : **Oui**
        - *Afficher les avatars du dernier message* : **Oui**
        - *Afficher les liens vers les sous-forums* : **Oui**
        - *Afficher les modérateurs d'un forum* : **Non**
- `Général → Messages et Emails → Configuration`
    - *Afficher la description des sujets* à **Oui**

### **Affichage des profils**

Paramétrez la structure des profils et leurs permissions d’accès. Il existe deux structures de profils dans forum. Seule la version “profil simple” est personnalisée pour le Blank.

- `Utilisateurs & Groupes → Profils → Options générales`
    - *Voir le profil avancé* : **Non**
- `Utilisateurs & Groupes → Permissions spéciales`
    - *Voir le profil* : **Invités**.

<aside>
<img src="/icons/info-alternate_blue.svg" alt="/icons/info-alternate_blue.svg" width="40px" />

Cette configuration est nécessaire pour assurer le bon fonctionnement :

- de l’affichage des avatars dans le Hub (QEEL modernisé)
- de la visionneuse de profil Wombat
</aside>

### Toolbar

Activez la toolbar pour bénéficier du système de notifications. Elle sera ensuite masquée par le CSS. Le plugin Notiffi sert de remplacement.

- `Modules → Toolbar → Configuration`
    - *Activer la toolbar* : **Oui**

### Formulaires non-officiels

Autorisez l’utilisation des formulaires non-officiels sur le forum. Cette option est essentielle pour le bon fonctionnement de certains plugins comme Switcheroo et Notiffi.

- `Général → Forum → Sécurité`
    - *Interdire les formulaires non officiels à poster des messages et messages privés sur le forum* : **Non**

### **HTML**

Activez le HTML dans les messages pour utiliser les mises en page personnalisées (annexes, fiches, …).

- `Général → Messages et Emails → Configuration`
    - *Autoriser le HTML* : **Oui**
    - *Autoriser le HTML non protégé* : **Tous les membres**

<aside>
<img src="/icons/report_orange.svg" alt="/icons/report_orange.svg" width="40px" />

Les utilisateurs inscrits avant l’activation du HTML devront modifier manuellement ce paramètre dans leurs préférences de profil.

</aside>