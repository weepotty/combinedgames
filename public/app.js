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

const numbers = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];



//code for change in opacity on hovering
function reduceOpacity(x) {
  x.style.opacity = 0.8;
  
}

function normalOpacity(x) {
  x.style.opacity = 1.0;
  
}

//what functions to run when the window loads


// window.onload = myGame;
// window.onload = getColour;

// random colour generator
function getColour () {
  randomColour = colours[Math.floor(Math.random() * colours.length)];
  document.getElementById("colour").textContent = randomColour;
  coloursGame()
}

// random number generator
function getNumber () {
  randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  document.getElementById("colour").textContent = randomNumber;
  numbersGame()
  console.log("random number generated")
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


//choosing the sticker theme


const chooseSticker = document.getElementsByClassName("chooseSticker")


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


function getId(theme) {
currentGame = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
console.log(currentGame)
  if (currentGame.includes("colours")) {
    console.log("url contains colours")
    getColour()
    coloursGame()
  } else if (currentGame.includes("numbers")) {
    console.log("url contains numbers")
    getNumber()
    numbersGame()
  } else {
    console.log('broken')
  }
  
  
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
        case (theme.id === "underTheSea"): document.getElementById("dropdownUnderTheSea").classList.remove("is-hidden"); document.getElementById("dropdownUnderTheSeaSelect").classList.add("active")
       break;
        case (theme.id === "monsters"): document.getElementById("dropdownMonsters").classList.remove("is-hidden");document.getElementById("dropdownMonsters").classList.add("active"); getMonster(); reset.addEventListener("click", function () {
          getMonster();
        })
        break;
        
    
    default:console.log("error in switch")
      }

    }   
const dropdownMonsters = document.getElementById("dropdownMonsters")
const newTheme = document.getElementById("newTheme")

// newTheme.addEventListener("click", function () {
// location.reload()

// })


// choosing sticker from dropdown

function getStickerChoice () {
  let stickerChoice = document.querySelector('select.active').value
  document.getElementById("animalImage").src = `images/${stickerChoice}.png`;
}


//random monster generator
const monsters = [
  "monster1", "monster2", "monster3", "monster4", "monster5", "monster6", "monster7", "monster8", "monster9", "monster10"
];

function getMonster () {
  {
    randomMonster = monsters[Math.floor(Math.random() * monsters.length)];
    document.getElementById("animalImage").src = `images/${randomMonster}.png`;
    
  }
}


function movePanel () {
  window.location.hash = "footer"
}


//code for what to display when icon is clicked
function coloursGame() {
  colourButtons.onclick = buton; 
 
}

function numbersGame() {
  console.log("numbers game is running")
  numberButtons.onclick = buton; 
 
}

function buton(e) {
  if (dropdownMonsters.classList.contains("active")) {
getMonster()
  } else {
  getStickerChoice()}
  
  console.log("click detected")
  if (e.target.tagName == "IMG") {
    console.log(document.getElementById("colour").textContent)
    if (e.target.id === document.getElementById("colour").textContent) {
      correct.style.display = "block";
      wrong.style.display = "none";
      reset.style.display = "block";
      if (currentGame.includes("colours")) {
        colourButtons.style.display = "none";
      } else if (currentGame.includes("numbers")) { 
     numberButtons.style.display = "none";
    }

      instruction.style.display ="none"
      allTheDropDownOptions.style.display = "none";
    } else {
      wrong.style.display = "block";
      correct.style.display = "none";
      reset.style.display = "block";
    }
  }
}


reset.addEventListener("click", function () {
  movePanel ();
  if (currentGame.includes("colours")) {
    console.log("url contains colours")
    getColour()
    colourButtons.style.display = "block";

   
  } else if (currentGame.includes("numbers")) {
    console.log("url contains numbers")
    getNumber()
    numberButtons.style.display = "block";

 
  } else {
    console.log('broken')
  }
  
  instruction.style.display="block"
  allTheDropDownOptions.style.display = "block"
  correct.style.display = "none";
  reset.style.display = "none";

});