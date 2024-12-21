// Función para mostrar un mensaje de bienvenida en la consola
console.log("¡Bienvenido a mi página Sobre Mí!");

// Cambiar el color del encabezado al hacer clic
document.querySelector("header").addEventListener("click", () => {
    const header = document.querySelector("header");
    header.style.backgroundColor = header.style.backgroundColor === "teal" ? "#222" : "teal";
});

// Botón dinámico para mostrar un mensaje motivacional
const main = document.querySelector("main");
const motivationButton = document.createElement("button");
motivationButton.textContent = "Haz clic para motivarte";
motivationButton.style.marginTop = "20px";
motivationButton.style.padding = "10px 15px";
motivationButton.style.border = "none";
motivationButton.style.backgroundColor = "teal";
motivationButton.style.color = "white";
motivationButton.style.cursor = "pointer";
motivationButton.style.borderRadius = "5px";

motivationButton.addEventListener("click", () => {
    alert("¡Eres increíble! Sigue alcanzando tus metas. 💪");
});

main.appendChild(motivationButton);
