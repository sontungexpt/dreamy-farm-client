import { clsx } from 'clsx';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './Sidebar.module.scss';
import { userInfoConfigs as configs } from '~/configs/pages';

import Menu, { MenuItem } from './Menu';
import { Setting as SettingIcon } from '~/assets/images/icons/SvgIcons';

function Sidebar({ className, ...props }) {
  const { t } = useTranslation('translations');
  return (
    <aside
      {...props}
      className={clsx([
        styles.sidebar,
        {
          [className]: className,
        },
      ])}
    >
      <div className={styles.title}>
        <span>
          <SettingIcon width="30px" />
        </span>
        <h2>{t('Informations')}</h2>
      </div>
      <Menu className={styles.menu}>
        {configs.categories.map(
          ({ title, icon: Icon, to, colorIcon, separator }, index) => (
            <MenuItem
              to={to}
              className={styles.menuItem}
              activeClassName={styles.active}
              separatorClassName={clsx([{ [styles.separator]: separator }])}
              key={index}
              title={t(title)}
              icon={<Icon color={colorIcon} className={styles.icon} />}
            />
          ),
        )}
      </Menu>
    </aside>
  );
}

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
