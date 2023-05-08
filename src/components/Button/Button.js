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
  disabled, //optional
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
        {
          [styles.disabled]: disabled,
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
  alignLeft: PropTypes.bool, //optional
  leftIcon: PropTypes.node, //optional
  rightIcon: PropTypes.node, //optional
  small: PropTypes.bool, //optional
  primary: PropTypes.bool, //optional
  to: PropTypes.string, //optional
  href: PropTypes.string, //optional
  onClick: PropTypes.func, //optional
  children: PropTypes.node.isRequired, //optional
  className: PropTypes.string, //optional
  whiteOutline: PropTypes.bool, //optional
  blackOutline: PropTypes.bool, //optional
  primaryOutline: PropTypes.bool, //optional
  whiteText: PropTypes.bool, //optional
  disabled: PropTypes.bool, //optional
};

export default Button;
