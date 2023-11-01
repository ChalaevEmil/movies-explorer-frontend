import "./SearchForm.css";
import { useRef } from "react";
import glassIcon from "../../images/glassIcon.svg";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";

export default function SearchForm({
  onSubmit,
  onChecked,
  isChecked,
  searchText,
}) {
  const searchInput = useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(searchInput.current.value);
  }

  return (
    <section className="search-form">
      <form
        name="search-form"
        className="search-form__form"
        method="POST"
        onSubmit={handleSubmit}
      >
        <img
          src={glassIcon}
          className="search-form__image"
          alt="Лупа"
        />
        <input
          ref={searchInput}
          defaultValue={searchText || ""}
          className="search-form__input"
          name="search-input"
          type="text"
          placeholder="Фильм"
          autoComplete="off"
        />
        <button className="search-form__button" type="submit">
          Найти
        </button>
        <div className="search-form__slice"></div>
        <FilterCheckBox isChecked={isChecked} onChecked={onChecked} />
      </form>
    </section>
  );
}
