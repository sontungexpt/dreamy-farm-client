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
} from '@floating-ui/react';
import { useState } from 'react';

function Floater({
  anchor,
  render,
  renderProps = { placement: 'bottom-start', offset: 10 },
  onHover = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    whileElementsMounted: autoUpdate,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: renderProps.placement,
    middleware: [offset(renderProps.offset), flip(), shift()],
  });

  const hover = useHover(context, {
    move: false,
    enabled: onHover,
  });
  const click = useClick(context);
  const focus = useFocus(context);
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
    <>
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
    </>
  );
}

export default Floater;
