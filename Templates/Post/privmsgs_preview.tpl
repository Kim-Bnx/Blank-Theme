<div class="container">
  <h1>{L_PREVIEW}</h1>

  <!-- Structure basé sur l'affichage d'un MP (template : privmsgs_read_body) -->
  <div class="message">
    <div class="message_infos">
      <span>{L_FROM} {MESSAGE_FROM} {L_TO} {MESSAGE_TO}, {POST_DATE}</span>
    </div>
    <div class="message_profil">
      <img class="avatar-preview" />
      <br />
      <a class="message_from"></a>
    </div>
    <div class="message_content postbody content">
      {MESSAGE_NEW}
    </div>
  </div>

</div>

<!-- Permet de simuler le profil du membre dans le bloc de prévisualisation -->
<script>
  const betterPreview = Blanket("Better Preview", function ({ get, getGroupColor, getUsername, getAvatar, ready }) {
    function init() {
      get(".avatar-preview").src = getAvatar();
      const pseudo = get(".message_from");
      pseudo.innerHTML = getUsername();
      pseudo.style.color = "#" + getGroupColor();
    }

    ready(init);
    return { init };
  });
</script>