const axios = require('axios').default;

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = { api_key: '0c84cfbf78c105c94754289aeb8500f8' };

async function fetchWithErrorHandling(url = '') {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return error(`No movies found`);
  }
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(`/trending/movie/day?`);
}

export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(`/movie/${movieId}?&language=en-US`);
}

export function fetchMovieCast(movieId) {
  return fetchWithErrorHandling(`/movie/${movieId}/credits?&language=en-US`);
}

export function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(`/movie//${movieId}/reviews?`);
}

export function fetchMovieByQuery(query) {
  return fetchWithErrorHandling(`/search/movie?&query=${query}&page=1`);
}
