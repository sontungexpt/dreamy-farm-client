import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import styles from './RecipesDetail.module.scss';
import img from '~/assets/images/jpgs/index';

const RecipeDetail = () => {
  const { id } = useParams();
  return (
    <div className={clsx(['grid', 'wide'])}>
      <div className={clsx([styles.header])}>
        <h1>Recipes</h1>
        <div className={styles.lineHeader}></div>
      </div>
      <div>
        <img
          src={img.recipeItemImage}
          alt="recipeImage"
          className={styles.headerImage}
        />
        <div>
          <h2>Recipe {id}</h2>
          <img
            src={img.timing}
            alt="recipeImage"
            className={styles.clockImage}
          />
          <span className={styles.estimateCookTime}>20 mins</span>
          <ul className={styles.ingredientsList}>
            <li>Step 1</li>
            <li>Step 1</li>
            <li>Step 1</li>
            <li>Step 1</li>
            <li>Step 1</li>
            <li>Step 1</li>
          </ul>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
