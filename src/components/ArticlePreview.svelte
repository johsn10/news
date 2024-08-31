<script lang="ts">
    import type { ArticleProps } from "../types/ArticleProps";

    export let article: ArticleProps;
</script>

<style>
    .box {
        display: flex;
        flex-direction: column;
        align-items: center;

        border-radius: 20px;
        background-color: rgb(40, 40, 40);
        box-shadow: 10px 15px 8px rgba(0, 0, 0, 0.24);

        width: 50rem;
        max-width: 85%;
        margin-block: 3rem;
        padding-block: 1rem;

        text-decoration: none;
    }
</style>

<a href={article.articleUrl} class="box">
    <img src={article.imageUrl}/ alt={article.title}>
    <h1 class="title">{article.title}</h1>
</a>
