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


<!-- SWITCHEROO plugins -->

<!-- Plugin main bar, where the magic happens. Some values can be edited. -->
<nav id="switcheroo" class="switcheroo" direction="vertical" position="top"></nav>

<!-- Monomer.js and Switcheroo.js -->
<script src="https://cdn.jsdelivr.net/gh/caezd/switcheroo@master/monomer.js"></script>
<script src="https://cdn.jsdelivr.net/gh/caezd/switcheroo@master/switcheroo.js"></script>

<!-- Script to boot the plugin -->
<script>
(function() {
    new Switcheroo('#switcheroo', {
        logo: '<i class="bi bi-house-door-fill"></i>', /* accepts html, allows a logo redirecting to the forum homepage to be displayed */
        confirm: true, /* prompts for a confirmation before switching accounts */
        confirmMsg: 'Confirm character Switcheroo?', /* message displayed during the switch */
        explore: false, /* allows a link redirecting to the memberlist ("Discord-style") to be displayed vers la liste des membres */
        exploreIcon: '<i class="material-icons">group</i>', /* accepts html, memberlist link icon */
        deleteIcon: '×', /* accepts html, icon to delete a linked account */
        addIcon: '+', /* accepts html, icon to open the login and pairing form */
        errorMsg: 'An error has occured during the Switcheroo.',
    });
})();
</script>



</body>
</html>
            