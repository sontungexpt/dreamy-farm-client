import React from 'react';
import clsx from 'clsx';

import styles from './Recipes.module.scss';
import RecipesItem from './RecipesItem';
import images from '~/assets/images/jpgs/index';
import PaginatePage from '~/components/PaginatePage/PaginatePage';

function RecipesPage() {
  const recipes = [
    {
      id: 1,
      name: 'Product 1',
      image: images.recipeItemImage,
    },
    {
      id: 2,
      name: 'Product 2',
      image: images.recipeItemImage,
    },
    {
      id: 3,
      name: 'Product 3',
      image: images.recipeItemImage,
    },
    {
      id: 4,
      name: 'Product 4',
      image: images.recipeItemImage,
    },
    {
      id: 5,
      name: 'Product 5',
      image: images.recipeItemImage,
    },
    {
      id: 6,
      name: 'Product 6',
      image: images.recipeItemImage,
    },
    {
      id: 7,
      name: 'Product 7',
      image: images.recipeItemImage,
    },
  ];
  return (
    <div className={clsx(['grid', 'wide'])}>
      <div className={clsx([styles.header])}>
        <h1>Recipes</h1>
        <div className={styles.lineHeader}></div>
      </div>
      <PaginatePage
        className={styles.itemWrapper}
        data={recipes}
        renderItem={(recipe, index) => {
          return (
            <div
              key={index}
              className={clsx([
                'col',
                'l-4',
                'm-6',
                'c-12',
                styles.lineSpacing,
              ])}
            >
              <RecipesItem
                recipeName={recipe.name}
                recipeImg={recipe.image}
                recipeId={recipe.id}
              />
            </div>
          );
        }}
        itemsPerPage={6}
      />
    </div>
  );
}

export default RecipesPage;
