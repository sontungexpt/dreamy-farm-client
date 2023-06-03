import Card from '~/pages/Checkout/Card';
import styles from './SelectOtherPhoneNumber.module.scss';

function SelectOtherPhoneNumber() {
  return (
    <div>
      <Card
        name="payment-method"
        onChange={() => {}}
        hoverEffect
        title="0392211343"
      />
    </div>
  );
}

export default SelectOtherPhoneNumber;
