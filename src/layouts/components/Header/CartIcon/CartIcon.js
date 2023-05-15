import { Cart } from '~/assets/images/icons/SvgIcons';

import styles from './CartIcon.module.scss';

function CartIcon() {
  return (
    <div className={styles.wrapper}>
      <Cart color="var(--primary-color)" className={styles.icon} />
      <div className={styles.badge}>0</div>
    </div>
  );
}

export default CartIcon;
