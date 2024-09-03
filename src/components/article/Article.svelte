<script lang="ts">
    import type { ArticleProps } from "./Article";
    import SvelteMarkdown from "svelte-markdown";

    export let article: ArticleProps;
</script>

<style>
    .title {
        text-align: center;
        font-size: 3rem;
    }
    .md-container :global(p) {
        color: rgb(150, 150, 150);
        font-size: 1.2rem;
    }
    .md-container {
        width: 50rem;
        max-width: 80vw;
    }
    .image {
        width: 70vw;
        margin-block: 4rem;
        border-radius: 1rem;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
</style>

<div class="container">
    <h1 class="title">{article.title}</h1>
    <img src={article.imageUrl} alt="" class="image"/>
    <div class="md-container">
        <SvelteMarkdown source={article.body}></SvelteMarkdown>
    </div>
</div>