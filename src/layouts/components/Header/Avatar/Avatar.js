import { offset } from '@floating-ui/react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import PropTypes from 'prop-types';

import styles from './Avatar.module.scss';
import { routes as routesConfig } from '~/configs';

import { Floater, ItemWrapper } from '~/components/Floater';
import {
  User as UserIcon,
  Logout as LogoutIcon,
  Setting as SettingIcon,
} from '~/assets/images/icons/SvgIcons';
import Button from '~/components/Button';

function Avatar({ className }) {
  return (
    <Floater
      className={clsx([
        styles.wrapper,
        {
          [className]: className,
        },
      ])}
      anchorClassName={styles.anchor}
      floaterClassName={styles.floater}
      whenHover
      placement="bottom-end"
      floatingProps={{
        middleware: [
          offset(() => ({
            mainAxis: 0,
            crossAxis: 15,
          })),
        ],
      }}
      anchor={
        <Link to={routesConfig.login} className={styles.navbarLink}>
          <UserIcon style={{ marginTop: '7px' }} />
        </Link>
      }
      innerFloater={
        <>
          <ItemWrapper className={styles.item}>
            <Button
              alignLeft
              className={styles.link}
              leftIcon={
                <SettingIcon
                  className={styles.icon}
                  color="var(--blue-color)"
                />
              }
              to={routesConfig.userInfos.root}
            >
              Settings
            </Button>
          </ItemWrapper>
          <ItemWrapper className={styles.item}>
            <Button
              alignLeft
              className={styles.link}
              leftIcon={
                <LogoutIcon color="var(--red-color)" className={styles.icon} />
              }
              to={routesConfig.login}
            >
              Logout
            </Button>
          </ItemWrapper>
        </>
      }
    />
  );
}

Avatar.propTypes = {
  className: PropTypes.string,
};

export default Avatar;
