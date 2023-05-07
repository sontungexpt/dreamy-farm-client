import styles from './Sidebar.module.scss';
import { clsx } from 'clsx';

function Sidebar(groupList) {
  return (
    <nav className={clsx([styles.wrapper, 'l-2'])}>
      <h2 className={styles.title}>Products</h2>
      <ul className={styles.list}>
        {groupList &&
          groupList.map((group, index) => (
            <li key={index} className={styles.item}>
              <a href="/" className={styles.link}>
                <span className={styles.text}>{group}</span>
              </a>
            </li>
          ))}
        <li className={styles.item}>
          <a href="/" className={styles.link}>
            <span className={styles.text}>Trang chủ</span>
          </a>
        </li>
        <li className={styles.item}>
          <a href="/" className={styles.link}>
            <span className={styles.text}>Trang chủ</span>
          </a>
        </li>
        <li className={styles.item}>
          <a href="/" className={styles.link}>
            <span className={styles.text}>Trang chủ</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
