import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Home.module.scss';
import images from '~/assets/images/jpgs/index';

function Home() {
  const categoriesBrand = [
    {
      id: 1,
      name: 'Product 1',
      price: 9.99,
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 14.99,
      image: 'product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 14.99,
      image: 'product2.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 19.99,
      image: 'product3.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 19.99,
      image: 'product3.jpg',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 19.99,
      image: 'product3.jpg',
    },
    {
      id: 7,
      name: 'Product 7',
      price: 19.99,
      image: 'product3.jpg',
    },
  ];
  const recipes = [
    {
      id: 1,
      name: 'Product 1',
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'product2.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      image: 'product3.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      image: 'product3.jpg',
    },
    {
      id: 6,
      name: 'Product 6',
      image: 'product3.jpg',
    },
    {
      id: 7,
      name: 'Product 7',
      image: 'product3.jpg',
    },
  ];
  const renderRows = (products, type) => {
    const rows = [];
    let row = [];

    for (let i = 0; i < products.length; i++) {
      row.push(products[i]);

      if ((i + 1) % 3 === 0 || i === products.length - 1) {
        rows.push(row);
        row = [];
      }
    }

    return rows.map((row) => (
      <div key={row.id} className={clsx('row', styles.products)}>
        {row.map((product, colIndex) => (
          <div
            key={colIndex}
            className={clsx('col', 'l-4', 'm-6', 'c-12', styles.product)}
          >
            <img
              src={images.fruitImg}
              alt={product.name}
              className={styles.productImgs}
            />
            <h3>{product.name}</h3>
            {type === 'shopping' ? (
              <Link
                to={`/products/${product.id}/about`}
                className={styles.LinkToProduct}
              >
                Shop Now!
              </Link>
            ) : (
              <Link
                to={`/recipes/${product.id}`}
                className={styles.LinkToProduct}
              >
                Read more
              </Link>
            )}
          </div>
        ))}
      </div>
    ));
  };

  return (
    // header Part
    <div>
      <div className={styles.header}>
        <img
          src={images.headerLayoutHomePage}
          alt="fruit-img"
          className={styles.img_layout}
        />
        <div className={styles.shoppingNow}>
          <Link to="/products" className={styles.LinkToProduct}>
            Shop Now!
          </Link>
        </div>
      </div>

      {/* content Part */}
      <div className={clsx('grid', 'wide', styles.wrapperContent)}>
        <div className={styles.wrapperContent}>
          <div className={styles.categoriesPart}>
            <Link to="/products" className={styles.brandTitle}>
              Categories
            </Link>
            <div className={styles.line}></div>
            {renderRows(categoriesBrand, 'shopping')}
          </div>

          <div className={styles.recipesPart}>
            <Link to="/recipes" className={styles.brandTitle}>
              Recipes
            </Link>
            <div className={styles.line}></div>
            {renderRows(recipes, 'recipe')}
          </div>
        </div>
      </div>

      {/* footer part */}
      <div className={styles.footer}>
        <img
          src={images.footerLayoutHomePage}
          alt="fruit-img"
          className={styles.img_layout}
        />
        <img
          src={images.footerLayoutImg}
          alt="footer-img"
          className={styles.imgFooter}
        />
        <div className={styles.footerIntro}>
          <p className={styles.footerTitle}>How it works</p>
          <p className={styles.footerContent}>
            1. Shop on the schedule. <br />
            2. We harvest your food. <br />
            3. On the day of your delivery, we pack up your <br /> box and bring
            it to your door.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
