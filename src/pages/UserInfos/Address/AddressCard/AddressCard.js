import styles from './AddressCard.module.scss';
import { Address } from '~/assets/images/icons/SvgIcons';
import { clsx } from 'clsx';
import OptionCard from '~/pages/UserInfos/Address/OptionCard/OptionCard';

function AddressCard({
  phone,
  address,
  onEdit,
  onDelete,
  onSelectPrimary,
  isDefault,
}) {
  return (
    <button className={clsx(['grid', styles.addressCard])}>
      <div className={styles.info}>
        <div className={styles.phone}>
          <p>{phone}</p>
          {isDefault && <span className={styles.defaultMark}>Default</span>}
        </div>
        <div className={styles.address}>
          <p>{address}</p>
        </div>
      </div>
      <div className={styles.threedots}>
        <OptionCard
          onDelete={onDelete}
          onEdit={onEdit}
          onSelectPrimary={onSelectPrimary}
          isDefault={isDefault}
        />
      </div>
    </button>
  );
}
export default AddressCard;
