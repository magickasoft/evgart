import { EQUIPMENTS } from '../equipments'
import { INGREDIENTS } from '../ingredients'

export const SUMMER_MENU = [
  {
    categories: [{ name: 'salads' }, { name: 'summerMenu' }],
    key: 'grecheskij-salat',
    name: 'grecheskij-salat',
    // img: '/static/recipes/scrambled-eggs.webp',
    img: null,
    title: 'Греческий салат',
    description:
      'Это классика средиземноморской кухни: сочные помидоры, хрустящие огурцы, сладкий болгарский перец, красный лук, маслины и нежный сыр фета. Всё заправляется ароматным оливковым маслом и щепоткой орегано. Лёгкий, освежающий и невероятно вкусный салат, который идеально подходит как к мясным блюдам, так и в качестве самостоятельного приёма пищи.',
    calories: 87.8,
    preparation: 5,
    time: 15,
    level: 1,
    rating: 5,
    portions: 4,
    used: [2.6, 6.4, 3.8],
    ingredients: [
      {
        ...INGREDIENTS.tomato,
        count: 2,
      },
      {
        ...INGREDIENTS.cucumber,
        count: 2,
      },
      {
        ...INGREDIENTS.redOnion,
        count: 0.5,
      },
      {
        ...INGREDIENTS.fetaCheese,
        count: 100,
      },
      {
        ...INGREDIENTS.olives,
        count: 100,
      },
      {
        ...INGREDIENTS.oreganoDry,
        count: 2,
      },
      {
        ...INGREDIENTS.garlic,
        count: 1,
      },
      {
        ...INGREDIENTS.lemonJuice,
        count: 15,
      },
      {
        ...INGREDIENTS.oliveOil,
        count: 30,
      },
      {
        ...INGREDIENTS.salt,
      },
      {
        ...INGREDIENTS.groundBlackPepper,
      },
    ],
    equipments: [EQUIPMENTS.bowl, EQUIPMENTS.knife, EQUIPMENTS.cutBoard],
    cookingRecipe: [
      {
        img: null,
        video: null,
        description:
          'Огурцы и помидоры нарежьте крупными дольками, чтобы сохранить их сочность. Красный лук нарежьте тонкими кольцами. Переложите всё в глубокую миску.',
        ingredients: [{ ...INGREDIENTS.tomato }, { ...INGREDIENTS.cucumber }, { ...INGREDIENTS.redOnion }],
      },
      {
        img: null,
        video: null,
        description:
          'Чеснок измельчите с помощью пресса. Смешайте с лимонным соком, орегано, солью и перцем. Постепенно влейте оливковое масло, взбивая вилкой до получения однородной заправки.',
        ingredients: [
          { ...INGREDIENTS.garlic },
          { ...INGREDIENTS.lemonJuice },
          { ...INGREDIENTS.oreganoDry },
          { ...INGREDIENTS.salt },
          { ...INGREDIENTS.groundBlackPepper },
          { ...INGREDIENTS.oliveOil },
        ],
      },
      {
        img: null,
        video: null,
        description: 'Залейте овощи получившейся заправкой и аккуратно перемешайте, чтобы не повредить кусочки.',
        ingredients: [],
      },
      {
        img: null,
        video: null,
        description:
          'Добавьте в салат маслины, предварительно удалив косточки. Перемешивать не нужно — просто распределите их по поверхности.',
        ingredients: [{ ...INGREDIENTS.olives }],
      },
      {
        img: null,
        video: null,
        description:
          'Выложите сверху крупные кусочки феты. Посыпьте сушёным орегано и слегка сбрызните ещё немного оливковым маслом для аромата.',
        ingredients: [{ ...INGREDIENTS.fetaCheese }, { ...INGREDIENTS.oreganoDry }, { ...INGREDIENTS.oliveOil }],
      },
    ],
  },
]
