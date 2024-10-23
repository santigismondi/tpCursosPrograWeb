const btnCarrito = document.querySelector('.botonCarritoHeader');
const containerCarrito = document.querySelector('.containerCarrito');

btnCarrito.addEventListener('click', () => {
    containerCarrito.classList.toggle('hidden-carrito');
});

