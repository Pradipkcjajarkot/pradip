const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validate all fields
  checkInputs();
});

function checkInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  // Name Validation
  if (nameValue === "") {
    setError(nameInput, "Name is required");
  } else if (nameValue.length < 3) {
    setError(nameInput, "Name must be at least 3 characters");
  } else {
    setSuccess(nameInput);
  }

  // Email Validation
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Email is not valid");
  } else {
    setSuccess(email);
  }

  // Password Validation
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 6) {
    setError(password, "Password must be at least 6 characters");
  } else {
    setSuccess(password);
  }

  // Confirm Password Validation
  if (confirmPasswordValue === "") {
    setError(confirmPassword, "Please confirm your password");
  } else if (passwordValue !== confirmPasswordValue) {
    setError(confirmPassword, "Passwords do not match");
  } else {
    setSuccess(confirmPassword);
  }
}

function setError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  const small = formGroup.querySelector("small");
  small.innerText = message;
}

function setSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}
