import {
  Phone,
  Send,
  MessageSquareText,
} from 'lucide-react'

export type Service = {
  id: string
  title: string
  description: string
  items: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'repair',
    title: 'Ремонт',
    description:
      'Вернём вещи аккуратный вид и продлим срок её службы — от небольшой починки до сложного ремонта.',
    items: [
      'Ремонт швов',
      'Замена молний',
      'Устранение повреждений',
      'Мелкий ремонт',
    ],
  },
  {
    id: 'fitting',
    title: 'Подгонка',
    description:
      'Подгоним готовую вещь по фигуре, чтобы она сидела комфортно, аккуратно и именно так, как вам нужно.',
    items: [
      'Укоротить брюки',
      'Укоротить рукава',
      'Ушить или расширить',
      'Подгонка по фигуре',
    ],
  },
  {
    id: 'remake',
    title: 'Переделка',
    description:
      'Изменим готовую вещь, если хочется другой длины, посадки, фасона или отдельных деталей.',
    items: [
      'Изменение фасона',
      'Изменение длины',
      'Изменение посадки',
      'Переделка элементов',
    ],
  },
  {
    id: 'sewing',
    title: 'Пошив',
    description:
      'Создадим вещь с нуля по вашим меркам, фотографии, эскизу или образцу.',
    items: [
      'Платья и юбки',
      'Костюмы и брюки',
      'Худи и свитшоты',
      'Детская одежда',
      'Карнавальные костюмы',
    ],
  },
]

export type Work = {
  src: string
  alt: string
  category: string
  span?: boolean
}

export const WORK_CATEGORIES = [
  'Все',
  'Ремонт',
  'Переделка',
  'Пошив',
  'Детская одежда',
  'Костюмы',
]

export const WORKS: Work[] = [
  {
    src: '/images/work-tailoring.png',
    alt: 'Индивидуальный пошив платья на манекене',
    category: 'Пошив',
    span: true,
  },
  {
    src: '/images/work-repair.png',
    alt: 'Ремонт шва изделия вручную',
    category: 'Ремонт',
  },
  {
    src: '/images/work-remake.png',
    alt: 'Переделанный жакет в мастерской',
    category: 'Переделка',
  },
  {
    src: '/images/work-kids.png',
    alt: 'Детское платье ручной работы',
    category: 'Детская одежда',
  },
  {
    src: '/images/work-costume.png',
    alt: 'Праздничный костюм с деталями',
    category: 'Костюмы',
    span: true,
  },
  {
    src: '/images/work-hoodie.png',
    alt: 'Худи ручной работы',
    category: 'Пошив',
  },
  {
    src: '/images/work-fabric.png',
    alt: 'Ткани, нитки и инструменты ателье',
    category: 'Переделка',
  },
  {
    src: '/images/after-fit.png',
    alt: 'Изделие после подгонки по фигуре',
    category: 'Ремонт',
  },
]

export const BEFORE_AFTER = [
  {
    title: 'Укороченные брюки',
    description: 'Аккуратно подшили длину под нужный рост.',
    before: '/images/before-pants.png',
    after: '/images/after-pants.png',
  },
  {
    title: 'Изменённая посадка',
    description: 'Ушили жакет по фигуре — силуэт стал чище.',
    before: '/images/before-fit.png',
    after: '/images/after-fit.png',
  },
]

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Рассказываете о задаче',
    description: 'Пришлите фотографию или расскажите, что нужно сделать.',
  },
  {
    num: '02',
    title: 'Обсуждаем решение',
    description: 'Определяем возможность работы, детали и стоимость.',
  },
  {
    num: '03',
    title: 'Выполняем работу',
    description: 'Ремонтируем, переделываем или создаём изделие.',
  },
  {
    num: '04',
    title: 'Получаете результат',
    description: 'Забираете готовую вещь и носите её с удовольствием.',
  },
]

export const PRICING = [
  { title: 'Ремонт', note: 'Стоимость рассчитывается индивидуально' },
  { title: 'Подгонка', note: 'Стоимость рассчитывается индивидуально' },
  { title: 'Переделка', note: 'Стоимость рассчитывается индивидуально' },
  { title: 'Пошив', note: 'Стоимость рассчитывается индивидуально' },
]

