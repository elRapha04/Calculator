const writeBtns = document.getElementsByClassName("write");
const display = document.getElementById("display");

for (let btn of writeBtns){
    btn.addEventListener("click", function(){
        const writeValue = this.textContent;
        display.value += writeValue;
    });
};

const clear = document.getElementById("CLEAR");
const solve = document.getElementById("SOLVE");

solve.onclick = function(){
    display.value = eval(display.value);
};

clear.onclick = function(){
    display.value = "";
};
