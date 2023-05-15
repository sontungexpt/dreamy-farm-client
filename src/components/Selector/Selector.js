import { clsx } from 'clsx';
import { useState, forwardRef, useImperativeHandle } from 'react';
import styles from './Selector.module.scss';

function Selector(
  {
    data, //array
    renderItem, //function
    className, //string
    itemClassName, //string
    itemActiveClassName, //string
    onActiveItemClick, //function
    onInactiveItemClick, //function
    onItemClick, //function
    ...props
  },
  ref,
) {
  const [activeIndex, setActiveIndex] = useState(0);

  useImperativeHandle(
    ref,
    () => ({
      activeIndex: activeIndex,
      activeItem: data[activeIndex],
    }),
    [activeIndex, data],
  );

  return (
    <ul
      {...props}
      className={clsx([
        styles.wrapper,
        {
          [className]: className,
        },
      ])}
    >
      {data.map((item, index) => (
        <li
          key={index}
          onClick={(event) => {
            // Prevent re-render if the item is already active
            if (activeIndex !== index) {
              setActiveIndex(index);
              onInactiveItemClick && onInactiveItemClick(item, index, event);
            } else {
              onActiveItemClick && onActiveItemClick(item, index, event);
            }

            onItemClick && onItemClick(item, index, event);
          }}
          className={clsx([
            {
              [itemClassName]: itemClassName,
            },
            {
              [itemActiveClassName]: activeIndex === index,
            },
          ])}
        >
          {renderItem(item, index, activeIndex === index, activeIndex)}
        </li>
      ))}
    </ul>
  );
}

export default forwardRef(Selector);
