const registroForm = document.querySelector('#formRegistro');
registroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.querySelector('#nom').value;
    const apellido = document.querySelector('#ape').value;
    const telefono = document.querySelector('#tel').value;
    const email = document.querySelector('#mail').value;
    const password = document.querySelector('#pass').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const isRegistrado = usuarios.find(usuario => usuario.email === email);

    if(isRegistrado){
        return alert('El email ya se encuentra registrado');
    }

    usuarios.push({
        nombre: nombre, 
        apellido: apellido, 
        telefono: telefono, 
        email: email, 
        password: password
    });

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    //alert('Usuario registrado con exito');
    window.location.href = 'iniciarSesion.html';
});
