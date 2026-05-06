const MAIN_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
const API_KEY = 'apikey=5P2eENX3jSAJ1avlQtGveA6HpNKohevi'


export function getEventData(data) {
    if (data._embedded) {
        return data._embedded.events;
    }
    return [];
}

export async function getEvents(queryOptions) {
    try {
        let path = '';
        if (queryOptions.code) {
            path += `&countryCode=${queryOptions.code}`;
        }
        if (queryOptions.query) {
            path += `&keyword=${queryOptions.query}`;
        }
        if (queryOptions.page) {
            path += `&page=${queryOptions.page}`;
        }
        if (queryOptions.id) {
            path += `&id=${queryOptions.id}`;
        }
        const res = await fetch(MAIN_URL + API_KEY + path);
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}