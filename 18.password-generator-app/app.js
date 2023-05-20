/* DOM */
const passwordDisplay = document.querySelector('.password_display');
const formContainer = document.getElementById('password_form');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const uppercaseEl = document.getElementById('uppercase');

let rangeChar = document.getElementById('range_char');
let numberChar = document.getElementById('number_char');

// Character code
function charCode (startCode, endCode) {
   let listCode = [];

   for (let i = startCode; i <= endCode; i++ ) {
      listCode.push(i);
   }
   return listCode;
}

// Create characters code
let lowerCaseCode = charCode(97, 122);
let upperCaseCode = charCode(65, 90);
let numberCode = charCode(48, 57);
let symbolCode = charCode(33, 47).concat(58, 64).concat(91, 96).concat(123, 126);


// Synchronizing range and number char
function syncRange (evt) {
   let rangeValue = evt.target.value;
   rangeChar.value = rangeValue;
   numberChar.value = rangeValue;
}
rangeChar.addEventListener('input', syncRange);
numberChar.addEventListener('input', syncRange);

// Form Submission
formContainer.addEventListener('submit', (evt) => {
   evt.preventDefault();

   const includeCharAmount = numberChar.value;
   const includeNumbers = numbersEl.checked;
   const includeSymbols = symbolsEl.checked;
   const includeUppercase = uppercaseEl.checked;

   const password =  generatePassword(includeCharAmount, includeNumbers, includeSymbols, includeUppercase);

   passwordDisplay.innerText = password;

})

// Password Generator
function generatePassword(includeCharAmount, includeNumbers, includeSymbols, includeUppercase) {
   let characters = lowerCaseCode;

   if (includeNumbers) characters = characters.concat(numberCode);
   if (includeSymbols) characters = characters.concat(symbolCode);
   if (includeUppercase) characters = characters.concat(upperCaseCode);

   // Random generate password
   let passwordCharacters = [];
   for (let i = 0; i < includeCharAmount; i++) {
      let characterCode = characters[Math.floor(Math.random() * characters.length)];

      passwordCharacters.push(String.fromCharCode(characterCode));
   }

   return passwordCharacters.join('');
}
