//DOM Element
const moreBtn = document.querySelector('.btn_more');
const closeBtn = document.querySelector('.btn_close');
const modalContainer = document.querySelector('.modal_container');

moreBtn.addEventListener('click', () => {
   modalContainer.classList.add('show');
})

closeBtn.addEventListener('click', () => {
   modalContainer.classList.remove('show');
})