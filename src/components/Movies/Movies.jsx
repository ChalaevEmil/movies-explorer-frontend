import "./Movies.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { useMoviesView } from "../../utils/useMoviesView";
import { setLocalData, getLocalData } from "../../utils/useLocalStorage";
import filterFilms from "../../utils/filterFilms";

export default function Movies({
  isLogged,
  initialMovies,
  userMovies,
  onSubmit,
  onClickCardLike,
}) {
  console.log(getLocalData("filterMovies"));
  const [filterMovies, setFilterMovies] = useState(
    getLocalData("filterMovies") ? getLocalData("filterMovies") : []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [moviesCounter, setMoviesCounter] = useMoviesView();
  const [isError, setIsError] = useState(false);
  const [searchText, setSearchText] = useState(
    getLocalData("searchData")
      ? getLocalData("searchData").searchText || ""
      : ""
  );
  const [isChecked, setIsChecked] = useState(
    getLocalData("searchData")
      ? getLocalData("searchData").isChecked || false
      : false
  );

  function handleSearchSubmit(searchText) {
    setSearchText(searchText);

    if (!initialMovies.length) {
      setIsLoading(true);

      onSubmit()
        .then((initialMovies) => {
          setFilterMovies(
            filterFilms(initialMovies, getLocalData("searchData"))
          );
        })
        .catch((err) => {
          console.warn(err);
          setIsError(false);
        })
        .finally(() => setIsLoading(false));
    } else {
      setFilterMovies(
        filterFilms(initialMovies, {
          isChecked: isChecked,
          searchText: searchText,
        })
      );
    }

    setLocalData("searchData", {
      isChecked: isChecked,
      searchText: searchText,
    });

    setLocalData(isChecked, "filterMovies", filterMovies);
  }

  function handleChecked(isChecked) {
    setIsChecked(isChecked);

    setFilterMovies(
      filterFilms(initialMovies, {
        isChecked: isChecked,
        searchText: searchText,
      })
    );

    setLocalData("searchData", {
      isChecked: isChecked,
      searchText: searchText,
    });

    setLocalData(searchText, isChecked, filterMovies);
  }

  function handleAddButtonClick() {
    const addMovies = moviesCounter.addMovies;
    const moviesOnDisplay = moviesCounter.moviesOnDisplay + addMovies;
    setMoviesCounter({ moviesOnDisplay, addMovies });
  }

  console.log(filterMovies);

  return (
    <>
      <Header isLogged={isLogged}>
        <Navigation />
      </Header>
      <main>
        <SearchForm
          onSubmit={handleSearchSubmit}
          onChecked={handleChecked}
          isChecked={isChecked}
          searchText={searchText}
        />
        <MoviesCardList
          movies={filterMovies}
          isLoading={isLoading}
          isError={isError}
        >
          {filterMovies.slice(0, moviesCounter.moviesOnDisplay).map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                movie={movie}
                poster={`https://api.nomoreparties.co${movie.image.url}`}
                onClickCardLike={onClickCardLike}
                className={
                  userMovies.find((myMovie) => myMovie.movieId === movie.id)
                    ? "movies-card__like_active"
                    : "movies-card__like"
                }
              />
            );
          })}
        </MoviesCardList>
        {filterMovies.length > moviesCounter.moviesOnDisplay ? (
          <button
            type="button"
            className="movies__button"
            onClick={handleAddButtonClick}
          >
            Ещё
          </button>
        ) : (
          <></>
        )}
      </main>
      <Footer />
    </>
  );
}
