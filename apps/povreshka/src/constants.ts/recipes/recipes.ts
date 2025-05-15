import { BREAKFAST } from './breakfast'
import { DESSERT } from './dessert'
import { DINNER } from './dinner'
import { HEALTHY } from './healthy'
import { SNACKS } from './snacks'
import { SUPPER } from './supper'

export enum RecipeCategories {
  BREAKFAST = 'breakfast',
  DINNER = 'dinner',
  SUPPER = 'supper',
  HEALTHY = 'healthy',
  DESSERT = 'dessert',
  SNACKS = 'snacks',
}

export interface Recipe {
  categories: { name: string }[]
  key: string
  name: string
  img: string | null
  title: string
  description: string
  calories: number
  preparation: number | null
  time: number
  level: number
  rating: number
  portions: number
  used: number[]
  ingredients: { name: string; count?: number; gauge: string; img: string | null }[]
  equipments: { name: string; img: string | null }[]
  cookingRecipe: {
    img: string | null
    video: string | null
    description: string
    ingredients: { name: string; count: number; gauge: string; img: string | null }[]
  }[]
}

export const RECIPES_OBJ: {
  [key: string]: Recipe[]
} = {
  breakfast: [...BREAKFAST],
  dinner: [...DINNER],
  supper: [...SUPPER],
  healthy: [...HEALTHY],
  dessert: [...DESSERT],
  snacks: [...SNACKS],
}
