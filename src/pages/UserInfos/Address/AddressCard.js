import styles from './AddressCard.module.scss';
import { Address, ThreeDots } from '~/assets/images/icons/SvgIcons';
import { clsx } from 'clsx';
import Button from '~/components/Button/Button';
import OptionCard from './OptionCard';

function AddressCard({
  city,
  name,
  phone,
  address,
  onEdit,
  onDelete,
  onSelectAsPrimaryAddress,
}) {
  const handleDelete = (event) => {
    event.stopPropagation();
    onDelete && onDelete();
  };
  return (
    <button className={clsx(['grid', styles.addressCard])}>
      <div className={styles.info}>
        <div className={styles.city}>
          <Address className={styles.icon} color="var(--black-color)" />
          <h3>{city}</h3>
        </div>
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
      <OptionCard />
    </button>
  );
}
export default AddressCard;
