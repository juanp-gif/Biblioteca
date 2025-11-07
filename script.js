let biblioteca = [];

const form = document.getElementById('form-libro');
const listaLibros = document.getElementById('lista-libros');

// Función para guardar en LocalStorage
function guardarEnLocalStorage() {
    localStorage.setItem('biblioteca', JSON.stringify(biblioteca));
}

// Función para cargar desde LocalStorage
function cargarDesdeLocalStorage() {
    const datos = localStorage.getItem('biblioteca');
    if(datos) {
        const librosGuardados = JSON.parse(datos);
        biblioteca = librosGuardados.map(l => new Libro(l.titulo, l.autor, l.genero, l.leido));
    }
}

// Función para mostrar los libros en el DOM
function mostrarBiblioteca(action, libroId) {
    if(action === 'eliminar') {
        biblioteca = biblioteca.filter(b => b.id !== libroId);
    }

    listaLibros.innerHTML = '';
    biblioteca.forEach(libro => {
        const carta = crearCartaLibro(libro, mostrarBiblioteca);
        listaLibros.appendChild(carta);
    });

    guardarEnLocalStorage(); // Guardar cada vez que se actualiza la lista
}

// Cargar datos guardados al iniciar la página
cargarDesdeLocalStorage();
mostrarBiblioteca();


// Evento para agregar libro desde el formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const genero = document.getElementById('genero').value;

    const nuevoLibro = new Libro(titulo, autor, genero);
    biblioteca.push(nuevoLibro);

    mostrarBiblioteca();

    form.reset();
});
