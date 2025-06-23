import styled from '@emotion/styled'

import { RECIPES_OBJ } from '../../constants.ts/recipes/recipes'
import { CategoryCard } from '../cards/category-card'
import { RecipeCard } from '../cards/recipe-card'
import { CATEGORIES_ARR } from './constants'
import { Container } from './popular-categories.sc'

const Wrapper = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px 12px;
  }
`

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
`

const CategoryRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`

const CategoryCardWrapper = styled.div`
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const RecipesScroll = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding-bottom: 8px;
  max-width: 90vw;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;
  }
`

export const PopularCategories = () => {
  return (
    <Container id="techStacks">
      <Wrapper>
        <Title>ПОПУЛЯРНЫЕ КАТЕГОРИИ</Title>

        {CATEGORIES_ARR.map(({ name, ...category }) => {
          const recipes = RECIPES_OBJ[name]?.slice(0, 10) || []

          return (
            <CategoryRow key={name}>
              <CategoryCardWrapper>
                <CategoryCard name={name} {...category} variant="slider" />
              </CategoryCardWrapper>

              {recipes.length > 0 && (
                <RecipesScroll>
                  {recipes.map(({ key, name, ...recipe }) => (
                    <RecipeCard name={name} key={key || name} {...recipe} />
                  ))}
                </RecipesScroll>
              )}
            </CategoryRow>
          )
        })}
      </Wrapper>
    </Container>
  )
}
