import SC from '@emotion/styled'

import { maxDevice } from '../../styles'

export const Container = SC.section`
  background-color: #ffffff;
  min-height: 300px;
  max-width: 1920px;
  overflow: hidden;
  padding: 0px 100px ;
  margin-bottom: 20px;
  
  @media ${maxDevice.tablet} {
    padding: 0 0 20px 0;
  }
`

export const Grid = SC.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
`

export const H5 = SC.h5`
  font-weight: 600;
  margin: 0 0 12px 0;
  font-size: 24px;
  line-height: 1.3;
  @media ${maxDevice.laptop} {
    font-size: 26px;
  }
  @media ${maxDevice.tablet} {
    font-size: 22px;
    margin: 0 0 8px 0;
  }
`
