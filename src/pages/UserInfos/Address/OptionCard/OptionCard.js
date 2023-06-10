import styles from './OptionCard.module.scss';
import { useMultiModal } from '~/hooks';

import Button from '~/components/Button';
import { ThreeDots } from '~/assets/images/icons/SvgIcons';
import EditAddressCard from '~/pages/UserInfos/Address/EditAddress/EditAddressCard';
import Trans from '~/components/Trans';

function OptionCard() {
  const { createModal, getLatestModal, removeAllModals } = useMultiModal();

  return (
    <div>
      <span
        className={styles.option}
        onClick={() =>
          createModal({
            innerModal: (
              <ol className={styles.optionList}>
                <li>
                  <Button
                    className={styles.button}
                    onClick={() =>
                      createModal({
                        innerModal: <EditAddressCard close={removeAllModals} />,
                      })
                    }
                  >
                    Edit
                  </Button>
                </li>
                <li>
                  <Button className={styles.button}>
                    <Trans>Delete</Trans>
                  </Button>
                </li>
                <li>
                  <Button className={styles.button}>
                    <Trans>Select as primary address</Trans>
                  </Button>
                </li>
              </ol>
            ),
          })
        }
      >
        <ThreeDots className={styles.threedots} />
      </span>
      {getLatestModal()}
    </div>
  );
}

export default OptionCard;
