import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, calcTotalPrice } from '~/redux/slices/orderSlice';
import { updateUserFavoriteProducts } from '~/apiServices/userServices';
import { updateFavoriteProducts } from '~/redux/slices/userSlice';

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
  image,
  type,
  slug,
  id,

  onClickFavorite,
  onUnClickFavorite,
  onAdd,
}) {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.user);

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
      }),
    );
    dispatch(calcTotalPrice());

    // custom logic
    onAdd && onAdd();
  };

  const handleUpdateFavoriteProducts = async (method) => {
    const favoriteProducts = await updateUserFavoriteProducts(
      email,
      id,
      method,
    );
    if (favoriteProducts) {
      dispatch(updateFavoriteProducts(favoriteProducts));
    }
  };

  const handleClick = (event, active) => {
    if (active) {
      handleUpdateFavoriteProducts('remove');
    } else {
      handleUpdateFavoriteProducts('add');
    }
  };

  return (
    <Link to={routeConfigs.moveProductDetail(slug)} className={styles.wrapper}>
      <Image className={styles.image} src={image} alt="item" />
      <div className={styles.content}>
        <div>
          <h3 className={styles.name}>{name}</h3>
          <ToggleIcon
            disableToggle={!email}
            className={styles.favorite}
            activeIcon={<FilledHeartIcon />}
            unActiveIcon={<EmptyHeartIcon color="var(--red-color)" />}
            onClick={handleClick}
            onActive={onClickFavorite}
            onUnActive={onUnClickFavorite}
          />
        </div>
        <div>
          <p className={styles.quantity}>{type.name || ''}</p>
          <p className={styles.price}>{type.price || ''} đ</p>
        </div>
        <Button onClick={handleAdd} className={styles.addBtn} primary>
          <Trans>Add</Trans>
        </Button>
      </div>
    </Link>
  );
}

PropTypes.AddableItem = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  slug: PropTypes.string.isRequired,
  id: PropTypes.string,

  onAdd: PropTypes.func,
  onClickFavorite: PropTypes.func,
  onUnClickFavorite: PropTypes.func,
};

export default AddableItem;
