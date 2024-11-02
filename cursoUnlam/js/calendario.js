document.addEventListener("DOMContentLoaded", function() {
    const dias = document.querySelectorAll(".dia");

    dias.forEach(dia => {
        dia.addEventListener("click", () => {
            if (dia.classList.contains("html")) {
                showPopup("Curso HTML", "Aprende los fundamentos de HTML, el lenguaje estándar para crear sitios web. En este curso, conocerás las principales etiquetas HTML y cómo estructurar correctamente el contenido de una página web. Desde el uso de encabezados, párrafos, imágenes y enlaces, hasta la creación de listas y formularios interactivos, te guiaremos paso a paso para que puedas construir tu propio sitio web desde cero. No se requieren conocimientos previos: este curso es ideal para quienes están comenzando en el desarrollo web.");
            } else if (dia.classList.contains("css")) {
                showPopup("Curso CSS", "Domina los conceptos fundamentales de CSS, el lenguaje de estilos que da vida y diseño a las páginas web. En este curso, aprenderás a aplicar estilos visuales a tu HTML y a estructurar el diseño de una web para hacerla atractiva y funcional. Exploraremos cómo cambiar colores, fuentes, y espaciados, además de introducir conceptos como el posicionamiento y las animaciones básicas. Este curso es ideal para quienes desean dar sus primeros pasos en el diseño web.");
            } else if (dia.classList.contains("javascript")) {
                showPopup("Curso JavaScript", "Inicia tu camino en la programación web con JavaScript, el lenguaje que da interactividad y dinamismo a las páginas web. En este curso, aprenderás los fundamentos de JavaScript, desde cómo manipular el contenido de la página hasta responder a eventos y realizar cálculos. Te guiaremos a través de los conceptos esenciales de programación para que puedas hacer que tus sitios web cobren vida. No necesitas experiencia previa en programación: este curso es perfecto para principiantes.");
            } else if (dia.classList.contains("python")) {
                showPopup("Curso Python", "Descubre el poder de la programación con Python, uno de los lenguajes más versátiles y fáciles de aprender. En este curso, aprenderás los conceptos fundamentales de Python, desde cómo escribir tus primeras líneas de código hasta trabajar con estructuras de datos y crear programas simples. Python es ideal tanto para principiantes como para aquellos que buscan una introducción práctica a la programación.");
            }
        });
    });

    document.getElementById("close-popup").addEventListener("click", () => {
        closePopup();
    });
});

function showPopup(title, summary) {
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-summary").textContent = summary;
    document.getElementById("popup").style.display = "flex";

    const btnDetalle = document.getElementById("btn-detalle");
    btnDetalle.addEventListener("click", navigateToCourse);
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function navigateToCourse() {
    window.location.href = "../html/detalles.html";
}