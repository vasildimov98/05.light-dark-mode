const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const modeTextContent = toggleIcon.children[0];
const modeIcon = toggleIcon.children[1];
const title = document.getElementById("title");
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const DARK_MODE = "dark";
const LIGHT_MODE = "light";

// Toggle Between Dark and Light Modes
function toggleBetweenModes(mode) {
    title.textContent = mode === DARK_MODE ? "Dark Mode" : "Light Mode";
    nav.style.backgroundColor = mode === DARK_MODE ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
    textBox.style.backgroundColor = mode === DARK_MODE ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";

    modeTextContent.textContent = mode === DARK_MODE ? "Dark Mode" : "Light Mode";
    mode === DARK_MODE ? modeIcon.classList.replace('fa-sun', 'fa-moon') : modeIcon.classList.replace('fa-moon', 'fa-sun');;

    mode === DARK_MODE ? setImageDependingOnMode(DARK_MODE) :setImageDependingOnMode(LIGHT_MODE);
}

// Switch Theme Dynamically
function switchTheme(event) {
    if(!event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleBetweenModes(LIGHT_MODE);
        return;
    }

    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleBetweenModes(DARK_MODE);
}

// Helper Function
function setImageDependingOnMode(mode) {
    image1.src = `./img/undraw_proud_coder_${mode}.svg`;
    image2.src = `./img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `./img/undraw_conceptual_idea_${mode}.svg`;
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === DARK_MODE) {
        toggleSwitch.checked = true;
        toggleBetweenModes(DARK_MODE);
    }
}