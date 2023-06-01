import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function LinkCondition({
  errorMessage,
  isAllowed,
  className,
  to,
  children,
  ...props
}) {
  const handleClick = (e) => {
    if (!isAllowed) {
      e.preventDefault();
      toast.error(errorMessage);
    }
  };
  return (
    <Link onClick={handleClick} className={className} to={to} {...props}>
      {children}
    </Link>
  );
}

LinkCondition.propTypes = {
  isAllowed: PropTypes.bool,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default LinkCondition;
