
/*const webCursos = {
    cursos: [
      {
        courseId: 1,
        courseName: "CSS desde cero",
        duration: "2 hs",
        price: 25,
      },
      {
        courseId: 2,
        courseName: "HTML desde cero",
        duration: "2 hs",
        price: 20,
      },
      {
        courseId: 3,
        courseName: "HTML + CSS",
        duration: "4 hs",
        price: 40,
        
      },
      {
        courseId: 4,
        courseName: "SQL completo",
        duration: "4 hs",
        price: 29.99,
      },
    ],
    currency: "USD",
  };*/

  localStorage.setItem("listaDeCursos", JSON.stringify(webCursos));

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


function eliminarPersona(event){
        console.log("Boton quitar")
        const nuevaPersona = event.target.closest('.fila');
        if (nuevaPersona) {
            nuevaPersona.remove();
        }
        
}



//Guardar datos de los cursos
function getCursos() {
  const storedCursos = localStorage.getItem("cursos");
  return JSON.parse(storedCursos);
  };


//Mostrar datos del curso al cual me quiero inscribir
function mostrarDetallesDelCurso(){

  const url = new URL(location.href)
  const nombreCurso = url.searchParams.get('nombreCurso');
  const cursos = getCursos();
  const curso = cursos.curso.find(curso => curso.courseName === nombreCurso);
    if(curso){
      const tituloDelCurso = document.querySelector('.js-titulo-del-curso');
      const precioDelCurso = document.querySelector('.js-precio-del-curso');
  
      tituloDelCurso.innerHTML = `${curso.courseName}`;
      precioDelCurso.innerHTML = `${curso.price}`;
    }
    else{
      console.log("Error")
    }
    
};

console.log(cursos);

