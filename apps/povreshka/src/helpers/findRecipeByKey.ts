import { RECIPES_OBJ } from '../constants.ts/recipes'

export const findRecipeByKey = (key: string) => {
  for (const category in RECIPES_OBJ) {
    const recipe = RECIPES_OBJ[category].find(item => item.key === key)
    if (recipe) return recipe
  }
  return null
}
