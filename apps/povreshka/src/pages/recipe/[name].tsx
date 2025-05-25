import SC from '@emotion/styled'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Page } from '../../components'
import { DetailCard } from '../../components/cards'
import { InfoBlock } from '../../components/recipe-page'
import { findByKey } from '../../helpers/findByKey'

const HeaderContainer = SC.div`
  max-width: 1800px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  overflow: hidden;
`

const Header = SC.div`
  display: flex;
  max-height: 90vh;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`

const TitleContainer = SC.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px 0 0 8px;
`

const ImageContainer = SC.div`
  width: 40%;
  display: flex;
  height: auto;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 0 8px 0 0;
`

const Image = SC.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 0 8px 0 0;
`

const Placeholder = SC.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #f9f9f9, #ddd);
  color: #777;
  font-size: 1.2rem;
  font-weight: 500;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 8px 0 0;
`

const Title = SC.h1`
  margin-bottom: 10px;
  line-height: 1.2;
`

const Description = SC.p`
  width: 80%;
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.6;
`

const InfoContainer = SC.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
`

const DetailsContainer = SC.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`

const IngredientsContainer = SC.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: start;
  border-right: 1px solid #ddd;
  padding-right: 30px;
`
const EquipmentsContainer = SC.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: end;
  border-left: 1px solid #ddd;
  padding-left: 30px;
`

const DetailsTitle = SC.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`

const DetailsCardsContainer = SC.div<{ width?: string }>`
  width: ${props => props.width || '100%'};
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 220px;
  overflow-x: auto;
  justify-content: flex-start;
`

const RecipeStepsContainer = SC.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const RecipeStep = SC.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`

const RecipeTitle = SC.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`
const RecipeDescription = SC.p`
  width: 80%;
  margin-bottom: 30px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
`

const RecipePage = () => {
  const router = useRouter()
  const [recipe, setRecipe] = useState<ReturnType<typeof findByKey> | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!router.isReady) return

    const { name } = router.query as { name?: string }

    if (name) {
      const found = findByKey(name)
      setRecipe(found)
    }

    setLoading(false)
  }, [router.isReady, router.query])

  return (
    <>
      <Head>
        <title>{recipe ? recipe.title : 'Recipe not found'}</title>
        <meta name="description" content={recipe ? recipe.description : 'Recipe not found'} />
        <meta name="keywords" content={recipe ? recipe.categories.join(', ') : ''} />
      </Head>
      <Page>
        <HeaderContainer>
          {loading ? (
            <Title>Loading...</Title>
          ) : recipe ? (
            <>
              <Header>
                <TitleContainer>
                  <Title>{recipe.title}</Title>
                  <Description>{recipe.description}</Description>
                  <InfoContainer>
                    {recipe.preparation && <InfoBlock name="Подготовка" value={recipe.preparation} gauge="мин" />}
                    <InfoBlock name="Готовка" value={recipe.time} gauge="мин" />
                    <InfoBlock name="Калорийность" value={recipe.calories} gauge="ккал" />
                  </InfoContainer>
                </TitleContainer>
                <ImageContainer>
                  {recipe.img ? (
                    <Image src={recipe.img} alt={recipe.name} />
                  ) : (
                    <Placeholder>Нет изображения</Placeholder>
                  )}
                </ImageContainer>
              </Header>
            </>
          ) : (
            <Title>Recipe not found</Title>
          )}
        </HeaderContainer>
        <DetailsContainer>
          <IngredientsContainer>
            <DetailsTitle>Ингредиенты</DetailsTitle>
            <DetailsCardsContainer>
              {recipe?.ingredients.map(ingredient => (
                <DetailCard
                  key={ingredient.name}
                  name={ingredient.name}
                  text={`${ingredient.count && ingredient.gauge ? `${ingredient.count} ${ingredient.gauge}` : ''}`}
                  img={ingredient.img}
                />
              ))}
            </DetailsCardsContainer>
          </IngredientsContainer>
          <EquipmentsContainer>
            <DetailsTitle>Оборудование</DetailsTitle>
            <DetailsCardsContainer>
              {recipe?.equipments.map(equipment => (
                <DetailCard key={equipment.name} name={equipment.name} img={equipment.img} />
              ))}
            </DetailsCardsContainer>
          </EquipmentsContainer>
        </DetailsContainer>
        <RecipeStepsContainer>
          {recipe?.cookingRecipe?.map((step, index) => (
            <RecipeStep key={index}>
              <RecipeTitle>{`Шаг ${index + 1}`}</RecipeTitle>
              <RecipeDescription>{step.description}</RecipeDescription>
              {step?.ingredients?.length ? (
                <DetailsCardsContainer width="80%">
                  {step?.ingredients.map(ingredient => (
                    <DetailCard
                      key={ingredient.name}
                      name={ingredient.name}
                      text={`${ingredient.count && ingredient.gauge ? `${ingredient.count} ${ingredient.gauge}` : ''}`}
                      img={ingredient.img}
                      backgroundColor="#f9f9f9"
                    />
                  ))}
                </DetailsCardsContainer>
              ) : null}
            </RecipeStep>
          ))}
        </RecipeStepsContainer>
      </Page>
      <div style={{ display: 'none' }}>
        {recipe?.searchRequests?.map(searchRequest => <p key={searchRequest}>{searchRequest}</p>)}
      </div>
    </>
  )
}

export default RecipePage
