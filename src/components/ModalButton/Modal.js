import { useEffect, useRef } from 'react';

import styles from './Modal.module.scss';
import { Close as CloseIcon } from '~/assets/images/icons/SvgIcons';

function Modal({ children, closeBtn, closeModal }) {
  const overlay = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (overlay.current && overlay.current.contains(event.target)) {
        closeModal();
      }
    }

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });
  return (
    <div className={styles.modal}>
      <div ref={overlay} className={styles.overlay}></div>
      <div className={styles.body}>
        {closeBtn && (
          <button onClick={closeModal} className={styles.closeBtn}>
            {closeBtn.icon ? (
              closeBtn.icon
            ) : (
              <CloseIcon className={styles.closeIcon} />
            )}
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

export default Modal;
