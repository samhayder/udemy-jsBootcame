const whiteKeyPressed = ['a', 'd', 'g', 'j', 'i', 'e', 'r'];
const blackKeyPressed = ['s', 'f', 'h', 'k', 'l'];

const keys = document.querySelectorAll('.key');
const keyWhite = document.querySelectorAll('.key_white');
const keyBlack = document.querySelectorAll('.key_black');

keys.forEach((key) => {
   key.addEventListener('click', () => {

      playNote(key);
      
   })
})

function playNote(key) {
   const noteAudio = document.getElementById(key.dataset.note);

   noteAudio.currentTime = 0;
   noteAudio.play();
   key.classList.add('active');

   noteAudio.addEventListener('ended', () => {
      key.classList.remove('active');
   })
}

document.addEventListener('keydown', (evt) => {
   let key = evt.key;

   let whiteKeyIndex = whiteKeyPressed.indexOf(key);
   let blackKeyIndex = blackKeyPressed.indexOf(key);

   if (whiteKeyIndex > -1) playNote(keyWhite[whiteKeyIndex]);
   if (blackKeyIndex > -1) playNote(keyBlack[blackKeyIndex])
})