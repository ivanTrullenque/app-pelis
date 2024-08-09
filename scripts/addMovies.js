const axios = require('axios');

const createMovie = window.submitForm = async (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value.trim();
    const year = document.getElementById('year').value.trim();
    const director = document.getElementById('director').value.trim();
    const duration = document.getElementById('duration').value.trim();
    const rate = document.getElementById('rate').value.trim();
    const poster = document.getElementById('poster').value.trim();
    const genre = [];

    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    checkboxes.forEach((checkbox) => {
        genre.push(checkbox.value);
    });

    // Validaciones
    if (!title || !year || !director || !duration || !rate || !poster) {
        alert('Todos los campos son requeridos.');
        return false;
    }

    if (rate < 0 || rate > 10 || isNaN(rate)) {
        alert('La calificación debe estar entre 0 y 10.');
        return false;
    }

    if (!poster.match(/\.(jpeg|jpg|gif|png)$/)) {
        alert('La URL del póster debe terminar en .jpeg, .jpg, .gif o .png.');
        return false;
    }

    const currentYear = new Date().getFullYear();
    if (year < 1988 || year > currentYear) {
        alert(`El año debe estar entre 1988 y ${currentYear}.`);
        return false;
    }

    const objMovie = {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster
    };

    try {
        const response = await axios.post('https://api-pelis-ten.vercel.app/movies', objMovie);
        if (response.data.success) {
            document.querySelector('#movie-form').reset();
            alert(response.data.message || 'Película creada exitosamente');
        } else {
            alert(`Error: ${response.data.message}`);
        }
    } catch (error) {
        console.error('Error al crear la película:', error.message);
        alert('Error al crear la película. Por favor, inténtelo de nuevo.');
    }
};
const clearInputs = () => {
    document.getElementById('title').value = '';
    document.getElementById('year').value = '';
    document.getElementById('director').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('poster').value = '';
    document.querySelectorAll('input[type=checkbox]').forEach(checkbox => checkbox.checked = false);
};

module.exports = { createMovie, clearInputs };
