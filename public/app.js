const colours = [
  "Red",
  "Yellow",
  "Green",
  "Blue",
  "Orange",
  "Purple",
  "Pink",
  "Black",
  "White",
];

const randomColour = colours[Math.floor(Math.random() * colours.length)];

document.getElementById("colour").textContent = randomColour;

window.onload = myMain;

const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
const reset = document.getElementById("reset");
const colourButtons = document.getElementById("colourButtons");
const instruction = document.getElementById("instruction");
const dropdown = document.getElementById("dropdown");

correct.style.display = "none";
wrong.style.display = "none";
reset.style.visibility = "hidden";

function myMain() {
  colourButtons.onclick = buton;
}

function buton(e) {
  if (e.target.tagName == "IMG") {
    if (e.target.id === randomColour) {
      correct.style.display = "block";
      wrong.style.display = "none";
      reset.style.visibility = "visible";
      colourButtons.style.display = "none";
      instruction.innerHTML = "WELL DONE!";
      dropdown.style.display = "none";
    } else {
      wrong.style.display = "block";
      correct.style.display = "none";
      reset.style.visibility = "visible";
    }
  }
}


reset.addEventListener("click", function () {
  location.reload();
});

// Code for dropdown
function imageChange() {
  document.getElementById("animalImage").src = `images/${this.value}.png`;
}
document.getElementById("chooseAnimal").onchange = imageChange;


//code for hover
function reduceOpacity(x) {
  x.style.opacity = 0.8;
  
}

function normalOpacity(x) {
  x.style.opacity = 1.0;
  
}