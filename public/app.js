const colours = [
  "Red",
  "Yellow",
  "Yellow",
  "Green",
  "Blue",
  "Orange",
  "Purple",
  "Pink",
  "Pink",
  "Black",
  "White",
];



//what functions to run when the window loads


window.onload = myGame;
window.onload = getColour;

function getColour () {
  randomColour = colours[Math.floor(Math.random() * colours.length)];
  document.getElementById("colour").textContent = randomColour;
  myGame()
}


const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
const reset = document.getElementById("reset");
const colourButtons = document.getElementById("colourButtons");
const instruction = document.getElementById("instruction");
const allTheDropDownOptions = document.getElementById("allTheDropDownOptions");
const gamePanel = document.getElementById("gamePanel")

correct.style.display = "none";
wrong.style.display = "none";
reset.style.display = "none";
// gamePanel.style.visibility = "hidden";




function getStickerChoice () {
  let stickerChoice = document.querySelector('select.active').value
  console.log(stickerChoice)
  document.getElementById("animalImage").src = `images/${stickerChoice}.png`;
}


//code for what to display when colour button is clicked
function myGame() {
  colourButtons.onclick = buton; 
}

function buton(e) {
  getStickerChoice()
  if (e.target.tagName == "IMG") {
    if (e.target.id === randomColour) {
      correct.style.display = "block";
      wrong.style.display = "none";
      reset.style.display = "block";
      colourButtons.style.display = "none";
      instruction.style.display ="none"
      allTheDropDownOptions.style.display = "none";
    } else {
      wrong.style.display = "block";
      correct.style.display = "none";
      reset.style.display = "block";
    }
  }
}




// Code for dropdown
// function imageChange() {
//   document.getElementById("animalImage").src = `images/${this.value}.png`;
// }

const chooseSticker = document.getElementsByClassName("chooseSticker")

// for (let c of chooseSticker) {
//   c.onchange=imageChange
// }


//code for hover
function reduceOpacity(x) {
  x.style.opacity = 0.8;
  
}

function normalOpacity(x) {
  x.style.opacity = 1.0;
  
}



function myTheme () {
let stickerThemes=document.getElementsByClassName("stickerTheme")

  for (let s of stickerThemes) {
    if (!s.classList.contains("is-hidden")) {
      s.classList.add("is-hidden")
    }
  }

  for (let c of chooseSticker) {
    if (c.classList.contains("active")) {
      c.classList.remove("active")
    }
  }


}



const monsters = [
  "monster1", "monster2", "monster3", "monster4", "monster5", "monster6", "monster7", "monster8", "monster9", "monster10"
];

function getMonster () {
  {
    randomMonster = monsters[Math.floor(Math.random() * monsters.length)];
    document.getElementById("animalImage").src = `images/${randomMonster}.png`;
    
  }
}


function getId(theme) {
  
  
  switch (true) {
        case (theme.id === "animals"): ; document.getElementById('dropdownAnimals').classList.remove("is-hidden"); document.getElementById('dropdownAnimalsSelect').classList.add("active")
        break
        case (theme.id === "vehicles"):; document.getElementById("dropdownVehicles").classList.remove("is-hidden");
        document.getElementById('dropdownVehiclesSelect').classList.add("active")
        break;
        case (theme.id === "dinosaurs"): document.getElementById("dropdownDinosaurs").classList.remove("is-hidden");
        document.getElementById("dropdownDinosaursSelect").classList.add("active")
        break;
        case (theme.id === "enchanted"): document.getElementById("dropdownEnchanted").classList.remove("is-hidden"); document.getElementById("dropdownEnchantedSelect").classList.add("active")
        break;
        case (theme.id === "monsters"): document.getElementById("dropdownMonsters").classList.remove("is-hidden"); getMonster(); reset.addEventListener("click", function () {
          getMonster();
        })
        break;
        case (theme.id === "underTheSea"): document.getElementById("dropdownUnderTheSea").classList.remove("is-hidden")
    
    // default:
      }
}
const newTheme = document.getElementById("newTheme")

// newTheme.addEventListener("click", function () {
// location.reload()

// })



function movePanel () {
  window.location.hash = "footer"
}

reset.addEventListener("click", function () {
  movePanel ();
  getColour ();
  instruction.style.display="block"
  allTheDropDownOptions.style.display = "block"
  correct.style.display = "none";
  colourButtons.style.display = "block";
  reset.style.display = "none";

});