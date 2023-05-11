import styles from './ForgotPassword.module.scss';

// function ForgotPassword() {
//   return <div className={styles.wrapper}>Forgot password</div>;
// }

const ForgotPassword = () => {
  <div className={styles.wrapper}>
    <h1 className="header">Create New Password</h1>
    <p className="email">New password</p>
    <input type="text" />
    <p className="password">Confirm password</p>
    <input type="password" />
    <p className={styles.navigateLink}>Forgot password</p>
    <div>Login</div>
    <p>
      New to Dreamy Farm?{' '}
      <span className={styles.navigateLink}>Create an account</span>
    </p>
  </div>;
};
export default ForgotPassword;
