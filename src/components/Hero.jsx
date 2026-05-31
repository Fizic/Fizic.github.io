import { Link } from 'react-router';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__layout">
        <div className="hero__content">
          <h1 className="hero__title">Фирсов Кирилл</h1>
          <p className="hero__lead">
            Изучаю backend-разработку, информационные системы и прикладные цифровые
            решения. На сайте собраны сведения обо мне и учебные проекты, выполненные в
            процессе обучения.
          </p>

          <div className="hero__actions">
            <Link className="button button--primary" to="/works">
              Посмотреть работы
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
