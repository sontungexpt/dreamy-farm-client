import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Login to your account</h1>

      <div className={styles.infoWrapper}>
        <p className={styles.insideText}>Email</p>
        <input type="text" className={styles.insideInput} />

        <p className={styles.insideText}>Password</p>
        <input type="password" className={styles.insideInput} />
      </div>

      <Link to="##" className={styles.navigateToForgot}>
        Forgot password{' '}
      </Link>

      <div className={styles.loginBtn}>Login now</div>

      <p>
        Don't have an account?{' '}
        <Link href="##" className={styles.navigateToSignUp}>
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
