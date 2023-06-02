import styles from './Card.module.scss';
import Trans from '~/components/Trans';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

function Card({
  name,
  title,
  icon,
  className,
  value,
  checked,
  onChange,
  onClick,
  hoverEffect,
  ...props
}) {
  return (
    <div
      {...props}
      onClick={onClick}
      className={clsx([
        styles.wrapper,
        {
          [className]: className,
        },
        {
          [styles.click]: onClick,
        },
        {
          [styles.hoverEffect]: hoverEffect,
        },
      ])}
    >
      <input
        value={value}
        onChange={onChange}
        checked={checked}
        type="radio"
        name={name}
      />
      <div className={styles.title}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <Trans>{title}</Trans>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
};

export default Card;
