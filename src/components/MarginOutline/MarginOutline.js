import styles from './MarginOutline.module.scss';
import { clsx } from 'clsx';

function MarginOutline({ margin, children, className, ...props }) {
  return (
    <div
      className={clsx([
        styles.wrapper,
        {
          [className]: className,
        },
      ])}
      style={{ marginLeft: margin, marginRight: margin }}
      {...props}
    >
      {children}
    </div>
  );
}

export default MarginOutline;
