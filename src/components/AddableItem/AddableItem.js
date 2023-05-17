import styles from './AddableItem.module.scss';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {
  FilledHeart as FilledHeartIcon,
  EmptyHeart as EmptyHeartIcon,
} from '~/assets/images/icons/SvgIcons';

import Button from '~/components/Button';
import ToggleIcon from '~/components/ToggleIcon';
import ModalButton from '~/components/ModalButton';
import Detail from './Detail';
import Image from '~/components/Image';

function AddableItem({
  name,
  price,
  image,
  quantity,
  description,
  onClick,
  onUnClick,
  onAdd,
}) {
  function handleAdd(event) {
    event.stopPropagation();
    onAdd && onAdd();
  }

  const { t } = useTranslation('translations');
  return (
    <ModalButton
      closeBtn
      button={
        <div className={styles.wrapper}>
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
              <p className={styles.quantity}>{quantity ? quantity : '100 g'}</p>
              <p className={styles.price}>{price} đ</p>
            </div>
            <Button onClick={handleAdd} className={styles.addBtn} primary>
              {t('Add')}
            </Button>
          </div>
        </div>
      }
      innerModal={
        <div className={styles.innerModal}>
          <Detail description={description} name={name} price={price} />
        </div>
      }
    />
  );
}

PropTypes.AddableItem = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  onClick: PropTypes.func,
  onUnClick: PropTypes.func,
  onAdd: PropTypes.func,
};

export default AddableItem;
