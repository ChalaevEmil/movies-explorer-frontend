import "./MoviesCard.css";
export default function MoviesCard({ movie }) {
  return (
    <li>
      <div className="movies-card">
        <img className="movies-card__poster" src={movie.src} alt={movie.name} />
        <div className="movies-card__container">
          <p className="movies-card__name">{movie.name}</p>
          <button className={"movies-card__like"}></button>
        </div>
        <p className="movies-card__duration">{movie.duration}</p>
      </div>
    </li>
  );
}
