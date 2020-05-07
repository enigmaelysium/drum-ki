var numberofbutton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofbutton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", clicko);

    function clicko() {

        var buttonInerhtml = this.innerHTML;

        sound(buttonInerhtml);
        anemation(buttonInerhtml);
    }


}





document.addEventListener("keypress", function(event) {

    sound(event.key);
    anemation(event.key);

});

function sound(key) {

    switch (key) {

        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "A":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "S":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "D":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "f":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "F":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "g":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "G":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "h":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "H":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "j":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "J":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInerhtml);
    }
}

function anemation(theanemation) {
    var theanimationClass = document.querySelector("." + theanemation);

    theanimationClass.classList.add("pressed");

    setTimeout(function() {

        theanimationClass.classList.remove("pressed");

    }, 100);

}