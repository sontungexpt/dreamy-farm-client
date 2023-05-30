import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

import { routes as routesConfig } from '~/configs';
import { apiConfigs } from '~/configs';
import styles from './Register.module.scss';
import inputStyles from '~/pages/Accounts/styles/InputStyles.module.scss';

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

  const { t } = useTranslation('translations');

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validator.validate(account);
    if (validator.isNoErrors(errors)) {
      axios
        .post(apiConfigs.users.register, account)
        .then((response) => {
          const { error } = response.data;
          if (error) {
            toast.error(error, {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
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

  const handleBlur = (e) => {
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
