//User Interface Logic
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency.js';

//Business Logic
function getRate() {
  CurrencyService.getRate() 
    .then(function(rate) {
      printElements(rate); 
    }, function(errorMessage) {
      printError(errorMessage);
    });
}

//UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  document.querySelector("#usd").value = null;
  document.querySelector("#exchange").value = null;
  document.getElementById('showResponse').innerHTML = null;
  getRate();
}

window.addEventListener("load", function() {
  document.querySelector("form#submitBtn").addEventListener("submit", handleFormSubmission);
});