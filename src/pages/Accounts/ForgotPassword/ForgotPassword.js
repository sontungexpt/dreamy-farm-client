import styles from './ForgotPassword.module.scss';
import { Link } from 'react-router-dom';
import { routes as routesConfig } from '~/configs';
import Button from '~/components/Button/Button';
import Input from '~/pages/Accounts/components/Input';

function ForgotPassword() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Create new password</h1>

      <Input label="Email" id="email-forgot" type="text" />

      <Input label="New Password" id="new-password-forgot" type="password" />

      <Button hoverZoom primary className={styles.btn}>
        Create new password
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
