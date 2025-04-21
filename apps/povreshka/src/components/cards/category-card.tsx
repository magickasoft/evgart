import SC from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

import { minDevice } from '../../styles'

const Card = SC.div<{ color?: string }>`
  background-color: ${({ color }) => color || '#f7f5f6'};
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 250px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

const Title = SC.div`
  font-size: 14px;
  line-height: 12px;
  color: #333;
  margin: 0;
  transition: transform 0.3s ease, font-weight 0.3s ease;

  @media ${minDevice.laptop} {
    font-size: 18px;
    line-height: 18px;
  }

  position: absolute;
  left: 15px;
  bottom: 15px;
  text-align: left;
`

const Content = SC.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

export const CategoryCard = (props: {
  key: string
  img: string | null
  label: string
  color: string
  name: string
}) => {
  return (
    <Link href={`/category/${props.name}`} style={{ textDecoration: 'none' }}>
      <Card color={props.color}>
        <Content>{props.img && <Image width="240" height="220" src={props.img} alt="icon" priority />}</Content>
        <Title>{props.label}</Title>
      </Card>
    </Link>
  )
}
