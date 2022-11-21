function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

var action = 1;

function darkText() {
  if (action == 1) {
    document.getElementById("clock").style.borderColor = "#121212";
    document.getElementById("clock").style.color = "#121212";
    document.getElementById("boutton").textContent = "☽";
    action = 2;
  } else {
    document.getElementById("clock").style.borderColor = "#f7f7f7";
    document.getElementById("clock").style.color = "#f7f7f7";
    document.getElementById("boutton").textContent = "☼";
    action = 1;
  }
}