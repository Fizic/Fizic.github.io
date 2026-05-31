import { workFiles } from 'virtual:works-catalog';
import { formatFileLabel, formatSegment, getSortIndex } from './formatLabel';

function sortByTitle(a, b) {
  return a.title.localeCompare(b.title, 'ru', { sensitivity: 'base', numeric: true });
}

function getSemesterSort(a, b) {
  const aIndex = getSortIndex(a.id);
  const bIndex = getSortIndex(b.id);

  if (aIndex !== bIndex) {
    return aIndex - bIndex;
  }

  return sortByTitle(a, b);
}

function getRelativePath(segments, fileName) {
  return [...segments.slice(0, -1), fileName].join(' / ');
}

function buildCatalog() {
  const semesters = new Map();

  workFiles.forEach(({ cleanPath, url }) => {
    const pathParts = cleanPath.split('/').filter(Boolean);

    if (pathParts.length < 3) {
      return;
    }

    const [semesterId, subjectId] = pathParts;
    const fileName = pathParts.at(-1);
    const extension = fileName.split('.').at(-1)?.toUpperCase() ?? 'FILE';

    if (!semesters.has(semesterId)) {
      semesters.set(semesterId, {
        id: semesterId,
        title: formatSegment(semesterId),
        subjects: new Map(),
      });
    }

    const semester = semesters.get(semesterId);

    if (!semester.subjects.has(subjectId)) {
      semester.subjects.set(subjectId, {
        id: `${semesterId}/${subjectId}`,
        title: formatSegment(subjectId),
        items: [],
      });
    }

    semester.subjects.get(subjectId).items.push({
      id: cleanPath,
      title: formatFileLabel(fileName),
      extension,
      relativePath: getRelativePath(pathParts.slice(1), fileName),
      url,
    });
  });

  return Array.from(semesters.values())
    .map((semester) => ({
      ...semester,
      subjects: Array.from(semester.subjects.values())
        .map((subject) => ({
          ...subject,
          items: subject.items.sort(sortByTitle),
        }))
        .sort(sortByTitle),
    }))
    .sort(getSemesterSort);
}

export const worksCatalog = buildCatalog();
