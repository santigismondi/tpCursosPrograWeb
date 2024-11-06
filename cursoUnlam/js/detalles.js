const items = document.querySelectorAll('.acordeon-item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;

            // Verificar si el contenido ya está visible
            if (content.style.display === "block") {
                content.style.display = "none";  // Ocultar el contenido
            } else {
                content.style.display = "block";  // Mostrar el contenido
            }
        });
    });