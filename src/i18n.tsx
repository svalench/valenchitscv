import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'ru' | 'be'

export interface ExperienceItem {
  company: string
  role: string
  period: string
  current?: boolean
  bullets: string[]
  tags: string[]
}

export interface Translation {
  nav: { about: string; experience: string; stack: string; projects: string; writing: string; contact: string }
  hero: {
    badge: string
    role: string
    tagline: string
    location: string
    ctaContact: string
    ctaGithub: string
  }
  stats: { value: string; label: string }[]
  about: {
    label: string
    heading: string
    p1: string
    p2: string
    interestsLabel: string
    interests: string[]
    languagesLabel: string
    languages: { name: string; level: string; pct: number }[]
  }
  experience: {
    label: string
    heading: string
    items: ExperienceItem[]
  }
  stack: {
    label: string
    heading: string
    groups: { title: string; items: string[] }[]
  }
  projects: {
    label: string
    heading: string
    sub: string
    viewRepo: string
    items: { name: string; desc: string }[]
  }
  writing: {
    label: string
    heading: string
    sub: string
    readMore: string
  }
  contact: {
    label: string
    heading: string
    text: string
    cta: string
    profilesLabel: string
  }
  footer: { rights: string; built: string }
}

const en: Translation = {
  nav: { about: 'About', experience: 'Experience', stack: 'Stack', projects: 'Open Source', writing: 'Writing', contact: 'Contact' },
  hero: {
    badge: 'Open to work',
    role: 'Backend Tech Lead · AI Engineer · Open-Source Author',
    tagline:
      'Applied AI platforms and backend systems: Python, FastAPI, Django, Kubernetes, AI/LLM systems with vLLM, RAG and vector search, CI/CD. 10+ years of turning complex architecture into shipping products.',
    location: 'Minsk, Belarus · Open to relocation',
    ctaContact: 'Get in touch',
    ctaGithub: 'GitHub',
  },
  stats: [
    { value: '10+', label: 'Years of experience' },
    { value: '20+', label: 'Public repositories' },
    { value: '3', label: 'PyPI packages' },
    { value: '10+', label: 'Technical articles' },
  ],
  about: {
    label: 'About me',
    heading: 'Engineering leader who ships AI products',
    p1: 'I’m a Tech Lead and AI Engineer with 10+ years of engineering experience — five years building software for industry, then five more in web development with Python and JavaScript (Vue). My path runs from industrial automation — at MVLab I wired Siemens PLCs, Linux servers and Python backends together on real factory floors — to modern AI-native products.',
    p2: 'I run technical interviews and code reviews, and make architecture decisions grounded in domain-driven design. I value autonomy, measurable outcomes and a seat at the table when product decisions are made.',
    interestsLabel: 'What drives me',
    interests: ['Complex architecture', 'Model inference optimization', 'AI automation', 'Open source', 'Product thinking', 'Mentoring'],
    languagesLabel: 'Languages',
    languages: [
      { name: 'Belarusian', level: 'Native', pct: 100 },
      { name: 'Russian', level: 'Native', pct: 100 },
      { name: 'English', level: 'Professional working', pct: 75 },
    ],
  },
  experience: {
    label: 'Career',
    heading: 'Work experience',
    items: [
      {
        company: 'Alusoft',
        role: 'Backend Tech Lead',
        period: 'Mar 2025 — Present',
        current: true,
        bullets: [
          'Lead backend development of AI-native products: FastAPI/Django services with LLM integration (vLLM, Ollama), production AI agents and MCP integrations.',
          'Introduced CI/CD with smooth zero-downtime production deploys and unit-test coverage across services.',
          'Led a domain-driven design restructuring of the entire landscape of the entrusted area.',
          'Run technical interviews and code reviews; set backend engineering standards for the team.',
        ],
        tags: ['FastAPI', 'Django', 'vLLM', 'AI agents', 'MCP', 'CI/CD', 'DDD'],
      },
      {
        company: 'AlusoftBel',
        role: 'Software Engineer',
        period: 'May 2021 — Jun 2025',
        bullets: [
          'Internal web development: Python backends (Django, DRF, Celery) with Vue.js frontends on PostgreSQL / MySQL.',
          'Built vector search, embeddings and RAG pipelines over production data.',
          'Daily development with Cursor AI and AI-assisted workflows.',
        ],
        tags: ['Django', 'DRF', 'Celery', 'Vue.js', 'PostgreSQL', 'Cursor AI'],
      },
      {
        company: 'AIScanAuto — aiscanauto.com',
        role: 'Founder',
        period: '2025 — Present',
        current: true,
        bullets: [
          'Founded and built an AI car-diagnostics product: OBD-II data combined with a local LLM (Gemma) that explains fault codes in plain language.',
          'Android app shipped; iOS version in development; core diagnostics work offline.',
        ],
        tags: ['LLM', 'Gemma', 'OBD-II', 'Mobile', 'Product'],
      },
      {
        company: 'MVLab',
        role: 'Software Engineer',
        period: 'Oct 2019 — May 2021',
        bullets: [
          'Sewage pumping station (SPS) control system: Siemens PLC + Linux servers + Python backend.',
          'Weighing station with license-plate recognition on Siemens S7-1200.',
          'Machine-vision system detecting knots in boards on a sawmill line.',
          'Crane-operation optimization on Siemens S7-400.',
        ],
        tags: ['Siemens PLC', 'OPC UA', 'Python', 'Linux', 'Computer Vision'],
      },
      {
        company: 'AST Expert',
        role: 'Automation Engineer',
        period: 'Sep 2018 — Nov 2019',
        bullets: [
          'Industrial automation: PLC-based control systems and process instrumentation for manufacturing facilities.',
        ],
        tags: ['PLC', 'SCADA', 'Automation'],
      },
      {
        company: 'Belshina',
        role: 'Electronics Engineer',
        period: 'Aug 2014 — Sep 2018',
        bullets: [
          'Electronics engineering at one of the largest tire manufacturers in Eastern Europe: maintenance and development of electronic control systems.',
        ],
        tags: ['Electronics', 'Industrial systems'],
      },
    ],
  },
  stack: {
    label: 'Capabilities',
    heading: 'Tech stack',
    groups: [
      { title: 'Backend', items: ['Python', 'FastAPI', 'Django', 'DRF', 'Celery', 'SQL', 'PostgreSQL', 'MySQL', 'ORM', 'Alembic'] },
      { title: 'AI / ML', items: ['LLM integration', 'vLLM', 'Ollama', 'Vector search', 'Embeddings', 'RAG', 'AI agents', 'MCP'] },
      { title: 'DevOps & Servers', items: ['Docker', 'Docker Compose', 'Kubernetes', 'Linux', 'Jenkins', 'TimescaleDB'] },
      { title: 'Frontend', items: ['Vue.js', 'Nuxt', 'React (dashboards)', 'HTML', 'JavaScript', 'Responsive design', 'SEO'] },
    ],
  },
  projects: {
    label: 'Open source',
    heading: 'Libraries & tools I build in public',
    sub: 'Production-grade open source — published on GitHub and PyPI, written about on Medium and dev.to.',
    viewRepo: 'View repository',
    items: [
      { name: 'fastapi-viewsets', desc: 'DRF-style ViewSets for FastAPI — auto-generates CRUD endpoints from SQLAlchemy, Tortoise or Peewee models.' },
      { name: 'django-graph-search', desc: 'Production-ready semantic vector search for Django — traverses FK/M2M relations, RAG-ready, zero migrations.' },
      { name: 'llm-cache-router', desc: 'Semantic caching + multi-provider LLM routing with cost tracking — a lightweight production library.' },
      { name: 'testcaseer', desc: 'CLI tool that transforms browser actions into ready-to-use test cases. Stop writing them by hand.' },
      { name: 'pgadmin-ai-gateway', desc: 'Secure AI-agent connector for pgAdmin with RBAC roles, audit logging and an MCP-compatible interface for PostgreSQL.' },
      { name: 'pythonSiemens', desc: 'Industrial tooling from the factory floor: Python ↔ Siemens PLC communication (OPC UA / S7), data logging and vision pipelines.' },
    ],
  },
  writing: {
    label: 'Writing',
    heading: 'Articles & essays',
    sub: 'I write about FastAPI, Django, LLM tooling and the realities of shipping AI products.',
    readMore: 'Read article',
  },
  contact: {
    label: 'Contact',
    heading: 'Let’s build something exceptional',
    text: 'Open to Tech Lead / AI Engineer roles in product-driven, AI-native teams — and to interesting collaborations in open source.',
    cta: 'Write me on LinkedIn',
    profilesLabel: 'Find me on',
  },
  footer: { rights: '© 2026 Alexander Valenchits', built: 'Tech Lead & AI Engineer' },
}

