const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');


const Country = function () {
  this.allCountries = null;
};


Country.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.allCountries = data;
    PubSub.publish('Country:all-countries', this.allCountries);
    // console.log(this.allCountries);
  });
};

Country.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (event) => {
    const selectedCountryIndex = event.detail;

    this.publishSelectedCountry(selectedCountryIndex);
  });
};

Country.prototype.publishSelectedCountry = function (countryIndex) {
  const selectedCountry = this.allCountries[countryIndex];
  // console.log(selectedCountry);
  PubSub.publish('Country:selected-country', selectedCountry);
};




module.exports = Country;










//
// const Joke = function () {
//   this.text = null;
// };
//
// Joke.prototype.getData = function () {
//   const request = new Request('https://icanhazdadjoke.com');
//   request.get((data) => {
//     this.text = data.joke;
//     PubSub.publish('Joke:joke-loaded', this.text);
//   });
// };

module.exports = Country;
