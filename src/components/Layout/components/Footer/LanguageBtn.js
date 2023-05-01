import styles from './LanguageBtn.module.scss';
import icons from '~/assets/images/icons';
import Button from '~/components/Button';
import ModalButton from '~/components/ModalButton';

function LanguageBtn() {
  return (
    <ModalButton
      button={
        <Button
          className={styles.language}
          alignLeft
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
      }
      innerModal={
        <div className={styles.innerModal}>
          <h3 className={styles.modalTitle}>Choose a language</h3>
          <ul className={styles.languageList}>
            <li className={styles.languageElement}>English</li>
            <li className={styles.languageElement}>Vietnam</li>
          </ul>
        </div>
      }
    ></ModalButton>
  );
}

export default LanguageBtn;
