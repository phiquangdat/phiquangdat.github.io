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
  try {
    const data = await fetchFromTMDB("/authentication");
    console.log("Auth data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const getFavoriteMovies = async () => {
  try {
    const endpoint = `/account/${ACCOUNT_ID}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`;
    const data = await fetchFromTMDB(endpoint);
    console.log("Favorite Movies:", data.results);
    return data.results || [];
  } catch (error) {
    console.error("Error fetching favorite movies:", error);
    return [];
  }
};

export const getRatedMovies = async () => {
  try {
    const endpoint = `/account/${ACCOUNT_ID}/rated/movies?language=en-US&page=1&sort_by=created_at.asc`;
    const data = await fetchFromTMDB(endpoint);
    console.log("Rated Movies:", data.results);
    return data.results || [];
  } catch (error) {
    console.error("Error fetching rated movies:", error);
    return [];
  }
};

export const getRatedTV = async () => {
  try {
    const endpoint = `/account/${ACCOUNT_ID}/rated/tv?language=en-US&page=1&sort_by=created_at.asc`;
    const data = await fetchFromTMDB(endpoint);
    console.log("Rated TV Shows:", data.results);
    return data.results || [];
  } catch (error) {
    console.error("Error fetching rated TV shows:", error);
    return [];
  }
};
