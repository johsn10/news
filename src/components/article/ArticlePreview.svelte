<script lang="ts">
    import type { ArticleProps } from "./Article";
    import { readingTime } from "reading-time-estimator";
    import Info from "./Info.svelte";

    export let article: ArticleProps;
    let timeEstimate = readingTime(article.body, 250);
</script>

<style>
    .box {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        border-radius: 30px;
        border: 1px solid rgb(31, 31, 31);

        background-color: black;
        box-shadow: 10px 15px 8px rgba(0, 0, 0, 0.24);

        width: 65rem;
        max-width: 85%;
        margin-block: 3rem;
        padding-block: 1rem;

        text-decoration: none;
    }
    .title {
        font-size: 3rem;
        margin-top: 1rem;
        margin-bottom:7rem;
    }

    .image {
        position: absolute;
        width: 100%;
        height: auto;

        border-radius: 30px;

        transform: translate(0, -50%);
    }
    .main-image {
        z-index: 1;
    }
    .blur {
        filter: blur(25px);
    }
    .image-container {
        position: relative;
        width: 35rem;
        height: auto;
        margin-block: 20%;
        margin-inline: 1rem;
    }

    .read-time {
        font-size: 1rem;
    }

    .text-container {
        margin-left: 0rem;
    }

    @media (max-width: 1200px) {
        .box {
            background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), 
            var(--image-url);
            justify-content: left;
        }
        .title {
            font-size: 2rem;
        }
        .image-container {
            display: none;
        }
        .text-container {
            margin-left: 3rem;
        }
    }
</style>

<a href={"/artikler/"+article.id} class="box" style="--image-url: url({article.imageUrl})">
    <div class="background"/>
    <div class="text-container">
        <Info {article}></Info>
        <h1 class="title">{article.title}</h1>
        <p class="info-text read-time">Rundt {timeEstimate.minutes}m lesetid</p>
    </div>

    <div class="image-container">
        <img src={article.imageUrl} alt="" class="image main-image">
        <img src={article.imageUrl} alt="" class="image blur">
    </div>
</a>
