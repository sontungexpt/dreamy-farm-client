import styles from './LanguageBtn.module.scss';
import Button from '~/components/Button';
import { Language as LanguageIcon } from '~/assets/images/icons/SvgIcons';
import { languagesConfigs } from '~/configs';
import Selector from '~/components/Selector';
import { Modal } from '~/components/ModalButton';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

function LanguageBtn() {
  const [language, setLanguage] = useState(languagesConfigs[1].title); // ['English', 'Vietnamese']
  const modalRef = useRef(null);

  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // useEffect(() => {
  //   modalRef.current.close();
  // }, [language]);

  return (
    <div className={styles.button}>
      <Button
        onClick={() => modalRef.current.open()}
        className={styles.language}
        childrenClassName={styles.languageTitle}
        alignLeft
        whiteOutline
        whiteText
        leftIcon={<LanguageIcon className={styles.languageIcon} />}
      >
        {language}
      </Button>
      <Modal ref={modalRef} className={styles.innerModal}>
        <h3 className={styles.modalTitle}>Choose a language</h3>
        <Selector
          className={styles.languageList}
          data={languagesConfigs}
          itemClassName={styles.languageElement}
          itemActiveClassName={styles.active}
          onInactiveItemClick={(item) => {
            changeLanguage(item.i18n);
            setLanguage(item.title);
          }}
          onItemClick={(item) => modalRef.current.close()}
          renderItem={(item) => item.title}
        />
      </Modal>
    </div>
  );
}

export default LanguageBtn;
