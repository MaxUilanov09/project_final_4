const modal = document.getElementById("modal");

const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");

const modalDate = document.getElementById("modal-date");
const modalDescription = document.getElementById("modal-description");

const modalLink = document.getElementById("modal-link");

const closeBtn = document.querySelector(".modal-close");


const modalWho = document.getElementById("modal-who");
const modalWhere = document.getElementById("modal-where");

document.querySelector(".card__list").addEventListener("click", (e) => {
  const card = e.target.closest(".event-card");
  if (!card) return;

  
  modalImage.src = card.dataset.image;
  modalTitle.textContent = card.dataset.title;

  
  modalDescription.textContent = card.dataset.description;

  
  modalDate.textContent = card.dataset.date;

  
  modalWho.textContent = card.dataset.title;

  
  modalWhere.textContent = card.dataset.where || "Unknown location";

  
  modalLink.href = card.dataset.link;

  modal.style.display = "flex";
});


closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
