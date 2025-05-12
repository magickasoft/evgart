import SC from '@emotion/styled'

import { CategoryCard } from '../cards/category-card'
import { CATEGORIES_ARR } from './constants'
import { Container, Grid } from './popular-categories.sc'

const Content = SC.div`
  padding: 20px;
`

export const PopularCategories = (props: any) => {
  return (
    <Container id="techStacks">
      <Content>
        <Grid>
          {CATEGORIES_ARR.map(({ key, ...item }) => (
            <CategoryCard key={key} {...item} />
          ))}
        </Grid>
      </Content>
    </Container>
  )
}
