import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

import inputStyles from '~/pages/Accounts/styles/InputStyles.module.scss';
import styles from './Register.module.scss';
import { routes as routesConfig } from '~/configs';
import { apis } from '~/configs';

import Button from '~/components/Button/Button';
import Input from '~/components/Input';
import validator from '~/pages/Accounts/validator';

function Register() {
  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {},
  });

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validator.validate(account);
    if (validator.isNoErrors(errors)) {
      try {
        const res = await axios.post(apis.users.register, account);
        const { status, message } = res.data;
        if (status === 'success') {
          navigate(routesConfig.login, { replace: true });
        }
        toast[status](t(message));
      } catch (error) {
        toast.error(t('Something went wrong'));
        console.log(error);
      }
    } else {
      setAccount((prevState) => ({
        ...prevState,
        errors,
      }));
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;

    setAccount((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [name]: '',
      },
    }));
  };

  const handleBlur = () => {
    const errors = validator.validate(account);
    setAccount((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        ...errors,
      },
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setAccount((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <h1 className={styles.header}>{t('Create an account')}</h1>

      <Input
        required
        labelClassName={inputStyles.label}
        box
        label={t('Name')}
        id="name-register"
        type="text"
        name="name"
        value={account.name}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        errorMessage={account.errors.name}
      />
      <Input
        required
        labelClassName={inputStyles.label}
        box
        label={t('Email')}
        id="email-register"
        type="text"
        name="email"
        value={account.email}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        errorMessage={account.errors.email}
      />
      <Input
        required
        labelClassName={inputStyles.label}
        box
        label={t('Password')}
        id="password-register"
        type="password"
        name="password"
        value={account.password}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        errorMessage={account.errors.password}
      />
      <Input
        required
        labelClassName={inputStyles.label}
        box
        label={t('Confirm password')}
        id="confirm-password-register"
        type="password"
        name="confirmPassword"
        value={account.confirmPassword}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        errorMessage={account.errors.confirmPassword}
      />

      <Button
        onClick={handleSubmit}
        primary
        hoverZoom
        className={styles.loginBtn}
        type="submit"
      >
        {t('Create account')}
      </Button>
      <span className={styles.loginText}>
        {t('Already have an account?')}
        <Link to={routesConfig.login} className={styles.loginLink}>
          {t('Login')}
        </Link>
      </span>
    </form>
  );
}

export default Register;
