/* DOM */
const sliders = document.querySelector('.sliders_wrapper').children;
const sliderImg = document.querySelector('.slider_img').children;

for (let i = 0; i < sliderImg.length; i++) {
   sliderImg[i].addEventListener('click', () => {
      for (let j = 0; j < sliderImg.length; j++) {
         sliderImg[j].classList.remove('active');
      }

      sliderImg[i].classList.add('active');
      const id = sliderImg[i].getAttribute('data-id');

      for (let k = 0; k < sliders.length; k++) {
         sliders[k].classList.remove('active');
      }

      sliders[id].classList.add('active');
   })
}