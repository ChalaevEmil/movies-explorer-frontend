import "./FilterCheckBox.css";

export default function FilterCheckBox() {
  return (
    <div className="filter-check-box">
      <label className="filter-check-box__switcher">
        <input
          className="filter-check-box__input"
          type="checkbox"
          id="filter-check-box__input"
        />
        <span className="filter-check-box__slider"></span>
      </label>
      <p className="filter-check-box__name">Короткометражки</p>
    </div>
  );
}
