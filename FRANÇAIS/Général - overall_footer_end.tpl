<!-- BEGIN html_validation -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<body>
<div>
	<div>
		<div>
			<div>
				<div>
					<div>
						<div>
							<ul>
								<li>
<!-- END html_validation -->
								</li>
							</ul>

						</div>
					</div>
                                  
				</div>
				{PROTECT_FOOTER}
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
//<![CDATA[
	fa_endpage();
//]]>
</script>
  

<!-- Plugins SWITCHEROO -->

<!-- Barre principale du plugin, dans laquelle la magie s'opère. Certaines valeurs peuvent être modifiées. -->
<nav id="switcheroo" class="switcheroo" theme="discord" direction="vertical" position="top"></nav>
  
<!-- Monomer.js et Switcheroo.js -->
<script src="https://cdn.jsdelivr.net/gh/caezd/switcheroo@1.1-beta/monomer.js"></script>
<script src="https://cdn.jsdelivr.net/gh/caezd/switcheroo@1.1-beta/switcheroo.js"></script>

<!-- Script qui permet d'initialiser le plugin -->
<script>
(function() {
    new Switcheroo('#switcheroo', {
        logo: ' logo ', /* accepte html, permet d'afficher un logo qui retourne à l'accueil du forum */
        enableReorder: true, /* activer le drag&drop pour l'ordre des comptes (true/false) */
        updateAvatar: true, /* activer le clique droit pour charger un nouvel avatar (true/false) */
        confirm: true, /* demande une confirmation avant le changement de compte */
        deleteIcon: '×', /* accepte html, icone pour supprimer un compte lié */
        addIcon: '+', /* accepte html, icone qui ouvre le formulaire de connexion et d'association */
    },
    {
        button: {
            add: "Associer un personnage",
        },
        msg: {
            error: "Une erreur est surviendu lors du Switcheroo.",
            confirm: "Confirmer le Switcheroo de personnage ?",
        },
        modal: {
            password_label: "Mot de passe",
            username_label: "Nom d'utilisateur",
            login_button: "Connexion",
        }
    });
})();
</script>

</body>
</html>
            