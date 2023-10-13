import { NavLink } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2 className="not-found__error">404</h2>
      <p className="not-found__message">Страница не найдена</p>
      <NavLink to="/" className="not-found__link">Назад</NavLink>
    </div>
  );
}
  