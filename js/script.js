// Boton del tema de la pagina
const btn_theme = document.querySelector(".tema");
const root = document.documentElement

btn_theme.addEventListener("click", () => {
    const theme = root.getAttribute("data-theme");
    const change = theme == "dark" ? "light" : "dark";
    root.setAttribute("data-theme", change);
    
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