export const getMovies = async () => {
  const url = "https://api.themoviedb.org/3/authentication";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2I3MjA1MWM2YmJlOTZkYTkyNWQxZDFiZDY5ZjJkNiIsIm5iZiI6MTc1MzMwNjAzNC44MjIsInN1YiI6IjY4ODE1M2IyMjhhNmI4OTY1NmQ5YTE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XaOiuVhjtaSsB7eGl6SllVN4Ra6FLRKe4E5o37fnN1s",
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
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2I3MjA1MWM2YmJlOTZkYTkyNWQxZDFiZDY5ZjJkNiIsIm5iZiI6MTc1MzMwNjAzNC44MjIsInN1YiI6IjY4ODE1M2IyMjhhNmI4OTY1NmQ5YTE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XaOiuVhjtaSsB7eGl6SllVN4Ra6FLRKe4E5o37fnN1s",
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

export const getRatedTV = async () => {
  const url =
    "https://api.themoviedb.org/3/account/22169631/rated/tv?language=en-US&page=1&sort_by=created_at.asc";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2I3MjA1MWM2YmJlOTZkYTkyNWQxZDFiZDY5ZjJkNiIsIm5iZiI6MTc1MzMwNjAzNC44MjIsInN1YiI6IjY4ODE1M2IyMjhhNmI4OTY1NmQ5YTE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XaOiuVhjtaSsB7eGl6SllVN4Ra6FLRKe4E5o37fnN1s",
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
