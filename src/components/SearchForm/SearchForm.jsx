import React, { useState } from "react";
import "./SearchForm.css";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import glassIcon from "../../images/glassIcon.svg";

export default function SearchForm() {
  const [searchMovie, setSearchMovie] = useState("");

  const handleChangeMovie = (evt) => {
    setSearchMovie(evt.target.value);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <section className="search-form">
      <form
        name="search-form"
        className="search-form__form"
        method="POST"
        onSubmit={handleSubmit}
      >
        <img className="search-form__image" src={glassIcon} alt="Поиск" />
        <input
          className="search-form__input"
          name="search"
          type="text"
          placeholder="Фильм"
          value={searchMovie}
          onChange={handleChangeMovie}
          required
        />
        <button className="search-form__button" type="submit">
          Найти
        </button>
        <div className="search-form__slice"></div>
        <FilterCheckBox className="filter-check-box" />
      </form>
    </section>
  );
}
