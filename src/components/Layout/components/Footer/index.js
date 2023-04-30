import styles from './Footer.module.scss';
import { clsx } from 'clsx';
import Logo from '~/components/Layout/components/Logo';
import icons from '~/assets/images/icons';
import LanguageBtn from '~/components/Layout/components/Footer/LanguageBtn';
import Button from '~/components/Button';

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
                  <img src={icons.facebook} alt="facebook" />
                </span>
                https://www.facebook.com/DreamyFarm/
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
                  <img src={icons.instagram} alt="instagram" />
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
                  <img src={icons.email} alt="email" />
                </span>
                dreamyfarmcustomerservice@gmail.com
              </a>
            </li>
            <li>
              <a href="/" className={clsx([styles.socialLink])}>
                <span className={clsx([styles.socialIcons])}>
                  <img src={icons.phone} alt="phone" />
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
