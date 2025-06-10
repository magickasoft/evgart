const MEAT = {
  porkNeck: {
    name: 'Шея свиная',
    gauge: 'кг',
    img: null,
  },
  chickenThighFillet: {
    name: 'Куриное филе бедра',
    gauge: 'кг',
    img: null,
  },
  chickenBreast: {
    name: 'Куриное филе грудки',
    gauge: 'кг',
    img: null,
  },
  boiledSausage: {
    name: 'Колбаса вареная',
    gauge: 'кг.',
    img: null,
  },
  boiledPorkSausage: {
    name: 'Колбаса вареная свиная',
    gauge: 'кг.',
    img: null,
  },
}

const GREANS = {
  greens: {
    name: 'Зелень',
    gauge: 'пуч.',
    img: null,
  },
  dill: {
    name: 'Укроп',
    gauge: 'пуч.',
    img: null,
  },
  parsley: {
    name: 'Петрушка',
    gauge: 'пуч.',
    img: null,
  },
  basil: {
    name: 'Базилик',
    gauge: 'пуч.',
    img: null,
  },
  cilantro: {
    name: 'Кинза',
    gauge: 'пуч.',
    img: null,
  },
  greenOnion: {
    name: 'Лук зелёный',
    gauge: 'пуч.',
    img: null,
  },
  spinach: {
    name: 'Шпинат',
    gauge: 'пуч.',
    img: null,
  },
  arugula: {
    name: 'Руккола',
    gauge: 'пуч.',
    img: null,
  },
  oreganoDry: {
    name: 'Орегано сушёный',
    gauge: 'г',
    img: null,
  },
}

const VEGATABLES = {
  tomato: {
    name: 'Помидор',
    gauge: 'шт.',
    img: null,
  },
  cucumber: {
    name: 'Огурец',
    gauge: 'шт.',
    img: null,
  },
  bellPepper: {
    name: 'Перец сладкий',
    gauge: 'шт.',
    img: null,
  },
  zucchini: {
    name: 'Цуккини',
    gauge: 'шт.',
    img: null,
  },
  beet: {
    name: 'Свекла',
    gauge: 'шт.',
    // img: '/static/ingredients/beet.webp',
    img: null,
  },
  carrot: {
    name: 'Морковь',
    gauge: 'шт.',
    // img: '/static/ingredients/carrot.webp',
    img: null,
  },
  onion: {
    name: 'Лук репчатый',
    gauge: 'шт.',
    // img: '/static/ingredients/onion.webp',
    img: null,
  },
  greenOnion: {
    name: 'Лук зелёный',
    gauge: 'шт.',
    // img: '/static/ingredients/onion.webp',
    img: null,
  },
  radish: {
    name: 'Редис',
    gauge: 'шт.',
    // img: '/static/ingredients/cabbage-red.webp',
    img: null,
  },
  redOnion: {
    name: 'Лук красный',
    gauge: 'шт.',
    // img: '/static/ingredients/onion.webp',
    img: null,
  },
  potato: {
    name: 'Картофель',
    gauge: 'шт.',
    // img: '/static/ingredients/potato.webp',
    img: null,
  },
  garlic: {
    name: 'Чеснок',
    gauge: 'зуб.',
    // img: '/static/ingredients/garlic.webp',
    img: null,
  },
  cabbage: {
    name: 'Капуста белокочанная',
    gauge: 'коч.',
    // img: '/static/ingredients/cabbage.webp',
    img: null,
  },
  broccoli: {
    name: 'Брокколи',
    gauge: 'г',
    img: '/static/ingredients/broccoli.webp',
  },
  olives: {
    name: 'Оливки',
    gauge: 'г',
    // img: '/static/ingredients/olive.webp',
    img: null,
  },
}

const LIQUIDS = {
  water: {
    name: 'Вода',
    gauge: 'мл',
    img: null,
  },
  hotWater: {
    name: 'Горячая вода',
    gauge: 'мл',
    img: null,
  },
  carbonatedMineralWater: {
    name: 'Газированная минеральная вода',
    gauge: 'мл',
    img: null,
  },
  lemonJuice: {
    name: 'Лимонный сок',
    gauge: 'мл',
    img: null,
  },
  milk: {
    name: 'Молоко',
    gauge: 'мл',
    img: null,
  },
  kefir: {
    name: 'Кефир',
    gauge: 'мл',
    img: null,
  },
  yogurt: {
    name: 'Йогурт',
    gauge: 'мл',
    img: null,
  },
  sourCream: {
    name: 'Сметана',
    gauge: 'г',
    img: null,
  },
  cream20: {
    name: 'Сливки 20%',
    gauge: 'мл',
    img: null,
  },
  breadKvass: {
    name: 'Хлебный квас',
    gauge: 'л',
    img: null,
  },
}

export const INGREDIENTS = {
  ...MEAT,
  ...GREANS,
  ...VEGATABLES,
  ...LIQUIDS,
  whiteBread: {
    name: 'Белый хлеб',
    gauge: 'г',
    // img: '/static/ingredients/white-bread.webp',
    img: null,
  },
  mustard: {
    name: 'Горчица',
    gauge: 'г',
    // img: '/static/ingredients/mustard.webp',
  },
  egg: {
    name: 'Яйцо куриное',
    img: '/static/ingredients/egg.webp',
    gauge: 'шт.',
  },
  butter: {
    name: 'Масло сливочное',
    gauge: 'г',
    img: null,
  },
  meltedButter: {
    name: 'Масло сливочное растопленное',
    gauge: 'ст.л.',
    img: null,
  },
  refinedVegetableOil: {
    name: 'Масло растительное рафинированное',
    gauge: 'ст.л.',
    img: null,
  },
  vegetableOil: {
    name: 'Масло растительное',
    gauge: 'ст.л.',
    img: null,
  },
  groundBlackPepper: {
    name: 'Перец чёрный молотый',
    gauge: 'г',
    img: '/static/ingredients/black-pepper.webp',
  },
  salt: {
    name: 'Соль',
    gauge: 'г',
    img: '/static/ingredients/salt.webp',
  },
  flour: {
    name: 'Мука',
    gauge: 'г',
    img: null,
  },

  fetaCheese: {
    name: 'Сыр фета',
    gauge: 'г',
    // img: '/static/ingredients/feta-cheese.webp',
    img: null,
  },
  hardCheese: {
    name: 'Сыр твёрдый',
    gauge: 'г',
    img: '/static/ingredients/hard-cheese.webp',
  },
  oliveOil: {
    name: 'Масло оливковое',
    gauge: 'ст.л.',
    img: null,
  },
  sugar: {
    name: 'Сахар',
    gauge: 'г',
    img: null,
  },
  vinegar: {
    name: 'Уксус',
    gauge: 'ст.л.',
    img: null,
  },
  bayLeaf: {
    name: 'Лавровый лист',
    gauge: 'шт.',
    img: null,
  },
  milk: {
    name: 'Молоко',
    gauge: 'мл',
    img: null,
  },
  yeast: {
    name: 'Дрожжи',
    gauge: 'г',
    img: null,
  },
  sesameSeeds: {
    name: 'Кунжутные семечки',
    gauge: 'г',
    img: null,
  },
  kefir32: {
    name: 'Кефир 3.2%',
    gauge: 'мл',
    img: null,
  },
  lavash: {
    name: 'Лаваш',
    gauge: 'шт.',
    img: null,
  },
}
