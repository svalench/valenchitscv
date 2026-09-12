export const links = {
  github: 'https://github.com/svalench',
  linkedin: 'https://www.linkedin.com/in/valenchits/',
  devto: 'https://dev.to/valenchits',
  medium: 'https://medium.com/@chitsalex',
  wellfound: 'https://wellfound.com/u/valenchits',
  hirify: 'https://hirify.me/valenchits',
}

export interface ProjectMeta {
  name: string
  url: string
  pypi?: string
  product?: string
  language: string
  featured?: boolean
}

export const projectsMeta: ProjectMeta[] = [
  { name: 'AIScanAuto', url: 'https://aiscanauto.com/', product: 'AI product', language: 'AI · OBD-II', featured: true },
  { name: 'EchoLang', url: 'https://echolang.io/', product: 'iOS App', language: 'Swift · iOS', featured: true },
  { name: 'fastapi-viewsets', url: 'https://github.com/svalench/fastapi_viewsets', pypi: 'https://pypi.org/project/fastapi-viewsets/', language: 'Python', featured: true },
  { name: 'django-graph-search', url: 'https://github.com/svalench/django_graph_search', pypi: 'https://pypi.org/project/django-graph-search/', language: 'Python', featured: true },
  { name: 'llm-cache-router', url: 'https://github.com/svalench/llm-cache-router', pypi: 'https://pypi.org/project/llm-cache-router/', language: 'Python', featured: true },
  { name: 'testcaseer', url: 'https://github.com/svalench/testcaseer', language: 'Python' },
  { name: 'pgadmin-ai-gateway', url: 'https://github.com/svalench/pgadmin-ai-gateway', language: 'Python' },
  { name: 'pythonSiemens', url: 'https://github.com/svalench/pythonSiemens', language: 'Python' },
]

export interface Article {
  title: string
  url: string
  source: 'Medium' | 'dev.to'
  date: string
}

export const articles: Article[] = [
  {
    title: 'fastapi-viewsets vs fastapi-crudrouter: Which CRUD Generator Should You Pick in 2026?',
    url: 'https://medium.com/@chitsalex/fastapi-viewsets-vs-fastapi-crudrouter-which-crud-generator-should-you-pick-in-2026-af5dda530f7c',
    source: 'Medium',
    date: 'Aug 2026',
  },
  {
    title: 'Building a Shop Admin Panel CRUD in Minutes with fastapi-viewsets',
    url: 'https://medium.com/@chitsalex/building-a-shop-admin-panel-crud-in-minutes-with-fastapi-viewsets-23d23bdcd6b1',
    source: 'Medium',
    date: 'Jun 2026',
  },
  {
    title: 'Add Semantic Search + RAG to Any Django App in 5 Minutes (No Migrations)',
    url: 'https://medium.com/@chitsalex/your-django-app-has-years-of-data-heres-how-to-make-ai-agents-actually-use-it-f6f68eb45b9c',
    source: 'Medium',
    date: 'Jun 2026',
  },
  {
    title: 'I Built a Free AI Assistant for Car Diagnostics, for what?',
    url: 'https://medium.com/@chitsalex/i-built-a-free-ai-assistant-for-car-diagnostics-for-what-164fed024114',
    source: 'Medium',
    date: 'May 2026',
  },
  {
    title: 'Building a Local AI Car Diagnostics Assistant with Gemma 4: OBD AI Scanner',
    url: 'https://dev.to/valenchits/building-a-local-ai-car-diagnostics-assistant-with-gemma-4-obd-ai-scanner-2c97',
    source: 'dev.to',
    date: 'May 2026',
  },
  {
    title: "We Shipped an MVP With Vibe-Coding. Here's What Nobody Tells You About the Aftermath",
    url: 'https://dev.to/valenchits/we-shipped-an-mvp-with-vibe-coding-heres-what-nobody-tells-you-about-the-aftermath-3lml',
    source: 'dev.to',
    date: 'Apr 2026',
  },
  {
    title: 'Stop Writing CRUD Boilerplate for FastAPI — Use ViewSets Instead',
    url: 'https://dev.to/valenchits/stop-writing-crud-boilerplate-for-fastapi-use-viewsets-instead-54ek',
    source: 'dev.to',
    date: 'Apr 2026',
  },
]
