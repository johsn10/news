<script lang="ts">
    import type { ArticleProps } from "../types/ArticleProps";
    export let props: ArticleProps;
</script>

<h1>{props.title}</h1>
<p>{props.body}</p>
<enhanced:img src="{props.imageUrl}"></enhanced:img>