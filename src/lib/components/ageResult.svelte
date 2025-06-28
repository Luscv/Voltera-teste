<script>
    export let age

</script>

<div class="result-container">
    {#if !name}
        {#if age}
            <div class="result-card">
                <h2>A idade de {name} é:</h2>
                <p>{age} 34</p>
            </div>
        {:else}
            <div class="loading-card">
                <div class="loading-spinner"></div>
                <p>Consultando a API...</p>
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
    .result-container{
        width: 100%;
	}

    .result-card, .empty-result, .loading-card{
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

    .result-card p{
        font-size: 2rem;
		line-height: 1.6;
		color: #333;
    }

    .loading-spinner {
		width: 40px;
		height: 40px;
		border: 4px solid #f3f3f3;
		border-top: 4px solid #667eea;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin: 0 auto 1rem;
	}

    @keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
</style>