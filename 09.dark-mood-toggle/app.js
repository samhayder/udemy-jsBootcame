/* DOM */
let htmlElement = document.documentElement;
const toggleBtn = document.querySelector('input[name="theme"');

toggleBtn.addEventListener('click', () => {
   if (toggleBtn.checked) {
      htmlElement.classList.toggle('transition');
      htmlElement.setAttribute('data-theme', 'dark');
   } else {
      htmlElement.classList.toggle('transition');
      htmlElement.setAttribute('data-theme', 'light');
   }
})