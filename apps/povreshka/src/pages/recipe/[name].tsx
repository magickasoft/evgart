import SC from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Page } from '../../components'
import { findRecipeByKey } from '../../helpers/findRecipeByKey'

const Container = SC.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
`

const Title = SC.h1`
  margin-bottom: 20px;
  line-height: 1.2;
`

const Image = SC.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
`

const Info = SC.p`
  margin: 10px 0;
  line-height: 1.6;
`

const RecipePage = () => {
  const router = useRouter()
  const [recipe, setRecipe] = useState<ReturnType<typeof findRecipeByKey> | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!router.isReady) return

    const { name } = router.query as { name?: string }

    if (name) {
      const found = findRecipeByKey(name)
      setRecipe(found)
    }

    setLoading(false)
  }, [router.isReady, router.query])

  return (
    <Page>
      <Container>
        {loading ? (
          <Title>Loading...</Title>
        ) : recipe ? (
          <>
            <Title>{recipe.title}</Title>
            {recipe.img && <Image src={recipe.img} alt={recipe.name} />}
            <Info><strong>Description:</strong> {recipe.description}</Info>
            <Info><strong>Cooking Time:</strong> {recipe.time} minutes</Info>
            <Info><strong>Difficulty Level:</strong> {recipe.level}</Info>
            <Info><strong>Rating:</strong> {recipe.rating}/5</Info>
          </>
        ) : (
          <Title>Recipe not found</Title>
        )}
      </Container>
    </Page>
  )
}

export default RecipePage
