// var buttonClick = document.querySelector('.set');
var drumEl = document.querySelectorAll('.drum');
console.log(drumEl);
// buttonClick.addEventListener('click', function () {
//     alert('button clicked');
// });
drumEl.addEventListener('click', function () {
    for (i = 0; i < drumEl.length; i++){
        alert('button clicked');
    }
})