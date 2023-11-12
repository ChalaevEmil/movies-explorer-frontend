import "./Portfolio.css";
import { Link } from "react-router-dom";
export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Link
            className="portfolio__link"
            to="https://chalaevemil.github.io/mesto/"
            target="_blank"
          >
            Статичный сайт<i className="portfolio__arrow">&#8599;</i>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            className="portfolio__link"
            to="https://github.com/ChalaevEmil/express-mesto-gha"
            target="_blank"
          >
            Адаптивный сайт<i className="portfolio__arrow">&#8599;</i>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            className="portfolio__link"
            to="https://chalaevemil.github.io/russian-travel/"
            target="_blank"
          >
            Одностраничное приложение{" "}
            <i className="portfolio__arrow">&#8599;</i>
          </Link>
        </li>
      </ul>
    </section>
  );
}
