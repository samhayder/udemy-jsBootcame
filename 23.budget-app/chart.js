const chart = document.querySelector('.chart');
const canvas = document.createElement('canvas');

// Dimension
canvas.height = 150;
canvas.width = 150;

chart.appendChild(canvas);

const ctx = canvas.getContext('2d');

ctx.lineWidth = 10;

const radius = 50;

// Draw Circle function
function drawCircle(color, ratio, antiClockWise) {
   ctx.strokeStyle = color;
   ctx.beginPath();
   ctx.arc(80, 65, radius, 0, ratio * Math.PI * 2, antiClockWise);
   ctx.stroke();
}

// Updating Chart function
function updateChart(income, expense) {
   ctx.clearRect(0, 0, ctx.width, ctx.height);

   let ratio = income / (income + expense);

   drawCircle('aqua', -ratio, true);
   drawCircle('tomato', 1 - ratio, false);
}

