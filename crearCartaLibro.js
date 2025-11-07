function crearCartaLibro(libro, mostrarBibliotecaCallback) {
    const div = document.createElement('div');
    div.classList.add('libro');
    div.setAttribute('data-id', libro.id);

    div.innerHTML = `
        <h3>${libro.titulo}</h3>
        <p><strong>Autor:</strong> ${libro.autor}</p>
        <p><strong>Género:</strong> ${libro.genero}</p>
        <p><strong>Estado:</strong> <span class="estado">${libro.leido ? 'Leído' : 'No leído'}</span></p>
        <div class="botones">
            <button class="btn-leer">${libro.leido ? 'Marcar como no leído' : 'Marcar como leído'}</button>
            <button class="btn-eliminar">Eliminar</button>
        </div>
    `;

    const btnLeer = div.querySelector('.btn-leer');

// Agregar clase según el estado actual del libro
btnLeer.classList.add(libro.leido ? 'leido' : 'no-leido');

// Cuando se hace clic, cambia el estado del libro
btnLeer.addEventListener('click', () => {
    libro.leido = !libro.leido;
    mostrarBibliotecaCallback(); // se vuelve a renderizar la biblioteca
});





    // Evento para eliminar libro
    const btnEliminar = div.querySelector('.btn-eliminar');
    btnEliminar.addEventListener('click', () => {
        // Se eliminará usando el callback en script.js
        mostrarBibliotecaCallback('eliminar', libro.id);
    });

    return div;
}
