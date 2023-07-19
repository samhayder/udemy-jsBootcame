/* DOM */
const username = document.querySelector("#username");
const password = document.querySelector("#password");

const validateFormate = /^(?=\D{4})(?=\D*\d{2})/;

function formValidate(e) {
  if (e.target.id === "username") {
    if (e.target.value.length > 3) {
      e.target.classList.add("valid");
      e.target.classList.remove("invalid");
    } else {
      e.target.classList.add("invalid");
      e.target.classList.remove("valid");
    }
  }

  if (e.target.id === "password") {
    if (validateFormate.test(e.target.value)) {
      e.target.classList.add("valid");
      e.target.classList.remove("invalid");
    } else {
      e.target.classList.add("invalid");
      e.target.classList.remove("valid");
    }
  }
}

/* Event listener */
username.addEventListener("input", formValidate);
password.addEventListener("input", formValidate);
