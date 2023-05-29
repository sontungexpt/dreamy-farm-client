import styles from './OrderConfirm.module.scss';
import { GreenTick } from '~/assets/images/icons/SvgIcons';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
function OrderConfirm() {
  const { t } = useTranslation('translations');
  return (
    <div className={clsx(['grid', 'wide', styles.body])}>
      <div className={clsx([styles.greenTick])}>
        <GreenTick />
      </div>
      <div className={clsx([styles.sub])}>
        <h1>{t('Order Successfully')}</h1>
      </div>
      <div className={clsx([styles.text])}>
        <p>{t('Please check your email for more information')}</p>
      </div>
    </div>
  );
}
export default OrderConfirm;
