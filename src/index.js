//User Interface Logic
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency.js';

//Business Logic
function getRate() {
  CurrencyService.getRate() 
    .then(function(response) {
      printElements(response); 
    }, function(errorMessage) {
      printError(errorMessage);
    });
}

//UI Logic

function printElements(response) {
  let countryCode = document.querySelector('#exchange').value;
  let usd = parseInt(document.querySelector('#usd').value);
  let exchangeRate = response.conversion_rates.`${countryCode}`;
  let exchangedCurrency = usd * exchangeRate;
  document.querySelector('#showResponse').innerText = `${usd} USD = ${exchangedCurrency} ${country}`;
}

function printError(errorMessage) {
  document.querySelector('#showResponse').innerText = errorMessage;
}

function handleFormSubmission(event) {
  event.preventDefault();
  document.querySelector("#usd").value = null;
  document.querySelector("#exchange").value = null;
  document.querySelector('#showResponse').innerText = null;
  getRate();
}

window.addEventListener("load", function() {
  document.querySelector("form#submitBtn").addEventListener("submit", handleFormSubmission);
});