import styles from './ForgotPassword.module.scss';
import { routes as routesConfig } from '~/configs';
import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';

function ForgotPassword() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Create new password</h1>

      <div className={styles.infoWrapper}>
        <p className={styles.insideText}>New password</p>
        <input
          type="password"
          placeholder="Enter your new password"
          className={styles.insideInput}
        />

        <p className={styles.insideText}>Confirm password</p>
        <input
          type="password"
          placeholder="Re-Enter your new password"
          className={styles.insideInput}
        />
      </div>

      <Button hoverZoom primary className={styles.loginBtn}>
        Login now
      </Button>

      <div className={styles.suggestCreateAccount}>
        <p>New to Dreamy Farm?</p>
        <Link to={routesConfig.register} className={styles.navigateToSignUp}>
          Sign up
        </Link>
      </div>
    </div>
  );
}
export default ForgotPassword;
