import "./Profile.css";
import Header from "../Header/Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");
  const [error, setError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const handleUpdateName = (evt) => {
    setUser(evt.target.value);
  };
  const handleUpdateEmail = (evt) => {
    setEmail(evt.target.value);
  };
  const handleChangeStatus = (evt) => {
    evt.preventDefault();
    setIsDisabled(!isDisabled);
    setError(false);
  };

  function handleExit() {
    navigate("/signin");
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setError(true);
  };

  return (
    <>
      <Header />
      <main>
        <section className="profile">
          <form className="profile__form">
            <h2 className="profile__form-title">Привет, Виталий!</h2>
            <div className="profile__form-container">
              <div className="profile__input-container">
                <label
                  className="profile__item"
                  htmlFor="name"
                >
                  Имя
                </label>
                <input
                  className="profile__input"
                  id="name"
                  name="name"
                  placeholder="Укажите Ваше имя"
                  type="text"
                  value={user}
                  minLength={2}
                  maxLength={40}
                  onChange={handleUpdateName}
                  required
                />
              </div>
              <div className="profile__input-container">
                <label
                  className="profile__item"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="profile__input"
                  id="email"
                  name="email"
                  placeholder="Укажите Ваш email"
                  type="email"
                  value={email}
                  minLength={2}
                  maxLength={40}
                  onChange={handleUpdateEmail}
                  required
                />
              </div>
            </div>
            <div className="profile__button-container">
              {isDisabled ? (
                <div className="profile__buttons">
                  <button
                    className="profile__button profile__button-update"
                    type="button"
                    onClick={handleChangeStatus}
                  >
                    Редактировать
                  </button>
                  <button
                    className="profile__button profile__button-exit"
                    type="button"
                    onClick={handleExit}
                  >
                    Выйти из аккаута
                  </button>
                </div>
              ) : (
                <div className="profile__submit-container">
                  {error && (
                    <span className="profile__error">
                      При обновлении профиля произошла ошибка.
                    </span>
                  )}
                  <button
                    className={`profile__button profile__button-submit ${
                      error && "profile__button-submit_disabled"
                    }`}
                    type="submit"
                    onClick={handleSubmit}
                    disabled={error}
                  >
                    Сохранить
                  </button>
                </div>
              )}
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
