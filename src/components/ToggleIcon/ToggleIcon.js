import { clsx } from 'clsx';
import { useState } from 'react';
import styles from './ToggleIcon.module.scss';

function ToggleIcon({ className, clickIcon, unClickIcon, onClick, onUnClick }) {
  const [isClick, setIsClick] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();

    setIsClick(!isClick);
    if (isClick) {
      onUnClick && onUnClick();
    } else {
      onClick && onClick();
    }
  };

  return (
    <div className={clsx([styles.wrapper, { [className]: className }])}>
      <span onClick={handleClick}>{isClick ? clickIcon : unClickIcon}</span>
    </div>
  );
}

export default ToggleIcon;
