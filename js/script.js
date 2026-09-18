//para que nada se raye
document.addEventListener("DOMContentLoaded", () => {

    // BOTON PARA CAMBIAR EL COLOR 
    const btn = document.querySelector(".btn-styles");
    btn.addEventListener("click", () => {
        const root = document.documentElement;
        const theme = root.getAttribute("data-theme");

        const change = theme === "light" ? "dark" : "light";

        root.setAttribute("data-theme", change);
    });

    //ANIMACIÓN DE MI ALIAS
    const alias = document.getElementById("alias");
    const alias_full = alias.textContent;

    alias.textContent = "";
    alias.classList.add("blink");

    let letra = 0

    function escribir() {
        if (letra < alias_full.length) {
            alias.textContent += alias_full.charAt(letra);
            letra++;
            setTimeout(escribir, 100);
        }
    }
    if (alias) {
        escribir()
    }

    // El PENSADOR
    const character = document.querySelector("#pensador");

    fetch("assets/pensador.svg")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar character.svg");
            }

            return response.text();
        })
        .then(svg => {
            character.innerHTML = svg;
        })
        .catch(error => {
            console.error(error);
        });
});
