export type NavLink = { label: string; href: string; active?: boolean };

export const NAV_LINKS: NavLink[] = [
  { label: 'Главная', href: '#home' },
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'B2B', href: '/production', active: true },
  { label: 'О нас', href: '#about' },
  { label: 'Контакты', href: '#contact' },
];

export type Service = {
  title: string;
  description: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    title: 'Худи и свитшоты',
    description: 'Толстовки, худи и свитшоты из плотного трикотажа.',
    image:
      'https://images.pexels.com/photos/7479813/pexels-photo-7479813.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
  {
    title: 'Трикотаж',
    description: 'Работа с трикотажными полотнами разных плотностей.',
    image:
      'https://images.pexels.com/photos/38952493/pexels-photo-38952493.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
  {
    title: 'Футболки',
    description: 'Базовые и авторские футболки, лонгсливы, топы.',
    image:
      'https://images.pexels.com/photos/30710033/pexels-photo-30710033.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
  {
    title: 'Корпоративная одежда',
    description: 'Униформа и одежда для компаний и команд.',
    image:
      'https://images.pexels.com/photos/9594147/pexels-photo-9594147.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
  {
    title: 'Мерч',
    description: 'Брендированный мерч для брендов и проектов.',
    image:
      'https://images.pexels.com/photos/9594078/pexels-photo-9594078.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
  {
    title: 'Небольшие коллекции',
    description: 'Пошив капсульных коллекций и отдельных моделей.',
    image:
      'https://images.pexels.com/photos/18257675/pexels-photo-18257675.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
  {
    title: 'Костюмы',
    description: 'Костюмы и комплекты для разных задач.',
    image:
      'https://images.pexels.com/photos/38269421/pexels-photo-38269421.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
  {
    title: 'Индивидуальные проекты',
    description: 'Нестандартные изделия и сложные задачи.',
    image:
      'https://images.pexels.com/photos/5830644/pexels-photo-5830644.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
  },
];

export type Audience = {
  title: string;
  description: string;
};

export const AUDIENCES: Audience[] = [
  {
    title: 'Бренды',
    description: 'Пошив небольших коллекций и отдельных моделей.',
  },
  {
    title: 'Дизайнеры',
    description: 'Помощь в реализации дизайнерских проектов.',
  },
  {
    title: 'Компании',
    description: 'Корпоративная одежда и мерч.',
  },
  {
    title: 'Event / Creative',
    description: 'Костюмы, сценические решения и одежда для мероприятий.',
  },
];

export type ProcessStep = {
  num: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'Обсуждаем задачу',
    description: 'Уточняем изделие, объём, материалы и требования.',
  },
  {
    num: '02',
    title: 'Создаём образец',
    description: 'При необходимости создаём первый образец и согласовываем детали.',
  },
  {
    num: '03',
    title: 'Подготавливаем производство',
    description: 'Проверяем лекала, материалы и технологию.',
  },
  {
    num: '04',
    title: 'Запускаем пошив',
    description: 'Производим согласованный объём.',
  },
  {
    num: '05',
    title: 'Контролируем качество',
    description: 'Проверяем готовые изделия.',
  },
  {
    num: '06',
    title: 'Передаём партию',
    description: 'Готовые изделия передаются клиенту.',
  },
];

export type Advantage = {
  title: string;
  description: string;
};

export const ADVANTAGES: Advantage[] = [
  {
    title: 'Небольшие партии',
    description:
      'Можно работать с небольшими объёмами без необходимости заказывать промышленную партию.',
  },
  {
    title: 'Прямое общение',
    description: 'Клиент взаимодействует непосредственно с производством.',
  },
  {
    title: 'Гибкость',
    description:
      'Можно обсуждать нестандартные задачи и корректировать решение.',
  },
  {
    title: 'Образец',
    description: 'Перед запуском партии можно согласовать образец.',
  },
  {
    title: 'Локальное производство',
    description: 'Производство находится в Ставрополе.',
  },
];

export type ProjectCategory =
  | 'Все'
  | 'Одежда'
  | 'Трикотаж'
  | 'Мерч'
  | 'Костюмы'
  | 'B2B';

export type Project = {
  title: string;
  category: Exclude<ProjectCategory, 'Все'>;
  image: string;
  span?: 'wide' | 'tall' | 'normal';
};

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Все',
  'Одежда',
  'Трикотаж',
  'Мерч',
  'Костюмы',
  'B2B',
];

export const PROJECTS: Project[] = [
  {
    title: 'Худи в нейтральных тонах',
    category: 'Одежда',
    image:
      'https://images.pexels.com/photos/7479809/pexels-photo-7479809.jpeg?auto=compress&cs=tinysrgb&h=1100&w=800',
    span: 'tall',
  },
  {
    title: 'Трикотажное полотно',
    category: 'Трикотаж',
    image:
      'https://images.pexels.com/photos/19203177/pexels-photo-19203177.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    span: 'wide',
  },
  {
    title: 'Бирки и маркировка',
    category: 'Мерч',
    image:
      'https://images.pexels.com/photos/9594096/pexels-photo-9594096.jpeg?auto=compress&cs=tinysrgb&h=900&w=800',
    span: 'normal',
  },
  {
    title: 'Раскрой изделия',
    category: 'Одежда',
    image:
      'https://images.pexels.com/photos/5830644/pexels-photo-5830644.jpeg?auto=compress&cs=tinysrgb&h=1100&w=800',
    span: 'tall',
  },
  {
    title: 'Пошив костюма',
    category: 'Костюмы',
    image:
      'https://images.pexels.com/photos/38269421/pexels-photo-38269421.jpeg?auto=compress&cs=tinysrgb&h=900&w=800',
    span: 'normal',
  },
  {
    title: 'Производственный процесс',
    category: 'B2B',
    image:
      'https://images.pexels.com/photos/4621924/pexels-photo-4621924.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    span: 'wide',
  },
  {
    title: 'Детали трикотажа',
    category: 'Трикотаж',
    image:
      'https://images.pexels.com/photos/38952493/pexels-photo-38952493.jpeg?auto=compress&cs=tinysrgb&h=1100&w=800',
    span: 'tall',
  },
  {
    title: 'Образец изделия',
    category: 'B2B',
    image:
      'https://images.pexels.com/photos/7147454/pexels-photo-7147454.jpeg?auto=compress&cs=tinysrgb&h=900&w=800',
    span: 'normal',
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Можно ли заказать небольшую партию?',
    answer:
      'Объём и сроки обсуждаются индивидуально в зависимости от изделия и задачи. Мы работаем с небольшими и средними партиями.',
  },
  {
    question: 'Работаете ли вы по готовым лекалам?',
    answer:
      'Да, можно работать по готовым лекалам. Также можем помочь с доработкой или созданием новых лекал под задачу.',
  },
  {
    question: 'Можно ли сначала изготовить образец?',
    answer:
      'Да, перед запуском партии можно согласовать образец. Это помогает уточнить детали и посадку изделия.',
  },
  {
    question: 'Какие изделия вы производите?',
    answer:
      'Худи, свитшоты, трикотаж, футболки, корпоративную одежду, мерч, небольшие коллекции, костюмы и индивидуальные проекты.',
  },
  {
    question: 'Можно ли заказать корпоративную одежду?',
    answer:
      'Да, мы работаем с компаниями и производим корпоративную одежду и мерч.',
  },
  {
    question: 'Работаете ли вы с начинающими брендами?',
    answer:
      'Да, мы работаем с небольшими и начинающими брендами. Помогаем реализовать проект от идеи до готовой партии.',
  },
  {
    question: 'Какие сроки производства?',
    answer:
      'Объём и сроки обсуждаются индивидуально в зависимости от изделия и задачи.',
  },
];

export const CONTACTS = {
  city: 'Ставрополь',
  phone: '+7 (900) 000-00-00',
  phoneHref: 'tel:+79000000000',
  telegram: '@bynadia',
  telegramHref: 'https://t.me/bynadia',
  whatsapp: 'Написать в WhatsApp',
  whatsappHref: 'https://wa.me/79000000000',
  email: 'hello@bynadia.ru',
  emailHref: 'mailto:hello@bynadia.ru',
};
