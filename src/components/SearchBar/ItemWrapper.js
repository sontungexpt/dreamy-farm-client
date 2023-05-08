import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useId } from '@floating-ui/react';

function ItemWrapper({ children, active, ...props }, ref) {
  const id = useId();
  return (
    <div ref={ref} role="option" id={id} aria-selected={active} {...props}>
      {children}
    </div>
  );
}

ItemWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
};

export default forwardRef(ItemWrapper);
