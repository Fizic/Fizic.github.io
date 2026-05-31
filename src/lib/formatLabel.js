function normalizeLabel(value) {
  return value.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function capitalizeFirst(value) {
  if (!value) {
    return value;
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function formatSegment(segment) {
  const normalized = normalizeLabel(segment);
  const semesterMatch = normalized.match(/^(\d+)\s*semester$/i);
  const reverseSemesterMatch = normalized.match(/^semester\s*(\d+)$/i);

  if (semesterMatch) {
    return `${semesterMatch[1]} семестр`;
  }

  if (reverseSemesterMatch) {
    return `${reverseSemesterMatch[1]} семестр`;
  }

  return capitalizeFirst(normalized);
}

export function formatFileLabel(fileName) {
  const label = fileName.replace(/\.[^.]+$/, '');
  return capitalizeFirst(normalizeLabel(label));
}

export function getSortIndex(value) {
  const match = value.match(/\d+/);
  return match ? Number(match[0]) : Number.POSITIVE_INFINITY;
}
