import styles from './AddressCard.module.scss';

function AddressCard({
  city,
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
    <button className={styles.addressCard}>
      <div className={styles.city}>
        <h3 className={styles.city}>{city}</h3>
      </div>
      <div className={styles.phone}>
        <h3 className={styles.phone}>{phone}</h3>
      </div>
      <div className={styles.address}>
        <h4 className={styles.address}>{address}</h4>
      </div>
      <button className={styles.delete} onClick={handleDelete}>
        Delete
      </button>
    </button>
  );
}
export default AddressCard;
