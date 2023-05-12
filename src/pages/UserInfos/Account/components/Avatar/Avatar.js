import PropTypes from 'prop-types';
import { clsx } from 'clsx';

import jpgImages from '~/assets/images/jpgs';
import ModalButton from '~/components/ModalButton';
import Image from '~/components/Image';
import { Camera as CameraIcon } from '~/assets/images/icons/SvgIcons';

import styles from './Avatar.module.scss';

function Avatar({ src }) {
  return (
    <ModalButton
      button={
        <div className={clsx([styles.avatar])}>
          <div className={styles.avatarSquare}>
            <Image
              className={styles.avatarImg}
              src={src}
              alt="avatar"
              altSrc={jpgImages.noAvatar}
              fallback={jpgImages.noAvatar}
            />
            <div className={styles.avatarOverlay}>
              <CameraIcon className={styles.cameraIcon} />
            </div>
          </div>
          <h3 className={styles.title}>Your Avatar</h3>
        </div>
      }
      innerModal={
        <div className={styles.innerModal}>
          <div>
            <Image
              className={styles.avatarImg}
              src={src}
              alt="avatar"
              altSrc={jpgImages.noAvatar}
              fallback={jpgImages.noAvatar}
            />
          </div>
          <input type="file" placeholder="Tai anh len" />
        </div>
      }
    />
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
};

export default Avatar;
