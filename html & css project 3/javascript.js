var bulb = document.querySelector("#bulb");
var button = document.querySelector("button");

bulb.style.backgroundColor = "transparent";

var onClick = 0;

button.addEventListener("click", function(){
    if (onClick === 0 & button.innerHTML === "ON"){
        bulb.style.backgroundColor="yellow";
        onClick = 1;
        button.innerHTML="OFF"
    }
    else {
        bulb.style.backgroundColor = "gray";
        button.innerHTML = "ON"
        onClick = 0;
    }

});