/* DOM */
const slider = document.querySelector(".container");

let isDown = false;
let startX;
let scrollToLeft;

slider.addEventListener("mousedown", (evt) => {
  isDown = true;
  slider.classList.add("active");

  startX = evt.pageX - slider.offsetLeft;
  scrollToLeft = slider.scrollLeft;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (evt) => {
  if (!isDown) return;
  evt.preventDefault();

  let distanceX = evt.pageX - slider.offsetLeft;
  let walk = distanceX - startX;
  slider.scrollLeft = scrollToLeft - walk;
});
