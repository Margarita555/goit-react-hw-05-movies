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

// export function fetchMovieById2(movieId) {
//   return fetchWithErrorHandling(
//     `${BASE_URL}/3/movie/${movieId}/dune?api_key=${API_KEY}&language=en-US`,
//   );
// }

// https://api.themoviedb.org/3/movie/{movie_id}/alternative_titles?api_key=<<api_key>>

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>
