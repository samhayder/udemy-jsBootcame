/* DOM */
const transmittingEl = document.querySelector(".transmitting_wrap");
let para = document.createElement("p");
para.classList.add("transmitting");

//Speech Api  confirm
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognitionSpeech = new SpeechRecognition();
recognitionSpeech.interimResults = true;

recognitionSpeech.addEventListener("result", (e) => {
  const speechToText = Array.from(e.result)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  para.innerText = speechToText;

  if (e.result[0].isFinal) {
    para = document.createElement("p");
  }
});

recognitionSpeech.addEventListener("end", () => {
  recognitionSpeech.start();
});

recognitionSpeech.start();
