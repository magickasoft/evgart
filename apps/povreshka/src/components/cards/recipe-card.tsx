import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

import { minDevice } from '../../styles'

const Card = styled.div`
  background-color: #f7f5f6;
  width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 4px;
  border: 1px solid #e7e7e9;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

const ImageBlock = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 1;
  background: #ccc;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: hidden;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  flex: 1;
`

const Title = styled.div`
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
  color: #333;

  @media ${minDevice.laptop} {
    font-size: 18px;
  }
`

const Description = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #333;
  margin: 0;
  transition:
    transform 0.3s ease,
    font-weight 0.3s ease;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`

const Characteristic = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  margin-top: 10px;
  font-size: 12px;
  line-height: 1.2;
  color: #333;
`

type RecipeCardProps = {
  name: string
  img: string | null
  title: string
  description: string
  time: number
  level: number
  rating: number
}

export const RecipeCard = ({ name, img, title, description, time, level, rating }: RecipeCardProps) => {
  return (
    <Link href={`/recipe/${name}`} style={{ textDecoration: 'none' }} aria-label={`Рецепт: ${title}`}>
      <Card role="link" tabIndex={0}>
        <ImageBlock>
          {img && <Image src={img} alt={`Изображение для ${title}`} fill style={{ objectFit: 'cover' }} priority />}
        </ImageBlock>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Characteristic>
            <span>Время: {time} мин</span>
            <span>Сложность: {level}</span>
            <span>Рейтинг: {rating}</span>
          </Characteristic>
        </Content>
      </Card>
    </Link>
  )
}
