/* DOM */
const list = document.querySelector('.list');
const tuskSubmitBtn = document.querySelector('.fa-plus-circle');
const tuskInput = document.querySelector('#input');
const allClearBtn = document.querySelector('.clear i');

// Create icon button class
const checkBtn = 'fa-check-circle';
const unCheckBtn = 'fa-circle-o';
const lineThrough = 'line_through';

// ----------- Local Storage ----------------------
let tuskContainer, id;
let tuskData = localStorage.getItem('tusk-list');

if (tuskData) {
   tuskContainer = JSON.parse(tuskData);
   id = tuskContainer.length;
   loadTuskContainer(tuskContainer);
} else {
   tuskContainer = [];
   id = 0;
}

function loadTuskContainer (array) {
   array.forEach((item) => {
      tuskAdd(item.name, item.id, item.done, item.trash);
   })
}

// Clear whole data
allClearBtn.addEventListener('click', () => {
   localStorage.clear();
   location.reload();
})
// ----------- Local Storage ----------------------

// Creating tusk item function
function tuskAdd (txt, id, done, trash) {
   if (trash) return;

   // check button class condition is true
   const iconClass = done ? checkBtn : unCheckBtn;
   const textLine = done ? lineThrough : "";

   const item = `
      <li class="item">
         <i class="fa ${iconClass} complete" status="complete" id="${id}"></i>
         <p class="text ${textLine}">${txt}</p>
         <i class="fa fa-trash delete" status="delete" id="0"></i>
      </li>`;
   
   list.insertAdjacentHTML("beforeend", item);
}

// Display tusk function
function displayTusk (evt) {
   if (evt.keyCode === 13 || evt.target.classList.value === 'fa fa-plus-circle') {
      const tuskTxt = input.value;

      if (tuskTxt && tuskTxt !== " ") {
         tuskAdd(tuskTxt, id, false, false);

         tuskContainer.push({
            name: tuskTxt,
            id: id,
            done: false,
            trash: false
         });

         //Set Local Storage
         localStorage.setItem('tusk-list', JSON.stringify(tuskContainer));

         id++;
      }

      tuskInput.value = " ";
   }
}

// set event listener input key by enter
document.addEventListener("keyup", displayTusk);
tuskSubmitBtn.addEventListener("click", displayTusk);

function updateTusk (itemTarget) {
   itemTarget.classList.toggle(checkBtn);
   itemTarget.classList.toggle(unCheckBtn);

   itemTarget.parentNode.querySelector('p').classList.toggle(lineThrough);

   tuskContainer[itemTarget.id].done = tuskContainer[itemTarget.id].done ? false : true; //Local Storage
}

function removeTusk (itemTarget) {
   itemTarget.parentNode.parentNode.removeChild(itemTarget.parentNode);

   tuskContainer[itemTarget.id].trash = true; //Local Storage
}

// add tusk text icon class and trash item
list.addEventListener("click", (evt) => {
   if (evt.target.localName === 'ul' ||
      evt.target.localName === 'li' ||
      evt.target.localName === 'p') 
   return;

   const itemTarget = evt.target;
   const status = itemTarget.attributes.status.value;

   if (status === 'complete') {
      updateTusk(itemTarget);

   } else if (status === 'delete') {
      removeTusk(itemTarget);
   }

   // Local Storages automat update
   localStorage.setItem('tusk-list', JSON.stringify(tuskContainer));
})