// many
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((usersArray) => {
    console.log(usersArray);
  });

// one
fetch("https://jsonplaceholder.typicode.com/users/5")
  .then((response) => response.json())
  .then((userObject) => {
    console.log(userObject);
  });