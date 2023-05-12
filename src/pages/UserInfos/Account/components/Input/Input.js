import PropTypes from 'prop-types';
import styles from './Input.module.scss';
import { clsx } from 'clsx';

function Input({
  className,
  labelClassName,
  labelIcon,
  inputClassName,
  inputIcon,
  label,
  type,
  name,
  value,
  id,
  onChange,
  ...props
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
        className={clsx([
          styles.label,
          {
            [labelClassName]: labelClassName,
          },
        ])}
        htmlFor={id}
      >
        {labelIcon && <span>{labelIcon}</span>}
        {label}
      </label>

      <div className={styles.input}>
        {inputIcon && <span>{inputIcon}</span>}
        <input
          className={clsx([
            {
              [inputClassName]: inputClassName,
            },
          ])}
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  labelIcon: PropTypes.node,
  inputClassName: PropTypes.string,
  inputIcon: PropTypes.node,
  label: PropTypes.node,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
