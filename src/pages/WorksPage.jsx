import EmptyState from '../components/EmptyState';
import Section from '../components/Section';
import { worksCatalog } from '../lib/collectWorks';

function getFileCount(semesters) {
  return semesters.reduce(
    (count, semester) =>
      count + semester.subjects.reduce((sum, subject) => sum + subject.items.length, 0),
    0,
  );
}

function getSemesterOrder(title) {
  const match = title.match(/\d+/);
  return match ? Number(match[0]) : Number.POSITIVE_INFINITY;
}

function getItemContext(itemId, semesterTitle) {
  const segments = itemId.split('/').filter(Boolean);
  const nestedPath = segments.slice(2, -1).join(' / ');

  return nestedPath ? `${semesterTitle} / ${nestedPath}` : semesterTitle;
}

function groupWorksBySubject(semesters) {
  const subjectMap = new Map();

  semesters.forEach((semester) => {
    semester.subjects.forEach((subject) => {
      if (!subjectMap.has(subject.title)) {
        subjectMap.set(subject.title, {
          id: subject.title,
          title: subject.title,
          items: [],
        });
      }

      const group = subjectMap.get(subject.title);

      subject.items.forEach((item) => {
        group.items.push({
          ...item,
          semesterTitle: semester.title,
          context: getItemContext(item.id, semester.title),
        });
      });
    });
  });

  return Array.from(subjectMap.values())
    .map((subject) => ({
      ...subject,
      items: subject.items.sort((a, b) => {
        const semesterDiff = getSemesterOrder(a.semesterTitle) - getSemesterOrder(b.semesterTitle);

        if (semesterDiff !== 0) {
          return semesterDiff;
        }

        return a.title.localeCompare(b.title, 'ru', {
          sensitivity: 'base',
          numeric: true,
        });
      }),
    }))
    .sort((a, b) => {
      const filesDiff = b.items.length - a.items.length;

      if (filesDiff !== 0) {
        return filesDiff;
      }

      return a.title.localeCompare(b.title, 'ru', { sensitivity: 'base', numeric: true });
    });
}

const fileCount = getFileCount(worksCatalog);
const subjectGroups = groupWorksBySubject(worksCatalog);

export default function WorksPage() {
  return (
    <>
      <section className="works-hero">
        <div className="container works-hero__layout">
          <div>
            <p className="section-heading__eyebrow">Каталог работ</p>
            <h1 className="works-hero__title">Учебные материалы по предметам</h1>
          </div>

          <div className="metrics-grid">
            <article className="metric-card">
              <strong>{fileCount}</strong>
              <span>файлов</span>
            </article>
          </div>
        </div>
      </section>

      <Section
        title=""
        intro=""
        tone="warm"
      >
        {subjectGroups.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="works-directory">
            {subjectGroups.map((subject) => (
              <details key={subject.id} className="subject-accordion">
                <summary className="subject-accordion__summary">
                  <div>
                    <p className="subject-accordion__eyebrow">Предмет</p>
                    <h2>{subject.title}</h2>
                  </div>

                  <div className="subject-accordion__meta">
                    <span className="subject-accordion__arrow" aria-hidden="true">
                      ▾
                    </span>
                  </div>
                </summary>

                <div className="subject-accordion__content">
                  <ul className="work-list">
                    {subject.items.map((item) => (
                      <li key={item.id} className="work-list__item">
                        <div>
                          <h4>{item.title}</h4>
                          <p className="work-list__context">{item.context}</p>
                          <div className="work-list__meta">
                            <span className="work-list__type">{item.extension}</span>
                          </div>
                        </div>

                        <a
                          className="button button--secondary button--compact"
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Открыть
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