export const FAQ = [
  {
    q: 'Можно ли принести свою вещь на ремонт?',
    a: 'Да. Принесите вещь в ателье — посмотрим состояние изделия, обсудим, что можно сделать, и предложим подходящий вариант.',
  },
  {
    q: 'Можно ли узнать стоимость по фотографии?',
    a: 'В некоторых случаях можем предварительно сориентировать по фотографии. Точную стоимость назовём после осмотра вещи и уточнения объёма работы.',
  },
  {
    q: 'Можно ли сшить вещь по фотографии или эскизу?',
    a: 'Да. Можно показать фотографию, эскиз или принести образец — обсудим модель, ткань, детали и посадку.',
  },
  {
    q: 'Можно ли принести свою ткань?',
    a: 'Да, можно работать с вашей тканью. Перед пошивом проверим, подходит ли она для выбранного изделия.',
  },
  {
    q: 'Можно ли подогнать одежду по фигуре?',
    a: 'Да. Подгоняем готовую одежду по фигуре: можем изменить длину, объём, посадку и отдельные детали изделия.',
  },
  {
    q: 'Можно ли сделать заказ срочно?',
    a: 'Иногда срочный заказ возможен. Всё зависит от вида работы и текущей загрузки ателье — лучше уточнить при обращении.',
  },
  {
    q: 'Нужно ли записываться заранее?',
    a: 'Для обсуждения заказа лучше заранее написать или позвонить, чтобы договориться об удобном времени.',
  },
  {
    q: 'Сколько занимает работа?',
    a: 'Срок зависит от вида и сложности работы. Перед началом заказа согласуем ориентировочный срок готовности.',
  },
]

export const NAV_LINKS = [
  { label: 'Услуги', href: '#services' },
  { label: 'Работы', href: '#works' },
  { label: 'О нас', href: '#about' },
  { label: 'Как заказать', href: '#process' },
  { label: 'Контакты', href: '#contacts' },
]

export const PRODUCTION_NAV_LINKS = [
  { label: 'Услуги', href: '#services' },
  { label: 'Работы', href: '#works' },
  { label: 'О нас', href: '#about' },
  { label: 'Как заказать', href: '#process' },
  { label: 'Контакты', href: '#contacts' },
]

export const DIRECTIONS = [
  {
    label: 'Atelier',
    description: 'Частным клиентам',
    href: '/atelier',
  },
  {
    label: 'Production',
    description: 'Брендам и компаниям',
    href: '/production',
  },
]

export const CONTACTS = {
  city: 'Ставрополь',
  country: 'Россия',

  address: 'ул. 50 лет ВЛКСМ, 33',
  addressFull: 'Ставрополь, ул. 50 лет ВЛКСМ, 33',
  mapsHref:
    'https://yandex.com/maps/36/stavropol/house/ulitsa_50_let_vlksm_33/YEgYfwVgSEIHQFpvfXxwcH5hbQ%3D%3D/',

  hours: 'Пн–Пт, 8:00–19:00',

  phone: '+7 961 458-48-20',
  phoneHref: 'tel:+79614584820',

  telegram: 'Написать в Telegram',
  telegramHref: 'https://t.me/ByNadia26',

  max: 'Написать в MAX',
  maxHref:
    'https://max.ru/u/f9LHodD0cOKqztAgt3rTXh1nkeDbZf1YI0SaRBV9cNuDRUJX_i4dbZ0PBls',

  vk: 'Перейти во ВКонтакте',
  vkHref: 'https://m.vk.com/bynadia26',
}
export const CONTACT_LINKS = [
  {
    label: 'Телефон',
    value: '+7 961 458-48-20',
    icon: Phone,
    href: 'tel:+79614584820',
  },
  {
    label: 'MAX',
    value: 'Написать в MAX',
    icon: 'MAX',
    href:
      'https://max.ru/u/f9LHodD0cOKqztAgt3rTXh1nkeDbZf1YI0SaRBV9cNuDRUJX_i4dbZ0PBls',
  },
  {
    label: 'Telegram',
    value: 'Написать в Telegram',
    icon: Send,
    href: 'https://t.me/ByNadia26',
  },
  {
    label: 'Вконтакте',
    value: 'Перейти в Вконтакте',
    icon: 'VK',
    href: 'https://m.vk.com/bynadia26',
  },
]