import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import { routes as routesConfig } from '~/configs';
import Button from '~/components/Button/Button';
import Input from '~/pages/Accounts/components/Input';

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Create an account</h1>
      <Input label="Name" id="name-register" />
      <Input label="Password" id="password-register" />
      <Input label="Email" id="email-register" />
      <Input label="Confirm password" id="confirm-password-register" />

      <Button primary hoverZoom className={styles.loginBtn}>
        Create account
      </Button>
      <Link to={routesConfig.login} className={styles.loginText}>
        Login
      </Link>
    </div>
  );
};

export default Register;
