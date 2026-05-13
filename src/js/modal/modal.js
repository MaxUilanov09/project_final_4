import { getEvents, getEventData } from "../api.js";

const modal = document.getElementById("modal");

const modalImage = document.getElementById("modal-image");

const modalSmallImage = document.getElementById("modal-small-image");

const modalDate = document.getElementById("modal-date");

const modalDescription = document.getElementById("modal-description");

const modalLink = document.getElementById("modal-link");

const modalWho = document.getElementById("modal-who");

const modalWhere = document.getElementById("modal-where");

const standardTicket = document.getElementById("standard-ticket");

const vipTicket = document.getElementById("vip-ticket");

const closeBtn = document.querySelector(".modal-close");

function fillModal(data) {
  const event = getEventData(data)[0];
  
  const image =
    event.images.toSorted((a, b) => Math.abs(700 - a.height) - Math.abs(700 - b.height))[0].url ||
    event.images?.find((img) => img.ratio === "4_3")?.url ||
    event.images?.[0]?.url ||
    "";

  modalImage.src = image;

  modalSmallImage.src = image;

  modalDescription.textContent =
    event.info || "Information about this event is not available.";

  modalDate.textContent = `${event.dates?.start?.localDate || ""} 
     ${event.dates?.start?.localTime || ""}`;

  modalWho.textContent =
    event._embedded?.attractions?.[0]?.name || "Unknown artist";

  modalWhere.textContent = `${event._embedded?.venues?.[0]?.city?.name || ""}
     ${event._embedded?.venues?.[0]?.country?.name || ""}`;

  modalLink.href = event.url || "#";

  standardTicket.href = event.url || "#";

  vipTicket.href = event.url || "#";

  modal.style.display = "flex";

  document.body.style.overflow = "hidden";
}

document.querySelector(".event__card__list").addEventListener("click", (e) => {
  const card = e.target.closest(".event__card");

  if (!card) return;

  getEvents({ id: card.dataset.id })
    .then((data) => fillModal(data))
    .catch((err) => console.log(err));
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";

  document.body.style.overflow = "auto";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";

    document.body.style.overflow = "auto";
  }
});
