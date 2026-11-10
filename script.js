document.addEventListener("DOMContentLoaded", function () {
  const welcome = document.createElement("p");
  welcome.id = "welcome-message";

  const savedName = localStorage.getItem("bakeryVisitorName");

  if (savedName) {
    welcome.textContent = "Welcome back, " + savedName + "!";
  } else {
    welcome.textContent = "Welcome to North Star Bakery!";
  }

  document.body.prepend(welcome);

  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[type="email"]');
  const form = document.querySelector("form");

  if (form && nameInput && emailInput) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();

      if (name === "") {
        alert("Please enter your name.");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      localStorage.setItem("bakeryVisitorName", name);
      welcome.textContent = "Thank you, " + name + "!";

      alert("Your form has been checked successfully!");
    });
  }
});
