document.addEventListener("DOMContentLoaded", function () {
  // Toggle Background Color
  const colorToggleButton = document.getElementById("colorToggleButton");
  colorToggleButton.addEventListener("click", function () {
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "lightblue"
        ? "lightgreen"
        : "lightblue";
  });

  // Slider with Real-Time Feedback
  const textSizeSlider = document.getElementById("textSizeSlider");
  const dynamicText = document.getElementById("dynamicText");
  textSizeSlider.addEventListener("input", function () {
    dynamicText.style.fontSize = `${textSizeSlider.value}px`;
  });

  // Modal with Event Listeners
  const openModalButton = document.getElementById("openModalButton");
  const myModal = document.getElementById("myModal");
  const closeModalButton = document.getElementById("closeModalButton");

  openModalButton.addEventListener("click", function () {
    myModal.style.display = "block";
  });

  closeModalButton.addEventListener("click", function () {
    myModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == myModal) {
      myModal.style.display = "none";
    }
  });

  // Form Validation
  const form = document.getElementById("myForm");
  form.addEventListener("submit", function (event) {
    let isValid = true;

    // Name Validation
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (name.value.length < 3) {
      nameError.textContent = "Name must be at least 3 characters.";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    // Email Validation
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      emailError.textContent = "Enter a valid email address.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Password Validation
    const password = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password.value)) {
      passwordError.textContent =
        "Password must be at least 8 characters, include an uppercase letter and a number.";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  // Dropdown with Custom Message
  const dropdownMenu = document.getElementById("dropdownMenu");
  const dropdownMessage = document.getElementById("dropdownMessage");
  dropdownMenu.addEventListener("change", function () {
    dropdownMessage.textContent = `You selected: ${dropdownMenu.value}`;
  });
});
