import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.scss';
import { Close as CloseIcon } from '~/assets/images/icons/SvgIcons';

function Modal({ children, closeBtn, closeModal }) {
  const overlay = useRef();

  useEffect(() => {
    function handleEsc(event) {
      if (event.keyCode === 27) {
        closeModal();
      }
    }

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [closeModal]);

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
  }, [closeModal]);

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

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeBtn: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      icon: PropTypes.node,
    }),
  ]),
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
