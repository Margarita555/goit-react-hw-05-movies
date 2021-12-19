const axios = require('axios').default;

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = { api_key: '0c84cfbf78c105c94754289aeb8500f8' };

async function fetchWithErrorHandling(url = '', config = {}) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
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

// export async function fetchTrendingMovies() {
//   try {
//     const res = await axios.get(`/trending/movie/day?`);
//     console.log(res);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//     return error(`No movies found`);
//   }
// }

// export default async function ApiFetchImages(q = '', page = 1, per_page = 12) {
//   const params = { q, page, per_page };
//   try {
//     const { data } = await getImages('', { params });
//     console.log(data);
//     return data;
//   } catch (error) {
//     return error(`No results found for ${q}`);
//   }
// }

// const BASE_URL = 'https://api.themoviedb.org';
// const API_KEY = '0c84cfbf78c105c94754289aeb8500f8';

// async function fetchWithErrorHandling(url = '', config = {}) {
//   const response = await fetch(url, config);
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Not found'));
// }

// export function fetchTrendingMovies() {
//   return fetchWithErrorHandling(
//     `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`,
//   );
// }

// export function fetchMovieById(movieId) {
//   return fetchWithErrorHandling(
//     `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
//   );
// }

// export function fetchMovieCast(movieId) {
//   return fetchWithErrorHandling(
//     `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
//   );
// }

// export function fetchMovieReviews(movieId) {
//   return fetchWithErrorHandling(
//     `${BASE_URL}/3/movie//${movieId}/reviews?api_key=${API_KEY}`,
//   );
// }

// export function fetchMovieByQuery(query) {
//   return fetchWithErrorHandling(
//     `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`,
//   );
// }
