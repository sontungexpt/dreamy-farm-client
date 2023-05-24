import styles from './BillingAddress.module.scss';
import { clsx } from 'clsx';

import React, { useState } from 'react';

function BillingAddress({ name, phone, address }) {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
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
          <input type="radio" checked={selected} readOnly />
        </div>
        <div className={styles.info}>
          <div className={styles.namePhone}>
            <p>{name}</p>
            <span>-</span>
            <p>{phone}</p>
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
