// libabry
import { clsx } from 'clsx';

// configs
import styles from './Footer.module.scss';

//components
import Logo from '~/assets/images/icons/Logo';
import LanguageBtn from './LanguageBtn';
import Button from '~/components/Button';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
} from '~/assets/images/icons/SvgIcons';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.companyInfo}>
          <ul className={styles.socialList}>
            <li>
              <div className={clsx([styles.logo])}>
                <Logo color="#ffffff" transform={'scale(2.1)'} />
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
            <li>
              <a href="/" className={clsx([styles.socialLink])}>
                <span className={clsx([styles.socialIcons])}>
                  <PhoneIcon />
                </span>
                0392211343
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.feedback}>
          <h2 className={styles.feedbackTitle}>Feedback</h2>
          <input
            type="text"
            placeholder="Enter your feedback"
            className={clsx([styles.feedbackInput])}
          />
          <Button primary className={styles.submitBtn}>
            Submit
          </Button>
        </div>
        <LanguageBtn />
      </div>
      <p className={styles.copyRight}>Dreamy Farm © 2023. All Right Served.</p>
    </footer>
  );
}

export default Footer;
