const PubSub = require('../helpers/pub_sub.js');


const SelectView = function (element) {
  //takes in a select elelement from the html
  this.element = element;
};


SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:all-countries', (event) => {
    const allCountries = event.detail;
    this.populate(allCountries);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    // console.log(selectedIndex);
    PubSub.publish('SelectView:change', selectedIndex);
  });
};


SelectView.prototype.populate = function(countryData){
  countryData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });
};



module.exports = SelectView;
