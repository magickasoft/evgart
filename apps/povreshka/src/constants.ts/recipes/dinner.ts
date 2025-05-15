import { EQUIPMENTS } from '../equipments'
import { INGREDIENTS } from '../ingredients'

export const DINNER = [
  {
    categories: [{ name: 'dinner' }],
    key: 'borshch-s-pampushkami',
    name: 'borshch-s-pampushkami',
    img: null,
    title: 'Борщ с пампушками',
    description:
      'Хотите подать борщ с пампушками? Легко! Пока варится суп, параллельно замесите тесто для этих пышных булочек — не так уж это и сложно. Результат — полноценное, сытное и аппетитное первое блюдо. Не забудьте, как только пампушки испекутся, щедро смазать их чесночным маслом — это классика. Сам борщ можно сварить даже в постном варианте — в компании с ароматными пампушками он всё равно будет выглядеть эффектно и насыщенно по вкусу. Делимся пошаговой инструкцией — пробуйте, получится вкусно!',
    calories: 547.18,
    preparation: 15,
    time: 90,
    level: 1,
    rating: 4.75,
    portions: 6,
    used: [12.37, 28.55, 60.08],
    ingredients: [
      {
        ...INGREDIENTS.beet,
        count: 2,
      },
      {
        ...INGREDIENTS.carrot,
        count: 1,
      },
      {
        ...INGREDIENTS.potato,
        count: 2,
      },
      {
        ...INGREDIENTS.onion,
        count: 1,
      },
      {
        ...INGREDIENTS.garlic,
        count: 2,
      },
      {
        ...INGREDIENTS.vegetableOil,
        count: 100,
      },
      {
        ...INGREDIENTS.salt,
      },
      {
        ...INGREDIENTS.sugar,
      },
      {
        ...INGREDIENTS.vinegar,
      },
      {
        ...INGREDIENTS.bayLeaf,
      },
      {
        ...INGREDIENTS.tomato,
        count: 2,
      },
      {
        ...INGREDIENTS.cabbage,
        count: 0.5,
      },
      {
        ...INGREDIENTS.groundBlackPepper,
      },
      {
        ...INGREDIENTS.refinedVegetableOil,
      },
      {
        ...INGREDIENTS.flour,
        count: 250,
      },
      {
        ...INGREDIENTS.yeast,
        count: 6,
      },
      {
        ...INGREDIENTS.milk,
      },
      {
        ...INGREDIENTS.egg,
        count: 1,
      },
      {
        ...INGREDIENTS.sesameSeeds,
      },
      {
        ...INGREDIENTS.milk,
      },
      {
        ...INGREDIENTS.sugar,
        count: 0.5,
      },
      {
        ...INGREDIENTS.refinedVegetableOil,
        count: 1.5,
      },
      {
        ...INGREDIENTS.egg,
        count: 1,
      },
      {
        ...INGREDIENTS.sesameSeeds,
        count: 1,
      },
      {
        ...INGREDIENTS.garlic,
        count: 4,
      },
    ],
    equipments: [
      EQUIPMENTS.pot,
      EQUIPMENTS.pan,
      EQUIPMENTS.bowl,
      EQUIPMENTS.knife,
      EQUIPMENTS.cutBoard,
      EQUIPMENTS.grater,
      EQUIPMENTS.blender,
      EQUIPMENTS.oven,
      EQUIPMENTS.bakingTray,
      EQUIPMENTS.pastryBrush,
    ],
    cookingRecipe: [
      {
        img: null,
        video: null,
        description:
          'Подготовьте овощи: вымойте, очистите и нарежьте их тонкой соломкой, а помидоры — кубиками. Закипятите воду в кастрюле, посолите, добавьте капусту и картофель. Пока они варятся, обжарьте на сковороде лук и морковь, затем добавьте половину свеклы, уксус и сахар — получится ароматная зажарка.',
        ingredients: [
          { ...INGREDIENTS.beet, count: 2 },
          { ...INGREDIENTS.carrot, count: 1 },
          { ...INGREDIENTS.potato, count: 3 },
          { ...INGREDIENTS.onion, count: 1 },
          { ...INGREDIENTS.cabbage, count: 300 },
          { ...INGREDIENTS.tomato, count: 2 },
          { ...INGREDIENTS.garlic, count: 3 },
          { ...INGREDIENTS.refinedVegetableOil, count: 2 },
          { ...INGREDIENTS.vinegar, count: 1 },
          { ...INGREDIENTS.sugar, count: 1 },
          { ...INGREDIENTS.salt, count: 1 },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Перемешайте овощи и тушите их под крышкой 10 минут. Оставшуюся свеклу залейте кипятком с уксусом — она настоится и отдаст красивый цвет. Добавьте к овощам помидоры, приправьте и тушите еще 20 минут до мягкости и насыщенного вкуса.',
        ingredients: [
          { ...INGREDIENTS.vinegar, count: 1 },
          { ...INGREDIENTS.groundBlackPepper, count: 0.5 },
          { ...INGREDIENTS.salt, count: 0.5 },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Когда картофель и капуста будут почти готовы, добавьте к ним тушёные овощи и лавровый лист. Доведите до кипения, снимите пену. Добавьте чеснок, накройте крышкой и сразу уберите с огня — борщ должен настояться и раскрыть аромат.',
        ingredients: [{ ...INGREDIENTS.bayLeaf, count: 2 }],
      },
      {
        img: null,
        video: null,
        description:
          'Добавьте в борщ настоянный свекольный сок, чтобы придать супу яркий, насыщенный цвет. Аккуратно перемешайте и оставьте под крышкой.',
        ingredients: [],
      },
      {
        img: null,
        video: null,
        description:
          'Разогрейте духовку и приготовьте тесто для пампушек: разведите дрожжи в молоке, добавьте муку, масло, сахар и соль. Замесите тесто, оставьте подойти. Сформируйте шарики и выложите на противень. Смажьте яйцом, присыпьте кунжутом и выпекайте до золотистой корочки.',
        ingredients: [
          { ...INGREDIENTS.flour, count: 400 },
          { ...INGREDIENTS.yeast, count: 1 },
          { ...INGREDIENTS.milk, count: 250 },
          { ...INGREDIENTS.sugar, count: 1 },
          { ...INGREDIENTS.salt, count: 1 },
          { ...INGREDIENTS.refinedVegetableOil, count: 2 },
          { ...INGREDIENTS.egg, count: 1 },
          { ...INGREDIENTS.sesameSeeds, count: 1 },
        ],
      },
      {
        img: null,
        video: null,
        description:
          'Измельчите чеснок и взбейте его с маслом в блендере. Горячие пампушки смажьте ароматным чесночным маслом с помощью кисточки. Подавайте свежие и тёплые пампушки к борщу — это идеальное дополнение.',
        ingredients: [
          { ...INGREDIENTS.garlic, count: 3 },
          { ...INGREDIENTS.refinedVegetableOil, count: 2 },
        ],
      },
    ],
  },
]
