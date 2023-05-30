import PropTypes from 'prop-types';

import './GlobalStyles.scss';
import './ResponsiveStyles.scss';
import 'react-toastify/ReactToastify.min.css';

function GlobalStyles({ children }) {
  return children;
}

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
