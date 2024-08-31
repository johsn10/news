<script lang="ts">
    import ArticlePreview from "../components/ArticlePreview.svelte";
    import type { ArticleProps } from "../types/ArticleProps";

    const imageUrl = new URL('/favicon.png', import.meta.url).href

    let article: ArticleProps =  {
        title: "Første artikkel",
        body: "Dette er hele artikkelen. ):",
        imageUrl: imageUrl,
        articleUrl: "/artikler/test"
    };
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
    <ArticlePreview article={article}></ArticlePreview>
</main>