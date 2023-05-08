import { clsx } from 'clsx';
import { useState, useImperativeHandle, forwardRef } from 'react';

import styles from './Counter.module.scss';

import {
  Adding as AddingIcon,
  Union as UnionIcon,
} from '~/assets/images/icons/SvgIcons';

function Counter({ className, ...props }, ref) {
  const [value, setValue] = useState(1);

  useImperativeHandle(ref, () => ({
    value,
  }));

  function handleIncrease() {
    setValue(Number.parseInt(value) + 1);
  }

  function handleDecrease() {
    const intValue = Number.parseInt(value);
    if (intValue > 1) {
      setValue(intValue - 1);
    }
  }

  function handleChangeInput(e) {
    const re = /^[0-9\b]+$/; //rules
    if (e.target.value === '') {
      setValue(1);
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
      <span onClick={handleDecrease}>
        <UnionIcon />
      </span>
      <input type="text" value={value} onChange={handleChangeInput} />
      <span onClick={handleIncrease}>
        <AddingIcon />
      </span>
    </div>
  );
}

export default forwardRef(Counter);
