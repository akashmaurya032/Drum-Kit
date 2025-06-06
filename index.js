function soundPlay(text){
    var audio;
    switch (text) {
        case "w":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            break;
    }


}

//Button click
var arr = document.querySelectorAll("button");
for(var i = 0; i < 7; i++)
{
    arr[i].addEventListener("click", function (){
        //alert("hey! i got clicked");
        var text = this.innerHTML;
        soundPlay(text);
        flash(text);
        setTimeout(reset, 500);
    });
}

//keyboard click

document.addEventListener("keydown", function (event){
    var text = event.key;
    soundPlay(text);
    flash(text);
    setTimeout(reset, 500);
});

// flash animation

function flash(text){
    document.querySelector("." + text).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + text).classList.remove("pressed");
    }, 500);
}

