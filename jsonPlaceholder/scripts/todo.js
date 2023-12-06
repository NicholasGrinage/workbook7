"use strict";
const idTextbox = document.querySelector("#idTextbox");
const displayButton = document.querySelector("#displayButton");
const messageDiv = document.querySelector("#messageDiv");

function displayToDo() {
    const toDoId = idTextbox.value
  fetch("https://jsonplaceholder.typicode.com/todos/" + toDoId)
    .then((response) => response.json())
    .then((toDo) => 
    {
      messageDiv.innerText = `
     Title: ${toDo.title}
     Completed: ${toDo.completed}
      `;
    });
}

displayButton.onclick = displayToDo;
