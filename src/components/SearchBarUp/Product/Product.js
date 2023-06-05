import PropTypes from 'prop-types';
import { clsx } from 'clsx';

import styles from './Product.module.scss';
import Image from '~/components/Image';

function Product({ image, title, description, active, activeClassName }) {
  return (
    <div
      className={clsx([
        styles.wrapper,
        {
          [styles.active]: active,
        },
        {
          [activeClassName]: active,
        },
      ])}
    >
      <div className="row">
        <div className="col l-4 m-4 c-4">
          <div className={styles.imageWrapper}>
            <Image className={styles.image} src={image} alt={title} />
          </div>
        </div>
        <div className="col l-8 m-8 c-8">
          <div className={styles.info}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  activeClassName: PropTypes.string,
};

export default Product;
