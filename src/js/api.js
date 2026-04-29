const MAIN_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
const API_KEY = 'apikey=5P2eENX3jSAJ1avlQtGveA6HpNKohevi'


export function getEventData(data) {
    return data._embedded.events;
}

export async function getEvents(queryOptions) {
    try {
        let path = '';
        if (queryOptions.code !== -1) {
            path += `&countryCode=${queryOptions.code}`;
        }
        if (queryOptions.query !== '') {
            path += `&keyword=${queryOptions.query}`;
        }
        if (queryOptions.page !== 0) {
            path += `&page=${queryOptions.page}`;
        }
        const res = await fetch(MAIN_URL + API_KEY + path);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}