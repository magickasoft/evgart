import SC from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

import { minDevice } from '../../styles'

type VariantType = 'large' | 'small' | 'slider'

const CardHeight = {
  large: '250px',
  small: '180px',
  slider: '290px',
}

const Card = SC.div<{ color?: string; variant: VariantType }>`
  background-color: ${({ color }) => color || '#f7f5f6'};
  padding: ${({ variant }) => (variant === 'large' ? '20px' : '12px')};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: ${({ variant }) => CardHeight[variant]};
  min-width: 250px;
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

const Title = SC.div<{ variant: VariantType }>`
  font-size: ${({ variant }) => (variant === 'large' ? '14px' : '12px')};
  line-height: ${({ variant }) => (variant === 'large' ? '12px' : '10px')};
  color: #333;
  margin: 0;
  position: absolute;
  left: 15px;
  bottom: 15px;
  text-align: left;
  transition: transform 0.3s ease, font-weight 0.3s ease;

  @media ${minDevice.laptop} {
    font-size: ${({ variant }) => (variant === 'large' ? '18px' : '14px')};
    line-height: ${({ variant }) => (variant === 'large' ? '18px' : '14px')};
  }
`

const ContentWidth = {
  large: '240px',
  small: '140px',
  slider: '240px',
}

const ContentHeight = {
  large: '220px',
  small: '120px',
  slider: '220px',
}

const Content = SC.div<{ variant: VariantType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  transition: transform 0.3s ease;

  img {
    width: ${({ variant }) => ContentWidth[variant]};
    height: ${({ variant }) => ContentHeight[variant]};
    object-fit: contain;
  }
`

export const CategoryCard = ({
  key,
  img,
  label,
  color,
  name,
  variant = 'large',
}: {
  key: string
  img: string | null
  label: string
  color: string
  name: string
  variant?: VariantType
}) => {
  return (
    <Link href={`/categories/${name}`} style={{ textDecoration: 'none' }} passHref legacyBehavior>
      <Card color={color} variant={variant}>
        <Content className="card-image" variant={variant}>
          {img && (
            <Image
              width={variant === 'large' ? 240 : 160}
              height={variant === 'large' ? 220 : 140}
              src={img}
              alt="icon"
              priority
            />
          )}
        </Content>
        <Title className="card-title" variant={variant}>
          {label}
        </Title>
      </Card>
    </Link>
  )
}
