import SC from '@emotion/styled'

import { CategoryCard } from '../cards/category-card'
import { SEASONAL_CATEGORIES_ARR } from './constants'
import { Container, Grid } from './seasonal-categories.sc'

const Content = SC.div`
  padding: 20px;
  padding-top: 100px;
`

export const SeasonalCategories = (props: any) => {
  return (
    <Container id="techStacks">
      <Content>
        <h2>СЕЗОННЫЕ КАТЕГОРИИ</h2>
        <Grid>
          {SEASONAL_CATEGORIES_ARR.map(({ key, ...item }) => (
            <CategoryCard key={key} {...item} />
          ))}
        </Grid>
      </Content>
    </Container>
  )
}
