import { BREAKFAST } from './breakfast'
import { DESSERT } from './dessert'
import { DINNER } from './dinner'
import { GRILL } from './grill'
import { HEALTHY } from './healthy'
import { SNACKS } from './snacks'
import { SUMMER_MENU } from './summer-menu'
import { SUPPER } from './supper'

export enum RecipeCategories {
  BREAKFAST = 'breakfast',
  DINNER = 'dinner',
  SUPPER = 'supper',
  HEALTHY = 'healthy',
  DESSERT = 'dessert',
  SNACKS = 'snacks',
  GRILL = 'grill',
  SUMMER_MENU = 'summer-menu',
}

export interface MetaSeo {
  title: string
  description: string
  keywords: string[]
  'og:title': string
  'og:description': string
  'og:url': string
  'og:image'?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  twitterUrl?: string
  'twitter:card'?: string
  canonicalUrl?: string
  robots?: string
  googlebot?: string
  yandex?: string
  selfwork?: string
  'max-image-preview'?: string
  viewport?: string
  author?: string
  'theme-color'?: string
}

export interface Recipe {
  metaSeo: MetaSeo
  searchRequests?: string[]
  categories: { name: string }[]
  key: string
  name: string
  img: string | null
  title: string
  description: string
  calories: number | null
  preparation: number | null
  time: number
  level: number
  rating: number
  portions: number
  used: number[] | null
  ingredients: { name: string; count?: number; gauge: string; img: string | null }[]
  equipments: { name: string; img: string | null }[]
  cookingRecipe: {
    img: string | null
    video: string | null
    description: string
    ingredients: { name: string; count?: number; gauge: string; img: string | null }[]
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
  grill: [...GRILL],
  'summer-menu': [...SUMMER_MENU],
}
