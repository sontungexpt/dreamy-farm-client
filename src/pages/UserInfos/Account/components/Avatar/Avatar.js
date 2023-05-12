import PropTypes from 'prop-types';
import { useRef } from 'react';
import { clsx } from 'clsx';

import styles from './Avatar.module.scss';
import jpgImages from '~/assets/images/jpgs';
import { Modal } from '~/components/ModalButton';
import Image from '~/components/Image';
import ImageInput from './ImageInput';
import { Camera as CameraIcon } from '~/assets/images/icons/SvgIcons';

function Avatar({ src }) {
  const modalRef = useRef();

  return (
    <>
      <div
        onClick={() => modalRef.current.open()}
        className={clsx([styles.avatar])}
      >
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
      <Modal ref={modalRef}>
        <ImageInput
          onAccept={() => modalRef.current.close()}
          className={styles.innerModal}
        />
      </Modal>
    </>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
};

export default Avatar;
