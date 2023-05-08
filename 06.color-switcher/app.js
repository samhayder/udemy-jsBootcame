/* Selection DOM */
const body = document.body;
const switchBtn = document.querySelector('.btn_switch');
const switchColor = document.querySelector('.color');

/* create random number for single color */
function getRandomNumber() {
   return Math.floor(Math.random() * 356);
}

/* set add event listener */
switchBtn.addEventListener('click', () => {
   let red = getRandomNumber();
   let green = getRandomNumber();
   let blue = getRandomNumber();

   const colorString = `rgb(${red}, ${green}, ${blue})`;

   body.style.backgroundColor = colorString;
   switchColor.innerText = colorString;
})