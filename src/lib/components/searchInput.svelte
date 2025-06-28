<script>
    export let name = ''
</script>

<div class="search-input">
    <input 
        type="text" 
        placeholder="Digite um nome..." 
        bind:value={name}
        on:input={handleInput}
    />
    <button>🔍</button>
</div>

<style>
.search-input {
    position: relative;
    background: white;
    border-radius: 50px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

input{
    width: 100%;
    padding: 1.2rem 3rem 1.2rem 1.5rem;
    border: none;
    outline: none;
    font-size: 1.1rem;
    background: transparent;
}

input::placeholder{
    color: #999;
}

button{
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    opacity: 0.6;
    background: none;
    border: none;
}

button:hover{
    opacity: 0.8;
    cursor: pointer;
    font-size: 1.3rem;
}
</style>