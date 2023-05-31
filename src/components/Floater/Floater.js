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
import clsx from 'clsx';

function Floater({
  className,
  anchorClassName,
  floaterClassName,

  anchor,
  innerFloater,

  whenHover = false,
  whenFocus = false,
  whenClick = false,
  floatingProps = {
    middleware: [],
  },
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    whileElementsMounted: autoUpdate,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-start',
    ...floatingProps,
    middleware: [offset(10), flip(), shift(), ...floatingProps.middleware],
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
    <div
      className={clsx([
        {
          [className]: className,
        },
      ])}
    >
      <div
        className={clsx([
          {
            [anchorClassName]: anchorClassName,
          },
        ])}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {anchor}
      </div>
      {isOpen && (
        <ul
          className={clsx([
            {
              [floaterClassName]: floaterClassName,
            },
          ])}
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {innerFloater}
        </ul>
      )}
    </div>
  );
}

export default Floater;
