// Superhero Entry class
class SuperheroEntry {
  constructor(superheroName, superheroUniverse, superheroPower) {
    this.superheroName = superheroName;
    this.superheroUniverse = superheroUniverse;
    this.superheroPower = superheroPower;
  }
}

// Superhero List class
class SuperheroList {
  // Add Superhero function
  addSuperhero(entry) {
    const listData = document.querySelector(".lists");
    let itemData = document.createElement("li");
    listData.innerHTML += `<li class="item">
         <h4>${entry.superheroName}</h4>
         <h4>${entry.superheroUniverse}</h4>
         <h4>${entry.superheroPower}</h4>
         <i class="fa fa-trash delete"></i>
      </li>`;

    listData.appendChild(itemData);
  }

  // Clear Input Flied function
  clearInputFlied() {
    [
      document.querySelector("#name").value,
      document.querySelector("#universe").value,
      document.querySelector("#power").value,
    ] = ["", "", ""];
  }

  // Show Validation Success Message function
  validateSuccess() {
    document
      .querySelector(".validate_success")
      .classList.add("show_validation");

    setTimeout(() => {
      document
        .querySelector(".validate_success")
        .classList.remove("show_validation");
    }, 1500);
  }

  // Show Validation Error Message function
  validateError() {
    document.querySelector(".validate_error").classList.add("show_validation");

    setTimeout(() => {
      document
        .querySelector(".validate_error")
        .classList.remove("show_validation");
    }, 2000);
  }
}

// Local Storage Superhero class
class SuperheroStorage {
  // Get Storage Data form LS
  static getStorageData() {
    let superheros;

    if (localStorage.getItem("superheros") === null) {
      superheros = [];
    } else {
      superheros = JSON.parse(localStorage.getItem("superheros"));
    }

    return superheros;
  }

  // set Storage Data form LS
  static setStorageData(entry) {
    const superherosList = SuperheroStorage.getStorageData();
    superherosList.push(entry);

    localStorage.setItem("superheros", JSON.stringify(superherosList));
  }

  // Display Storage Data form UI
  static displayStorageData() {
    const superherosList = SuperheroStorage.getStorageData();

    superherosList.forEach((superhero) => {
      // Instantiating SuperheroList Class
      let list = new SuperheroList();
      list.addSuperhero(superhero);
    });
  }

  // Remove Storage Data form LS and UI
  static removeStorageData(clickedSuperhero) {
    const superherosList = SuperheroStorage.getStorageData();

    superherosList.forEach((superhero, index) => {
      if (superhero.superheroName === clickedSuperhero) {
        superherosList.splice(index, 1);
      }
    });

    localStorage.setItem("superheros", JSON.stringify(superherosList));
  }
}

/* === Event Listener === */

// DOM Content loaded Data by Local Storage
document.addEventListener(
  "DOMContentLoaded",
  SuperheroStorage.displayStorageData
);

document.addEventListener(
  "DOMContentLoaded",
  SuperheroStorage.displaySuperhero
);

const superheroForm = document.querySelector("#superhero_form");
superheroForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //DOM
  let [superheroName, superheroUniverse, superheroPower] = [
    document.querySelector("#name").value,
    document.querySelector("#universe").value,
    document.querySelector("#power").value,
  ];

  // Instantiating Superhero Entry class
  let entry = new SuperheroEntry(
    superheroName,
    superheroUniverse,
    superheroPower
  );

  // Instantiating Superhero List class
  let list = new SuperheroList();

  // Check Input Fields Validation one or more empty
  if (
    superheroName === "" ||
    superheroUniverse === "" ||
    superheroPower === ""
  ) {
    // Validation Error messages
    list.validateError();
  } else {
    // Add Superhero
    list.addSuperhero(entry);
    // Clear Input flied
    list.clearInputFlied();
    // Validation Success messages
    list.validateSuccess();

    // Local Storage
    SuperheroStorage.setStorageData(entry);
  }
});

// Delete single item
document.querySelector(".lists").addEventListener("click", (e) => {
  if ((e.target.className = "delete")) {
    const trash = e.target.parentNode.parentNode;

    // click delete icon by delete LS
    let clickedSuperhero =
      e.target.previousElementSibling.previousElementSibling
        .previousElementSibling;

    SuperheroStorage.removeStorageData(clickedSuperhero);

    trash.remove();
  }
});
