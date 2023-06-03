import styles from './PreviewCard.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

function Preview({
  enableClickAny = false,
  title,
  image,
  subTitle,
  className,
  to,
  state,
  ...rest
}) {
  const { t } = useTranslation();
  const Wrapper = enableClickAny ? Link : 'div';
  const props = enableClickAny
    ? {
        to,
        state,
      }
    : {};
  return (
    <Wrapper
      {...rest}
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
        <Link to={to} state={state} className={styles.subTitle}>
          {t(subTitle)}
        </Link>
      </div>
    </Wrapper>
  );
}

export default Preview;
