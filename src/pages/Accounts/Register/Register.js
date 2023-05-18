import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import { routes as routesConfig } from '~/configs';
import Button from '~/components/Button/Button';
import Input from '~/pages/Accounts/components/Input';

function Register() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Create an account</h1>
      <Input label="Name" id="name-register" type="text" />
      <Input label="Email" id="email-register" type="text" />
      <Input label="Password" id="password-register" type="password" />
      <Input
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
    </div>
  );
}

export default Register;
