import "./AboutMe.css";
import userPhoto from "../../images/userPhoto.png";
export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__container_info">
          <h3 className="about-me__container_name">Виталий</h3>
          <p className="about-me__container_profession">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__container_description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="about-me__container_link" href="https://github.com">
            Github
          </a>
        </div>
        <img
          className="about-me__container_photo"
          src={userPhoto}
          alt="аватар"
        />
      </div>
    </section>
  );
}
