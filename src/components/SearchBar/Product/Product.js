import PropTypes from 'prop-types';
import { clsx } from 'clsx';

import styles from './Product.module.scss';
import Image from '~/components/Image';

function Product({ image, title, price, activeClassName }) {
  return (
    <div
      className={clsx([
        styles.wrapper,
        {
          [styles.activeClassName]: activeClassName,
        },
      ])}
    >
      <Image className={styles.image} src={image} alt={title} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>Price: {price || 'not update'}</p>
      </div>
    </div>
  );
}

Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  active: PropTypes.bool,
};

export default Product;
