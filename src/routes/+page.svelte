
<script>
    import '../lib/styles/global.css'
    import SearchInput from '$lib/components/searchInput.svelte'
    import AgeResult from '$lib/components/ageResult.svelte'
</script>

<svelte:head>
    <title>Teste técnico - Voltera</title>
    <meta name="description" content="Teste técnico - Voltera">
</svelte:head>


<main>
    <div class="container">
        <header>
            <h1>🧙 AgeVinhador 🔮</h1>
            <p>Digite um nome e advinharei a idade</p>
        </header>
        <div class="search-section">
            <SearchInput/>
        </div>
        <div class="result-section">
            <AgeResult/>
        </div>
    </div>
</main>

<style>
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

header{
    text-align: center;
    margin: 10px;
}

.search-section{
    margin: 40px 5px;
}

</style>