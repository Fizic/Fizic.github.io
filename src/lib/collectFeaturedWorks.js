import { featuredWorkFiles } from 'virtual:featured-works-catalog';

const featuredWorksMeta = [
  {
    id: '01-vkr',
    title: 'Инструмент для восстановления MySQL на точку во времени',
    description:
      'Выпускная квалификационная работа про Point-in-Time Recovery для MySQL: архитектура решения, работа с бинарными журналами, интеграция с WAL-G и анализ результатов тестирования.',
    context: '8 семестр / ВКР',
  },
  {
    id: '02-web-portfolio-vue-nuxt',
    title: 'Разработка веб-портфолио программиста на Vue и Nuxt',
    description:
      'Курсовая работа с выбором стека, проектированием структуры приложения и реализацией веб-портфолио с серверной логикой для публикации учебных материалов.',
    context: '7 семестр / Курсовая работа',
  },
  {
    id: '03-computer-practicum-cloud',
    title: 'Компьютерный практикум: serverless и облачные сервисы',
    description:
      'Практическая работа по разворачиванию облачного приложения в Yandex Cloud с обработкой изображений и публикацией рабочего результата.',
    context: '4 семестр / Компьютерный практикум',
  },
  {
    id: '04-observability-practice',
    title: 'Observability в высоконагруженных приложениях',
    description:
      'Доклад и сопутствующая практика по метрикам, логам и трассировкам: Prometheus, Grafana и инженерные подходы к наблюдаемости сервисов.',
    context: '6 семестр / Программирование',
  },
  {
    id: '05-wal-g-binlog-server',
    title: 'WAL-G Binlog-Server для ускорения PITR',
    description:
      'Статья про разработанный инструмент восстановления MySQL, ориентированный на сокращение времени восстановления и снижение требований к локальному хранилищу.',
    context: '6 семестр / Информационные технологии',
  },
  {
    id: '06-mysql-pitr-technical-spec',
    title: 'Техническое задание на инструмент PITR для MySQL',
    description:
      'ТЗ с требованиями к CLI-инструменту восстановления MySQL: сценарии работы, режимы dry run и restore, требования к надёжности, журналированию и производительности.',
    context: '7 семестр / Практика',
  },
  {
    id: '07-information-security-rsa',
    title: 'Лабораторная работа по RSA и криптографическим протоколам',
    description:
      'Развёрнутый учебный материал по RSA, асимметричному шифрованию и связанным протоколам с упором на математические основы и применение в защите информации.',
    context: '6 семестр / Защита информации',
  },
  {
    id: '08-letsencrypt-nginx-proxy',
    title: 'Настройка Let’s Encrypt и Nginx Proxy',
    description:
      'Практическая работа по публикации приложения и выпуску TLS-сертификата: конфигурация Nginx, проксирование и базовые шаги production-развёртывания.',
    context: '6 семестр / Прикладные информационные технологии',
  },
  {
    id: '09-third-year-practice',
    title: 'Проектно-технологическая практика: ClickHouse, Kafka и баннерный сервис',
    description:
      'Отчёт по практике с инженерными задачами на обработку пользовательских событий, показ баннеров и интеграцию с ClickHouse и Kafka.',
    context: '6 семестр / Практика',
  },
  {
    id: '10-lissajous-coursework',
    title: 'Компьютерное моделирование фигур Лиссажу',
    description:
      'Ранняя курсовая работа по математическому моделированию и разработке прикладной программы на Python для визуализации фигур Лиссажу.',
    context: '2 семестр / Физика',
  },
];

function getFileExtension(fileName) {
  return fileName.split('.').at(-1)?.toUpperCase() ?? 'FILE';
}

function collectFeaturedFiles() {
  const filesById = new Map();

  featuredWorkFiles.forEach(({ cleanPath, url }) => {
    const pathParts = cleanPath.split('/').filter(Boolean);

    if (pathParts.length < 2) {
      return;
    }

    const [id] = pathParts;

    if (filesById.has(id)) {
      return;
    }

    const fileName = pathParts.at(-1);

    filesById.set(id, {
      url,
      fileName,
      extension: getFileExtension(fileName),
    });
  });

  return filesById;
}

const featuredFiles = collectFeaturedFiles();

export const featuredWorks = featuredWorksMeta.flatMap((item) => {
  const file = featuredFiles.get(item.id);

  if (!file) {
    return [];
  }

  return [{
    ...item,
    ...file,
  }];
});
