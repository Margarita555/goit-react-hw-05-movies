const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '0c84cfbf78c105c94754289aeb8500f8';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`,
  );
}

export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMovieCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/movie//${movieId}/reviews?api_key=${API_KEY}`,
  );
}

export function fetchMovieByQuery(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`,
  );
}

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/review/{review_id}?api_key=<<api_key>>
