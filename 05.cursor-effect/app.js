/* Selecting DOM */
const cursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('.nav_links li a');

/* set event listener */
/* set mouse cursor moving top and left */
window.addEventListener('mousemove', (e) => {
   cursor.style.top = e.pageY + 'px';
   cursor.style.left = e.pageX + 'px';
});

/* add cursor links class */
navLinks.forEach((link) => {
   link.addEventListener('mouseover', () => {
      cursor.classList.add('link_grow');
      link.classList.add('hovered_link');
   })
});

/* remove cursor links class */
navLinks.forEach((link) => {
   link.addEventListener('mouseout', () => {
      cursor.classList.remove('link_grow');
      link.classList.remove('hovered_link');
   })
})