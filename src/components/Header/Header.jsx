import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/siteLogo.svg";
import Navigation from "../Navigation/Navigation";

export default function Header({ className, isLogged }) {
  return (
    <header className={`header ${className || ""}`}>
      <NavLink to="/" className="header__main-link">
        <img className="header__logo" src={logo} alt="Логотип" />
      </NavLink>
      {isLogged ? (
        <Navigation />
      ) : (
        <div className="header__auth-container">
          <NavLink className="header__link header__singup" to="/signup">
            Регистрация
          </NavLink>
          <NavLink className="header__link header__singin" to="/signin">
            Войти
          </NavLink>
        </div>
      )}
    </header>
  );
}
