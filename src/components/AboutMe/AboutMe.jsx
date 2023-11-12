import "./AboutMe.css";
import userPhoto from "../../images/userPhoto.jpg";
import { Link } from "react-router-dom";
export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Эмиль</h3>
          <p className="about-me__profession">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__description">
            Я родился и живу в Симферополе, закончил медицинский университет. У
            меня есть жена. Я люблю слушать музыку, а ещё увлекаюсь баскетболом.
            Недавно начал кодить. С 2020 года работал в областной больнице
            родного города. После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами.
          </p>
          <Link
            className="about-me__link"
            to="https://github.com/ChalaevEmil/"
            target="_blank"
          >
            Github
          </Link>
        </div>
        <img className="about-me__photo" src={userPhoto} alt="аватар" />
      </div>
    </section>
  );
}
