import styles from './BillingAddress.module.scss';
import { clsx } from 'clsx';

function BillingAddress({ name, phone, address }) {
  return (
    <button className={clsx(['grid', styles.addressCard])}>
      <div className={styles.info}>
        <div className={styles.name}>
          <p>{name}</p>
        </div>
        <div className={styles.phone}>
          <p>{phone}</p>
        </div>
        <div className={styles.address}>
          <p>{address}</p>
        </div>
      </div>
    </button>
  );
}

export default BillingAddress;
