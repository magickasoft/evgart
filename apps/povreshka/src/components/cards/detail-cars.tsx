import SC from '@emotion/styled'

const Card = SC.div<{
  backgroundColor?: string
  variant?: 'default' | 'short'
}>`
width: 150px;
min-width: 150px;
height: ${props => (props.variant === 'short' ? '180px' : '220px')};
min-height: ${props => (props.variant === 'short' ? '180px' : '220px')};
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 10px;
padding-top: 20px;
border-radius: 8px;
background-color: #ffffff;
gap: 10px;
background-color: ${props => props.backgroundColor || '#ffffff'};
`

const ImageBlock = SC.div`
width: 80%;
display: flex;
justify-content: center;
align-items: center;
`

const Image = SC.img`
width: 80px;
height: 80px;
object-fit: cover;
border-radius: 50%;
`

const NoImage = SC.div`
width: 80px;
height: 80px;
background-color: #dddddd;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
font-size: 0.4rem;
color: #999;
`

const TextBlock = SC.div`
width: 100%;
display: flex;    
flex-direction: column;
justify-content: center;
align-items: center;
`

const Description = SC.p`
font-size: 0.9rem;
line-height: 1.2;
font-weight: bold;
margin-bottom: 5px;
margin-top: 5px;
color: #333;
`

const Title = SC.h2`
font-size: 0.7rem;
font-weight: normal;
margin-bottom: 5px;
margin-top: 5px;
text-align: center;
color: #777;
`

type DetailCardProps = {
  backgroundColor?: string
  key: string
  name: string
  text?: string
  img: string | null
  variant?: 'default' | 'short'
}

export const DetailCard = ({ name, text, img, backgroundColor, variant = 'default' }: DetailCardProps) => {
  return (
    <Card backgroundColor={backgroundColor} variant={variant}>
      <ImageBlock>{img ? <Image src={img} alt={name} /> : <NoImage>No image</NoImage>}</ImageBlock>
      <TextBlock>
        {text && <Description>{text}</Description>}
        <Title>{name}</Title>
      </TextBlock>
    </Card>
  )
}
