import styles from './CreditCard.module.scss';
import Button from '~/components/Button';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function CreditCardInfo({ onClose }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);

    onClose();
  };

  const handleClose = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className={styles.creditCardForm}>
      <div className={styles.modalContent}>
        <h2>Credit Card Information</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              required
            />
          </div>
          <div className={styles.optionButton}>
            <Button className={styles.closeButton} onClick={handleClose}>
              Close
            </Button>
            <Button className={styles.submitButton} onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreditCardInfo;
