import { clsx } from 'clsx';
import styles from './Account.module.scss';
import Input from './Input';

import {
  NoFilledUser as NoFilledUserIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Camera as CameraIcon,
} from '~/assets/images/icons/SvgIcons';
function Account() {
  return (
    <div className={clsx(['grid', styles.wrapper])}>
      <h2 className={styles.header}> Account</h2>
      <div className={clsx([styles.content])}>
        <div className={clsx(['row', styles.row])}>
          <div className={clsx(['col l-4 m-4 c-12', styles.avatar])}>
            <div className={styles.avatarSquare}>
              <img
                src="https://i.pinimg.com/564x/17/d0/e3/17d0e35d3566f6fd5d643ff21b513220.jpg"
                alt="avatar"
              />
              <div className={styles.avatarOverlay} />
              <div className={styles.avatarChange}>
                <CameraIcon />
              </div>
            </div>
            <h3 className={styles.title}>Your Avatar</h3>
          </div>
          <div className={clsx(['col l-8 m-8 c-12', styles.info])}>
            <Input
              labelIcon={<NoFilledUserIcon color="var(--blue-color)" />}
              className={styles.input}
              label="Name"
              id="name"
              type="text"
              name="name"
            />
            <Input
              labelIcon={<MailIcon color="var(--red-color)" />}
              className={styles.input}
              label="Email"
              id="email"
              type="email"
              name="email"
            />
            <Input
              labelIcon={<PhoneIcon color="var(--yellow-color)" />}
              className={styles.input}
              label="Phone"
              id="phone"
              type="text"
              name="phone"
            />
            <Input
              className={styles.input}
              label="Gender"
              type="text"
              id="gender"
              name="gender"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
