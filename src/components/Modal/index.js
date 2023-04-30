import styles from './Modal.module.scss';
import icons from '~/assets/images/icons';
import { useEffect, useRef } from 'react';

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
              <img src={icons.close} className={styles.closeIcon} alt="close" />
            )}
          </button>
        )}

        {children}
      </div>
    </div>
  );
}

export default Modal;
