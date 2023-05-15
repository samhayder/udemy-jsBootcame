/* DOM */
let blockElement = document.querySelector('.block');
let verticalPosition = document.querySelector('#vertical');
let horizontalPosition = document.querySelector('#horizontal');
let sizeChange = document.querySelector('#size');
let okBtn = document.querySelector('.shape_btn');
let rgbaInputs = document.querySelectorAll('.rgba input');

/* Block position changer by vertical mode */
verticalPosition.addEventListener('change', () => {
   blockElement.style.top= verticalPosition.value + "vh";
   console.log(verticalPosition.value);
})

/* Block position changer by horizontal mode */
horizontalPosition.addEventListener('change', () => {
   blockElement.style.left = horizontalPosition.value + 'vw';
})

/* Size Changer */
sizeChange.addEventListener('change', () => {
   blockElement.style.transform = "scale("+sizeChange.value+")";
})

/* Shape Selector */
okBtn.addEventListener('click', () => {
   let shapeSelector = document.querySelector('#shape_select');
   let shapeOption = shapeSelector.value;

   if (shapeOption === '1') {
      blockElement.style.borderRadius = '0'
   } else if (shapeOption === '2') {
      blockElement.style.borderRadius = '50%'
   }
})

/* Background color changer */
rgbaInputs.forEach((input) => {
   input.addEventListener('change', () => {
      let red = document.querySelector('#red');
      let green = document.querySelector('#green');
      let blue = document.querySelector('#blue');
      let alfa = document.querySelector('#alfa');

      blockElement.style.backgroundColor = `rgba(${red.value}, ${green.value}, ${blue.value}, ${alfa.value})`
   })
})