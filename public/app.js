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


const feelings = [
  "Angry",
  "Cold",
  "Confused",
  "Happy",
  "Ouchie",
  "Sad",
  "Scared",
  "Surprised",
  "Tired",
]


const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]


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

//random feelings generator
function getFeeling () {
  randomFeeling = feelings[Math.floor(Math.random() * feelings.length)];
  document.getElementById("colour").textContent = randomFeeling;
  feelingsGame()
  console.log("random feeling generated")
}

function getLetter () {
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  document.getElementById("colour").textContent = randomLetter;
  alphabetGame()
  console.log("random letter generated")
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




function myTheme () {
let stickerThemes=document.getElementsByClassName("stickerTheme")
let chooseSticker = document.getElementsByClassName("chooseSticker")

  for (let s of stickerThemes) {
    if (!s.classList.contains("is-hidden")) {
      s.classList.add("is-hidden")
      console.log("hidden class added")
    }
  }

  for (let c of chooseSticker) {
    if (c.classList.contains("active")) {
      c.classList.remove("active")
      console.log ("ACTIVE class removed")
    }
  }


}


function getId(theme) {
instruction.classList.remove("is-hidden");
currentGame = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
console.log(currentGame)
myTheme()

  if (currentGame.includes("colours")) {
    console.log("url contains colours")
    getColour()
    coloursGame()
  } else if (currentGame.includes("numbers")) {
    console.log("url contains numbers")
    getNumber()
    numbersGame()
  } else if (currentGame.includes("feelings")) {
    console.log("url contains feelings")
    getFeeling()
    feelingsGame()
  } else if (currentGame.includes("alphabet")) {
    console.log("url contains alphabet")
    getLetter()
    alphabetGame()
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


newTheme.addEventListener("click", function () {
  instruction.classList.add("is-hidden");
  console.log("new theme selected and the instructions should disappear")
  
myTheme()

})


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

function feelingsGame () {
  console.log("feelings game is running")
  feelingButtons.onclick=buton;
}

function alphabetGame () {
  console.log('alphabet game is running')
  letterButtons.onclick=buton;
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
    } else if (currentGame.includes("feelings")) { 
      feelingButtons.style.display = "none";
     } else if (currentGame.includes("alphabet")) {
       letterButtons.style.display= "none";
     }

      instruction.style.display ="none"
      allTheDropDownOptions.style.display = "none";
    } else {
      wrong.style.display = "block";
      correct.style.display = "none";
      reset.style.display = "none";
      newTheme.style.display="none";

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
 
  } else if (currentGame.includes("feelings")) {
    console.log("url contains feelings")
    getFeeling()
    feelingButtons.style.display = "block";
  } else if (currentGame.includes("alphabet")) {
    getLetter()
    letterButtons.style.display="block";
  } 
  else {
    console.log('broken')
  }
  
  instruction.style.display="block"
  allTheDropDownOptions.style.display = "block"
  correct.style.display = "none";
  reset.style.display = "none";

});