import SC from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

import { minDevice } from '../../styles'

const Card = SC.div`
  background-color: #f7f5f6;
  width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  border-radius: 4px;
  border: 1px solid #E7E7E9;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

const ImageBlock = SC.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-height: 150px;
  background: #ccc;
`

const Content = SC.div`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  flex-direction: column;
`

const Title = SC.div`
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
  color: #333;
  
  @media ${minDevice.laptop} {
    font-size: 18px;
  }
`

const Description = SC.div`
  font-size: 12px;
  line-height: 14px;
  color: #333;
  margin: 0;
  transition: transform 0.3s ease, font-weight 0.3s ease;
  line-height: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`

const Characteristic = SC.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
  gap: 5px;
  font-size: 12px;
  line-height: 1.2;
  color: #333;
`

export const RecipeCard = (props: {
  name: string
  img: string | null
  title: string
  description: string
  time: number
  level: number
  rating: number
}) => {
  const href = `/recipe/${props.name}`
  
  return (
    <Link href={href} style={{ textDecoration: 'none' }} aria-label={`Рецепт: ${props.title}`}>
  <Card role="link" tabIndex={0}>
    <ImageBlock>
      {props.img ? (
        <Image
          width="300"
          height="150"
          src={props.img}
          alt={`Изображение для ${props.title}`}
          priority
        />
      ) : null}
    </ImageBlock>
    <Content>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Characteristic>
        <span>Время: {props.time} минут</span>
        <span>Сложность: {props.level}</span>
        <span>Рейтинг: {props.rating}</span>
      </Characteristic>
    </Content>
  </Card>
</Link>
  )
}
