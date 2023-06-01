import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ReceiptsItem.module.scss';

function RecipesItem({ recipeImg, recipeName, recipeId }) {
  return (
    <div>
      <img src={recipeImg} alt="recipeImg" />
      <div className={styles.recipeName}>{recipeName}</div>
      <Link to={`/recipes/${recipeId}`} className={styles.textDisplay}>
        Read more
      </Link>
    </div>
  );
}

export default RecipesItem;
