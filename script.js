function handleSumbit(event) {
  event.preventDefault();
  const errorNode = document.querySelector("#errormsg");

  errorNode.innerHTML = "";
  const name = document.getElementById("name").value;
  const yearOfBirth = parseInt(document.getElementById("birth").value);
  const zipcode = document.getElementById("zipcode").value;
  const password = document.getElementById("password").value;
  const pizzaChoice = document.getElementById("pizzaChoice");

  let errors = false;

  if (name.length < 3) {
    setError("Name must be at least 3 characters long.");
    errors = true;
  }
  console.log(yearOfBirth);
  if (yearOfBirth <= 1900 || yearOfBirth >= 2100 || yearOfBirth == "") {
    setError("Year of birth must be between 1901 and 2099.");
    errors = true;
  }

  let livesInUS = document.getElementById("usa").checked;

  if (livesInUS && zipcode.length != 5) {
    console.log(zipcode);
    setError("Zipcode must be a 5 digit number.");
    errors = true;
  }

  if (password.length < 8) {
    setError("Password must be at least 8 characters long.");
    errors = true;
  }

  if (pizzaChoice == "") {
    setError(" You must select a preferred type of pizza.");
    errors = true;
  }

  if (!errors) {
    document.getElementById("successmsg").textContent = "Submitted";
  }
}

// Setting Error
function setError(message) {
  const errorNode = document.querySelector("#errormsg");
  errorNode.insertAdjacentHTML("beforeend", message);
}
