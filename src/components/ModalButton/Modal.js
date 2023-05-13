import {
  useImperativeHandle,
  useState,
  forwardRef,
  useEffect,
  useRef,
} from 'react';
import { clsx } from 'clsx';

import styles from './Modal.module.scss';
import { Close as CloseIcon } from '~/assets/images/icons/SvgIcons';

function Modal(
  {
    className, // className for the body of the modal
    wrapperClassName, // className for the wrapper of the modal
    closeBtnClassName, // className for the close button
    closeIconClassName, // className for the close icon
    children,
    closeBtn, // closeBtn = {icon: <Icon />, className: 'className'} or true or false
    onClose,
    onOpen,
  },
  ref,
) {
  const overlay = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  useEffect(() => {
    function handleEsc(event) {
      event.stopPropagation();
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    }

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      event.stopPropagation();
      if (overlay.current && overlay.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      onOpen && onOpen();
    } else {
      onClose && onClose();
    }
  }, [isOpen, onClose, onOpen]);

  return (
    <>
      {isOpen && (
        <div
          className={clsx([
            styles.modal,
            {
              [wrapperClassName]: wrapperClassName,
            },
          ])}
        >
          <div ref={overlay} className={styles.overlay}></div>
          <div
            className={clsx([
              styles.body,
              {
                [className]: className,
              },
            ])}
          >
            {closeBtn && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className={clsx([
                  styles.closeBtn,
                  {
                    [closeBtnClassName]: closeBtnClassName,
                  },
                ])}
              >
                {closeBtn.icon ? (
                  closeBtn.icon
                ) : (
                  <CloseIcon
                    className={clsx([
                      styles.closeIcon,
                      {
                        [closeIconClassName]: closeIconClassName,
                      },
                    ])}
                  />
                )}
              </button>
            )}
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default forwardRef(Modal);
