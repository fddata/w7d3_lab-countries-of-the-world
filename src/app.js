const Country = require('./models/country.js');
const SelectView = require('./views/select_view.js');
const CountryInfoView = require('./views/result_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const country = new Country();
  country.getData();
  country.bindEvents();

  const selectElement = document.querySelector('#countries');
  const countryDropdown = new SelectView(selectElement);
  countryDropdown.bindEvents();



  //here we make the animal-info div a new AnimalInfoView object
  const infoDiv = document.querySelector('#country');
  const countryInfoDisplay = new CountryInfoView(infoDiv);
  countryInfoDisplay.bindEvents();

});
