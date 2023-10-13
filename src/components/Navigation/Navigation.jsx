import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const setActiveAccaunt = ({ isActive }) =>
    [
      "navigation__link",
      "navigation__link-accaunt",
      isActive ? "navigation__link_active" : "null",
    ].join(" ");

  const setActiveLink = ({ isActive }) =>
    ["navigation__link", isActive ? "navigation__link_active" : "null"].join(
      " "
    );

  const handleClick = () => {
    const burgerMenu = document.querySelector(".navigation__popup");
    burgerMenu.classList.toggle("navigation__popup_active");
  };

  return (
    <nav className="navigation">
      <div className="navigation__hamburger">
        <input
          className={"navigation__hamburger-toogle"}
          type="checkbox"
          name="menu"
          onClick={handleClick}
        />
        <div className={"navigation__hamburger-button"}>
          <span></span>
        </div>
      </div>

      <ul className="navigation__list navigation__popup">
        <li className="navigation__link-main">
          <NavLink to="/" className={setActiveLink}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={setActiveLink}>
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink to="/saved-movies" className={setActiveLink}>
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="navigation__link-stan">
          <NavLink to="/profile" className={setActiveAccaunt}>
            Аккаунт
            <span className="navigation__profile"></span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
