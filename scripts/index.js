const { renderCards } = require("./renderCards.js");
const axios = require("axios");
const url = "https://api-pelis-seven.vercel.app/movies";
const { createMovie, clearInputs } = require("./addMovies.js")
const cardsContainer = document.querySelector("#movie-cards-container")
const movieForm = document.querySelector("#movie-form")
const clearButton = document.querySelector('#clear-button');

if (cardsContainer) {
  const fetchMovies = async () => {
    try {
      const response = await axios.get(url);
      renderCards(response.data);
    } catch (err) {
      console.error("Error fetching movies:", err.message);
      console.error(err.response ? err.response.data : err);
    }
  }
  fetchMovies();
} else if (movieForm) {
  createMovie;
  clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    clearInputs();
  })
}

