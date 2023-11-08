// var buttonClick = document.querySelector('.set');
var drumEl = document.querySelectorAll('.drum');
console.log(drumEl);

for (i = 0; i < drumEl.length; i++){
    console.log('button clicked', i);
    drumEl[i].addEventListener('click', function () {
     alert('I got clicked')
 })
}