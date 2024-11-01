const btnCarrito = document.querySelector('.botonCarro');
const containerCarrito = document.querySelector('.containerCarrito');
const containerCarritoProductos = document.querySelector('.containerCarritoProductos');
const btnCerrarCarrito = document.querySelector('.logoCarritoCerrar');

const guardarCarritoEnStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(todosLosCursos));
};

const cargarCarritoDeStorage = () => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
    if (carritoGuardado) {
        todosLosCursos = carritoGuardado;
        showHTML();
    }
};

document.addEventListener('DOMContentLoaded', cargarCarritoDeStorage);

/**
 * Funciones para mostrar y cerrar carrito
 */
btnCarrito.addEventListener('click', () => {
    containerCarritoProductos.classList.toggle('hidden-carrito'); 
});

btnCerrarCarrito.addEventListener('click', () => {
    containerCarritoProductos.classList.toggle('hidden-carrito'); 
});

/**
 * Funciones para agregar productos al carrito
 */

const infoCarrito = document.querySelectorAll('.carritoProducto');
const lineaCarrito = document.querySelector('.infoCarritoProducto');
const listaCursos = document.querySelector('.gridCursos');
let todosLosCursos = [];
const valorTotal = document.querySelector('.totalAPagar');
const contadorProductos = document.querySelector('.contadorProd');

listaCursos.addEventListener('click', (e) => {

        if(e.target.classList.contains('botonCarrito')){
            const producto = e.target.parentElement.parentElement.parentElement
            console.log(producto.querySelector('.nombreCurso').textContent);
            console.log(producto.querySelector('.precioCurso').textContent);

            const infoProducto = {
                cantidad: 1,
                nombre: producto.querySelector('.nombreCurso').textContent,
                precio: producto.querySelector('.precioCurso').textContent,
        }
        const existente = todosLosCursos.some( producto => producto.nombre === infoProducto.nombre);
        if(existente){
            const productos = todosLosCursos.map( producto => {
                if(producto.nombre === infoProducto.nombre){
                    producto.cantidad++;
                    return producto;
                }else{
                    return producto;
                }
            });
            todosLosCursos = [...productos];
        }else{  
            todosLosCursos = [...todosLosCursos, infoProducto];
        }

        showHTML();
        guardarCarritoEnStorage();
    }
});

const showHTML = () => {
    const jsRowProduct = document.querySelector('.jsRowProduct');
    jsRowProduct.innerHTML = '';

    let totalPrecio = 0;
    let totalCarrito = 0;

    todosLosCursos.forEach( producto => {
        const containerProductos = document.createElement('div');

        containerProductos.classList.add('infoCarritoProducto');

        containerProductos.innerHTML = `
                <span class="cantidadProductoCarrito">${producto.cantidad}</span>
                <p class="tituloProductoCarrito">${producto.nombre}</p>
                <span class="precioProductoCarrito">${producto.precio}</span>
                <span class="logoEliminarCarrito"><i class="fa-solid fa-trash"></i></span>
                `;

        jsRowProduct.append(containerProductos);

        totalPrecio = totalPrecio + parseInt(producto.precio.slice(1) * producto.cantidad);
        totalCarrito = totalCarrito + producto.cantidad;
    });

    valorTotal.innerHTML = `$${totalPrecio}`;
    contadorProductos.innerHTML = totalCarrito;
}
