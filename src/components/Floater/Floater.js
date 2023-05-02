import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  safePolygon,
} from '@floating-ui/react';
import { useState } from 'react';

function Floater({
  anchor,
  render,
  whenHover = false,
  whenFocus = false,
  whenClick = false,
  floatingProps = {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    whileElementsMounted: autoUpdate,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-start',
    middleware: [offset(10), flip(), shift()],
    ...floatingProps,
  });

  const hover = useHover(context, {
    move: false,
    enabled: whenHover,
    delay: 0,
    handleClose: safePolygon({
      blockPointerEvents: true,
      buffer: 1,
    }),
  });
  const click = useClick(context, {
    enabled: whenClick,
  });
  const focus = useFocus(context, {
    enabled: whenFocus,
  });

  const dismiss = useDismiss(context);
  const role = useRole(context);

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    click,
    focus,
    dismiss,
    role,
  ]);
  return (
    <div>
      <span ref={refs.setReference} {...getReferenceProps()}>
        {anchor}
      </span>
      {isOpen && (
        <span
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {render}
        </span>
      )}
    </div>
  );
}

export default Floater;
