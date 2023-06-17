/* DOM */
const video = document.querySelector("video");
const spreed = document.querySelector(".spreed");
const spreedBar = document.querySelector(".spreed_bar");

spreed.addEventListener("mousemove", (e) => {
  const x = e.pageX - spreed.offsetLeft;
  const percentage = x / spreed.offsetWidth;
  const min = 0.1;
  const max = 5;
  const width = Math.round(percentage * 100) + "%";
  const playBackRate = percentage * (max - min) + min;

  spreedBar.style.width = width;
  spreedBar.textContent = playBackRate.toFixed(2) + "x";

  video.playbackRate = playBackRate;
});
