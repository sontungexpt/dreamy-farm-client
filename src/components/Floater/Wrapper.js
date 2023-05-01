import styles from './Floater.module.scss';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
} from '@floating-ui/react';

function Wrapper({
  anchor,
  children,
  placement = 'bottom-start',
  offsetValue = 10,
}) {
  const { refs, floatingStyles } = useFloating({
    elements: {
      reference: anchor,
    },
    whileElementsMounted: autoUpdate,
    placement: placement,
    middleware: [offset(offsetValue), flip(), shift()],
  });

  return (
    <div
      className={styles.wrapper}
      ref={refs.setFloating}
      style={floatingStyles}
    >
      {children}
    </div>
  );
}

export default Wrapper;
