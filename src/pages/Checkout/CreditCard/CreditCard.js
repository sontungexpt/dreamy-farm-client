import styles from './CreditCard.module.scss';
import Button from '~/components/Button';
import { clsx } from 'clsx';
import { CreditCard } from '~/assets/images/icons/SvgIcons';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '~/components/ModalButton';

function CreditCardInfo({ onClose }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation or submit the credit card information
    // to your backend or handle it as per your requirements
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);

    // Clear the input fields
    // setCardNumber('');
    // setExpiryDate('');
    // setCVV('');

    // Close the modal
    // setShowCreditCardInfo(false);
    setIsFormSubmitted(true);
  };

  const handleClose = (event) => {
    event.preventDefault();
    // setShowCreditCardInfo(false);
    onClose();
  };
  useEffect(() => {
    setIsFormSubmitted(false);
  }, []);

  return (
    <div className={styles.selectCard}>
      <div className={styles.radioButton}>
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
            <Button type="submit">Submit</Button>
            <Button type="button" onClick={handleClose}>
              Close
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreditCardInfo;
