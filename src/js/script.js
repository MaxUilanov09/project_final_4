<<<<<<< HEAD
// console.log(getEvents());

import {} from "./logo.js";
import {} from "./api.js";
import {} from "./modal/modal.js";
=======
import {} from './logo.js';
import { getEvents, getEventData } from './api.js';
import { fillDropdown } from './dropdown.js';
import { fillCardList } from './card.js';
import {} from './modal/modal.js';

const dropdownDiv = document.querySelector('.dropdown__content');
const eventCardList = document.querySelector('.event__card__list');
const inputCountry = document.querySelector('.input__country');


let PathOptions = {
    code: -1, 
    query: '', 
    page: 0
};

fillDropdown('', dropdownDiv, PathOptions);

getEvents(PathOptions)
    .then(data => fillCardList(eventCardList, getEventData(data)));

inputCountry.addEventListener('keyup', () => {
    console.log(inputCountry.value);
    fillDropdown(inputCountry.value, dropdownDiv, PathOptions);
})
>>>>>>> 8cb89737378d8eb9067ebd742947a9cee7aa4d62
