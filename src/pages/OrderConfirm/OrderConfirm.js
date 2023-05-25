import styles from './OrderConfirm.module.scss';
import { GreenTick } from '~/assets/images/icons/SvgIcons';
import { clsx } from 'clsx';
function OrderConfirm() {
  return (
    <div className={clsx(['grid', 'wide', styles.body])}>
      <div className={clsx([styles.greenTick])}>
        <GreenTick />
      </div>
      <div className={clsx([styles.sub])}>
        <h1>Order Successfully</h1>
      </div>
      <div className={clsx([styles.text])}>
        <p>Please check your email for more information</p>
      </div>
    </div>
  );
}
export default OrderConfirm;
