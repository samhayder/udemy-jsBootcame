/* DOM */
const balanceEl = document.querySelector(".balance_value");
const incomeTotalEl = document.querySelector(".income_value");
const expanseTotalEl = document.querySelector(".expanse_value");
/* List */
const lists = document.querySelectorAll(".list");
const incomeList = document.querySelector(".income_tracker .list");
const expenseList = document.querySelector(".expense_tracker .list");
const allList = document.querySelector(".all_tracker .list");

const incomeEl = document.querySelector("#income_tab");
const expenseEl = document.querySelector("#expense_tab");
const allEl = document.querySelector("#all_tab");

/* Tab */
const incomeTab = document.querySelector(".tab-1");
const expanseTab = document.querySelector(".tab-2");
const allTab = document.querySelector(".tab-3");

/* Input Button */
const incomeTitle = document.querySelector("#income_title");
const incomeAmount = document.querySelector("#income_amount");
const incomeSubmit = document.querySelector("#income_submit");

const expenseTitle = document.querySelector("#expense_title");
const expenseAmount = document.querySelector("#expense_amount");
const expenseSubmit = document.querySelector("#expense_submit");

/* Necessary Variable */
let [balance, income, expense] = [0, 0, 0];
let [editBtn, deleteBtn] = ["fa fa-edit", "fa fa-trash"];

/* Get Local Storage item */
let ENTRY_LIST = JSON.parse(localStorage.getItem("entry-list")) || [];
updateUI();

/* Budget In => income event listener */
incomeSubmit.addEventListener("click", budgetIn);

/* Budget Out => expense event listener */
expenseSubmit.addEventListener("click", budgetOut);

/* income/expense => enter event listener */
document.addEventListener("keypress", (e) => {
  if (e.key !== "Enter") return;

  budgetIn(e);
  budgetOut(e);
});

/* Budget In function */
function budgetIn(e) {
  e.preventDefault();

  if (!incomeTitle.value || !incomeAmount.value) return;

  let income = {
    type: "income",
    title: incomeTitle.value,
    amount: +incomeAmount.value,
  };
  ENTRY_LIST.push(income);

  /* Update UI */
  updateUI();

  /* clear input  */
  clearField(incomeTitle, incomeAmount);
}

/* Budget Out function */
function budgetOut(e) {
  e.preventDefault();

  if (!expenseTitle.value || !expenseAmount.value) return;

  let expense = {
    type: "expense",
    title: expenseTitle.value,
    amount: +expenseAmount.value,
  };
  ENTRY_LIST.push(expense);

  /* Update UI */
  updateUI();

  /* clear input */
  clearField(expenseTitle, expenseAmount);
}

/* Update UI function */
function updateUI() {
  income = calculateTotal("income", ENTRY_LIST);
  expense = calculateTotal("expense", ENTRY_LIST);
  balance = Math.abs(calculateBalance(income, expense));

  let sing = income >= expense ? "$" : "-$";
  /* updating ui */
  incomeTotalEl.innerHTML = `<p>$</p> <p>${income}</p>`;
  expanseTotalEl.innerHTML = `<p>$</p> <p>${expense}</p>`;
  balanceEl.innerHTML = `<p>${sing}</p> <p>${balance}</p>`;

  /* Clear List */
  clearElement([incomeList, expenseList, allList]);

  /* Display list entry */
  ENTRY_LIST.forEach((entry, index) => {
    if (entry.type === "income") {
      showEntry(incomeList, entry.type, entry.title, entry.amount, index);
    } else if (entry.type === "expense") {
      showEntry(expenseList, entry.type, entry.title, entry.amount, index);
    }

    showEntry(allList, entry.type, entry.title, entry.amount, index);
  });

  // Updating Chart
  updateChart(income, expense);

  // Set Local Storage items
  localStorage.setItem("entry-list", JSON.stringify(ENTRY_LIST));
}

/* Clear List function */
function clearElement(elements) {
  elements.forEach((element) => {
    element.innerHTML = "";
  });
}

/* Display Entry list function */
function showEntry(list, type, title, amount, id) {
  const item = `
                <li class="item ${type}" id="${id}">
                  <div class="item_text">${title}: $${amount}</div>
                    <div class="item_btn">
                      <i class="${editBtn}"></i>
                      <i class="${deleteBtn}"></i>
                    </div>
                  </div>
                </li>`;

  list.insertAdjacentHTML("afterbegin", item);
}

/* Clear input value filed */
function clearField(title, amount) {
  title.value = "";
  amount.value = "";
}

/* Calculate Total of income/expense function */
function calculateTotal(type, list) {
  let sum = 0;
  list.forEach((entry) => {
    if (entry.type === type) {
      sum += entry.amount;
    }
  });
  return sum;
}

/* Calculate balance function */
function calculateBalance(income, expense) {
  return income - expense;
}

/* Edit & Delete Button Event Listener */
lists.forEach((list) => {
  list.addEventListener("click", (evt) => {
    if (evt.target.localName !== "i") return;

    let targetBtn = evt.target.attributes.class.value;
    let entry = evt.target.parentNode.parentNode;
    let targetId = entry.attributes.id.value;

    if (targetBtn === editBtn) {
      editEntry(targetId);
    } else if (targetBtn === deleteBtn) {
      deleteEntry(targetId);
    }
  });
});

/* Edit Function */
function editEntry(targetId) {
  let targetType = ENTRY_LIST[targetId].type;
  let targetTitle = ENTRY_LIST[targetId].title;
  let targetAmount = ENTRY_LIST[targetId].amount;

  if (targetType === "income") {
    incomeTitle.value = targetTitle;
    incomeAmount.value = targetAmount;
  } else if (targetType === "expense") {
    expenseTitle.value = targetTitle;
    expenseAmount.value = targetAmount;
  }

  deleteEntry(targetId);
}

/* Delete Function */
function deleteEntry(targetId) {
  ENTRY_LIST.splice(targetId, 1);
  updateUI();
}

/* ***************************************************************** */
// click event listener to hide or show tab
incomeTab.addEventListener("click", () => {
  show(incomeEl);
  hide([expenseEl, allEl]);
  active(incomeTab);
  inactive([expanseTab, allTab]);
});

expanseTab.addEventListener("click", () => {
  show(expenseEl);
  hide([incomeEl, allEl]);
  active(expanseTab);
  inactive([incomeTab, allTab]);
});

allTab.addEventListener("click", () => {
  show(allEl);
  hide([incomeEl, expenseEl]);
  active(allTab);
  inactive([incomeTab, expanseTab]);
});

// Create show function
function show(element) {
  element.classList.remove("hide");
}

// Create hide function
function hide(elements) {
  elements.forEach((element) => {
    element.classList.add("hide");
  });
}

// Create active function
function active(element) {
  element.classList.add("active");
}

// Create inactive function
function inactive(elements) {
  elements.forEach((element) => {
    element.classList.remove("active");
  });
}
/* ***************************************************************** */
