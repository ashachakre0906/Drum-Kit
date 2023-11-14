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
    console.log(this);
    var buttonInnerHtml = this.innerHTML;
    console.log(buttonInnerHtml);
    //Using Switch Statement
    switch (buttonInnerHtml) {
      case "w":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;
      default:
        break;
    }
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
function add(num1, num2) {
  return num1 + num2;
}
//Function to substract numbers

function substract(num1, num2) {
  return num1 - num2;
}

//Function for division

function division(num1, num2) {
  return num1 / num2;
}

//Function for multiplication
function multiplication(num1, num2) {
  return num1 * num2;
}

//Function which will accept the above functions as inputs
function calculator(num1, num2, operator) {
  return operator(num1, num2);
}
console.log(calculator(10, 4, division));

//How to play sounds on the website.
