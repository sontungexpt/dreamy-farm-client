import { clsx } from 'clsx';
import { useState, useImperativeHandle, forwardRef } from 'react';

import styles from './Counter.module.scss';

import {
  Adding as AddingIcon,
  Union as UnionIcon,
} from '~/assets/images/icons/SvgIcons';

function Counter(
  {
    onDecrease,
    onIncrease,
    initialCount,
    className,
    inputClassName,
    iconClassName,
    iconWrapperClassName,
    minValue = 1,
    ...props
  },
  ref,
) {
  const [value, setValue] = useState(initialCount || minValue);

  useImperativeHandle(ref, () => ({
    value,
  }));

  function handleIncrease() {
    onIncrease && onIncrease(value);
    setValue(Number.parseInt(value) + 1);
  }

  function handleDecrease() {
    const intValue = Number.parseInt(value);
    if (intValue > minValue) {
      onDecrease && onDecrease(intValue);
      setValue(intValue - 1);
    }
  }

  function handleChangeInput(e) {
    const re = /^[0-9\b]+$/; //rules
    if (e.target.value === '') {
      setValue(minValue);
    } else if (re.test(e.target.value)) {
      setValue(Number.parseInt(e.target.value));
    }
  }

  return (
    <div
      className={clsx([
        styles.wrapper,
        {
          [className]: className,
        },
      ])}
      {...props}
    >
      <span
        className={clsx([
          {
            [iconWrapperClassName]: iconWrapperClassName,
          },
        ])}
        onClick={handleDecrease}
      >
        <UnionIcon
          className={clsx([
            {
              [iconClassName]: iconClassName,
            },
          ])}
        />
      </span>
      <input
        className={clsx([
          {
            [inputClassName]: inputClassName,
          },
        ])}
        type="text"
        value={value}
        onChange={handleChangeInput}
      />
      <span
        className={clsx([
          {
            [iconWrapperClassName]: iconWrapperClassName,
          },
        ])}
        onClick={handleIncrease}
      >
        <AddingIcon
          className={clsx([
            {
              [iconClassName]: iconClassName,
            },
          ])}
        />
      </span>
    </div>
  );
}

export default forwardRef(Counter);
