import { clsx } from 'clsx';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

function Input({
  id,
  className,
  label,
  labelClassName,
  placeHolder,
  inputClassName,
}) {
  return (
    <div
      className={clsx([
        styles.wrapper,
        {
          [className]: className,
        },
      ])}
    >
      <label
        htmlFor={id}
        className={clsx([
          styles.label,
          {
            [labelClassName]: labelClassName,
          },
        ])}
      >
        {label}
      </label>
      <input
        placeholder={placeHolder}
        id={id}
        type="password"
        className={clsx([
          styles.input,
          {
            [inputClassName]: inputClassName,
          },
        ])}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  placeHolder: PropTypes.string,
  inputClassName: PropTypes.string,
};

export default Input;
