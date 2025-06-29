<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    $: ageData = data?.ageData;
    $: name = ageData?.name;
    $: age = ageData?.age;
    $: count = ageData?.count;
</script>

<div class="result-container">
    {#if ageData}
        {#if age !== null}
            <div class="result-card">
                <h2>A idade de {name} é:</h2>
                <p class="age">{age} anos</p>
            </div>
        {:else}
            <div class="no-result-card">
                <h2>Não foi possível advinhar a idade</h2>
                <p>O nome "{name}" não foi encontrado.</p>
            </div>
        {/if}
    {:else}
        <div class="empty-result">
            <div class="empty-result-icon">✨</div>
            <h2>Hm... Parece que você ainda não digitou um nome</h2>
            <p>Digite um nome acima para que possamos advinhar a idade!</p>
        </div>
    {/if}
</div>

<style>
    .result-container {
        width: 100%;
	}

    .result-card, .empty-result, .no-result-card{
        border-radius: 20px;
		padding: 2rem;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		text-align: center;
		max-width: 100%;
		width: 100%;
    }

    .empty-result-icon{
        font-size: 3rem;
		margin-bottom: 1rem;
    }

    .empty-result p{
        color: #666;
    }

    .age{
        font-size: 3rem;
		line-height: 1.6;
		color: #bcadca;
        font-weight: bold;
        margin: 1rem 0;
    }

    .result-card h2{
        color: #333;
        margin-bottom: 1rem;
    }

    .no-result-card h2{
        color: #e74c3c;
        margin-bottom: 1rem;
    }

    .no-result-card p{
        color: #666;
    }
</style>