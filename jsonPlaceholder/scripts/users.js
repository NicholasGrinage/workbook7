"use strict";
const idTextbox = document.querySelector("#idTextbox");
const displayButton = document.querySelector("#displayButton");
const messageParagraph = document.querySelector("#messageParagraph");
const userInfoTableBody = document.querySelector("#userInfoTableBody");
function displayToDo() {
 
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
    loadUsersTable(data)
    });
}

function loadUsersTable(users) {
  for (const user of users) {
    let tr = userInfoTableBody.insertRow();
    let td1 = tr.insertCell();
    td1.innerText = user.name;
    let td2 = tr.insertCell();
    td2.innerText = user.username;
    let td3 = tr.insertCell();
    td3.innerText = user.address.city;
    let td4 = tr.insertCell();
    td4.innerText = user.address.street;
    let td5 = tr.insertCell();
    td5.innerText = user.email;
    let td6 = tr.insertCell();
    td6.innerText = user.address.suite;
  }

}

window.onload = displayToDo 

