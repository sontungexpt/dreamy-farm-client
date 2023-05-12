import { useState } from 'react';
import { clsx } from 'clsx';
import PropTypes from 'prop-types';

import Modal from './Modal';

function ModalButton({
  className,
  modalClassName,
  button,
  innerModal,
  onOpen,
  onClose,
  closeBtn,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleButtonClick() {
    setIsOpen(true);
    onOpen && onOpen();
  }

  function handleModalClose() {
    setIsOpen(false);
    onClose && onClose();
  }

  return (
    <>
      <span
        className={clsx([
          {
            [className]: className,
          },
        ])}
        onClick={handleButtonClick}
      >
        {button}
      </span>
      {isOpen &&
        (closeBtn ? (
          <Modal
            className={clsx([{ [modalClassName]: modalClassName }])}
            closeBtn
            closeModal={handleModalClose}
          >
            {innerModal}
          </Modal>
        ) : (
          <Modal
            className={clsx([{ [modalClassName]: modalClassName }])}
            closeModal={handleModalClose}
          >
            {innerModal}
          </Modal>
        ))}
    </>
  );
}

ModalButton.propTypes = {
  className: PropTypes.string,
  modalClassName: PropTypes.string,
  button: PropTypes.node.isRequired,
  innerModal: PropTypes.node.isRequired,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  closeBtn: PropTypes.bool,
};

export default ModalButton;
