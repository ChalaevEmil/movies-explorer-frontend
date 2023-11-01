import "./AuthForm.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/siteLogo.svg";
import { useForm } from "react-hook-form";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import { REGEX } from "../../utils/regex";

export default function AuthForm({
  title,
  button,
  path,
  isLoading,
  handleUserData,
  serverError,
  onServerError,
}) {
  const {
    getValues,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { isFormValid, values, handleChange, errorsMessages } =
    useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    handleUserData({
      userName: values["name"],
      email: getValues("email"),
      password: values["password"],
    });
  };

  function validateForm() {
    return !isFormValid || !!errors?.email || isLoading;
  }

  return (
    <main className="auth-form">
      <NavLink to="/" className="auth-form__main-link">
        <img className="auth-form__image" src={logo} alt="Ярлык" />
      </NavLink>
      <h2 className="auth-form__title">{title}</h2>
      <form
        name="auth-form-form"
        method="POST"
        className="auth-form__form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="uth-form__container" disabled={isLoading}>
          {path === "/signin" && (
            <>
              <span className="auth-form__lable">Имя</span>
              <input
                type="text"
                name="name"
                className="auth-form__input"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
                onChange={(evt) => handleChange(evt)}
              />
              <span className="auth-form__error">
                {errorsMessages["name"]}
              </span>
            </>
          )}
          <legend className="auth-form__lable">E-mail</legend>
          <input
            type="email"
            name="user-email"
            className="auth-form__input"
            placeholder="Почта"
            required
            {...register("email", {
              required: "Email адрес обязательное поле",
              pattern: {
                value: REGEX,
                message:
                  "Почта не соответствует требуемому формату <имя>@<домен>.<код страны>",
              },
            })}
          />
          <span className="auth-form__error">
            {errors?.email && errors?.email?.message}
          </span>
          <span className="auth-form__lable">Пароль</span>
          <input
            type="password"
            name="password"
            className="auth-form__input"
            placeholder="Пароль"
            minLength="6"
            maxLength="2440"
            required
            onChange={(evt) => handleChange(evt)}
          />
          <span className="auth-form__error">
            {errorsMessages["password"]}
          </span>
        </div>
        <span className="auth-form__error">{serverError}</span>
        <button
          type="submit"
          disabled={validateForm()}
          className={`auth-form__button ${
            validateForm() ? "auth-form__button_disabled" : ""
          }`}
        >
          {button}
        </button>
      </form>
      {path === "/signin" && (
        <p className="auth-form__quession">
          Уже зарегистрированы?
          <NavLink
            to={path}
            className="auth-form__link"
            onClick={() => onServerError("")}
          >
            Войти
          </NavLink>
        </p>
      )}
      {path === "/signup" && (
        <p className="auth-form__quession">
          Ещё не зарегистрированы?
          <NavLink
            to={path}
            className="auth-form__link"
            onClick={() => onServerError("")}
          >
            Регистрация
          </NavLink>
        </p>
      )}
    </main>
  );
}
