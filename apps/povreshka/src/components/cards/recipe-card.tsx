import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

import { minDevice } from '../../styles'

const Title = styled.div`
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
  color: #333;
  transition: all 0.3s ease;

  @media ${minDevice.laptop} {
    font-size: 18px;
  }
`

const Description = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #555;
  margin-top: 4px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  transition: all 0.3s ease;
`

const Characteristic = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  margin-top: auto;
  font-size: 12px;
  line-height: 1.2;
  color: #444;
  transition: all 0.3s ease;
`

const Card = styled.div`
  background-color: #fdfcfc;
  width: 300px;
  min-width: 300px;
  height: 270px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 12px;
  border: 1px solid #eaeaea;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-4px) scale(1.01);
    background-color: #f5f3f3;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);

    .card-title {
      font-size: 20px;
      color: #111;
    }

    .card-characteristic {
      font-weight: 600;
      font-size: 13px;
      color: #111;
    }

    .card-description {
      opacity: 0.5;
    }
  }
`

const ImageBlock = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 1;
  background: #f5f3f3;
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  flex: 1;
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

const levels = ['Легко', 'Средне', 'Сложно']

export const RecipeCard = ({ name, img, title, description, time, level, rating }: RecipeCardProps) => {
  return (
    <Link
      href={`/recipe/${name}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
      aria-label={`Рецепт: ${title}`}
      passHref
      legacyBehavior
    >
      <Card role="link" tabIndex={0}>
        <ImageBlock>
          {img ? (
            <Image src={img} alt={`Изображение для ${title}`} fill style={{ objectFit: 'cover' }} priority />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                color: '#aaa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Нет изображения
            </div>
          )}
        </ImageBlock>

        <Content>
          <Title className="card-title">{title}</Title>
          <Description className="card-description">{description}</Description>
          <Characteristic className="card-characteristic">
            <span>⏱ {time} мин</span>
            <span>🎯 {levels[level - 1]}</span>
            <span>⭐ {rating}</span>
          </Characteristic>
        </Content>
      </Card>
    </Link>
  )
}
