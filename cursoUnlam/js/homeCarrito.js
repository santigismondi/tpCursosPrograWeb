const btnCarrito = document.querySelector('.botonCarro');
const containerCarrito = document.querySelector('.containerCarrito');
const containerCarritoProductos = document.querySelector('.containerCarritoProductos');
const btnCerrarCarrito = document.querySelector('.logoCarritoCerrar');

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
        todosLosCursos = [...todosLosCursos, infoProducto];
        showHTML();
    }
});

const showHTML = () => {
    const jsRowProduct = document.querySelector('.jsRowProduct');
    jsRowProduct.innerHTML = '';

    todosLosCursos.forEach( producto => {
        const containerProductos = document.createElement('div');

        containerProductos.classList.add('infoCarritoProducto');

        containerProductos.innerHTML = `
            <div class="infoCarritoProducto">
                <span class="cantidadProductoCarrito">${producto.cantidad}</span>
                <p class="tituloProductoCarrito">${producto.nombre}</p>
                <span class="precioProductoCarrito">${producto.precio}</span>
            </div>`;

        jsRowProduct.append(containerProductos);
    });
}
