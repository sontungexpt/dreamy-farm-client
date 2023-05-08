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

export default forwardRef(ItemWrapper);
