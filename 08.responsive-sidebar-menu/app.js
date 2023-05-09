/* DOM */
const toggleBtn = document.querySelector('.btn_toggle');
const mainMenu = document.querySelector('.main_menu');
const overlay = document.querySelector('.overlay');

toggleBtn.addEventListener('click', () => {
   /* add class open */
   toggleBtn.classList.toggle('open');
   mainMenu.classList.toggle('open');
   overlay.classList.toggle('open');

})