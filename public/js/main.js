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

