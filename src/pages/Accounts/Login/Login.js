import styles from './Login.module.scss';

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

      <a href="##" className={styles.navigateToForgot}>
        Forgot password{' '}
      </a>

      <div className={styles.loginBtn}>Login now</div>

      <p>
        Don't have an account?{' '}
        <a href="##" className={styles.navigateToSignUp}>
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
