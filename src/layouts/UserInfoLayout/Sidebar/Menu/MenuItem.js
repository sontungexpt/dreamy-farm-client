import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

function MenuItem({
  className,
  activeClassName,
  pendingClassName,
  to,
  icon,
  title,
  ...props
}) {
  return (
    <NavLink
      className={(nav) =>
        clsx([
          {
            [className]: className,
          },
          {
            [activeClassName]: nav.isActive,
          },
          {
            [pendingClassName]: nav.isPending,
          },
        ])
      }
      to={to}
      {...props}
    >
      <span>{icon}</span>
      {title}
    </NavLink>
  );
}

MenuItem.propTypes = {
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  pendingClassName: PropTypes.string,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
