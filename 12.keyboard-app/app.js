/* DOM */
const keys = document.querySelectorAll('.keys');
let textArea = document.querySelector('.display textarea');

keys.forEach((key) => {
   key.addEventListener('click', (evt) => {
      if (!evt.target.value) return;

      let keyValue = evt.target.value.toLowerCase();
      textArea.value += keyValue;
   })
})
