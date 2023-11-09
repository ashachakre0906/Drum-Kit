// var buttonClick = document.querySelector('.set');
var drumEl = document.querySelectorAll('.drum');
console.log(drumEl);
//document.queryselector all will return a nodelist its an array
//Used a for loop for loop so that it will iterate through each and every buttons in the loop
for (i = 0; i < drumEl.length; i++){
    console.log('button clicked', i);
    drumEl[i].addEventListener('click', function () {
        //  alert('I got clicked');
        var audio = new Audio('./sounds/crash.mp3');
        audio.play();
 })
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
    return num1 * num2
}

//Function which will accept the above functions as inputs
function calculator(num1, num2, operator) {
    return operator(num1, num2);
}
console.log(calculator(10, 4, division));

//Hiw to play sounds on the website.