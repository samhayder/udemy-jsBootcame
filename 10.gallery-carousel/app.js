/* DOM */
let list = document.querySelector('.items_list');
let imgs = Array.from(list.children);
const prevBtn = document.querySelector('.left_angle');
const nextBtn = document.querySelector('.right_angle');

/* Greeting image width */
let imgWidth = imgs[0].getBoundingClientRect().width;

/* Arranging imgs next to each other */
function setImgPosition (img, index) {
   img.style.left = imgWidth * index + 'px';
}
imgs.forEach(setImgPosition);

/* Move to image function */
const moveToImg = (list, currentImg, targetImg) => {
   list.style.transform = "translateX(-"+ targetImg.style.left +")";
   currentImg.classList.remove('current_img');
   targetImg.classList.add('current_img');
}

/* hide/show button function */
const hideShowBtn = (img, prevBtn, nextBtn, targetIndex) => {
   if (targetIndex === 0) {
      prevBtn.classList.add('hidden');
      nextBtn.classList.remove('hidden');
   } else if (targetIndex === img.length - 1) {
      prevBtn.classList.remove('hidden');
      nextBtn.classList.add('hidden');
   } else {
      prevBtn.classList.remove('hidden');
      nextBtn.classList.remove('hidden');
   }
}

/* When we click on the right button, move images to left */
nextBtn.addEventListener('click', () => {
   const currentImg = list.querySelector('.current_img');
   const nextImg = currentImg.nextElementSibling;
   const nextIndexImg = imgs.findIndex((img) => img === nextImg);

   moveToImg(list, currentImg, nextImg);
   hideShowBtn(imgs, prevBtn, nextBtn, nextIndexImg)
})


/* When we click on the left button, move images to right */
prevBtn.addEventListener('click', () => {
   const currentImg = list.querySelector('.current_img');
   const prevImg = currentImg.previousElementSibling;
   const nextIndexImg = imgs.findIndex((img) => img === prevImg);

   moveToImg(list, currentImg, prevImg);
   hideShowBtn(imgs, prevBtn, nextBtn, nextIndexImg)
})