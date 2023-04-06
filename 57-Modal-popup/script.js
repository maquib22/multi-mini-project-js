const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const btn = document.querySelector('.btn');
const close = document.querySelector('.close');


btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function openModal(e) {
    e.preventDefault()
    modal.style.display = "block"
}

function closeModal() {
    modalContent.classList.add('slide-up');
    setTimeout(() => {
        modalContent.classList.remove('slide-up');
        modal.style.display = "none";

    },500)
}