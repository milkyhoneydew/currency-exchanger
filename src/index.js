//User Interface Logic
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency.js';

//Business Logic
function getRate(country, amount) {
  CurrencyService.getRate(country, amount) 
    .then(function(response) {
      printElements(response); 
    }, function(errorMessage) {
      printError(errorMessage);
    });
}

//UI Logic

function printElements(response) {
  document.querySelector("#showResponse").innerText = response.conversion_result;
  document.querySelector("#usd").value = null;
  document.querySelector("#exchange").value = null;
  
}

function printError(errorMessage) {
  document.querySelector('#showResponse').innerText = errorMessage;
}

function handleFormSubmission(event) {
  event.preventDefault();
  let country = document.querySelector('#exchange').value.toUpperCase;
  let amount = parseInt(document.querySelector('#usd').value);
  getRate(country, amount);
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
});