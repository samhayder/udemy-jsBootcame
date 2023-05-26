/* DOM */
const textDisplay = document.querySelector('#text_area');
const speedBtn = document.querySelector('.speed');
const readBtn = document.querySelector('.read');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');

let currentChar;

const utterance = new SpeechSynthesisUtterance();

// Text reading function
function readText (txt) {
   if (speechSynthesis.speaking && speechSynthesis.pause) {
      return speechSynthesis.resume();
   }

   if (speechSynthesis.speaking) return;

   utterance.text = txt;
   utterance.rate = speedBtn.value || 1;

   textDisplay.disabled = true;

   speechSynthesis.speak(utterance);
}

// Pause function
function pauseText () {
   if (speechSynthesis.speaking) speechSynthesis.pause();
}

// Stopping text reading function
function stopText () {
   speechSynthesis.resume();
   speechSynthesis.cancel();
}

//----------- Event Listener ----------------------
readBtn.addEventListener('click', () => {
   readText(textDisplay.value);
})

utterance.addEventListener('end', () => {
   textDisplay.disabled = false;
   textDisplay.style.backgroundColor = 'blueviolet';
});
utterance.addEventListener('boundary', (evt) => {
   currentChar = evt.charIndex;
})

pauseBtn.addEventListener('click', pauseText);

stopBtn.addEventListener('click', stopText);

speedBtn.addEventListener('input', () => {
   stopText();
   readText(utterance.text.substring(currentChar));
});
//----------- Event Listener ----------------------