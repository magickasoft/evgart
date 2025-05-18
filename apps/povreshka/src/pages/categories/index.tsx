import SC from '@emotion/styled'

import { Page } from '../../components'
import { CategoryCard } from '../../components/cards/category-card'
import { CATEGORIES_ARR } from '../../components/popular-categories/constants'
import { maxDevice } from '../../styles'

export const Container = SC.section`
  background-color: #ffffff;
  min-height: 300px;
  max-width: 1920px;
  overflow: hidden;
  padding: 0px 100px ;
  margin-bottom: 40px;
  
  @media ${maxDevice.tablet} {
    padding: 0 0 20px 0;
  }
`

const Content = SC.div`
  padding: 20px;
`

export const Grid = SC.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
`

const CategoriesPage = () => {
  return (
    <Page>
      <Content>
        <Grid>
          {CATEGORIES_ARR.map(({ key, ...item }) => (
            <CategoryCard key={key} {...item} variant="small" />
          ))}
        </Grid>
      </Content>
    </Page>
  )
}

export default CategoriesPage
