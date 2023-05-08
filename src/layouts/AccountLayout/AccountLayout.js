import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import styles from './AccountLayout.module.scss';
import { useRef, useEffect } from 'react';

function AccountLayout({ children }) {
  const mainRef = useRef(null);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const mainRefOffsetTop = mainRef.current.offsetTop;

    mainRef.current.style.height = windowHeight - mainRefOffsetTop + 'px';
  }, []);
  return (
    <div className="layoutWrapper">
      <Header />
      <div ref={mainRef} className={styles.main}>
        {children}
      </div>
    </div>
  );
}

AccountLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AccountLayout;
