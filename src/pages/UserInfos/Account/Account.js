import { clsx } from 'clsx';
import styles from './Account.module.scss';

function Account() {
  return (
    <div className={clsx(['grid', styles.wrapper])}>
      <h2 className={styles.header}> Account</h2>
      <div className={clsx([styles.content])}>
        <div className={clsx(['row', styles.row])}>
          <div className={clsx(['col l-4 m-4', styles.avatar])}>
            <img
              className={styles.avatarImg}
              src="https://i.pinimg.com/564x/17/d0/e3/17d0e35d3566f6fd5d643ff21b513220.jpg"
              alt="avatar"
            />
            <h3 className={styles.title}>Avatar</h3>
          </div>
          <div className={clsx(['col l-8 m-8', styles.info])}>
            <input type="text" style={{ border: '1px solid #000' }} />
            <input type="text" style={{ border: '1px solid #000' }} />
            <input type="text" style={{ border: '1px solid #000' }} />
            <input type="text" style={{ border: '1px solid #000' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
