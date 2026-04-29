

function createCard(event) {
    return `
    <li class="event__card" data-id="${event.id}">
        <h3 class="event__title">${event.name}</h3>
        <img src="${event.images[event.images.length - 1].url}" alt="" class="event__image">
        <p class="event__date">${event.dates.start.localDate}</p>
        <p class="event__venue__location">${event._embedded.venues[0].name}</p>
    </li>
    `;
}

export function fillCardList(container, eventList) {
    container.innerHTML = '';
    for (const event of eventList) {
        container.innerHTML += createCard(event);
    }
}