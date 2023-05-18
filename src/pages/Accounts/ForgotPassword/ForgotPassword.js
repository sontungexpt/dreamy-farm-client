import styles from './ForgotPassword.module.scss';

// function ForgotPassword() {
//   return <div className={styles.wrapper}>Forgot password</div>;
// }

const ForgotPassword = () => {
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

    <div className={styles.loginBtn}>Login now</div>

    <div className={styles.suggestCreateAccount}>
      <p>New to Dreamy Farm?</p>
      <a href="##" className={styles.navigateToSignUp}>
        Sign up
      </a>
    </div>
  </div>;
};
export default ForgotPassword;