const ru: Translation = {
  nav: { about: 'Обо мне', experience: 'Опыт', stack: 'Стек', projects: 'Open Source', writing: 'Статьи', contact: 'Контакты' },
  hero: {
    badge: 'Открыт к предложениям',
    role: 'Backend Tech Lead · AI-инженер · автор open source',
    tagline:
      'Прикладные AI-платформы и backend-системы: Python, FastAPI, Django, Kubernetes, AI/LLM-системы на vLLM, RAG и vector search, CI/CD. Более 10 лет превращаю сложную архитектуру в работающие продукты.',
    location: 'Минск, Беларусь · Готов к релокации',
    ctaContact: 'Связаться',
    ctaGithub: 'GitHub',
  },
  stats: [
    { value: '10+', label: 'лет опыта' },
    { value: '20+', label: 'публичных репозиториев' },
    { value: '3', label: 'пакета на PyPI' },
    { value: '10+', label: 'технических статей' },
  ],
  about: {
    label: 'Обо мне',
    heading: 'Инженерный лидер, который выпускает AI-продукты',
    p1: 'Я — Tech Lead и AI-инженер с более чем 10-летним инженерным опытом: пять лет занимался разработкой ПО для промышленности, затем пять лет — веб-разработкой на Python и JavaScript (Vue). Мой путь — от промышленной автоматизации, где в MVLab я связывал PLC Siemens, Linux-серверы и Python-backend на реальном производстве, до современных AI-native продуктов.',
    p2: 'Провожу технические интервью и код-ревью, принимаю архитектурные решения на основе domain-driven design. Ценю автономию, измеримые результаты и участие в продуктовых решениях — а не просто закрытие тикетов.',
    interestsLabel: 'Что меня вдохновляет',
    interests: ['Сложная архитектура', 'Оптимизация инференса моделей', 'AI-автоматизация', 'Открытый код', 'Продуктовое мышление', 'Менторство'],
    languagesLabel: 'Языки',
    languages: [
      { name: 'Беларуская', level: 'Родной', pct: 100 },
      { name: 'Русский', level: 'Родной', pct: 100 },
      { name: 'English', level: 'Professional working', pct: 75 },
    ],
  },
  experience: {
    label: 'Карьера',
    heading: 'Опыт работы',
    items: [
      {
        company: 'Alusoft',
        role: 'Backend Tech Lead',
        period: 'Мар 2025 — настоящее время',
        current: true,
        bullets: [
          'Руковожу backend-разработкой AI-native продуктов: сервисы FastAPI/Django с интеграцией LLM (vLLM, Ollama), продакшн AI-агенты и MCP-интеграции.',
          'Внедрил CI/CD: плавный бесшовный деплой в продакшн без простоев и покрытие сервисов unit-тестами.',
          'Провёл перестройку всего ландшафта вверенного участка на основе domain-driven design.',
          'Провожу технические интервью и код-ревью; задаю стандарты backend-разработки в команде.',
        ],
        tags: ['FastAPI', 'Django', 'vLLM', 'AI-агенты', 'MCP', 'CI/CD', 'DDD'],
      },
      {
        company: 'АлюсофтБел',
        role: 'Программист',
        period: 'Май 2021 — июн 2025',
        bullets: [
          'Внутренняя веб-разработка: backend на Python (Django, DRF, Celery) и фронтенды на Vue.js, PostgreSQL / MySQL.',
          'Построил vector search, embeddings и RAG-пайплайны над продакшн-данными.',
          'Ежедневная разработка с Cursor AI и AI-ассистированными процессами.',
        ],
        tags: ['Django', 'DRF', 'Celery', 'Vue.js', 'PostgreSQL', 'Cursor AI'],
      },
      {
        company: 'AIScanAuto — aiscanauto.com',
        role: 'Основатель',
        period: '2025 — настоящее время',
        current: true,
        bullets: [
          'Основал и создал AI-продукт автодиагностики: данные OBD-II + локальная LLM (Gemma) объясняют коды ошибок простым языком.',
          'Android-приложение выпущено; iOS-версия в разработке; ядро диагностики работает офлайн.',
        ],
        tags: ['LLM', 'Gemma', 'OBD-II', 'Mobile', 'Продукт'],
      },
      {
        company: 'МВЛАБ',
        role: 'Инженер-программист',
        period: 'Окт 2019 — май 2021',
        bullets: [
          'Управление канализационной насосной станцией (КНС): Siemens PLC + Linux-серверы + Python-backend.',
          'Весовая станция с распознаванием автомобильных номеров на Siemens S7-1200.',
          'Система машинного зрения для распознавания сучков на распиле досок.',
          'Оптимизация работы кранов на Siemens S7-400.',
        ],
        tags: ['Siemens PLC', 'OPC UA', 'Python', 'Linux', 'Computer Vision'],
      },
      {
        company: 'АСТ Эксперт',
        role: 'Инженер по автоматизации',
        period: 'Сен 2018 — ноя 2019',
        bullets: [
          'Промышленная автоматизация: системы управления на базе PLC и КИПиА для производственных объектов.',
        ],
        tags: ['PLC', 'SCADA', 'Автоматизация'],
      },
      {
        company: 'ОАО «Белшина»',
        role: 'Инженер-электроник',
        period: 'Авг 2014 — сен 2018',
        bullets: [
          'Инженер-электроник на одном из крупнейших шинных заводов Восточной Европы: обслуживание и развитие электронных систем управления.',
        ],
        tags: ['Электроника', 'Промышленные системы'],
      },
    ],
  },
  stack: {
    label: 'Компетенции',
    heading: 'Технический стек',
    groups: [
      { title: 'Backend', items: ['Python', 'FastAPI', 'Django', 'DRF', 'Celery', 'SQL', 'PostgreSQL', 'MySQL', 'ORM', 'Alembic'] },
      { title: 'AI / ML', items: ['Интеграция LLM', 'vLLM', 'Ollama', 'Vector search', 'Embeddings', 'RAG', 'AI-агенты', 'MCP'] },
      { title: 'DevOps и серверы', items: ['Docker', 'Docker Compose', 'Kubernetes', 'Linux', 'Jenkins', 'TimescaleDB'] },
      { title: 'Frontend', items: ['Vue.js', 'Nuxt', 'React (дашборды)', 'HTML', 'JavaScript', 'Адаптивная вёрстка', 'SEO'] },
    ],
  },
  projects: {
    label: 'Open source',
    heading: 'Библиотеки и инструменты, которые я делаю в открытую',
    sub: 'Продакшн-уровень open source — публикую на GitHub и PyPI, пишу об этом на Medium и dev.to.',
    viewRepo: 'Смотреть репозиторий',
    items: [
      { name: 'fastapi-viewsets', desc: 'ViewSets в стиле DRF для FastAPI — автогенерация CRUD-эндпоинтов из моделей SQLAlchemy, Tortoise или Peewee.' },
      { name: 'django-graph-search', desc: 'Продакшн семантический векторный поиск для Django — обходит связи FK/M2M, готов к RAG, без миграций.' },
      { name: 'llm-cache-router', desc: 'Семантическое кэширование + мультипровайдерная маршрутизация LLM с учётом расходов — лёгкая продакшн-библиотека.' },
      { name: 'testcaseer', desc: 'CLI-инструмент, превращающий действия в браузере в готовые тест-кейсы. Хватит писать их вручную.' },
      { name: 'pgadmin-ai-gateway', desc: 'Безопасный коннектор AI-агентов для pgAdmin с RBAC-ролями, аудитом и MCP-совместимым интерфейсом для PostgreSQL.' },
      { name: 'pythonSiemens', desc: 'Индустриальные инструменты с производства: связь Python ↔ PLC Siemens (OPC UA / S7), логирование данных и пайплайны машинного зрения.' },
    ],
  },
  writing: {
    label: 'Публикации',
    heading: 'Статьи и эссе',
    sub: 'Пишу о FastAPI, Django, LLM-инструментах и реальном опыте выпуска AI-продуктов.',
    readMore: 'Читать статью',
  },
  contact: {
    label: 'Контакты',
    heading: 'Давайте создадим что-то выдающееся',
    text: 'Открыт к ролям Tech Lead / AI Engineer в продуктовых AI-native командах — и к интересным коллаборациям в open source.',
    cta: 'Написать в LinkedIn',
    profilesLabel: 'Мои профили',
  },
  footer: { rights: '© 2026 Alexander Valenchits', built: 'Tech Lead & AI Engineer' },
}

