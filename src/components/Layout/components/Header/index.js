import { clsx } from 'clsx';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={clsx([styles.wrapper])}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/">Recipes</a>
        </li>
        <li>
          <a href="/">About us</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">
            <i className=""></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className=""></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className=""></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className=""></i>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
