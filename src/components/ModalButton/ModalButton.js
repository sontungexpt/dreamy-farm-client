import { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';

function ModalButton({ button, innerModal, onOpen, onClose, closeBtn }) {
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
      <span onClick={handleButtonClick}>{button}</span>
      {isOpen &&
        (closeBtn ? (
          <Modal closeBtn closeModal={handleModalClose}>
            {innerModal}
          </Modal>
        ) : (
          <Modal closeModal={handleModalClose}>{innerModal}</Modal>
        ))}
    </>
  );
}

ModalButton.propTypes = {
  button: PropTypes.node.isRequired,
  innerModal: PropTypes.node.isRequired,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  closeBtn: PropTypes.bool,
};

export default ModalButton;
