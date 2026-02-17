<!-- Bloc de la prévisualition -->
<!-- (basé sur la même structure que le bloc de post dans viewtopic_body) -->
<div id="preview" class="post_row">
  <div class="post_details"><strong>{L_PREVIEW}</strong></div>

  <!-- Aperçu du profil -->
  <div class="post_profile">
    <center><a class="post_pseudo"></a></center>
    <br />
    <img class="avatar-preview" />
  </div>

  <!-- Contenu du message prévisualiser -->
  <div class="post_message content">
    {MESSAGE_NEW}
  </div>
</div>

<!-- Permet de simuler le profil du membre dans le bloc de prévisualisation -->
<script>
  const betterPreview = Blanket("Better Preview", function ({ get, getGroupColor, getUsername, getAvatar, ready }) {
    function init() {
      get(".avatar-preview").src = getAvatar();
      const pseudo = get(".post_pseudo");
      pseudo.innerHTML = getUsername();
      pseudo.style.color = "#" + getGroupColor();
    }

    ready(init);
    return { init };
  });
</script>