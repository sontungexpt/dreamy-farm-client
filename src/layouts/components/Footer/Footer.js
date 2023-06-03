// libabry
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// configs
import styles from './Footer.module.scss';

//components
import Logo from '~/assets/images/icons/Logo';
import LanguageButton from './LanguageButton';
import Button from '~/components/Button';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
} from '~/assets/images/icons/SvgIcons';

function Footer() {
  const { t } = useTranslation('translations');
  const { email } = useSelector((state) => state.user);

  console.log('render Footer');
  const handleSendFeedback = (e) => {
    e.preventDefault();
    if (!email) {
      toast.warning(t('Please login to send feedback'));
      return;
    }

    toast.success(t('Send feedback successfully'));
  };

  return (
    <footer className={clsx([styles.wrapper])}>
      <div className={clsx(['grid', 'wide', styles.inner])}>
        <div className={styles.companyInfo}>
          <ul className={styles.socialList}>
            <li>
              <div className={clsx([styles.logo])}>
                <Logo color="var(--white-color)" transform={'scale(2.1)'} />
              </div>
              <a
                href="https://www.facebook.com/DreamyFarm/"
                className={clsx([styles.socialLink])}
                target="_blank"
                rel="noreferrer"
              >
                <span className={clsx([styles.socialIcons])}>
                  <FacebookIcon />
                </span>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dreamyfarmvn/?igshid=ZDdkNTZiNTM=&fbclid=IwAR2AiFyZtxmLYaooqEn7mpfST3-ug9y3owqJUML5N2VS8JvA3LBSpjOmVf0"
                target="_blank"
                rel="noreferrer"
                className={clsx([styles.socialLink])}
              >
                <span className={clsx([styles.socialIcons])}>
                  <InstagramIcon />
                </span>
                Instagram
              </a>
            </li>
            <li>
              <a href="/" className={clsx([styles.socialLink])}>
                <span className={clsx([styles.socialIcons])}>
                  <PhoneIcon />
                </span>
                0392211343
              </a>
            </li>
            <li>
              <a
                href="mailto:dreamyfarmcustomerservice@gmail.com"
                className={clsx([styles.socialLink])}
                target="_blank"
                rel="noreferrer"
              >
                <span className={clsx([styles.socialIcons])}>
                  <MailIcon />
                </span>
                dreamyfarmcustomerservice@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSendFeedback}>
          <div className={styles.feedback}>
            <h2 className={styles.feedbackTitle}>{t('Feedback')}</h2>
            <textarea
              type="text"
              placeholder={t('Enter your feedback')}
              className={clsx([styles.feedbackInput])}
            />
            <Button type="submit" primary className={styles.submitBtn}>
              {t('Submit')}
            </Button>
          </div>
        </form>
        <LanguageButton />
      </div>
      <p className={styles.copyRight}>Dreamy Farm © 2023. All Right Served.</p>
    </footer>
  );
}

export default Footer;
