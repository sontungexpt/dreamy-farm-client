import { clsx } from 'clsx';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import styles from './Sidebar.module.scss';
import {
  memo,
  forwardRef,
  useState,
  useEffect,
  useImperativeHandle,
} from 'react';

function Sidebar({ className, ...props }) {
  return (
    <nav
      {...props}
      className={clsx([
        {
          [className]: className,
        },
        styles.sidebar,
      ])}
    >
      <h2 className={styles.title}>Products</h2>
      <ul className={styles.list}>
        <li className={clsx([styles.item])}>
          <Button to="/products">abc</Button>
        </li>
        <li className={clsx([styles.item])}>
          <Button to="/">abc</Button>
        </li>
        <li className={clsx([styles.item])}>
          <Button>abc</Button>
        </li>
        <li className={clsx([styles.item])}>
          <Button>abc</Button>
        </li>
        <li className={clsx([styles.item])}>
          <Button>abc</Button>
        </li>
        <li className={clsx([styles.item])}>
          <Button>abc</Button>
        </li>
      </ul>
    </nav>
  );
}

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default memo(forwardRef(Sidebar));
