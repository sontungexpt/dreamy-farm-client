import { clsx } from 'clsx';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

function Input({
  className, // optional className of the wrapper div
  labelClassName, //optional className for the label
  inputClassName, //optional className for the input
  errorClassName, //optional className for the errorMessage

  id, // required id for the input
  label, // required label for the input

  type = 'text', // optional type for the input
  required, // optional boolean to show the error message
  placeHolder, // optional placeholder for the input
  errorMessage, // optional error message
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
        type={type}
        {...props}
        className={clsx([
          styles.input,
          {
            [inputClassName]: inputClassName,
          },
        ])}
      />
      {required && (
        <span
          className={clsx([
            styles.error,
            {
              [styles.errorClassName]: errorClassName,
            },
          ])}
        >
          {errorMessage || 'This field is required'}
        </span>
      )}
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  errorClassName: PropTypes.string,

  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,

  type: PropTypes.string,
  required: PropTypes.bool,
  placeHolder: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default Input;
