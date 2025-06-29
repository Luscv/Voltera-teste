/** @type {import('./$types').PageLoad} */
export const load = async ({ url, fetch }) => {
    const name = url.searchParams.get('name');
    
    if (!name || name.trim() === '') {
        return { ageData: null };
    }
    
    try {
        const res = await fetch(`https://api.agify.io?name=${encodeURIComponent(name.trim())}`);
        const data = await res.json();
        return { ageData: data };
    } catch (error) {
        console.error('Error ao buscar a idade:', error);
        return { ageData: null };
    }
}