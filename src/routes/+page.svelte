<script lang="ts">
    import ArticlePreview from "../components/article/ArticlePreview.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        height: 100%;
    }
</style>

<main>
    {#each data.articles as article}
        <ArticlePreview article={article}></ArticlePreview>
    {/each}
</main>