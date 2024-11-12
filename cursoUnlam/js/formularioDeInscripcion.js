


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
    const precioCurso = document.querySelector(".js-precio-del-curso");
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
    nuevaPersona.appendChild(precioCurso);
    

    document.querySelector('.formulario-input').appendChild(nuevaPersona);
    document.querySelector('.formulario-input').appendChild(nuevaPersona);
    document.querySelector('.formulario-input').appendChild(nuevaPersona);
    document.querySelector('.formulario-input').appendChild(nuevaPersona);
    document.querySelector('.formulario-input').appendChild(nuevaPersona);
    document.querySelector('.formulario-input').appendChild(nuevaPersona);
    document.querySelector('.formulario-input').appendChild(nuevaPersona);

};

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
const url = new URL(location.href);
const courseId = url.searchParams.get('courseId');
console.log(courseId);

//Obtener datos guardados en localStorage
const getListaDeCursosFromLocalStorage = () => {
  const listaDeCursos = localStorage.getItem("listaDeCursos");

  if (!listaDeCursos) return {};

  return JSON.parse(listaDeCursos);
};


const listaDeCursos = getListaDeCursosFromLocalStorage();
console.log(listaDeCursos.cursos);

//Mostrar titulo del curso al cual me quiero inscribir
const cursoBuscado = listaDeCursos.cursos.find(curso => curso.courseId.toString() === courseId);
console.log(cursoBuscado.courseName);
const cursoTitulo = document.querySelector('.js-titulo-del-curso');
cursoTitulo.innerHTML = cursoBuscado.courseName;

//Mostrar precio del curso
const precioCurso = listaDeCursos.cursos.find(curso => curso.courseId.toString() === courseId);
console.log(precioCurso.price);
const mostrarPrecio = document.querySelector(".js-precio-del-curso");
mostrarPrecio.innerHTML = precioCurso.price;

//Actualizar precio a medida que se suma
let precioTotal = document.querySelector('.formulario-precioTotal');
precioTotal.innerHTML = precioCurso.price;
console.log(precioTotal);
  










