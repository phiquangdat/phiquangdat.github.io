const BASE_URL = "https://api.themoviedb.org/3";
const ACCOUNT_ID = "22169631";
const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

const fetchFromTMDB = async (endpoint: string) => {
  const url = `${BASE_URL}${endpoint}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("TMDB fetch error:", error);
    throw error;
  }
};

export const getMovies = async () => {
  const data = await fetchFromTMDB("/authentication");
  console.log("Auth data:", data);
  return data;
};

export const getFavoriteMovies = async () => {
  const endpoint = `/account/${ACCOUNT_ID}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`;
  const data = await fetchFromTMDB(endpoint);
  console.log("Favorite Movies:", data.results);
  return data.results;
};

export const getRatedMovies = async () => {
  const endpoint = `/account/${ACCOUNT_ID}/rated/movies?language=en-US&page=1&sort_by=created_at.asc`;
  const data = await fetchFromTMDB(endpoint);
  console.log("Rated Movies:", data.results);
  return data.results;
};

export const getRatedTV = async () => {
  const endpoint = `/account/${ACCOUNT_ID}/rated/tv?language=en-US&page=1&sort_by=created_at.asc`;
  const data = await fetchFromTMDB(endpoint);
  console.log("Rated TV Shows:", data.results);
  return data.results;
};
