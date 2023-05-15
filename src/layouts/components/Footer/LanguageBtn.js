import styles from './LanguageBtn.module.scss';
import Button from '~/components/Button';
import ModalButton from '~/components/ModalButton';
import { Language as LanguageIcon } from '~/assets/images/icons/SvgIcons';

function LanguageBtn() {
  return (
    <ModalButton
      className={styles.button}
      button={
        <Button
          className={styles.language}
          childrenClassName={styles.languageTitle}
          alignLeft
          whiteOutline
          whiteText
          leftIcon={<LanguageIcon className={styles.languageIcon} />}
        >
          English
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
