import React, { useState } from "react";
import "../MoviesCardList/MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import filmList from "../../utils/filmList";
import Preloader from "../Preloader/Preloader";

export default function LikedMovies() {
  const likedMovies = filmList.filter((movie) => movie.isLiked);
  const [isLoading] = useState(false);

  return (
    <section className="movies-card-list">
      {isLoading ? (
        <Preloader />
      ) : (
        <ul className="movies-card-list__item">
          {likedMovies.map((movie, i) => (
            <MoviesCard key={i} isLiked={movie.isLiked} movie={movie} />
          ))}
        </ul>
      )}
    </section>
  );
}
