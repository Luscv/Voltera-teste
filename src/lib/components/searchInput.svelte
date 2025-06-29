<script>
    import { goto } from '$app/navigation';
    import { debounce } from '$lib/utils/debounce.js';
    import { page } from '$app/stores';
    
    let name = '';
    const DEBOUNCE_DELAY = 800;
    
    $: if ($page.url.searchParams.get('name')) {
        name = $page.url.searchParams.get('name');
    }
    
    const search = debounce((searchName) => {
        if (searchName.trim() === '') {
            goto('?', { replaceState: true });
        } else {
            goto(`?name=${encodeURIComponent(searchName.trim())}`, { replaceState: true });
        }
    }, DEBOUNCE_DELAY);
    
    function handleInput(event) {
        const value = event.target.value;
        name = value;
        search(value);
    }
</script>

<div class="search-input">
    <input 
        type="text" 
        placeholder="Digite um nome..." 
        bind:value={name}
        on:input={handleInput}
        aria-label="Nome para estimar idade"
        autocomplete="off"
    />
    <div class="search-icon">🔍</div>
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

.search-input:focus-within {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
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

.search-icon{
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    opacity: 0.6;
    pointer-events: none;
}
</style>