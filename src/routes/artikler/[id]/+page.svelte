<script lang="ts">
    import Article from "$components/article/Article.svelte";
    import type { PageData } from "./$types";
    
    export let data: PageData;
</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
</style>

<main>
    <Article article={data.article}></Article>
</main>