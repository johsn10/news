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
    hr {
        border-top: 1px solid rgb(20, 20, 20);
        margin-block: 5rem;
    }
</style>

<div>
    <h1 class="title">{article.title}</h1>
    <hr>
    <SvelteMarkdown source={article.body}></SvelteMarkdown>
</div>