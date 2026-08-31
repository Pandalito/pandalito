// BOTON PARA CAMBIAR EL COLOR 
const btn = document.querySelector(".btn-styles");
btn.addEventListener("click", () => {
    const root = document.documentElement;
    const theme = root.getAttribute("data-theme");

    const change = theme === "light" ? "dark" : "light";

    root.setAttribute("data-theme", change);
});

// ANIMACIÓN DE LAS "IDEAS"
document.querySelectorAll(".spark").forEach((spark) => {
    const retrasoAleatorio = (Math.random() * 3).toFixed(2);
    spark.style.setProperty("--delay", retrasoAleatorio + "s");
});

