import "./SavedMovies.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import filterFilms from "../../utils/filterFilms";

export default function SavedMovies({ isLogged, onClickCardLike, userMovies }) {
  const [filterMovies, setFilterMovies] = useState(userMovies);
  const [searchText, setSearchText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(
    () =>
      setFilterMovies(
        filterFilms(userMovies, {
          isChecked: false,
          searchText: searchText,
        })
      ),
    [userMovies, searchText]
  );

  function handleChecked(isChecked) {
    setIsChecked(isChecked);

    setFilterMovies(
      filterFilms(userMovies, {
        isChecked: isChecked,
        searchText: searchText,
      })
    );
  }

  function handleSearchSubmit(searchText) {
    setSearchText(searchText);
    setFilterMovies(
      filterFilms(userMovies, {
        isChecked: isChecked,
        searchText: searchText,
      })
    )
  }

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
        />
        <MoviesCardList movies={userMovies} isError={isError}>
          {filterMovies.map((movie) => {
            return (
              <MoviesCard
                key={movie._id}
                movie={movie}
                poster={movie.image}
                onClickCardLike={onClickCardLike}
                className={"movies-card__like-icon_trash"}
              />
            );
          })}
        </MoviesCardList>
      </main>
      <Footer />
    </>
  );
}
