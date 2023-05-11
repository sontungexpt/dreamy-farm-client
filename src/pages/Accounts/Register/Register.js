import styles from './Register.module.scss';

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className="header">Create an account</h1>
      <p className="firstName">First Name</p>
      <p className="lastName">Last Name</p>
      <p className="password">Password</p>
      <input type="text"></input>
      <input type="text"></input>
      <input type="password"></input>
      <p className="email">Email address</p>
      <p className="ReEnter">Re-enter password</p>
      <div className="createAccount">Create account</div>
    </div>
  );
};

export default Register;
