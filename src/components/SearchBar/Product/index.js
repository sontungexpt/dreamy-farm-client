import styles from './Product.module.scss';
import { clsx } from 'clsx';

function Product({ image, title, price, active }) {
  return (
    <div
      className={clsx([
        styles.wrapper,
        {
          [styles.active]: active,
        },
      ])}
    >
      <img className={styles.image} src={image} alt="user" />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>Price: {price || 'not update'}</p>
      </div>
    </div>
  );
}

export default Product;
