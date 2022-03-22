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

const fruits = [
  "apple",
  "banana",
  "blueberries",
  "mango",
  "durian",
  "lemon",
  "mangosteen",
  "grapes",
  "orange",
  "pear",
  "pineapple",
  "strawberry",
  "watermelon"
]

const vegetables = [
  "aubergine",
  "broccoli",
  "carrots",
  "cucumber",
  "lettuce",
  "onion",
  "peas",
  "potato",
  "radish",
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
  document.getElementById("descriptor").textContent = "Button"
  coloursGame()
}

// random number generator
function getNumber () {
  randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  document.getElementById("colour").textContent = randomNumber;
  document.getElementById("descriptor").textContent = ""
  numbersGame()
}

//random feelings generator
function getFeeling () {
  randomFeeling = feelings[Math.floor(Math.random() * feelings.length)];
  document.getElementById("colour").textContent = randomFeeling;
  document.getElementById("descriptor").textContent = "Face"
  feelingsGame()
  
}

function getLetter () {
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  document.getElementById("colour").textContent = randomLetter;
  document.getElementById("descriptor").textContent = ""
  alphabetGame()

}

function getFruit () {
  randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
  document.getElementById("colour").textContent = randomFruit;
  document.getElementById("descriptor").textContent = ""
  console.log("random fruit generated")
  fruitGame()
}

function getVeg () {
  randomVeg = vegetables[Math.floor(Math.random() * vegetables.length)];
  document.getElementById("colour").textContent = randomVeg;
  document.getElementById("descriptor").textContent = ""
  vegGame()
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
    }
  }

  for (let c of chooseSticker) {
    if (c.classList.contains("active")) {
      c.classList.remove("active")
      
    }
  }


}


function getId(theme) {
instruction.classList.remove("is-hidden");
currentGame = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');

myTheme()

  if (currentGame.includes("colours")) {
    getColour()
    coloursGame()
  } else if (currentGame.includes("numbers")) {
    getNumber()
    numbersGame()
  } else if (currentGame.includes("feelings")) {
    getFeeling()
    feelingsGame()
  } else if (currentGame.includes("alphabet")) {
    getLetter()
    alphabetGame()
  } else if (currentGame.includes("fruits")) {
    getFruit()
    fruitGame()
  } else if (currentGame.includes("vegetables")) {
    getVeg()
    vegGame()
  } 
  else {
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
        case (theme.id === "dogs"): document.getElementById("dropdownDogs").classList.remove("is-hidden");document.getElementById("dropdownDogs").classList.add("active"); getDog(); reset.addEventListener("click", function () {
          getDog();
        })
        break;
        case (theme.id === "bears"): document.getElementById("dropdownBears").classList.remove("is-hidden");document.getElementById("dropdownBears").classList.add("active"); getBear(); reset.addEventListener("click", function () {
          getBear();
        })
        break;
        
    
    default:console.log("error in switch")
      }

    }   
const dropdownMonsters = document.getElementById("dropdownMonsters")
const dropdownDogs = document.getElementById("dropdownDogs")
const dropdownBears = document.getElementById("dropdownBears")
const newTheme = document.getElementById("newTheme")


newTheme.addEventListener("click", function () {
  instruction.classList.add("is-hidden");
  
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

const dogs = [
  "dog1", "dog2", "dog3", "dog4", "dog5", "dog6", "dog7", "dog8", "dog9", "dog10", "dog11", "dog12", "dog13", "dog14", "dog15", "dog16", "dog17"
];

const bears = ["bear1", "bear2", "bear3", "bear4", "bear5", "bear6", "bear7", "bear8", "bear9", "bear10", "bear11", "bear12", "bear13", "bear14", "bear15", "bear16", "bear17", "bear18"]


function getMonster () {
  {
    randomMonster = monsters[Math.floor(Math.random() * monsters.length)];
    document.getElementById("animalImage").src = `images/${randomMonster}.png`;
    
  }
}


function getDog() {
  {
    randomDog= dogs[Math.floor(Math.random() * dogs.length)];
    document.getElementById("animalImage").src = `images/${randomDog}.png`;
    
  }
}

function getBear() {
  {
    randomBear= bears[Math.floor(Math.random() * bears.length)];
    document.getElementById("animalImage").src = `images/${randomBear}.png`;
    
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
  numberButtons.onclick = buton; 
 
}

function feelingsGame () {
  feelingButtons.onclick=buton;
}

function alphabetGame () {
  letterButtons.onclick=buton;
}

function fruitGame () {
 fruitButtons.onclick=buton;
}

function vegGame () {
  vegButtons.onclick=buton;
 }

function buton(e) {
  if (dropdownMonsters.classList.contains("active")) {
getMonster()
  } else if (dropdownDogs.classList.contains("active")) {
    getDog()
  } else if (dropdownBears.classList.contains("active")) {
    getBear()
  } else {
  getStickerChoice()}
  
  console.log("click detected")
  if (e.target.tagName == "IMG") {
    if (e.target.id === document.getElementById("colour").textContent) {
      correct.style.display = "block";
      wrong.style.display = "none";
      reset.style.display = "block";
      // newTheme.style.display="block";
      if (currentGame.includes("colours")) {
        colourButtons.style.display = "none";
      } else if (currentGame.includes("numbers")) { 
     numberButtons.style.display = "none";
    } else if (currentGame.includes("feelings")) { 
      feelingButtons.style.display = "none";
     } else if (currentGame.includes("alphabet")) {
       letterButtons.style.display= "none";
     } else if (currentGame.includes("fruits")) {
      fruitButtons.style.display= "none";
     } else if (currentGame.includes("vegetables")) {
      vegButtons.style.display= "none";
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
    getColour()
    colourButtons.style.display = "block";

  } else if (currentGame.includes("numbers")) {
    getNumber()
    numberButtons.style.display = "block";
 
  } else if (currentGame.includes("feelings")) {
    getFeeling()
    feelingButtons.style.display = "block";
  } else if (currentGame.includes("alphabet")) {
    getLetter()
    letterButtons.style.display="block";
  } 
  else if (currentGame.includes("fruits")) {
    getFruit()
    fruitButtons.style.display="block";
  } else if (currentGame.includes("vegetables")) {
    getVeg()
    vegButtons.style.display="block";
  } 
  else {
    console.log('broken')
  }
  
  instruction.style.display="block"
  allTheDropDownOptions.style.display = "block"
  correct.style.display = "none";
  reset.style.display = "none";

});