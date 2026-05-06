import { getEvents, getEventData } from "../api.js";

const modal = document.getElementById("modal");

const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDate = document.getElementById("modal-date");
const modalDescription = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");
const modalWho = document.getElementById("modal-who");
const modalWhere = document.getElementById("modal-where");

const closeBtn = document.querySelector(".modal-close");

function fillModal(data) {
  const event = getEventData(data)[0];

  modalImage.src = event.images?.[0]?.url || "";
  modalTitle.textContent = event.name || "";

  modalDescription.textContent = event.info || "";
  modalDate.textContent =
    (event.dates?.start?.localDate || "") +
    " " +
    (event.dates?.start?.localTime || "");

  modalWho.textContent = event._embedded?.attractions?.[0]?.name || "";

  modalWhere.textContent =
    (event._embedded?.venues?.[0]?.city?.name || "") +
    ", " +
    (event._embedded?.venues?.[0]?.country?.name || "");

  modalLink.href = event.url || "#";

  modal.style.display = "flex";
}

document.querySelector(".event__card__list").addEventListener("click", (e) => {
  const card = e.target.closest(".event__card");
  if (!card) return;

  getEvents({ id: card.dataset.id }).then((data) => fillModal(data));
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
