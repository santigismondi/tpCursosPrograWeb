/*Tengo que agregar un evento el boton que me agregue una linea mas del formulario*/
/*Linkear archivo html con js*/
console.log("Hola");
const botonAgregar = document.querySelector('.agregar-persona-boton');
botonAgregar.addEventListener('click', agregarPersona);

function agregarPersona(event){
    console.log("Hola chequeando")
    const nuevaPersona = document.createElement("div");
    nuevaPersona.className="fila";

    const inputNombre = document.createElement("input");
    const inputApellido = document.createElement("input");
    const inputDNI = document.createElement("input");
    const inputEmail = document.createElement("input");
    const inputTelefono = document.createElement("input");
    const botonQuitar = document.createElement("input");

    inputNombre.placeholder=("Nombre")
    inputNombre.type="text";
    inputNombre.setAttribute('required', true);

    inputApellido.placeholder=("Apellido")
    inputApellido.type="text";
    inputApellido.setAttribute('required', true);

    inputDNI.placeholder=("DNI")
    inputDNI.type="number";
    inputDNI.setAttribute('required', true);

    inputEmail.placeholder=("Correo electronico")
    inputEmail.type="email"
    inputEmail.setAttribute('required', true);

    inputTelefono.placeholder=("Telefono")
    inputTelefono.type="number";
    inputTelefono.setAttribute('required', true);

    botonQuitar.className ="inscribir-empresa-boton";
    botonQuitar.type="button";
    botonQuitar.value="Quitar";
    botonQuitar.addEventListener('click', eliminarPersona);
    

    nuevaPersona.appendChild(inputNombre);
    nuevaPersona.appendChild(inputApellido);
    nuevaPersona.appendChild(inputDNI);
    nuevaPersona.appendChild(inputEmail);
    nuevaPersona.appendChild(inputTelefono);
    nuevaPersona.appendChild(botonQuitar);
    

    document.querySelector('.formulario-input').appendChild(nuevaPersona);
    document.querySelector('.formulario-input').appendChild(nuevaPersona);
    document.querySelector('.formulario-input').appendChild(nuevaPersona);
    document.querySelector('.formulario-input').appendChild(nuevaPersona);
    document.querySelector('.formulario-input').appendChild(nuevaPersona);
    document.querySelector('.formulario-input').appendChild(nuevaPersona);

    

}

//Eliminar fila de formulario 

let botonQuitar = document.querySelectorAll('.inscribir-empresa-boton')
botonQuitar.forEach(boton =>{boton.addEventListener('click', eliminarPersona)})
/*botonQuitar.addEventListener('click',eliminarPersona);*/

function eliminarPersona(event){
        console.log("Boton quitar")
        const nuevaPersona = event.target.closest('.fila');
        if (nuevaPersona) {
            nuevaPersona.remove();
        }
        /*document.querySelector('.formulario-input').removeChild(nuevaPersona);*/
}


/*const botonQuitar = document.querySelector('.inscribir-empresa-boton');
botonQuitar.addEventListener('click',eliminarPersona);

function eliminarPersona(event){
    console.log("Boton quitar")
    
    const nuevaPersona = document.querySelector('.fila');
    document.querySelector('.formulario-input').removeChild(nuevaPersona);
    
}*/
