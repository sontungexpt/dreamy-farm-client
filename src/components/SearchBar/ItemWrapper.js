import { forwardRef } from 'react';
import { useId } from '@floating-ui/react';

function ItemWrapper({ children, active, ...rest }, ref) {
  const id = useId();
  return (
    <div ref={ref} role="option" id={id} aria-selected={active} {...rest}>
      {children}
    </div>
  );
}

export default forwardRef(ItemWrapper);
