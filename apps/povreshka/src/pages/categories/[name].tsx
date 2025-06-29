import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import { Page } from '../../components'
import { RecipeCard } from '../../components/cards/recipe-card'
import { RECIPES_OBJ } from '../../constants.ts/recipes/recipes'

const Cards = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: start;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
`

const CategoryPage = () => {
  const router = useRouter()
  const { name } = router.query as { name?: string }

  const recipes = name ? RECIPES_OBJ[name] : []

  return (
    <Page>
      <Cards>
        {recipes.map(({ key, ...current }) => (
          <RecipeCard key={key} {...current} />
        ))}
      </Cards>
    </Page>
  )
}

export default CategoryPage
