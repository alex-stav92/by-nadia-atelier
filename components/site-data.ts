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
    description: 'Вернём одежде аккуратный вид и продлим срок её службы.',
    items: ['Ремонт швов', 'Замена молний', 'Устранение повреждений', 'Мелкий ремонт'],
  },
  {
    id: 'fitting',
    title: 'Подгонка',
    description: 'Сделаем посадку одежды комфортной и аккуратной.',
    items: ['Укоротить брюки', 'Укоротить рукава', 'Ушить или расширить', 'Подгонка по фигуре'],
  },
  {
    id: 'remake',
    title: 'Переделка',
    description: 'Изменим существующую вещь под ваши пожелания.',
    items: ['Изменение фасона', 'Изменение длины', 'Изменение посадки', 'Переделка элементов'],
  },
  {
    id: 'sewing',
    title: 'Пошив',
    description: 'Создадим вещь с нуля по вашим меркам, фотографии, эскизу или образцу.',
    items: ['Платья и юбки', 'Костюмы и брюки', 'Худи и свитшоты', 'Детская одежда', 'Карнавальные костюмы'],
  },
]

export type Work = {
  src: string
  alt: string
  category: string
  span?: boolean
}

export const WORK_CATEGORIES = ['Все', 'Ремонт', 'Переделка', 'Пошив', 'Детская одежда', 'Костюмы']

export const WORKS: Work[] = [
  { src: '/images/work-tailoring.png', alt: 'Индивидуальный пошив платья на манекене', category: 'Пошив', span: true },
  { src: '/images/work-repair.png', alt: 'Ремонт шва изделия вручную', category: 'Ремонт' },
  { src: '/images/work-remake.png', alt: 'Переделанный жакет в мастерской', category: 'Переделка' },
  { src: '/images/work-kids.png', alt: 'Детское платье ручной работы', category: 'Детская одежда' },
  { src: '/images/work-costume.png', alt: 'Праздничный костюм с деталями', category: 'Костюмы', span: true },
  { src: '/images/work-hoodie.png', alt: 'Худи ручной работы', category: 'Пошив' },
  { src: '/images/work-fabric.png', alt: 'Ткани, нитки и инструменты ателье', category: 'Переделка' },
  { src: '/images/after-fit.png', alt: 'Изделие после подгонки по фигуре', category: 'Ремонт' },
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
    a: 'Да, вы можете принести свою вещь — обсудим задачу и подберём подходящее решение.',
  },
  {
    q: 'Можно ли сшить вещь по фотографии?',
    a: 'Пришлите фотографию, эскиз или образец — рассмотрим задачу и обсудим детали.',
  },
  {
    q: 'Можно ли принести свою ткань?',
    a: 'Да, можно работать с вашей тканью. Детали обсуждаются при оформлении заказа.',
  },
  {
    q: 'Можно ли подогнать одежду по фигуре?',
    a: 'Да, подгонка по фигуре — одна из услуг ателье. Обсудим желаемую посадку.',
  },
  {
    q: 'Нужно ли записываться заранее?',
    a: 'Чтобы обсудить заказ и удобное время, напишите нам — договоримся о деталях.',
  },
  {
    q: 'Сколько занимает работа?',
    a: 'Сроки зависят от вида и сложности работы. Уточним их при обсуждении заказа.',
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

  phone: '+7 961 458-48-20',
  phoneHref: 'tel:+79614584820',

  telegram: 'Написать в Telegram',
  telegramHref: 'https://t.me/ByNadia26',

  max: 'Написать в MAX',
  maxHref: 'https://max.ru/u/f9LHodD0cOKqztAgt3rTXh1nkeDbZf1YI0SaRBV9cNuDRUJX_i4dbZ0PBls',

  vk: 'Перейти в Вконтакте',
  vkHref: 'https://m.vk.com/bynadia26',

  email: 'Добавить позже',
  emailHref: '#',
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
    href: 'https://max.ru/u/f9LHodD0cOKqztAgt3rTXh1nkeDbZf1YI0SaRBV9cNuDRUJX_i4dbZ0PBls',
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