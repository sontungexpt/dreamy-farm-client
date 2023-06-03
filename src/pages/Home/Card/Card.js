import styles from './Card.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

function Card({ title, image, subTitle, className, ...props }) {
  const { t } = useTranslation();
  return (
    <div
      {...props}
      className={clsx([
        {
          [className]: className,
        },
      ])}
    >
      <div className={styles.imageWrapper}>
        <Image src={image} className={styles.img} />
      </div>
      <div className={styles.footer}>
        <h3 className={styles.title}>{t(title)}</h3>
        <Link className={styles.subTitle}>{t(subTitle)}</Link>
      </div>
    </div>
  );
}

export default Card;
