import { Link } from 'react-router-dom';
import clsx from 'clsx';
import header_image from '~/assets/images/jpgs/home_header-image.jpg';
import styles from './Home.module.scss';
import Button from '~/components/Button/Button';
import images from '~/assets/images/jpgs/farm_fruit.jpg';
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
  const renderRows = (products) => {
    const rows = [];
    let row = [];

    for (let i = 0; i < products.length; i++) {
      row.push(products[i]);

      if ((i + 1) % 3 === 0 || i === products.length - 1) {
        rows.push(row);
        row = [];
      }
    }

    return rows.map((row, rowIndex) => (
      <div key={rowIndex} className={clsx('row', styles.products)}>
        {row.map((product, colIndex) => (
          <div key={colIndex} className={clsx('col', 'l-4', styles.product)}>
            <img src={images} alt={product.name} />
            <h3>{product.name}</h3>
            <Link to={`/recipes/${product.id}`}>Shop now</Link>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div>
      <div className={styles.header}>
        <img src={header_image} alt="fruit-img" className={styles.img_header} />
        <div className={styles.shoppingNow}>Shop Now!</div>
      </div>
      <div className={clsx('grid', 'wide', styles.wrapperContent)}>
        <div className={styles.wrapperContent}>
          <div className={styles.categoriesPart}>
            <h2>Categories</h2>
            <div className={styles.line}></div>
            {renderRows(categoriesBrand)}
          </div>

          <div className={styles.recipesPart}>
            <h2>Recipes</h2>
            <div className={styles.line}></div>
            {renderRows(recipes)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
