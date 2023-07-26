/* DOM */
const strengthen = document.querySelector(".strengthen");
const passwordInput = document.querySelector(".password_input");
const passwordCheck = document.querySelector(".password_check");

/* Handel event listener */
passwordInput.addEventListener("input", updatePasswordStrength);

function updatePasswordStrength() {
  const assessments = calculatePasswordLength(passwordInput.value);

  let strength = 100;
  passwordCheck.innerHTML = "";

  assessments.forEach((assessment) => {
    if (assessment == null) return;

    strength -= assessment.strengthLost;

    let pwsCheckEl = document.createElement("p");
    pwsCheckEl.innerHTML = assessment.pwsCheck;
    passwordCheck.appendChild(pwsCheckEl);
  });

  strengthen.style.setProperty("--strengthen-amount", strength);
}

function calculatePasswordLength(password) {
  const assessment = [];
  assessment.push(lengthAssessment(password));
  assessment.push(lowercaseAssessment(password));
  assessment.push(uppercaseAssessment(password));
  assessment.push(numberAssessment(password));
  assessment.push(specialCharactersAssessment(password));
  assessment.push(repeatedCharactersAssessment(password));
  return assessment;
}

/* Length Assessment function */
function lengthAssessment(password) {
  let length = password.length;

  if (length <= 5) {
    return {
      pwsCheck: "Password is too short",
      strengthLost: 40,
    };
  }

  if (length <= 10) {
    return {
      pwsCheck: "Password could be longer",
      strengthLost: 15,
    };
  }
}

/* Global function of Type Assessment */
function typeAssessment(password, regX, type) {
  let characterMatch = password.match(regX) || [];

  if (characterMatch.length === 0) {
    return {
      pwsCheck: `Password has no ${type}`,
      strengthLost: 20,
    };
  }

  if (characterMatch.length <= 2) {
    return {
      pwsCheck: `Password must have more ${type}`,
      strengthLost: 5,
    };
  }
}

/* Lowercase Assessment function */
function lowercaseAssessment(password) {
  return typeAssessment(password, /[a-z]/g, "lowercase characters");
}

/* Uppercase Assessment function */
function uppercaseAssessment(password) {
  return typeAssessment(password, /[A-Z]/g, "uppercase characters");
}

/* Number Assessment function */
function numberAssessment(password) {
  return typeAssessment(password, /[0-9]/g, "number");
}

/* Special Characters Assessment function */
function specialCharactersAssessment(password) {
  return typeAssessment(password, /[^0-9a-zA-Z]/g, "special characters");
}

/* Repeated Characters Assessment function */
function repeatedCharactersAssessment(password) {
  let repeatCharacterMatch = password.match(/(.)\1/g) || [];

  if (repeatCharacterMatch.length > 0) {
    return {
      pwsCheck: `Password has repeat characters`,
      strengthLost: repeatCharacterMatch.length * 10,
    };
  }
}
