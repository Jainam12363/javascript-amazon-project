const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

/* ---------------- REGISTER ---------------- */
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    clearErrors();

    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    let valid = true;

    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      showError(email, "Invalid email format");
      valid = false;
    }

    if (!/^[6-9]\d{9}$/.test(phone.value)) {
      showError(phone, "Invalid phone number");
      valid = false;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password.value)) {
      showError(password, "Password too weak");
      valid = false;
    }

    if (password.value !== confirmPassword.value) {
      showError(confirmPassword, "Passwords do not match");
      valid = false;
    }

    if (valid) {
      alert("Registration successful!");
      window.location.href = "login.html"; // redirect to login
    }
  });
}

/* ---------------- LOGIN ---------------- */
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    clearErrors();

    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");

    let valid = true;

    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      showError(email, "Invalid email");
      valid = false;
    }

    if (password.value.trim() === "") {
      showError(password, "Password required");
      valid = false;
    }

    if (valid) {
      alert("Login successful!");
      window.location.href = "index.html"; 
    }
  });
}

/* ---------------- HELPERS ---------------- */
function showError(input, message) {
  input.nextElementSibling.innerText = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(e => e.innerText = "");
}
