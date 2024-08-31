<style lang="css">
    :global(body) {
        background-color: rgb(18, 18, 18);
        color: white;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        padding: 0%;
        margin: 0%;
    }

    :global(a) {
        color: white;
        font-weight: bold;
    }

    nav {
        display: flex;
        flex-direction: row;

        border-bottom: 1px solid;
        border-color: white;

        padding-inline: 3rem;
        padding-block: 2rem;

        align-content: center;
        height: 1.5rem;
    }

    .nav-element {
        border-radius: 0.3rem;
        text-decoration: none;
        margin-inline: 1rem;
    }
</style>


<nav>
    <a class="nav-element" href="/nyheter">Nyheter</a>
    <a class="nav-element" href="/omOss">Om oss</a>
</nav>

<slot></slot>