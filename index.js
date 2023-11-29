var drumEl = document.querySelectorAll(".drum");
console.log(drumEl);
var buttonEl = document.querySelector("button");
console.log(buttonEl);
//document.queryselector all will return a nodelist its an array
//Used a for loop for loop so that it will iterate through each and every buttons in the loop
for (i = 0; i < drumEl.length; i++) {
  console.log("button clicked", i);
  console.log(this);
  drumEl[i].addEventListener("click", function () {
    this.style.color = "white";
    // console.log(this);
    var buttonInnerHtml = this.innerHTML;
    console.log(buttonInnerHtml);
    makeSound(buttonInnerHtml);
    addAnimation(buttonInnerHtml)
    
    //Using Switch Statement to playing multiple sounds on the drum kit
    
    //Using ifelse statement
    /* if (buttonInnerHtml === "w") {
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
    } else if (buttonInnerHtml === "a") {
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
    } else if (buttonInnerHtml === "s") {
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
    } else if (buttonInnerHtml === "d") {
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
    } else if (buttonInnerHtml === "j") {
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
    } else if (buttonInnerHtml === "k") {
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
    } else if (buttonInnerHtml === "l") {
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
    } */
  });
}
//High order functions and functions as arguments
//Function to add numbers
// function add(num1, num2) {
//   return num1 + num2;
// }
// //Function to substract numbers

// function substract(num1, num2) {
//   return num1 - num2;
// }

// //Function for division

// function division(num1, num2) {
//   return num1 / num2;
// }

//Function for multiplication
// function multiplication(num1, num2) {
//   return num1 * num2;
// }

//Function which will accept the above functions as inputs
// function calculator(num1, num2, operator) {
//   return operator(num1, num2);
// }
// console.log(calculator(10, 4, division));

//How to play sounds on the website.
//Adding keypress events to the webpage
document.addEventListener('keypress', function (event) {
  console.log(event);
  makeSound(event.key);
  addAnimation(event.key);
});
//Understanding callbacks and how to respond to events
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var kickbass = new Audio("./sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "l":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(buttonInnerHtml);
      break;
  }
}

function sayHi(to) {
  console.log(`hey, say hello to ${to}`);
}
sayHi('vivaan');

//Adding animation to the website
//Add the class pressed to the html element so that the user knows which button is pressed

function addAnimation (currentkey) {
  var activeButton = document.querySelector('.' + currentkey)
  console.log(activeButton);
  //Adding animation which button is clicked
  //Adding the class pressed so that the button is faded
  activeButton.classList.add('pressed')
}
// addAnimation();