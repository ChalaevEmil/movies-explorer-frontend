import "./MoviesCard.css";
import { Link } from "react-router-dom";

export default function MovieCard({
  movie,
  poster,
  onClickCardLike,
  className,
}) {

  function render(time) {
    return time < 60
      ? `${time}м`
      : `${(time - (time % 60)) / 60}ч ${time % 60}м`;
  }

  return (
    <li>
      <div className="movies-card">
        <Link to={movie.trailerLink} target="_blank">
          <img
            className="movies-card__poster"
            src={poster}
            alt={movie.nameRU}
          />
        </Link>
        <div className="movies-card__container">
          <div className="movies-card__name">{movie.nameRU}</div>
          <button
            onClick={() => onClickCardLike(movie)}
            className={`movies-card__like ${className}`}
          ></button>
        </div>
        <p className="movies-card__duration">{render(movie.duration)}</p>
      </div>
    </li>
  );
}