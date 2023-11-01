const SHORT_FiLM = 40;

export default function filterFilms(movies, { searchText, isChecked }) {
  let filtredMovies = movies;

  if (isChecked) {
    filtredMovies = filtredMovies.filter(
      (movie) => movie.duration <= SHORT_FiLM
    );
  }

  if (!searchText) {
    return filtredMovies;
  }

  return filtredMovies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchText.toLowerCase());
  });
}
