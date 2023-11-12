import "./Profile.css";
import Header from "../Header/Header";
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
import { REGEX } from "../../utils/regex";

export default function Profile({
  onSignOut,
  isLogged,
  onUpdateUser,
  serverError,
  isLoading,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [isEditUser, setIsEditUser] = useState(false);

  const {
    getValues,
    setValue,
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { errorsMessages, isFormValid } =
    useFormWithValidation();

  const watchEmail = watch("email");
  const watchName = watch("name");

  useEffect(() => {
    if (currentUser.name) {
      setValue("email", currentUser.email);
      setValue("name", currentUser.name);
    }
  }, [currentUser, setValue]);

  function handleIsEditUser() {
    setIsEditUser(true);
  }

  function handleSignOut() {
    onSignOut();
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: getValues("name"),
      email: getValues("email"),
    });
  }

  function validateForm() {
    return (
      (watchName === currentUser.name && watchEmail === currentUser.email) ||
      !isFormValid ||
      errors?.email
    );
  }

  return (
    <>
      <Header isLogged={isLogged} />
      <main>
        <section className="profile">
          <form
            name="profile-form"
            method="POST"
            className="profile__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <h2 className="profile__form-title">Привет, {currentUser.name}!</h2>
            <div
              className="profile__form-container"
              disabled={!isEditUser || isLoading}
            >
              <div className="profile__input-container">
                <label className="profile__item">Имя</label>
                <input
                  type="text"
                  name="name"
                  className="profile__input"
                  placeholder="Укажите Ваше имя"
                  minLength="2"
                  maxLength="40"
                  required
                  onChange={(e) => console.log(e)}
                  {...register("name", {
                    required: "Укажите Имя",
                  })}
                ></input>
              </div>
              <span className="profile__error">{errorsMessages["name"]}</span>
              <div className="profile__input-container">
                <label className="profile__item">E-mail</label>
                <input
                  type="email"
                  name="email"
                  className="profile__input"
                  placeholder="Почта"
                  onChange={(e) => console.log(e)}
                  required
                  {...register("email", {
                    required: "Укажите Ваш email",
                    pattern: {
                      value: REGEX,
                      message:
                        "Почта не соответствует требуемому формату <имя>@<домен>.<код страны>",
                    },
                  })}
                />
              </div>
              <span className="profile__error">
                {errors?.email && errors?.email?.message}
              </span>
            </div>
            {isEditUser ? (
              <div className="profile__submit-container">
                <span className="profile__error">{serverError}</span>
                <button
                  type="submit"
                  disabled={validateForm() || isLoading}
                  className={`profile__button profile__button-submit ${
                    validateForm() || isLoading
                      ? "profile__button-submit_disabled"
                      : ""
                  }`}
                >
                  Сохранить
                </button>
              </div>
            ) : (
              <div className="profile__buttons">
                <button
                  type="button"
                  className="profile__button profile__button-update"
                  onClick={handleIsEditUser}
                >
                  Редактировать
                </button>
                <button
                  type="button"
                  className="profile__button profile__button-exit"
                  onClick={handleSignOut}
                >
                  Выйти из аккаунта
                </button>
              </div>
            )}
          </form>
        </section>
      </main>
    </>
  );
}
