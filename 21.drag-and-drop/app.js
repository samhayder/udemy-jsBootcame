/* DOM */
const lists = document.querySelectorAll(".list");
const items = document.querySelectorAll(".item");

let dragItem = null;

items.forEach((item) => {
   // Drag Start
   item.addEventListener('dragstart', () => {
      dragItem = item;
      setTimeout(() => {
         item.style.display = 'none';
      }, 50);
   })

   // Drag End 
   item.addEventListener('dragend', () => {
      setTimeout(() => {
         item.style.display = 'block';
         dragItem = null;
      }, 50);
   })

   lists.forEach((list) => {
      // Drag Over
      list.addEventListener('dragover', (evt) => {
         evt.preventDefault();
      })

      // Drag Enter
      list.addEventListener('dragenter', (evt) => {
         evt.preventDefault();
         list.style.backgroundColor = 'rgba(255,255,255, 0.7)'
      })

      // Dropping the item
      list.addEventListener('drop', () => {
         list.appendChild(dragItem);
         list.style.backgroundColor = '#3f2c38'
      })
   })
})
