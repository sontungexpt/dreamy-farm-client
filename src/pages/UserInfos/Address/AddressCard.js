import styles from './AddressCard.module.scss';

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
    <button className={styles.addressCard}>
      <div className={styles.city}>
        <h3 className={styles.city}>{city}</h3>
      </div>
      <div className={styles.name}>
        <p className={styles.name}>{name}</p>
      </div>
      <div className={styles.phone}>
        <p className={styles.phone}>{phone}</p>
      </div>
      <div className={styles.address}>
        <p className={styles.address}>{address}</p>
      </div>
      {/* <button className={styles.delete} onClick={handleDelete}>
        Delete
      </button> */}
    </button>
  );
}
export default AddressCard;
