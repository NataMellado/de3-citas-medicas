// Función para añadir la clase active al enlace de la página actual
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            link.parentNode.classList.add('active');
        } else {
            link.classList.remove('active');
            link.parentNode.classList.remove('active');
        }
    });
});

// Funcion para obtener un paciente aleatorio y mostrarlo en el formulario
document.getElementById('verPaciente').addEventListener('click', async () => {
    try {
        const response = await axios.get('/getRandomUser');
        const data = response.data;

        document.getElementById('nombre').value = data.firstName;
        document.getElementById('apellido').value = data.lastName;
        document.getElementById('genero').value = data.gender;
    } catch (error) {
        console.error(error);
    }
});
