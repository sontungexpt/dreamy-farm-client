import { useState, forwardRef } from 'react';
import { clsx } from 'clsx';

import styles from './Image.module.scss';

import jpgImages from '~/assets/images/jpgs';

function Image(
  {
    src,
    altSrc = jpgImages.noImage, // the image to display if the src is not passed
    alt,
    className,
    fallback: customFallback = jpgImages.noImage, // the image to display if the src is not found
    ...props
  },
  ref,
) {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    console.log('error');
    setFallback(customFallback);
  };

  return (
    <img
      className={clsx([
        styles.wrapper,
        {
          [className]: className,
        },
      ])}
      ref={ref}
      src={fallback || src || altSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}

export default forwardRef(Image);
