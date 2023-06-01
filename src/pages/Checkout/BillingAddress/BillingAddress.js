import styles from './BillingAddress.module.scss';
import { clsx } from 'clsx';

function BillingAddress({ name, phone, address, selected, handleSelect }) {
  const onChangeValue = (event) => {
    console.log(event.target.value);
  };

  return (
    <button
      className={clsx([
        'grid',
        styles.addressCard,
        selected && styles.selected,
      ])}
      onClick={handleSelect}
    >
      <div className={styles.addressCardLeft}>
        <div className={styles.radioButton}>
          <input
            type="radio"
            name="billingAddress"
            checked={selected}
            onChange={onChangeValue}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.namePhone}>
            <p>
              {name} - {phone}
            </p>
          </div>
          <div className={styles.address}>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default BillingAddress;
