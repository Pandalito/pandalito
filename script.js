// BOTON PARA CAMBIAR EL COLOR 
const btn = document.querySelector(".btn-styles");
btn.addEventListener("click", () => {
    const root = document.documentElement;
    const theme = root.getAttribute("data-theme");

    const change = theme === "light" ? "dark" : "light";

    root.setAttribute("data-theme", change);
});

//ANIMACIÓN DE MI ALIAS
const title_text = "PANDALITO";
const title = document.querySelector(".title_text");
const cursor = document.querySelector(".cursor");

let letter = 0;

function write() {
    if (letter < title_text.length) {
        title.textContent += title_text[letter];
        letter++;
        setTimeout(write, 100);
    } else {
        setTimeout(() => {
            cursor.classList.add("cursor-finish");
        }, 2300);
    }
}

if (title && cursor) {
    write();
}

// ANIMACIÓN DE LAS "IDEAS"
document.querySelectorAll(".spark").forEach((spark) => {
    const retrasoAleatorio = (Math.random() * 3).toFixed(2);
    spark.style.setProperty("--delay", retrasoAleatorio + "s");
});

// VIEWPORT DINÁMICO RESPONSIVE
function initDynamicViewport() {
    const setViewportUnits = () => {
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        // Inyectamos las variables exactas en píxeles al elemento raíz
        document.documentElement.style.setProperty("--innerVe", `${vh}px`);
        document.documentElement.style.setProperty("--innerHo", `${vw}px`);
    };

    window.addEventListener("resize", setViewportUnits);
    window.addEventListener("orientationchange", setViewportUnits);
    setViewportUnits();
}

// Inicializar al cargar el documento
document.addEventListener("DOMContentLoaded", initDynamicViewport);
