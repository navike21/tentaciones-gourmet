const openModal = () => {
  const modal = document.getElementsByClassName("modal")[0];
  modal.classList.add("modal-open");
};

const closeModal = () => {
  const modal = document.getElementsByClassName("modal")[0];
  modal.classList.remove("modal-open");
};

const pedir = document.getElementsByClassName("pedir")[0];
const closeModalBtn = document.getElementsByClassName("modal__close")[0];
if (pedir) {
  pedir.onclick = openModal;
}
if (closeModalBtn) {
  closeModalBtn.onclick = closeModal;
}
