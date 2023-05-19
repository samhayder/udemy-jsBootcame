/* DOM */
const cards = document.querySelectorAll('.memory_card');

let isCardClicked = false;
let lockBoard = false;
let firstCard, secondCard;
let count = 0;

function flipCard () {
   if (lockBoard) return;
  if (this === firstCard) return;

   this.classList.toggle('flip');

   if (!isCardClicked) {
      isCardClicked = true;
      firstCard = this;
      return;
   } else {
      // isCardClicked = false;
      secondCard = this;

      checkMatchCard();
   }
}

function checkMatchCard () {
   let dataMatch = firstCard.dataset.name === secondCard.dataset.name
   
   dataMatch ? disableCard() : unFlipCard();
}

function disableCard () {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);

   resetBoard();

   count++;

   setTimeout(() => {
      if (count === 6) {
         alert('Congratulation! Game Over');
      }
   },300)

}

function unFlipCard () {
   lockBoard = true;
   setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
   },1500);
}

function resetBoard () {
   [isCardClicked, lockBoard] = [false, false];
   [firstCard, secondCard] = [null, null];
}

(function shuffleCard () {
   cards.forEach((card) => {
      let randomPosition = Math.floor(Math.random() * 12);
      card.style.order = randomPosition;
   })
})()

cards.forEach((card) => {
   card.addEventListener('click', flipCard);
})