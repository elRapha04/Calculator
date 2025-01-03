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

// backspace.onclick = function(){

// };

let dark = true;

function toggleMode(){
    if (dark){
        document.body.style.backgroundColor = "tomato";
        dark = false;
    }
    else{
        document.body.style.backgroundColor = "white";
        dark = true;
    }
}

window.addEventListener("keydown", function(e){
    const validBtn = document.querySelector(`button[key="${e.key}"]`);
    // console.log(e.key);
    if (!validBtn) return;
    switch (e.key) {
        case ("Delete"):
            display.value = "";
            break;
        case ("Backspace"):
            
            break;
        case ("Enter"):
            display.value = eval(display.value);
            break;
        default:
            display.value += e.key;
            break;
    }
    validBtn.classList.add("active");
});

function removeTransition(e){
    if (e.propertyName !== "transform") return;
    validBtn.classList.remove("active");
}
const buttons = document.querySelectorAll("button");
buttons.forEach(validBtn => validBtn.addEventListener("transitionend", removeTransition))