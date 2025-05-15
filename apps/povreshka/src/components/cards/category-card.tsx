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
  border-radius: 16px;
  overflow: hidden;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease,
    opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);

    .card-title {
      font-weight: 700;
      transform: scale(1.05);
    }

    .card-image {
      transform: scale(1.08);
    }
  }
`

const Title = SC.div`
  font-size: 14px;
  line-height: 12px;
  color: #333;
  margin: 0;
  position: absolute;
  left: 15px;
  bottom: 15px;
  text-align: left;
  transition: transform 0.3s ease, font-weight 0.3s ease;

  @media ${minDevice.laptop} {
    font-size: 18px;
    line-height: 18px;
  }
`

const Content = SC.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  transition: transform 0.3s ease;
`

export const CategoryCard = ({
  key,
  img,
  label,
  color,
  name,
}: {
  key: string
  img: string | null
  label: string
  color: string
  name: string
}) => {
  return (
    <Link href={`/category/${name}`} style={{ textDecoration: 'none' }} passHref legacyBehavior>
      <Card color={color}>
        <Content className="card-image">
          {img && <Image width="240" height="220" src={img} alt="icon" priority />}
        </Content>
        <Title className="card-title">{label}</Title>
      </Card>
    </Link>
  )
}
