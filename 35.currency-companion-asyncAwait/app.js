/* http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1 */

/* DOM */
const formCurrencyInput = document.querySelector(".form_currency_code");
const toCurrencyInput = document.querySelector(".to_currency_code");
const exchangeAmountInput = document.querySelector(".exchange_amount");
const rateBtn = document.querySelector(".get_rate_btn");

// Event Listener
rateBtn.addEventListener("change", getExchangeCurrencyRate);
rateBtn.addEventListener("click", getExchangeCurrencyRate);

// Get Currency Exchange Rate function
function getExchangeCurrencyRate(e) {
  e.preventDefault();

  const formCurrencyValue = formCurrencyInput.value.toUpperCase();
  const toCurrencyValue = toCurrencyInput.value.toUpperCase();
  const exchangeAmountValue = exchangeAmountInput.value;

  if (
    formCurrencyValue === "" ||
    toCurrencyValue === "" ||
    exchangeAmountValue === ""
  ) {
    document.querySelector(".input_error").classList.add("show");

    setTimeout(() => {
      document.querySelector(".input_error").classList.remove("show");
    }, 2500);
  } else {
    getExchangeRates(formCurrencyValue, toCurrencyValue, exchangeAmountValue)
      .then((exchangeResult) => {
        document.querySelector(".currency_result").innerText = exchangeResult;

        setTimeout(() => {
          location.reload();
        }, 6000);
      })
      .catch((error) => invalidCode());
  }
}

// Fetch API Data form currency lists
async function getCurrencyData(formCurrency, toCurrency) {
  const response = await fetch(
    "http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1"
  );
  const currentData = await response.json();
  const currentRates = currentData.rates;
  const baseCurrency = 1 / currentRates[formCurrency];
  const exchangeRate = baseCurrency * currentRates[toCurrency];

  if (isNaN(exchangeRate)) {
    throw new Error(invalidCode());
  }

  return exchangeRate;
}

// Get Exchange Rates function
async function getExchangeRates(formCurrency, toCurrency, exchangeAmount) {
  const amountExchangeRate = await getCurrencyData(formCurrency, toCurrency);
  const convertedExchangeRate = (amountExchangeRate * exchangeAmount).toFixed(
    2
  );

  return `${exchangeAmount} ${formCurrency} == ${convertedExchangeRate} ${toCurrency}`;
}

// Invalid Code function
function invalidCode() {
  document.querySelector(".invalid_code").classList.add("show");

  setTimeout(() => {
    document.querySelector(".invalid_code").classList.remove("show");
  }, 2500);
}
