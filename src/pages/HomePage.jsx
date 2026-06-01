import photo from '../content/images/photo.png';
import Hero from '../components/Hero';
import Section from '../components/Section';

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section id="about">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-heading about-heading">
              <p className="section-heading__eyebrow">Обо мне</p>
              <h2 className="section-heading__title">
                Учебное портфолио студента направления «Информатика и вычислительная
                техника»
              </h2>
            </div>

            <div className="about-copy">
              <p>
                Здравствуйте, меня зовут Фирсов Кирилл. Я студент 4 курса РГПУ им.
                А. И. Герцена по направлению «Информатика и вычислительная техника».
              </p>
              <p>
                Мой основной профессиональный интерес связан с backend-разработкой,
                информационными системами и созданием прикладных цифровых решений.
              </p>
              <p>
                В процессе обучения я выполнял учебные и проектные работы, связанные с
                анализом программного обеспечения, обработкой данных, проектированием
                информационных систем, подготовкой документации и решением прикладных
                задач.
              </p>
            </div>
          </div>

          <div className="about-photo-frame">
            <img className="about-photo" src={photo} alt="Фотография Кирилла Фирсова" />
          </div>
        </div>
      </Section>
    </>
  );
}
