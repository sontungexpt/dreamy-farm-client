import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { routes as routesConfig } from '~/configs';
import Button from '~/components/Button/Button';

function Login() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Login to your account</h1>

      <div className={styles.infoWrapper}>
        <label htmlFor="email-login" className={styles.label}>
          Email
        </label>
        <input id="email-login" type="text" className={styles.insideInput} />

        <label htmlFor="password-login" className={styles.label}>
          Password
        </label>
        <input
          id="password-login"
          type="password"
          className={styles.insideInput}
        />
      </div>

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
    </div>
  );
}

export default Login;
