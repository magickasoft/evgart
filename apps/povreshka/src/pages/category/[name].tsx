import {useRouter} from 'next/router';
import React from 'react';

const CategoryPage = () => {
  const router = useRouter();
  const {name} = router.query;

  return (
    <div>
      <h1>Категория: {name}</h1>
      <h1>Категория: {name}</h1>
      <h1>Категория: {name}</h1>
      <h1>Категория: {name}</h1>
      <h1>Категория: {name}</h1>
      <h1>Категория: {name}</h1>
      <h1>Категория: {name}</h1>
    </div>
  );
};

export default CategoryPage;
