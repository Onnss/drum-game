//setting the background image

document.getElementById('q').style.background="url('./images/tom1.png')"
document.getElementById('s').style.background="url('./images/kick.png')"
document.getElementById('d').style.background="url('./images/tom2.png')"
document.getElementById('f').style.background="url('./images/snare.png')"
document.getElementById('g').style.background="url('./images/tom3.png')"
document.getElementById('h').style.background="url('./images/crash.png')"
document.getElementById('j').style.background="url('./images/tom4.png')"

//adding event listners

var numberButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

//functions declaration

function makeSound(key) {

  switch (key) {
    case "q":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

    case "d":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "f":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

    case "g":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    
    case "h":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
    case "j":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
