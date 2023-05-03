import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

function Button({
  alignLeft,
  leftIcon,
  rightIcon,
  small,
  primary,
  to,
  href,
  onClick,
  children,
  className,
  whiteOutline,
  blackOutline,
  primaryOutline,
  whiteText,
}) {
  let Component = 'button';
  let props = {
    onClick,
  };

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  return (
    <Component
      className={clsx([
        {
          [className]: className,
        },
        {
          [styles.primary]: primary,
        },
        {
          [styles.small]: small,
        },
        {
          [styles.alignLeft]: alignLeft,
        },
        {
          [styles.whiteOutline]: whiteOutline,
        },
        {
          [styles.blackOutline]: blackOutline,
        },
        {
          [styles.primaryOutline]: primaryOutline,
        },
        {
          [styles.whiteText]: whiteText,
        },
        styles.button,
      ])}
      {...props}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span className={styles.title}>{children}</span>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </Component>
  );
}
export default Button;
