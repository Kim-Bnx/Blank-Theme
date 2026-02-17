<div class="container">
  <h1 class="page-title">{L_USERGROUPS}</h1>
  <!-- BEGIN switch_groups_joined -->
  <!-- BEGIN switch_groups_member -->
  <div class="panel">
    <h2 class="h3">{L_GROUP_MEMBERSHIP_DETAILS}</h2>
    <fieldset>
      <dl>
        <dt><label>{L_YOU_BELONG_GROUPS}</label></dt>
        <dd>{GROUP_MEMBER_SELECT_NEW}</dd>
      </dl>
    </fieldset>
  </div>
  <!-- END switch_groups_member -->

  <!-- BEGIN switch_groups_pending -->
  <div class="panel">
    <fieldset>
      <dl>
        <dt><label>{L_PENDING_GROUPS}</label></dt>
        <dd>{GROUP_PENDING_SELECT_NEW}</dd>
      </dl>
    </fieldset>
  </div>
  <!-- END switch_groups_pending -->
  <!-- END switch_groups_joined -->

  <!-- BEGIN switch_groups_remaining -->
  <div class="panel ">
    <h2 class="h3">{L_JOIN_A_GROUP}</h2>
    <form action="{U_USERGROUP_ACTION}" method="get">
      <fieldset>
        <dl>
          <dt><label>{L_SELECT_A_GROUP}</label></dt>
          <dd>{GROUP_LIST_SELECT}&nbsp;<input class="button2" type="submit"
              value="{L_VIEW_INFORMATION}" />{S_HIDDEN_FIELDS}</dd>
        </dl>
      </fieldset>
    </form>
  </div>
  <!-- END switch_groups_remaining -->

  <!-- BEGIN switch_display_groups_all -->
  <div class="panel">
    <h2 class="h3">{switch_display_groups_all.L_ALL_GROUPS}</h2>
    <fieldset>
      <dl>
        <dt><label>{switch_display_groups_all.L_LIST_ALL_GROUPS}</label></dt>
        <dd>
          <ul class="group_list noList">
            <!-- BEGIN group_details -->
            <li>
              <a href="{switch_display_groups_all.group_details.U_GROUP}"
                {switch_display_groups_all.group_details.GROUP_STYLE}>
                {switch_display_groups_all.group_details.GROUP_NAME}
              </a>
              <div style="display: flex; justify-content: space-between">
                <span>{switch_display_groups_all.group_details.GROUP_STATUS}
                  {switch_display_groups_all.group_details.NB_GROUP_MEMBERS}</span>
                <span class="groupVar"></span>
              </div>

              <hr>
            </li>
            <!-- END group_details -->
          </ul>
        </dd>
      </dl>
    </fieldset>
  </div>
  <!-- END switch_display_groups_all -->

</div>

<div class="container wrapped variables-infos" hidden>
  <h3 class="center"><i class="bi bi-question-circle"></i> Variables de groupe pour le hub</h3>

  <div class="panel">
    <p><strong>Comment m'en servir ?</strong><br />
      Copiez/coller chaque variable entre [ ] dans le template index_body, à l’endroit où se trouve votre bloc du
      hub.<br />
      Chaque variable doit porter le nom du groupe correspondant sans majuscule, caractères spéciaux et des espaces
      remplacés par des tirets.
      C’est ce qui permet d’afficher correctement le nombre de membres de chaque groupe.
    </p>
    <p><strong>Pourquoi j'en vois sur cette page ?</strong><br />
      Rassurez-vous, seules les personnes avec des droits d'administrateur peuvent voir ces variables.<br />
      Elles sont générées sur cette page pour vous faciliter la tâche et cela réduit les risques de fautes de frappe ou
      les oublis.
    </p>
    <p>
  </div>
</div>

<style>
  .groupVar {
    background: var(--neutralDark);
    border-radius: 3px;
    font-size: 11px;
    padding: 3px 5px;

    &:empty {
      display: none
    }
  }
</style>

<script>
  const HubGroup = Blanket("Hub Group", function ({ get, getAll, ready, isConnected }) {
    function init() {
      if (!isConnected()) return;
      if (!Hub) return;

      get(".variables-infos").removeAttribute("hidden");

      const groups = getAll(".group_list li:has(a[style])");
      groups.forEach((group) => {
        const groupName = get("a[style]", group).textContent;
        let slug = groupName.toLowerCase().trim();
        slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim();
        slug = slug.replace(/[\s-]+/g, "-");

        get(".groupVar", group).textContent = "[GRP_COUNT." + slug + "]";
      });
    }

    ready(init);
    return { init };

  });
</script>