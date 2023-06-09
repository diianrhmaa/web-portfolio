// Select all navbar links
const navLinks = document.querySelectorAll(".navbar-nav a");

// Loop through each link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove "active" class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add "active" class to the clicked link
    this.classList.add("active");
  });
});

function submitForm() {
  var form = document.querySelector("form");

  // Memeriksa nilai inputan sebelum memeriksa validitas form
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    messageInput.value.trim() === ""
  ) {
    showAlert("danger", "Please fill in all the required fields.");
    return;
  }

  // Memeriksa validitas form
  if (!form.checkValidity()) {
    showAlert("danger", "Please fill in all the required fields.");
    return;
  }

  var formData = new FormData(form);

  fetch("/", {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      if (response.ok) {
        showAlert("success", "Form submitted successfully!");
        form.reset();
      } else {
        showAlert("danger", "Form submission failed. Please try again later.");
      }
    })
    .catch(function (error) {
      showAlert("danger", "An error occurred. Please try again later.");
    });
}

function showAlert(type, message) {
  var alertContainer = document.getElementById("alert-container");
  var alert = document.createElement("div");
  alert.classList.add("alert", "alert-" + type);
  alert.textContent = message;
  alertContainer.appendChild(alert);
  setTimeout(function () {
    alertContainer.removeChild(alert);
  }, 5000);
}

const bShow = document.querySelector("#b-more");
const bLess = document.querySelector("#b-less");

bShow.addEventListener("click", function () {
  bLess.classList.remove("visually-hidden");
  bShow.classList.add("visually-hidden");
});

bLess.addEventListener("click", function () {
  bShow.classList.remove("visually-hidden");
  bLess.classList.add("visually-hidden");
});
