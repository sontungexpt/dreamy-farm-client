import styles from './Register.module.scss';

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Create an account</h1>
      <div className={styles.wrapperLine}>
        <div className={styles.wrapText}>
          <div className={styles.nameWrapper}>
            <p className={styles.name}>First name</p>
            <input type="text" className={styles.nameInput} />
          </div>

          <div className={styles.nameWrapper}>
            <p className={styles.name}>Last name</p>
            <input type="text" className={styles.nameInput} />
          </div>
        </div>

        <div className={styles.passwordWrapper}>
          <p className={styles.passwordText}>Password</p>
          <input type="password" className={styles.passwordInput} />
        </div>
      </div>
      <div className={styles.wrapperLine}>
        <div className={styles.emailWrapper}>
          <p className={styles.email}>Email</p>
          <input type="text" className={styles.emailInput} />
        </div>
        <div className={styles.passwordWrapper}>
          <p className={styles.passwordText}>Re-enter password</p>
          <input type="password" className={styles.passwordInput} />
        </div>
      </div>
      <div className={styles.loginBtn}>Create account</div>
    </div>
  );
};

export default Register;
