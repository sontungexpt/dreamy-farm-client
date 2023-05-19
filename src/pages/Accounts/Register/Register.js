import styles from './Register.module.scss';
import inputStyles from '~/pages/Accounts/styles/InputStyles.module.scss';
import { Link } from 'react-router-dom';
import { routes as routesConfig } from '~/configs';
import Button from '~/components/Button/Button';
import Input from '~/components/Input';

function Register() {
  return (
    <form className={styles.wrapper}>
      <h1 className={styles.header}>Create an account</h1>

      <Input
        labelClassName={inputStyles.label}
        box
        label="Name"
        id="name-register"
        type="text"
      />
      <Input
        labelClassName={inputStyles.label}
        box
        label="Email"
        id="email-register"
        type="text"
      />
      <Input
        labelClassName={inputStyles.label}
        box
        label="Password"
        id="password-register"
        type="password"
      />
      <Input
        labelClassName={inputStyles.label}
        box
        label="Confirm password"
        id="confirm-password-register"
        type="password"
      />

      <Button primary hoverZoom className={styles.loginBtn}>
        Create account
      </Button>
      <Link to={routesConfig.login} className={styles.loginText}>
        Login
      </Link>
    </form>
  );
}

export default Register;
