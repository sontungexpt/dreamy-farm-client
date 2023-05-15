import { clsx } from 'clsx';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ToggleIcon.module.scss';

function ToggleIcon({
  className,
  activeIcon,
  unActiveIcon,
  onClick,
  customEvent,
  onUnClick,
  ...props
}) {
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
    <div
      {...props}
      className={clsx([styles.wrapper, { [className]: className }])}
    >
      {customEvent ? (
        customEvent() ? (
          activeIcon
        ) : (
          unActiveIcon
        )
      ) : (
        <span onClick={handleClick}>{isClick ? activeIcon : unActiveIcon}</span>
      )}
    </div>
  );
}

ToggleIcon.propTypes = {
  className: PropTypes.string,
  activeIcon: PropTypes.node.isRequired,
  unActiveIcon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onUnClick: PropTypes.func,
  customEvent: PropTypes.func,
};

export default ToggleIcon;
