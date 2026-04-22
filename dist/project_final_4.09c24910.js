const MAIN_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=5P2eENX3jSAJ1avlQtGveA6HpNKohevi';
async function getEvents(id = -1, suffixes = [], options = {}) {
    try {
        let path = id === -1 ? '' : `/${id}`;
        const res = await fetch(MAIN_URL + path, options);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
console.log(getEvents());

//# sourceMappingURL=project_final_4.09c24910.js.map
