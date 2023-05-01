import { useState } from 'react';
import Modal from './Modal';

function ModalButton({ button, innerModal, onOpen, onClose, closeBtn }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!button || !innerModal) {
    throw new Error('ModalButton requires both a button and innerModal prop)');
  }

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

export default ModalButton;
