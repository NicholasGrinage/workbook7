"use strict";
const cityDropdown = document.querySelector("#cityDropdown");
const cityTableBody = document.querySelector("#cityTableBody");

let cities = [
  { name: "Benbrook, TX", latitude: 32.6732, longitude: -97.4606, id: 1 },
  { name: "Pittsburgh, PA", latitude: 40.442829, longitude: -79.950432, id: 2 },
  { name: "Philadelphia, PA", latitude: 39.9526, longitude: -75.165222, id: 3 },
  { name: "Detroit, MI", latitude: 42.331429, longitude: -83.045753, id: 4 },
];

function loadCityDropdown(cities) {
  for (const city of cities) {
    var option = new Option(option);
    option.value = city.name;
    option.innerText = city.name;
    cityDropdown.appendChild(option);
  }
}

function listCities() {
  for (const city of cities) {
    let option = new Option(city.name);
    cityDropdown.appendChild(option);
  }
}

function displayCityTable(city) {
  cityTableBody.innerHTML = "";
  let row = cityTableBody.insertRow();
  let nameCell = row.insertCell();
  nameCell.innerText = city.name;
  let idCell = row.insertCell();
  idCell.innerText = city.id;
  let latitudeCell = row.insertCell();
  latitudeCell.innerText = city.latitude;
  let longitudeCell = row.insertCell();
  longitudeCell.innerText = city.longitude;
}



listCities();
