import "./AuthForm.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/siteLogo.svg";

export default function AuthForm({ title, button, path }) {
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <main className="auth-form">
      <NavLink to="/" className="auth-form__main-link">
        <img className="auth-form__image" src={logo} alt="ярлік" />
      </NavLink>
      <h2 className="auth-form__title">{title}</h2>
      <form name="auth" className="auth-form__form" onSubmit={handleSubmit}>
        <div className="auth-form__container">
          {path === "/signin" && (
            <>
              <span className="auth-form__lable">Имя</span>
              <input
                className="auth-form__input"
                type="text"
                name="name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="auth-form__error">Что-то пошло не так...</span>
            </>
          )}
          <span className="auth-form__lable">Email</span>
          <input
            className="auth-form__input"
            type="email"
            name="email"
            placeholder="Почта"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="auth-form__error">Что-то пошло не так...</span>
          <span className="auth-form__lable">Пароль</span>
          <input
            className="auth-form__input"
            type="password"
            name="password"
            placeholder="Пароль"
            minLength="6"
            maxLength="2440"
            required
          />
          <span className="auth-form__error">Что-то пошло не так...</span>
        </div>
        <button
          type="submit"
          className="auth-form__button auth-form__button_disabled"
        >
          {button}
        </button>
      </form>
      {path === "/signin" && (
        <p className="auth-form__quession">
          Уже зарегистрированы?
          <NavLink to={path} className="auth-form__link">
            Войти
          </NavLink>
        </p>
      )}
      {path === "/signup" && (
        <p className="auth-form__quession">
          Ещё не зарегистрированы?
          <NavLink to={path} className="auth-form__link">
            Регистрация
          </NavLink>
        </p>
      )}
    </main>
  );
}
