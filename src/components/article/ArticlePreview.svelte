<script lang="ts">
    import type { ArticleProps } from "./Article";

    export let article: ArticleProps;

    let dateRaw = new Date(article.createdAt);
    
    let dateFormatted = new Intl.DateTimeFormat(["nb", "en"], {
        dateStyle: "medium",
    }).format(dateRaw);
</script>

<style>
    .box {
        display: flex;
        flex-direction: column;
        align-items: center;

        border-radius: 10px;
        background-color: rgb(40, 40, 40);
        box-shadow: 10px 15px 8px rgba(0, 0, 0, 0.24);

        width: 50rem;
        max-width: 85%;
        margin-block: 3rem;
        padding-block: 1rem;

        text-decoration: none;
    }
    .title {
        font-size: 3.5rem;
    }
    .info-text {
        color: rgb(170, 170, 170);
        margin-inline: 2rem;
        font-weight: 300;
    }
    .info {
        display: flex;
        flex-direction: row;
        
        width: 100%;
        
    }
</style>

<a href={"/artikler/"+article.id} class="box">
    <h1 class="title">{article.title}</h1>
    <div class="info">
        <p class="info-text">Forfatter: {article.author}</p>
        <p class="info-text">Skrevet: {dateFormatted}</p>
    </div>
</a>
