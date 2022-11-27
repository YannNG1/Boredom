function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

var action = 1;

function darkText() {
  if (action == 1) {
    document.getElementById("clock").style.borderColor = "#121212";
    document.getElementById("clock").style.color = "#121212";
    document.getElementById("boutton").textContent = "Dark mode";
    document.getElementById("banner").style.color = "#121212";
    document.getElementById("banner").style.backgroundImage =
      "linear-gradient(290deg, #f0f0f0, #ffffff)";
    action = 2;
  } else {
    document.getElementById("clock").style.borderColor = "#f0f0f0";
    document.getElementById("clock").style.color = "#f0f0f0";
    document.getElementById("boutton").textContent = "Light mode";
    document.getElementById("banner").style.color = "#f0f0f0";
    document.getElementById("banner").style.backgroundImage =
      "linear-gradient(290deg, #121212, #363636)";
    action = 1;
  }
}