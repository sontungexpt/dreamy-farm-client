import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { routes as routesConfig } from '~/configs';
import Button from '~/components/Button/Button';
import Input from '~/pages/Accounts/components/Input';

function Login() {
  return (
    <form className={styles.wrapper}>
      <h1 className={styles.header}>Login to your account</h1>

      <Input required label="Email" id="email-login" type="text" />
      <Input required label="Password" id="password-login" type="password" />

      <Link
        to={routesConfig.forgotPassword}
        className={styles.navigateToForgot}
      >
        Forgot password
      </Link>

      <Button primary hoverZoom className={styles.loginBtn}>
        Login now
      </Button>

      <p>
        Don't have an account?
        <Link to={routesConfig.register} className={styles.navigateToSignUp}>
          Sign up
        </Link>
      </p>
    </form>
  );
}

export default Login;
