import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import clsx from 'clsx';
import styles from './Recipes.module.scss';
import images from '~/assets/images/jpgs/recipes_item.jpg';
import RecipeDetails from '../RecipeDetail/RecipesDetail';

function ProductPage() {
  const products = [
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
  const renderRows = () => {
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
            <Link to={`/recipes/${product.id}`}>Read more</Link>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className={clsx('grid', 'wide', styles.wrapper)}>
      <h1>Recipes</h1>
      <div className={styles.line}></div>
      {renderRows()}
      <Routes>
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/recipes" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default ProductPage;
