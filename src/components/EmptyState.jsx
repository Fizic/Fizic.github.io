export default function EmptyState() {
  return (
    <div className="empty-state">
      <p className="empty-state__eyebrow">Каталог пока пуст</p>
      <h2 className="empty-state__title">Добавьте материалы в папку `src/content/works`</h2>
      <p className="empty-state__copy">
        Страница работ соберет структуру автоматически: первый уровень папок считается
        семестром, второй уровнем - предметом, а файлы внутри становятся элементами
        каталога.
      </p>

      <pre className="empty-state__code">{`src/content/works/
  1-semester/
    informatics/
      laboratory-work-1.pdf`}</pre>
    </div>
  );
}
