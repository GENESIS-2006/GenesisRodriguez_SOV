// Función para detectar cuando un elemento es visible en la pantalla
function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para mostrar las secciones con una animación
function revealSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isVisible(section)) {
            section.classList.add('visible');
        }
    });
}

// Escuchar el evento de scroll para activar la animación
window.addEventListener('scroll', revealSections);

// Ejecutar la animación al cargar la página
window.addEventListener('load', revealSections);