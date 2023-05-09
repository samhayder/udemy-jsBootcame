const progressed = document.querySelector('.progressed');

setTimeout(function() {
   progressed.style.width = progressed.getAttribute('data-done') + '%';
   progressed.style.opacity = 1;
}, 500);