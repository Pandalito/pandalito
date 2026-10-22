// Boton del tema de la pagina
const btn_theme = document.querySelector(".tema");
const root = document.documentElement

btn_theme.addEventListener("click", () => {
    const theme = root.getAttribute("data-theme");
    const change = theme == "dark" ? "light" : "dark";
    root.setAttribute("data-theme", change);
    
});