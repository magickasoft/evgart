import styled from '@emotion/styled'

import { Page } from '../../components'
import { CategoryCard } from '../../components/cards/category-card'
import { CATEGORIES_ARR } from '../../components/popular-categories/constants'
import { SEASONAL_CATEGORIES_ARR } from '../../components/seasonal-categories/constants'
import { maxDevice } from '../../styles'

const Container = styled.section`
  background-color: #ffffff;
  min-height: 300px;
  max-width: 1920px;
  overflow: hidden;
  padding: 0px 100px;
  margin-bottom: 40px;

  @media ${maxDevice.tablet} {
    padding: 0 0 20px 0;
  }
`

const Content = styled.div`
  padding: 20px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`

const CategoriesPage = () => {
  const allCategories = [...SEASONAL_CATEGORIES_ARR, ...CATEGORIES_ARR]

  return (
    <Page>
      <Container>
        <Content>
          <Grid>
            {allCategories.map(({ key, ...item }) => (
              <CategoryCard key={key} {...item} variant="small" />
            ))}
          </Grid>
        </Content>
      </Container>
    </Page>
  )
}

export default CategoriesPage
