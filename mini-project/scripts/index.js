"use strict";
const cityDropdown = document.querySelector("#cityDropdown");
const cityTableBody = document.querySelector("#cityTableBody");

let cities = [
  { name: "Benbrook, TX", latitude: 32.6732, longitude: -97.4606, id: 1 },
  { name: "Pittsburgh, PA", latitude: 40.442829, longitude: -79.950432, id: 2 },
  { name: "Philadelphia, PA", latitude: 39.9526, longitude: -75.165222, id: 3 },
  { name: "Detroit, MI", latitude: 42.331429, longitude: -83.045753, id: 4 },
];

function listCities() {
  for (const city of cities) {
    let option = new Option(city.name);
    cityDropdown.appendChild(option);
  }
}

function displayCityTable(cities) {
  for (const city of cities) {
    let tr = cityTableBody.insertRow();
    let td1 = tr.insertCell();
    td1.innerText = city.name;
    let td2 = tr.insertCell();
    td2.innerText = city.id();
    let td3 = tr.insertCell();
    td3.innerText = city.latitude();
    let td4 = tr.insertCell();
    td4.innerText = city.longitude;
  }
}

// async function loadCity() {
//   let response = await fetch("http://jsonplaceholder.typicode.com/users/1");
//   let data = await response.json();
//   console.log(data);
//   displayCityTable(data)
// }

listCities();
displayCityTable(cities);
