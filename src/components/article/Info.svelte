<script>
    import { readingTime } from "reading-time-estimator";

    export let article;

    let dateRaw = new Date(article.createdAt);
    
    let dateFormatted = new Intl.DateTimeFormat(["nb", "en"], {
        dateStyle: "medium",
    }).format(dateRaw);

</script>

<style>
    .info-text {
        color: rgb(170, 170, 170);
        font-weight: 300;
        font-size: 1.2rem;
    }
    .info {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .author-name {
        color: rgb(220, 220, 220);
        font-weight: 600;
    }
</style>

<div class="info">
    <div class="info">
        <p class="info-text">
            <span class="author-name">{article.author}</span> 
            &nbsp • &nbsp {dateFormatted}
        </p>
    </div>
</div>