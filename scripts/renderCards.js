const movieContainer = document.getElementById('movie-cards-container');

const renderCards = (data) => {
    data.forEach((movie) => {
        const col = document.createElement('div');
        col.className = 'col-md-3 mb-2';

        const card = document.createElement('div');
        card.className = 'card h-100 shadow-sm bg-dark text-light mt-2'; 
        const poster = document.createElement('img');
        poster.className = 'card-img-top img-fluid';
        poster.src = movie.poster;
        poster.alt = `${movie.title} poster`;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body text-center';

        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';

        const badgeRate = document.createElement('span');
        badgeRate.className = 'badge badge-rate';
        badgeRate.innerText = `Calificación: ${movie.rate}`;

        const badgeYear = document.createElement('span');
        badgeYear.className = 'badge badge-year';
        badgeYear.innerText = movie.year;

        cardHeader.appendChild(badgeRate);
        cardHeader.appendChild(badgeYear);

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.innerHTML = movie.title;

        const cardDirector = document.createElement('p');
        cardDirector.className = 'card-text';
        cardDirector.innerHTML = `Director: ${movie.director}`;

        const cardDuration = document.createElement('p');
        cardDuration.className = 'card-text';
        cardDuration.innerHTML = `Duración: ${movie.duration} min`;

        const cardGenre = document.createElement('p');
        cardGenre.className = 'card-text';
        cardGenre.innerHTML = `Género: ${movie.genre.join(', ')}`;

        const starContainer = document.createElement('div');
        starContainer.className = 'star-rating';
        const filledStars = Math.floor(movie.rate);
        const halfStar = (movie.rate % 1) >= 0.5;

        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.className = 'fa fa-star';
            if (i < filledStars) {
                star.classList.add('checked');
            } else if (i === filledStars && halfStar) {
                star.className = 'fa fa-star-half-o checked';
            } else {
                star.classList.add('unchecked');
            }
            starContainer.appendChild(star);
        }

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardDirector);
        cardBody.appendChild(cardDuration);
        cardBody.appendChild(cardGenre);

        card.appendChild(poster);
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        cardBody.appendChild(starContainer);

        col.appendChild(card);
        movieContainer.appendChild(col);
    });
}

module.exports = {
    renderCards
}
