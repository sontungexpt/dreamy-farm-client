import { clsx } from 'clsx';
import { useState, forwardRef, useImperativeHandle } from 'react';

function Selector(
  { data, renderItem, className, itemClassName, itemActiveClassName, ...props },
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
    <div
      {...props}
      className={clsx([
        'row',
        {
          [className]: className,
        },
      ])}
    >
      {data.map((item, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
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
        </div>
      ))}
    </div>
  );
}

export default forwardRef(Selector);
