/* DOM */
const canvas = document.querySelector('.drawing_canvas')
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const strokeSize = document.querySelector('.size');
const colorBtn = document.querySelector('.color_plate');
const clearBtn = document.querySelector('.clear');

const ctx = canvas.getContext('2d');
console.log(ctx);

let size = 10;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

/* when mouse not click */
canvas.addEventListener('mouseup', () => {
   isPressed = false;
   x = undefined;
   y = undefined;
})

/* when mouse click */
canvas.addEventListener('mousedown', (evt) => {
   isPressed = true;
   x = evt.offsetX;
   y = evt.offsetY;
})

/* when mouse click with move */
canvas.addEventListener('mousemove', (evt) => {
   if (isPressed) {
      let x2 = evt.offsetX;
      let y2 = evt.offsetY;

      drawCircle (x2, y2);
      drawLine (x, y, x2, y2);

      x = x2;
      y = y2;
   }
})

/* Draw line */
function drawLine (x1, y1, x2, y2) {
   ctx.beginPath();
   ctx.moveTo(x1, y1);
   ctx.lineTo(x2, y2);
   ctx.strokeStyle = color;
   ctx.strokeWidth = size * 2;
   ctx.stroke();
}

/* Draw Circle */
function drawCircle (x, y) {
   ctx.beginPath();
   ctx.arc(x, y, size, 0, Math.PI * 2);
   ctx.fillStyle = color;
   ctx.fill();
}

/* increase Button */
increaseBtn.addEventListener('click', () => {
   size -= 1;

   if (size < 1) {
      size = 1;
   }

   updateSize();
})

/* decrease button */
decreaseBtn.addEventListener('click', () => {
   size += 1;

   if (size > 50) {
      size = 50;
   }

   updateSize();
})

/* change color */
colorBtn.addEventListener('change', (evt) => {
   color = evt.target.value;
})

/* clear button */
clearBtn.addEventListener('click', () => {
   ctx.clearRect(0,0, canvas.width, canvas.height);
})

/* updating size */
function updateSize () {
   strokeSize.innerText = size;
}