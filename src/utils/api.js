const apiKey = 'e99b7f8400e6424280d0d9b8a539099b';
const query = 'weather';
const fromDate = '2024-06-01'; // Start from an earlier date

export const getNewsData = async (query) => {
    const url = `https://newsapi.org/v2/everything?q=${query}&from=${fromDate}&sortBy=popularity&apiKey=${apiKey}`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('Response data:', data);
        if (data.totalResults === 0) {
            console.warn('No articles found for the given query and date range.');
        }
        return data;
    } catch (err) {
        console.error('Fetch error:', err);
        return err;
    }
}
