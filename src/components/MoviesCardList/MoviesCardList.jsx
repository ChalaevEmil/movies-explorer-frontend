import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";
import filmList from "../../utils/filmList";

export default function MoviesCardList({ movies }) {
  const [isLoading] = useState(false);
  return (
    <section className="movies-card-list">
      {isLoading ? (
        <Preloader />
      ) : (
        <ul className="movies-card-list__item">
          {filmList.map((movie, i) => {
            return <MoviesCard key={i} movie={movie} />;
          })}
        </ul>
      )}
      <button className="movies-card-list__button" type="button">
        Ещё
      </button>
    </section>
  );
}
