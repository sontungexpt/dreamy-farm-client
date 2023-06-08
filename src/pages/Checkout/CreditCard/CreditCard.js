import styles from './CreditCard.module.scss';
import Button from '~/components/Button';
import { Modal } from '~/components/ModalButton';
import { useCallback, useRef } from 'react';
import { clsx } from 'clsx';
import { CreditCard } from '~/assets/images/icons/SvgIcons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function CreditCardInfo({ isOpen, onClose }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const handleSelectPayment = (index) => {
    setSelectedPayment(index);
  };
  const [selectedPayment, setSelectedPayment] = useState(null);
  const modalRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation or submit the credit card information
    // to your backend or handle it as per your requirements
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);

    // Clear the input fields
    setCardNumber('');
    setExpiryDate('');
    setCVV('');

    // Close the modal
    onClose();
  };

  return (
    <div className={clsx([styles.selectCard])}>
      <div className={styles.radioButton}>
        {/* <input
            type="radio"
            checked={setSelectedPayment !== null}
            onChange={() => handleSelectPayment(selectedPayment)}
          /> */}

        <div className="modal-content">
          <h2>Credit Card Payment</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </form>
        </div>
      </div>

      {/* <Modal ref={modalRef} className={styles.innerModal}>
        <div className="modal-content">
          <h2>Credit Card Payment</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </form>
        </div>
      </Modal> */}
    </div>
  );
}
export default CreditCardInfo;
