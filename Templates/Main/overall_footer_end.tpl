<!-- BEGIN html_validation -->
<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

  <body>
    <div>
      <div><!-- END html_validation --></div>{PROTECT_FOOTER}
    </div>
    <script type="text/javascript">
      //<![CDATA[fa_endpage();//]]>
    </script>

    <!------------------------------------>
    <!-- IMPORTATION DES PLUGINS --------->

    <!-- POTION (Nécessaire pour Notiffi) -->
    <script src="https://cdn.jsdelivr.net/npm/@poumon/potion@latest/potion.min.js"></script>


    <!-- WOMBAT -->
    <script src="https://cdn.jsdelivr.net/gh/caezd/wombat/dist/wombat.min.js"></script>
    <script>
      new Wombat({
        afterLoad: function (aside, overlay) {
          /* Personnalisation des champs de contact du profil */
          try { BetterContact.init(); }
          catch { console.log("⚠️ Erreur profils Wombat : Il manque le script de personnalisation des champs de contact") };

          /* D'autres scripts peuvent être ajoutés en plus de celui là !*/
        }
      });
    </script>


    <!-- SWITCHEROO -->
    <script src="https://cdn.jsdelivr.net/gh/caezd/switcheroo@1.1-beta/monomer.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/caezd/switcheroo@1.1-beta/switcheroo.js"></script>
    <script>
      (function () {
        new Switcheroo('#switcheroo', {
          logo: '', /* accepte html, permet d'afficher un logo qui retourne à l'accueil du forum */
          enableReorder: true, /* activer le drag and drop pour l'ordre des comptes (true/false) */
          updateAvatar: true, /* activer le clique droit pour charger un nouvel avatar (true/false) */
          confirm: true, /* demande une confirmation avant le changement de compte */
          confirmMsg: 'Confirmer le Switcheroo de personnage ?', /* le message affiché lors de la confirmation */
          deleteIcon: '×', /* accepte html, icone pour supprimer un compte lié */
          addIcon: '<i class="bi bi-plus"></i>', /* accepte html, icone qui ouvre le formulaire de connexion et d'association */
          errorMsg: 'Une erreur est surviendue lors du Switcheroo.',
        });
      })();
    </script>


    <!-- NOTIFFI -->
    <script src="https://cdn.jsdelivr.net/gh/Kim-Bnx/Notiffi@main/notiffi/notiffi.min.js"></script>
    <script>Notiffi.init()</script>


  </body>

</html>