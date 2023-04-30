import styles from './LanguageBtn.module.scss';
import icons from '~/assets/images/icons';
import Modal from '~/components/Modal';
import { useState } from 'react';
import Button from '~/components/Button';

function LanguageBtn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className={styles.language}
        alignLeft
        onClick={() => setIsOpen(true)}
        whiteOutline
        whiteText
        leftIcon={
          <img
            className={styles.languageIcon}
            src={icons.language}
            alt="choose language"
          />
        }
      >
        <span className={styles.languageTitle}>English</span>
      </Button>

      {isOpen && (
        <Modal closeBtn closeModal={() => setIsOpen(false)}>
          <div className={styles.innerModal}>
            <h3 className={styles.modalTitle}>Choose a language</h3>
            <ul className={styles.languageList}>
              <li className={styles.languageElement}>English</li>
              <li className={styles.languageElement}>Vietnam</li>
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
}

export default LanguageBtn;
