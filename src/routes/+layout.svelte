<script>
    
</script>

<style lang="css">
    :global(body) {
        background-color: black;
        color: white;
        padding: 0%;
        margin: 0%;

        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }  

    :global(a) {
        color: white;
        font-weight: bold;
    }

    nav {
        display: flex;
        flex-direction: row;

        padding-inline: 3rem;
        padding-block: 2rem;

        align-content: center;
        height: 1.5rem;
    }

    .nav-element {
        text-decoration: none;
        margin-inline: 1rem;
    }
</style>


<nav>
    <a class="nav-element home-element" href="/">skolenytt</a>
    <a class="nav-element" href="/nyheter">Nyheter</a>
    <a class="nav-element" href="/omOss">Om oss</a>
</nav>

<slot></slot>