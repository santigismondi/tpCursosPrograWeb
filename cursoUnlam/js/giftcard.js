document.addEventListener("DOMContentLoaded", function () {
    const montoInput = document.getElementById("monto");
    const displayMonto = document.querySelector(".display-monto");
    const nombreInput = document.getElementById("cardnombre-input");
    const displayNombre = document.querySelector(".display-card-nombre");
    const eventoInput = document.getElementById("cardevento-input");
    const detallesTitulo = document.querySelector(".card-preview h2");
    const colorRadios = document.querySelectorAll('input[name="text-color"]');
    const cardPreview = document.querySelector(".card-preview");
    const positionRadios = document.querySelectorAll('input[name="Position"]');
    const fontSizeSelect = document.getElementById("font-size");
    const backgroundRadios = document.querySelectorAll('input[name="background"]');

    // Actualiza el monto en la vista previa
    montoInput.addEventListener("input", function () {
        const montoValue = montoInput.value;
        displayMonto.textContent = montoValue ? `$${montoValue}` : '--';
    });

    // Actualiza el nombre en la vista previa
    nombreInput.addEventListener("input", function () {
        const nombreValue = nombreInput.value;
        displayNombre.textContent = nombreValue ? nombreValue : '--';
    });

    // Actualiza el título de detalles con el nombre del evento
    eventoInput.addEventListener("input", function () {
        const eventoValue = eventoInput.value;
        detallesTitulo.textContent = eventoValue ? eventoValue : 'Detalles de la Gift Card';
    });

    // Cambia el color de la tipografía de la vista previa
    colorRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            if (this.checked) {
                cardPreview.style.color = this.value; // Cambia el color de la vista previa
            }
        });
    });

// Cambia la posición de la tipografía de la vista previa
positionRadios.forEach(radio => {
    radio.addEventListener("change", function () {
        if (this.checked) {
            switch (this.value) {
                case "center":
                    cardPreview.style.justifyContent = "center"; // Centra verticalmente
                    cardPreview.style.alignItems = "center"; // Centra horizontalmente
                    break;
                case "top/left":
                    cardPreview.style.justifyContent = "flex-start"; // Alinea al inicio (arriba)
                    cardPreview.style.alignItems = "flex-start"; // Alinea a la izquierda
                    break;
                case "bottom/right":
                    cardPreview.style.justifyContent = "flex-end"; // Alinea al final (abajo)
                    cardPreview.style.alignItems = "flex-end"; // Alinea a la derecha
                    break;
            }
        }
    });
});

// Cambia el tamaño de la fuente de la vista previa
fontSizeSelect.addEventListener("change", function () {
    cardPreview.style.fontSize = this.value; // Cambia el tamaño de la fuente
});

// Cambia el fondo de la vista previa
backgroundRadios.forEach(radio => {
    radio.addEventListener("change", function () {
        if (this.checked) {
            cardPreview.style.backgroundImage = `url('../img/${this.value}.jpeg')`; // Cambia el fondo
            cardPreview.style.backgroundSize = 'cover'; // Asegura que la imagen cubra todo el fondo
            cardPreview.style.backgroundPosition = 'center'; // Centra la imagen
        }
    });
});

});