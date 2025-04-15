import React from 'react';

import { CategoryCard } from '../cards/category-card';
import { CATEGORIES_ARR } from './constants';
import {Container, Grid} from './popular-categories.sc';
 
export const PopularCategories = (props: any) => {
  return (
    <Container id="techStacks">
      <Grid>
        {CATEGORIES_ARR.map(({ key, ...item }) => (
          <CategoryCard key={key} {...item} />
        ))}
      </Grid>
    </Container>
  );
};
