/* DOM */
const imgs = document.querySelectorAll(".all_img img");
let currentImg = document.querySelector(".current_img");

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    currentImg.src = e.target.src;

    currentImg.classList.add("animate_img");

    setTimeout(() => {
      currentImg.classList.remove("animate_img");
    }, 400);
  });
});
