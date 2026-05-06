

function createCard(event) {
    return `
    <li class="event__card" data-id="${event.id}">
        <img src="${event.images[event.images.length - 1].url}" alt="" class="event__image">
        <h3 class="event__title">${event.name}</h3>
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
    if (eventList.length === 0) {
        container.innerHTML += '<span>No events found</span>';
    }
}

const eventCardListStyle = document.querySelector('.event__card__list').style;


const list_linear_coeff = 0.00227248;
const list_constant_coeff = 1.16686;

function getCardColNum() {
    const windowWidth = window.innerWidth;
    return Math.floor(list_linear_coeff * windowWidth + list_constant_coeff);
}

eventCardListStyle.setProperty('--col-num', getCardColNum());

addEventListener('resize', () => {
    eventCardListStyle.setProperty('--col-num', getCardColNum());
});