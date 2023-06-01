import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct, calcTotalPrice } from '~/redux/slices/orderSlice';

import styles from './AddableItem.module.scss';
import { routes as routeConfigs } from '~/configs';

import {
  FilledHeart as FilledHeartIcon,
  EmptyHeart as EmptyHeartIcon,
} from '~/assets/images/icons/SvgIcons';

import Button from '~/components/Button';
import ToggleIcon from '~/components/ToggleIcon';
import Image from '~/components/Image';
import Trans from '~/components/Trans';

function AddableItem({
  name,
  price,
  image,
  type = '100g',
  slug,
  onClick,
  onUnClick,
  onAdd,
}) {
  const dispatch = useDispatch();

  const handleAdd = (event) => {
    event.stopPropagation();
    event.preventDefault();

    //logic
    dispatch(
      addProduct({
        id: slug,
        name: name,
        count: 1,
        image: image,
        type: type,
        price: price,
      }),
    );
    dispatch(calcTotalPrice());

    // custom logic
    onAdd && onAdd();
  };

  return (
    <Link to={routeConfigs.moveProductDetail(slug)} className={styles.wrapper}>
      <Image className={styles.image} src={image} alt="item" />
      <div className={styles.content}>
        <div>
          <h3 className={styles.name}>{name}</h3>
          <ToggleIcon
            className={styles.favorite}
            activeIcon={<FilledHeartIcon />}
            unActiveIcon={<EmptyHeartIcon color="var(--red-color)" />}
            onClick={onClick}
            onUnClick={onUnClick}
          />
        </div>
        <div>
          <p className={styles.quantity}>{type}</p>
          <p className={styles.price}>{price} đ</p>
        </div>
        <Button onClick={handleAdd} className={styles.addBtn} primary>
          <Trans>Add</Trans>
        </Button>
      </div>
    </Link>
  );
}

PropTypes.AddableItem = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  type: PropTypes.string,
  slug: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  onUnClick: PropTypes.func,
  onAdd: PropTypes.func,
};

export default AddableItem;
