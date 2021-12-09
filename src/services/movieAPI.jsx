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
    `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`,
  );
}
