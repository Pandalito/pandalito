// Boton del tema de la pagina
const btn_theme = document.querySelector(".tema");
const root = document.documentElement

function cambiarTema(tema) {
    root.dataset.theme = tema;
    localStorage.setItem("tema",tema)
}

btn_theme.addEventListener("click", () => {
    const theme = root.dataset.theme;
    if (theme === "dark") {
        cambiarTema("light");
    } else {
        cambiarTema("dark");
    }    
});

//BOTON HAMBURGUESA 
const btn_movil = document.querySelector(".icono-movil");
const movil_nav = document.querySelector(".movil-nav");
const body = document.body;

btn_movil.addEventListener("click", () => {
    body.classList.toggle("abierto");
    btn_movil.classList.toggle("abierto");
    movil_nav.classList.toggle("abierto");
});

// ABOUT: cuadrillas de conocimiento
const botones = document.querySelectorAll(".herramienta-titulo");

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        const tarjeta = boton.closest(".herramienta");
        const info = document.getElementById(boton.getAttribute("aria-controls"));

        if (!info) return;

        const abierto = boton.getAttribute("aria-expanded") === "true";

        tarjeta.classList.toggle("is-open", abierto);

        boton.setAttribute("aria-expanded", String(!abierto));
        info.setAttribute("aria-hidden", String(abierto));

    });
});