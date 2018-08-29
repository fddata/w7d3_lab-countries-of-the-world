const PubSub = require('../helpers/pub_sub.js');

const CountryInfoView = function(container){
  this.container = container;
};

CountryInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Country:selected-country', (event) => {
    const country = event.detail;
    console.log(country);
    this.render(country);
  });
};



CountryInfoView.prototype.render = function (country) {
  this.container.innerHTML = '';
  const keys = Object.keys(country);
  console.log(keys);
  const infoParagraphName = document.createElement('p');
  infoParagraphName.textContent = `Name: ${country.name}` ;

  const infoParagraphPopulation = document.createElement('p');
  infoParagraphPopulation.textContent = `Population: ${country.population}`;

  const infoParagraphFlag = document.createElement('img');
  infoParagraphFlag.src = country.flag;
  infoParagraphFlag.id = "flag-image";

  this.container.appendChild(infoParagraphName);
  this.container.appendChild(infoParagraphPopulation);
  this.container.appendChild(infoParagraphFlag);
};


module.exports = CountryInfoView;
