let light = true; // Define the light variable to track the current mode
const allElements = document.querySelectorAll("*");
const toggleModeBtn = document.getElementById("modeBtn");

function toggleMode() {
    allElements.forEach(element => {
        element.classList.toggle("dark");
    });

    if (light) {
        document.body.style.background = "linear-gradient(45deg, rgb(22, 22, 22), rgb(110, 11, 146))";
    } else {
        document.body.style.background = "linear-gradient(45deg, #FFAFCC, #BDE0FE)";
    }

    // Toggle the light variable
    light = !light;
}

// Attach the function to the button's onclick event
toggleModeBtn.onclick = toggleMode;