const be: Translation = {
  nav: { about: 'Пра мяне', experience: 'Вопыт', stack: 'Стэк', projects: 'Open Source', writing: 'Артыкулы', contact: 'Кантакты' },
  hero: {
    badge: 'Адкрыты да прапаноў',
    role: 'Backend Tech Lead · AI-інжынер · аўтар open source',
    tagline:
      'Прыкладныя AI-платформы і backend-сістэмы: Python, FastAPI, Django, Kubernetes, AI/LLM-сістэмы на vLLM, RAG і vector search, CI/CD. Больш за 10 гадоў ператвараю складаную архітэктуру ў працуючыя прадукты.',
    location: 'Мінск, Беларусь · Гатовы да рэлакацыі',
    ctaContact: 'Звязацца',
    ctaGithub: 'GitHub',
  },
  stats: [
    { value: '10+', label: 'гадоў вопыту' },
    { value: '20+', label: 'публічных рэпазиторыяў' },
    { value: '3', label: 'пакеты на PyPI' },
    { value: '10+', label: 'тэхнічных артыкулаў' },
  ],
  about: {
    label: 'Пра мяне',
    heading: 'Інжынерны лідар, які выпускае AI-прадукты',
    p1: 'Я — Tech Lead і AI-інжынер з больш чым 10-гадовым інжынерным вопытам: пяць гадоў займаўся распрацоўкай ПЗ для прамысловасці, затым пяць гадоў — вэб-распрацоўкай на Python і JavaScript (Vue). Мой шлях — ад прамысловай аўтаматызацыі, дзе ў MVLab я звязваў PLC Siemens, Linux-серверы і Python-backend на рэальнай вытворчасці, да сучасных AI-native прадуктаў.',
    p2: 'Праводжу тэхнічныя сумоўі і код-рэв’ю, прымаю архітэктурныя рашэнні на аснове domain-driven design. Цаню аўтаномію, вымерныя вынікі і ўдзел у прадуктовых рашэннях, а не проста закрыццё тыкетаў.',
    interestsLabel: 'Што мяне натхняе',
    interests: ['Складаная архітэктура', 'Аптымізацыя інферэнсу мадэляў', 'AI-аўтаматызацыя', 'Адкрыты код', 'Прадуктовае мысленне', 'Ментарства'],
    languagesLabel: 'Мовы',
    languages: [
      { name: 'Беларуская', level: 'Родная', pct: 100 },
      { name: 'Русская', level: 'Родная', pct: 100 },
      { name: 'English', level: 'Professional working', pct: 75 },
    ],
  },
  experience: {
    label: 'Кар’ера',
    heading: 'Вопыт працы',
    items: [
      {
        company: 'Alusoft',
        role: 'Backend Tech Lead',
        period: 'Сак 2025 — цяпер',
        current: true,
        bullets: [
          'Кірую backend-распрацоўкай AI-native прадуктаў: сэрвісы FastAPI/Django з інтэграцыяй LLM (vLLM, Ollama), прадакшн AI-агенты і MCP-інтэграцыі.',
          'Укараніў CI/CD: плыўны бясшвовы дэплой у прадакшн без простояў і пакрыццё сэрвісаў unit-тэстамі.',
          'Правёў перабудову ўсяго ландшафту даверанага ўчастка на аснове domain-driven design.',
          'Праводжу тэхнічныя сумоўі і код-рэв’ю; задаю стандарты backend-распрацоўкі ў камандзе.',
        ],
        tags: ['FastAPI', 'Django', 'vLLM', 'AI-агенты', 'MCP', 'CI/CD', 'DDD'],
      },
      {
        company: 'АлюсофтБел',
        role: 'Праграміст',
        period: 'Май 2021 — чэр 2025',
        bullets: [
          'Унутраная вэб-распрацоўка: backend на Python (Django, DRF, Celery) і фронтэнды на Vue.js, PostgreSQL / MySQL.',
          'Пабудаваў vector search, embeddings і RAG-канвееры над прадакшн-дадзенымі.',
          'Штодзённая распрацоўка з Cursor AI і AI-асіставанымі працэсамі.',
        ],
        tags: ['Django', 'DRF', 'Celery', 'Vue.js', 'PostgreSQL', 'Cursor AI'],
      },
      {
        company: 'AIScanAuto — aiscanauto.com',
        role: 'Заснавальнік',
        period: '2025 — цяпер',
        current: true,
        bullets: [
          'Заснаваў і стварыў AI-прадукт аўтадыягностыкі: дадзеныя OBD-II + лакальная LLM (Gemma) тлумачаць коды памылак простай мовай.',
          'Android-дадатак выпушчаны; iOS-версія ў распрацоўцы; ядро дыягностыкі працуе афлайн.',
        ],
        tags: ['LLM', 'Gemma', 'OBD-II', 'Mobile', 'Прадукт'],
      },
      {
        company: 'МВЛАБ',
        role: 'Інжынер-праграміст',
        period: 'Кас 2019 — май 2021',
        bullets: [
          'Кіраванне каналізацыйнай насоснай станцыяй (КНС): Siemens PLC + Linux-серверы + Python-backend.',
          'Вагавая станцыя з распазнаваннем аўтамабільных нумароў на Siemens S7-1200.',
          'Сістэма машыннага зроку для распазнавання сучкоў на распілоўцы досак.',
          'Аптымізацыя работы кранаў на Siemens S7-400.',
        ],
        tags: ['Siemens PLC', 'OPC UA', 'Python', 'Linux', 'Computer Vision'],
      },
      {
        company: 'АСТ Эксперт',
        role: 'Інжынер па аўтаматызацыі',
        period: 'Вер 2018 — ліс 2019',
        bullets: [
          'Прамысловая аўтаматызацыя: сістэмы кіравання на базе PLC і КІПіА для вытворчых аб’ектаў.',
        ],
        tags: ['PLC', 'SCADA', 'Аўтаматызацыя'],
      },
      {
        company: 'ААТ «Белшына»',
        role: 'Інжынер-электронік',
        period: 'Жні 2014 — вер 2018',
        bullets: [
          'Інжынер-электронік на адным з найбуйнейшых шынных заводаў Усходняй Еўропы: абслугоўванне і развіццё электронных сістэм кіравання.',
        ],
        tags: ['Электроніка', 'Прамысловыя сістэмы'],
      },
    ],
  },
  stack: {
    label: 'Кампетэнцыі',
    heading: 'Тэхнічны стэк',
    groups: [
      { title: 'Backend', items: ['Python', 'FastAPI', 'Django', 'DRF', 'Celery', 'SQL', 'PostgreSQL', 'MySQL', 'ORM', 'Alembic'] },
      { title: 'AI / ML', items: ['Інтэграцыя LLM', 'vLLM', 'Ollama', 'Vector search', 'Embeddings', 'RAG', 'AI-агенты', 'MCP'] },
      { title: 'DevOps і серверы', items: ['Docker', 'Docker Compose', 'Kubernetes', 'Linux', 'Jenkins', 'TimescaleDB'] },
      { title: 'Frontend', items: ['Vue.js', 'Nuxt', 'React (дашборды)', 'HTML', 'JavaScript', 'Адаптыўная вёрстка', 'SEO'] },
    ],
  },
  projects: {
    label: 'Open source',
    heading: 'Бібліятэкі і інструменты, якія я раблю адкрыта',
    sub: 'Open source прадакшн-ўзроўню — публікую на GitHub і PyPI, пішу пра гэта на Medium і dev.to.',
    viewRepo: 'Глядзець рэпазиторый',
    items: [
      { name: 'fastapi-viewsets', desc: 'ViewSets у стылі DRF для FastAPI — аўтагенерацыя CRUD-эндпойнтаў з мадэляў SQLAlchemy, Tortoise або Peewee.' },
      { name: 'django-graph-search', desc: 'Прадакшн семантычны вектарны пошук для Django — абыходзіць сувязі FK/M2M, гатовы да RAG, без міграцый.' },
      { name: 'llm-cache-router', desc: 'Семантычнае кэшаванне + мультыправайдарная маршрутызацыя LLM з улікам выдаткаў — лёгкая прадакшн-бібліятэка.' },
      { name: 'testcaseer', desc: 'CLI-інструмент, які ператварае дзеянні ў браўзеры ў гатовыя тэст-кейсы. Больш не трэба пісаць іх уручную.' },
      { name: 'pgadmin-ai-gateway', desc: 'Бяспечны канектар AI-агентаў для pgAdmin з RBAC-ролямі, аўдытам і MCP-сумяшчальным інтэрфейсам для PostgreSQL.' },
      { name: 'pythonSiemens', desc: 'Індустрыяльныя інструменты з вытворчасці: сувязь Python ↔ PLC Siemens (OPC UA / S7), лагіраванне дадзеных і канвееры машыннага зроку.' },
    ],
  },
  writing: {
    label: 'Публікацыі',
    heading: 'Артыкулы і эсэ',
    sub: 'Пішу пра FastAPI, Django, LLM-інструменты і рэальны вопыт выпуску AI-прадуктаў.',
    readMore: 'Чытаць артыкул',
  },
  contact: {
    label: 'Кантакты',
    heading: 'Давайце створым нешта выключнае',
    text: 'Адкрыты да роляў Tech Lead / AI Engineer у прадуктовых AI-native камандах — і да цікавых калаборацый у open source.',
    cta: 'Напісаць у LinkedIn',
    profilesLabel: 'Мае профілі',
  },
  footer: { rights: '© 2026 Alexander Valenchits', built: 'Tech Lead & AI Engineer' },
}

export const translations: Record<Lang, Translation> = { en, ru, be }

export const langNames: Record<Lang, string> = { en: 'EN', ru: 'RU', be: 'BE' }

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translation
}

const LanguageContext = createContext<LangCtx>({ lang: 'en', setLang: () => {}, t: en })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('av-lang')
    return saved === 'ru' || saved === 'be' || saved === 'en' ? saved : 'en'
  })
  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('av-lang', l)
  }
  return <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</LanguageContext.Provider>
}

export const useLang = () => useContext(LanguageContext)
