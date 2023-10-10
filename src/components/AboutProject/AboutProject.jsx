import "./AboutProject.css";
export default function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__container">
        <div className="about-project__description">
          <h3 className="about-project__description_title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description_paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description">
          <h3 className="about-project__description_title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description_paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <table className="about-project__table">
        <thead>
          <tr className="about-project__table_title">
            <th className="about-project__table_title_first-cell">1 неделя</th>
            <th className="about-project__table_title_second-cell">4 недели</th>
          </tr>
        </thead>
        <tbody>
          <tr className="about-project__diagramm">
            <td>Back-end</td>
            <td>Front-end</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
