
import {} from './logo.js';
import { getEvents, getEventData } from './api.js';
import { fillDropdown } from './dropdown.js';
import { fillCardList } from './card.js';
import {} from './modal/modal.js';

const dropdownDiv = document.querySelector('.dropdown__content');
const eventCardList = document.querySelector('.event__card__list');
const inputQuery = document.querySelector('.input__query');
const inputCountry = document.querySelector('.input__country');


let PathOptions = {
    code: -1, 
    query: '', 
    page: 0
};

fillDropdown('', dropdownDiv, PathOptions);

function fillEvents() {
    getEvents(PathOptions)
        .then(data => fillCardList(eventCardList, getEventData(data)));
}

fillEvents();

inputCountry.addEventListener('keyup', () => {
    fillDropdown(inputCountry.value, dropdownDiv, PathOptions);
})

inputQuery.addEventListener('keyup', () => {
    PathOptions.query = inputQuery.value;
    fillEvents();
})

addEventListener('keydown', (ev) => {
    if (ev.key === 'q') {
        console.log('PathOptions:', PathOptions);
    }
})

addEventListener('click', () => {
    if (document.querySelector('.dataDiv').dataset.searchFlag === 'yes') {
        document.querySelector('.dataDiv').dataset.searchFlag = 'no'
        fillEvents();
    }
})