const writeBtns = document.getElementsByClassName("write");
const display = document.getElementById("display");

for (let btn of writeBtns){
    btn.addEventListener("click", function(){
        const writeValue = this.textContent;
        display.value += writeValue;
    });
};

const clear = document.getElementById("CLEAR");
const backspace = document.getElementById("backspace");
const solve = document.getElementById("SOLVE");

solve.onclick = function(){
    display.value = eval(display.value);
};

clear.onclick = function(){
    display.value = "";
};

backspace.onclick = function(){
    //TODO: Add a backspace functionality
};


let dark = true;

function toggleMode(){
    if (dark){
        document.body.style.background = "linear-gradient(45deg,rgb(22, 22, 22),rgb(110, 11, 146))";
        dark = false;
    }
    else{
        document.body.style.background = "linear-gradient(-45deg,rgb(25, 162, 180),rgb(225, 135, 32))";
        dark = true;
    }
}

window.addEventListener("keydown", function(e) {
    const validBtn = document.querySelector(`button[key="${e.key}"]`);
    if (!validBtn) return;

    // Handle different key actions
    switch (e.key) {
        case "Delete":
            display.value = "";
            break;
        case "Backspace":
            // TODO: Add a backspace functionality
            break;
        case "Enter":
            display.value = eval(display.value);
            break;
        default:
            display.value += e.key;
            break;
    }

    // Add the active class to trigger animation
    validBtn.classList.add("active");

    // Now we need to listen for the transition end event for this button
    validBtn.addEventListener("transitionend", function removeTransition(e) {
        if (e.propertyName !== "transform") return;
        validBtn.classList.remove("active");
        validBtn.removeEventListener("transitionend", removeTransition); // Remove the event listener once it has fired
    });
});
