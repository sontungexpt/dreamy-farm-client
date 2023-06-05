import styles from './customerDetails.module.scss';
import {
  User,
  Address,
  Phone,
  PayMethod,
  Mail,
} from '~/assets/images/icons/SvgIcons';
function CustomerDetails({ userName, userMail, tel, payMethod, address }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Customer Details</h2>
      <div className={styles.infoDetails}>
        <div className={styles.userInfo}>
          <User width={20} height={20} className={styles.svgIcon} />
          {userName}
        </div>
        <div className={styles.userInfo}>
          <Mail
            width={20}
            height={20}
            color="black"
            className={styles.svgIcon}
          />
          {userMail}
        </div>
        <div className={styles.userInfo}>
          <Phone
            width={20}
            height={20}
            color="black"
            className={styles.svgIcon}
          />
          {tel}
        </div>
        <div className={styles.userInfo}>
          <PayMethod
            width={20}
            height={20}
            color="black"
            className={styles.svgIcon}
          />
          {payMethod}
        </div>
        <div className={styles.userInfo}>
          <Address width={20} height={20} className={styles.svgIcon} />
          {address}
        </div>
      </div>
    </div>
  );
}
export default CustomerDetails;
