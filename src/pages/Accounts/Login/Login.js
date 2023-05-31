import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

import { routes as routesConfig } from '~/configs';
import inputStyles from '~/pages/Accounts/styles/InputStyles.module.scss';
import { apiConfigs } from '~/configs';
import styles from './Login.module.scss';

import Button from '~/components/Button/Button';
import Input from '~/components/Input';

import validator from '~/pages/Accounts/validator';

function Login() {
  const [account, setAccount] = useState({
    email: '',
    password: '',
    errors: {},
  });
  const navigate = useNavigate();
  const { t } = useTranslation('translations');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validator.validate(account);
    if (validator.isNoErrors(errors)) {
      try {
        const res = await axios.post(apiConfigs.users.login, account);
        const { error } = res.data;
        if (error) {
          toast.error(t(error));
        } else {
          navigate(routesConfig.root, { replace: true });
          toast.success(t('Login successfully'));
        }
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
      <h1 className={styles.header}>{t('Login to your account')}</h1>

      <Input
        labelClassName={inputStyles.label}
        box
        required
        label={t('Email')}
        id="email-login"
        type="text"
        name="email"
        value={account.email}
        errorMessage={account.errors.email}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
      />
      <Input
        labelClassName={inputStyles.label}
        required
        box
        label={t('Password')}
        id="password-login"
        type="password"
        name="password"
        value={account.password}
        errorMessage={account.errors.password}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
      />

      <Link
        to={routesConfig.forgotPassword}
        className={styles.navigateToForgot}
      >
        {t('Forgot password?')}
      </Link>

      <Button type="submit" primary hoverZoom className={styles.loginBtn}>
        {t('Login now')}
      </Button>

      <p>
        {t("Don't have an account?")}
        <Link to={routesConfig.register} className={styles.navigateToSignUp}>
          {t('Sign up')}
        </Link>
      </p>
    </form>
  );
}

export default Login;
