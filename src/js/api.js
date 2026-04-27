const MAIN_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
const API_KEY = 'apikey=5P2eENX3jSAJ1avlQtGveA6HpNKohevi'


async function getEvents(queryOptions = []) {
    try {
        let path = '';
        const res = await fetch(MAIN_URL + API_KEY + path);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}