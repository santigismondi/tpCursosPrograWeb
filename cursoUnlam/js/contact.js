function validarTelefono(telefono) {
    // Expresión regular para validar el formato de teléfono
    const regex = /^(\d{4}-?\d{4})$/;
    return regex.test(telefono);
}

function validarFormulario() {
    const telefono = document.getElementById('telefono').value;
    const mensajeError = document.getElementById('mensajeError');

    // Validar el teléfono
    if (validarTelefono(telefono)) {
        mensajeError.textContent = ''; // Limpiar mensaje de error si es válido
        return true; // Permitir el envío del formulario
    } else {
        mensajeError.textContent = 'El número de teléfono no es válido. Debe tener 8 dígitos y un guion opcional entre el cuarto y quinto dígito.';
        return false; // Evitar el envío del formulario si no es válido
    }
}






const textarea = document.getElementById('consulta');
        const caracteresIngresados = document.getElementById('caracteresIngresados');
        const caracteresRestantes = document.getElementById('caracteresRestantes');
        
        // Función para actualizar los contadores
        function actualizarContadores() {
            const texto = textarea.value;
            const caracteresUsados = texto.length;
            const caracteresDisponibles = 1000 - caracteresUsados;

            // Actualiza los elementos con los valores correspondientes
            caracteresIngresados.textContent = caracteresUsados;
            caracteresRestantes.textContent = caracteresDisponibles;
        }

        // Evento para cada cambio en el texto
        textarea.addEventListener('input', actualizarContadores);

        // Llamar la función una vez para inicializar los valores
        actualizarContadores();


        



        