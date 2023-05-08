import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

import styles from './Button.module.scss';

function Button({
  alignLeft, //optional
  leftIcon, //optional
  rightIcon, //optional
  small, //optional
  primary, //optional
  to, //optional
  href, //optional
  onClick, //optional
  children, //optional
  className, //optional
  whiteOutline, //optional
  blackOutline, //optional
  primaryOutline, //optional
  whiteText, //optional
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

Button.propTypes = {
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

export default Button;
