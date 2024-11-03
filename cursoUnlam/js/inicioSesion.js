const loginForm = document.querySelector('#loginForm');
console.log("Formulario seleccionado:", loginForm);
loginForm.addEventListener('submit', (e) => {
    console.log("Submit event triggered");
    e.preventDefault();
    const email = document.querySelector('#mail').value;
    const password = document.querySelector('#pass').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    const validarUsuario = usuarios.find(usuario => usuario.email === email && usuario.password === password);

    if (!validarUsuario) {
        alert('Usuario y/o contraseña incorrectos');
    } else {
        window.location.href = '../html/home.html';
    }
});