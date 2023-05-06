//Selection DOM
const sections = document.querySelectorAll('section');
const trans = document.querySelector('.trans');
const gradients = ["coral", "chartreuse", "chocolate", "cadetblue"];

const options = {
   threshold: 0.7,
}

let observer = new IntersectionObserver(navScroll, options);

function navScroll (entries) {
   entries.forEach((entry) => {
      /* set scroll target */
      const className = entry.target.className;
      const activeLink = document.querySelector(`[data-page="${className}"]`);

      /* get section target index */
      const elementIndex = entry.target.getAttribute('data-index');

      /* set targeted directions */
      const coordinates = activeLink.getBoundingClientRect();
      const direction = {
         width: coordinates.width,
         height: coordinates.height,
         top: coordinates.top,
         left: coordinates.left
      }

      /* set background color if targeted page is true */
      if (entry.isIntersecting) {
         trans.style.setProperty('width', `${direction.width}px`);
         trans.style.setProperty('height', `${direction.height}px`);
         trans.style.setProperty('top', `${direction.top}px`);
         trans.style.setProperty('left', `${direction.left}px`);

         trans.style.backgroundColor = gradients[elementIndex]
      }

   })
}

/* Observer in my section */
sections.forEach((section) => {
   observer.observe(section);
})