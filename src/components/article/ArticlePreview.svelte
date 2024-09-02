<script lang="ts">
    import type { ArticleProps } from "./Article";
    import { readingTime } from "reading-time-estimator";

    export let article: ArticleProps;

    let dateRaw = new Date(article.createdAt);
    
    let dateFormatted = new Intl.DateTimeFormat(["nb", "en"], {
        dateStyle: "medium",
    }).format(dateRaw);

    let timeEstimate = readingTime(article.body, 250);
</script>

<style>
    .box {
        display: flex;
        flex-direction: row;
        align-items: center;

        border-radius: 30px;
        border: 1px solid rgb(31, 31, 31);

        background-color: black;
        box-shadow: 10px 15px 8px rgba(0, 0, 0, 0.24);

        width: 60rem;
        max-width: 85%;
        margin-block: 3rem;
        padding-block: 1rem;

        text-decoration: none;
    }
    .title {
        font-size: 3rem;
    }
    .info-text {
        color: rgb(170, 170, 170);
        font-weight: 300;
        font-size: 1.2rem;
    }
    .info {
        display: flex;
        flex-direction: column;
        margin-left: 4rem;
        width: 100%;
    }

    .read-time {
        font-size: 1rem;
    }
    .author-name {
        color: rgb(220, 220, 220);
        font-weight: 600;
    }

    .image {
        width: 20rem;
        max-width: 50%;

        border-radius: 30px;
        margin: 2rem;
    }


    @media (max-width: 1000px) {
        .box {
            background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), 
            var(--image-url);
        }
        .image {
            display: none;
        }
    }
</style>

<a href={"/artikler/"+article.id} class="box" style="--image-url: url({article.imageUrl})">
        <div class="background"></div>
        <div class="info">
            <p class="info-text">
                <span class="author-name">{article.author}</span> 
                &nbsp • &nbsp {dateFormatted}
            </p>
            <h1 class="title">{article.title}</h1>
            <p class="info-text read-time">Rundt {timeEstimate.minutes}m lesetid</p>
        </div>
        <img src={article.imageUrl} alt="" class="image">
</a>
