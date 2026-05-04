import { getEvents, getEventData } from '../api.js';

const modal = document.getElementById("modal");

const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");

const modalDate = document.getElementById("modal-date");
const modalDescription = document.getElementById("modal-description");

const modalLink = document.getElementById("modal-link");

const closeBtn = document.querySelector(".modal-close");


const modalWho = document.getElementById("modal-who");
const modalWhere = document.getElementById("modal-where");

function fillModal(data) { // замінити:      card.dataset.  ---->.  data.
    // і поміняти image,title,description,date... на правильні
    // щоб дізнатися правильні запусти і подивися на обʼєкт у консолі
  modalImage.src = card.dataset.image;
  modalTitle.textContent = card.dataset.title;

  
  modalDescription.textContent = card.dataset.description;

  
  modalDate.textContent = card.dataset.date;

  
  modalWho.textContent = card.dataset.title;

  
  modalWhere.textContent = card.dataset.where || "Unknown location";

  
  modalLink.href = card.dataset.link;

  modal.style.display = "flex";
}

document.querySelector(".event__card__list").addEventListener("click", (e) => {
  const card = e.target.closest(".event__card");
  if (!card) return;

  getEvents({id: card.dataset.id})
    .then(data => {console.log(getEventData(data)[0]); return data;})
    .then(data => fillModal(data));
});


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
