//DOM Element
const smallImage = document.querySelectorAll('.small_img');
const fullImage = document.querySelector('.full_img');
const modal = document.querySelector('.gallery_img_popup');

smallImage.forEach((img) => {
   img.addEventListener('click', () => {
      modal.classList.add('open');
      fullImage.classList.add('open');

      /* Dynamically targeted open full img */
      const dynamicImg = img.getAttribute('alt');
      fullImage.src = `./img/full/${dynamicImg}.jpg`
   })
})

/* remove modal open class */
modal.addEventListener('click', (e) => {
   if (e.target.classList.contains('gallery_img_popup')) {
      modal.classList.remove('open');
      fullImage.classList.remove('open');
   }
})