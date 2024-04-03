function handleSumbit(event) {
  event.preventDefault();
  const errorNode = document.querySelector("#errormsg");

  errorNode.innerHTML = "";
  const name = document.getElementById("name").value;
  const yearOfBirth = document.getElementById("birth").value;
  const zipcode = document.getElementById("zipcode").value;
  const password = document.getElementById("password").value;
  const pizzaChoice = document.getElementById("pizzaChoice").value;

  let errors = false;

  if (name.length < 3) {
    setError("Name must be at least 3 characters long.");
    errors = true;
  }

  if (yearOfBirth <= 1900 || yearOfBirth >= 2100 || yearOfBirth == NaN) {
    setError("Year of birth must be between 1901 and 2099.");
    errors = true;
  }

  let livesInUS = document.getElementById("usa").checked;

  if (livesInUS && zipcode.length != 5) {
    setError("Zipcode must be a 5 digit number.");
    errors = true;
  }

  if (password.length == 0) {
    setError("Please enter a password.");
    errors = true;
  }

  else if (password.length < 8) {
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

const usaCheckbox = document.querySelector("#usa");
const zipcodeRequired = document.querySelector("#zip-required");

usaCheckbox.addEventListener("change", () => {
  if (usaCheckbox.checked == true) {
    zipcodeRequired.classList.remove("d-none");
  } else {
    zipcodeRequired.classList.add("d-none");
  }
});

function setError(message) {
  const errorNode = document.querySelector("#errormsg");
  errorNode.insertAdjacentHTML("beforeend", ` <div>${message}</div>`);
}
