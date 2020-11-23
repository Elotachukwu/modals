const myModal = document.querySelector("#my-modal");
const modalBtn = document.querySelector(".modal-btn")
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".btn");
const container = document.querySelector(".content")

container.addEventListener("mouseover", openModal)

// modalBtn.addEventListener("click", openModal);

function openModal() {
  myModal.style.display = "block"
}

closeBtn.addEventListener("click", closeModal);
function closeModal() {
  myModal.style.display = "none";
}