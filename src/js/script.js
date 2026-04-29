import {} from './logo.js';
import { getEvents, getEventData } from './api.js';
import { fillDropdown } from './dropdown.js';
import { fillCardList } from './card.js';
import {} from './modal/modal.js';

const dropdownDiv = document.querySelector('.dropdown__content');
const eventCardList = document.querySelector('.event__card__list');


let PathOptions = {
    code: -1, 
    query: '', 
    page: 0
};

fillDropdown(dropdownDiv, PathOptions);

getEvents(PathOptions)
    .then(data => fillCardList(eventCardList, getEventData(data)))