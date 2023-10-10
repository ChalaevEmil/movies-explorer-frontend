import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <div className="footer__copyright">&copy; 2023</div>
        <ul className="footer__list">
          <li>
            <a className="footer__link" href="https://practicum.yandex.ru/">
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a className="footer__link" href="https://github.com/">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
