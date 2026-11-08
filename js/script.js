//constante general (por si acaso lo uso en más de una cosa)
const root = document.documentElement

// RUIDOOOOOOOOOOOOOOOOOOOOOOOOOOO!
const canvas = document.getElementById("ruido");
const lapiz = canvas.getContext("2d");

// Por si acaso
let funciona = true;
let ultimoFrame = 0;

//medir tamaño del canvas y la cantidad de pixeles que lee
function tamaño() {
    canvas.width = Math.ceil(innerWidth / 3);
    canvas.height = Math.ceil(innerHeight / 3);
}

// Dibujar en el canvas
function dibujo() {
    const img = lapiz.createImageData(canvas.width, canvas.height);
    const dibujo = img.data;

    for (let i = 0; i < dibujo.length; i += 4) {
        const v = Math.random() * 255;

        dibujo[i] = v;
        dibujo[i + 1] = v;
        dibujo[i + 2] = v;
        dibujo[i + 3] = 255;
    }

    lapiz.putImageData(img, 0, 0);
}

// Ordenar el siguiente "aparecido"
function bucle(t) {
    if (!funciona) return;

    if (t - ultimoFrame >  1000 / 12) {
        ultimoFrame = t;
        dibujo();
    }

    requestAnimationFrame(bucle);
}

// Inicio
tamaño();
requestAnimationFrame(bucle);

// Adaptación en tamaño
window.addEventListener("resize", () => {
    tamaño();
});

// BOTON:TEMA DE LA PAGINA!
const btn_theme = document.querySelector(".tema");

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

// ABOUT: CUADRILLAS!
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