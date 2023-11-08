import "./NotFound.css";

export default function NotFound() {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="not-found">
      <h2 className="not-found__error">404</h2>
      <p className="not-found__message">Страница не найдена</p>
      <button type="button" onClick={goBack} className="not-found__link">
        Назад
      </button>
    </div>
  );
}
