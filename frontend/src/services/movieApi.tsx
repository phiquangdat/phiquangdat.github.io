const BASE_URL = "https://api.themoviedb.org/3";
const ACCOUNT_ID = "22169631";
const API_TOKEN = process.env.TMDB_API_TOKEN;

export const getMovies = async () => {
  const url = "https://api.themoviedb.org/3/authentication";
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
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getFavoriteMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/account/22169631/favorite/movies?language=en-US&page=1&sort_by=created_at.asc";
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
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getRatedMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/account/22169631/rated/movies?language=en-US&page=1&sort_by=created_at.asc";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = response.json();
    console.log("Rated Movies data is: " + data);
    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
};

export const getRatedTV = async () => {
  const url =
    "https://api.themoviedb.org/3/account/22169631/rated/tv?language=en-US&page=1&sort_by=created_at.asc";
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
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
