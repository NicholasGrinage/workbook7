"use strict";
const courseTableBody = document.querySelector("#courseTableBody");

function displayCourses() {
  fetch("http://localhost:8081/api/courses")
    .then((response) => response.json())
    .then((data) => {
      loadCoursesTable(data);
      //console.log(data);
    });
}

function loadCoursesTable(courses) {
  for (const course of courses) {
    console.log(course);
    let tr = courseTableBody.insertRow();
    let td1 = tr.insertCell();
    td1.innerText = course.dept;
    let td2 = tr.insertCell();
    td2.innerText = course.courseNum;
    let td3 = tr.insertCell();
    td3.innerText = course.courseName;
    let td4 = tr.insertCell();
    let anchor = document.createElement("a");
    anchor.href = `details.html?courseid=${course.id}`;
    anchor.text = "See details";
    td4.appendChild(anchor);
  }
}

window.onload = displayCourses;
