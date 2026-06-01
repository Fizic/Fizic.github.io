import EmptyState from '../components/EmptyState';
import Section from '../components/Section';
import { featuredWorks } from '../lib/collectFeaturedWorks';
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
          subjectTitle: subject.title,
          semesterTitle: semester.title,
          context: getItemContext(item.id, semester.title),
        });
      });
    });
  });

  const normalizedSubjects = Array.from(subjectMap.values())
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
    }));

  const visibleSubjects = normalizedSubjects.filter((subject) => subject.items.length > 3);
  const otherSubjects = normalizedSubjects.filter((subject) => subject.items.length <= 3);

  const sortedVisibleSubjects = visibleSubjects.sort((a, b) => {
    const filesDiff = b.items.length - a.items.length;

    if (filesDiff !== 0) {
      return filesDiff;
    }

    return a.title.localeCompare(b.title, 'ru', { sensitivity: 'base', numeric: true });
  });

  if (otherSubjects.length === 0) {
    return sortedVisibleSubjects;
  }

  const otherGroup = {
    id: 'other',
    title: 'Другое',
    items: otherSubjects
      .flatMap((subject) =>
        subject.items.map((item) => ({
          ...item,
          context: `${subject.title} / ${item.context}`,
        })),
      )
      .sort((a, b) => {
        const subjectDiff = a.subjectTitle.localeCompare(b.subjectTitle, 'ru', {
          sensitivity: 'base',
          numeric: true,
        });

        if (subjectDiff !== 0) {
          return subjectDiff;
        }

        const semesterDiff = getSemesterOrder(a.semesterTitle) - getSemesterOrder(b.semesterTitle);

        if (semesterDiff !== 0) {
          return semesterDiff;
        }

        return a.title.localeCompare(b.title, 'ru', { sensitivity: 'base', numeric: true });
      }),
  };

  return [...sortedVisibleSubjects, otherGroup];
}

const fileCount = getFileCount(worksCatalog);
const subjectGroups = groupWorksBySubject(worksCatalog);
const featuredCount = featuredWorks.length;

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
              <span>файла</span>
            </article>
          </div>
        </div>
      </section>

      <Section
        title=""
        intro=""
        tone="warm"
      >
        {subjectGroups.length === 0 && featuredWorks.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="works-directory">
            {featuredWorks.length > 0 && (
              <details className="subject-accordion">
                <summary className="subject-accordion__summary">
                  <div>
                    <p className="subject-accordion__eyebrow">Подборка</p>
                    <h2>Подборка работ</h2>
                  </div>

                  <div className="subject-accordion__meta">
                    <span className="subject-accordion__arrow" aria-hidden="true">
                      ▾
                    </span>
                  </div>
                </summary>

                <div className="subject-accordion__content">
                  <div className="featured-works-grid">
                    {featuredWorks.map((item) => (
                      <article key={item.id} className="featured-work-card">
                        <div className="featured-work-card__content">
                          <p className="featured-work-card__context">{item.context}</p>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>

                        <div className="featured-work-card__footer">
                          <span className="work-list__type">{item.extension}</span>
                          <a
                            className="button button--secondary button--compact"
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Открыть
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </details>
            )}

            {subjectGroups.map((subject) => (
              <details key={subject.id} className="subject-accordion">
                <summary className="subject-accordion__summary">
                  <div>
                    <p className="subject-accordion__eyebrow">
                      {subject.id === 'other' ? 'Раздел' : 'Предмет'}
                    </p>
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
