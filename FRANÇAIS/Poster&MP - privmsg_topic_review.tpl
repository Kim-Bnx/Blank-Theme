<div class="wrapped">
  
    <!-- BEGIN switch_inline_mode -->
    <h2>{L_TOPIC_REVIEW}</h2>
    <!-- END switch_inline_mode -->

    <!-- Affichage d'un message simplifié -->
    <!-- BEGIN postrow -->
    <div class="panel {postrow.ROW_CLASS}{postrow.CURRENT_MSG}">

        <div>
            <!-- Avatar -->
            <div class="mini_img left">{postrow.POSTER_AVATAR}</div>

            <!-- Sujet par - Auteur - le - date -->
            <span class="author">{postrow.L_TOPIC_BY} {postrow.POSTER_NAME} {postrow.L_TOPIC_ON} {postrow.POST_DATE}</span>
        </div>

        <!-- Message -->
        <div class="content">{postrow.MESSAGE}</div>

    </div>
    <!-- END postrow -->

    <div class="pagination">
        {PM_PAGINATION}
    </div>
</div>

            