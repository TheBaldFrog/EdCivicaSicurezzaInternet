const sleep = 2000; // milliseconds
const showModal = true;

const myModal = new bootstrap.Modal("#info-modal");
window.addEventListener('DOMContentLoaded', () => {
    if (showModal) {
        setTimeout(() => { myModal.show(); }, sleep);
    }
})