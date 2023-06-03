import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import styles from './Home.module.scss';
import images from '~/assets/images/jpgs/index';
import { productsPageConfigs as configs } from '~/configs/pages';
import { routes as routesConfig } from '~/configs';
import Card from './Card';

function Home() {
  const recipes = [
    {
      id: 1,
      name: 'Product 1',
      image: 'product1.jpg',
    },
  ];

  return (
    <div>
      <div
        className={styles.header}
        style={{
          backgroundImage: `url(${images.headerLayoutHomePage})`,
        }}
      >
        <Link to={routesConfig.products} className={styles.headerLink}>
          Shop Now!
        </Link>
      </div>

      <div className={clsx('grid', 'wide', styles.wrapperContent)}>
        <div className={styles.categoriesPart}>
          <Link to={routesConfig.products} className={styles.brandTitle}>
            Categories
          </Link>
          <div className="row">
            {configs.categories.map((category, index) => (
              <div key={index} className="col l-4 m-4 c-6">
                <Card
                  className={styles.card}
                  title={category.title}
                  subTitle="Show now"
                  image={category.img}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.recipesPart}>
          <Link to={routesConfig.recipes} className={styles.brandTitle}>
            Recipes
          </Link>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${images.footerLayoutHomePage})`,
        }}
        className={clsx(['row', styles.footer])}
      >
        <div className={clsx(['col', 'l-6', 'm-6', 'c-12', styles.footerCol])}>
          <img src={images.footerLayoutImg} alt="footer-img" />
        </div>
        <div
          className={clsx([
            'col l-6 m-6 c-12',
            styles.footerCol,
            styles.footerCol2,
          ])}
        >
          <div>
            <p className={styles.title}>How it works</p>
            <p className={styles.footerContent}>
              1. Shop on the schedule. <br />
              2. We harvest your food. <br />
              3. On the day of your delivery, we pack up your <br /> box and
              bring it to your door.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
