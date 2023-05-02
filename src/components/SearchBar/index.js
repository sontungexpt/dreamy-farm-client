import { useRef, useState } from 'react';
import { clsx } from 'clsx';
import {
  autoUpdate,
  size,
  flip,
  useDismiss,
  shift,
  offset,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  FloatingFocusManager,
  FloatingPortal,
} from '@floating-ui/react';

import styles from './SearchBar.module.scss';
import icons from '~/assets/images/icons';
import ItemWrapper from './ItemWrapper';

function SearchBar({
  placeholder = '', //optional
  noIcon, //optional
  onlyIcon, //optional
  iconLeft, //optional
  smallLength, //optional
  mediumLength, //optional
  largeLength, //optional
  smallHeight, //optional
  floaterWrapperClassName, //optional
  floaterWrapperTitle, //optional
  mediumHeight, //optional
  largeHeight, //optional

  onEnter,
  data, //required
  comparativeData, //required
  renderItem, //required
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const [items, setItems] = useState([]);

  const listRef = useRef([]);

  const { refs, floatingStyles, context } = useFloating({
    whileElementsMounted: autoUpdate,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      flip(),
      offset(10),
      shift(),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const role = useRole(context, { role: 'listbox' });
  const dismiss = useDismiss(context);
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [role, dismiss, listNav],
  );

  function onChange(event) {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      setIsOpen(true);
      setActiveIndex(0);
      if (data) {
        setItems(
          data.filter((item) =>
            comparativeData(item).toLowerCase().includes(value.toLowerCase()),
          ),
        );
      }
    } else {
      setIsOpen(false);
    }
  }

  return (
    <div
      ref={refs.setPositionReference}
      className={clsx([
        styles.wrapper,
        {
          [styles.onlyIcon]: onlyIcon,
        },
        {
          [styles.noIcon]: noIcon,
        },
        {
          [styles.iconLeft]: iconLeft,
        },
        {
          [styles.smallLength]: smallLength,
        },
        {
          [styles.mediumLength]: mediumLength,
        },
        {
          [styles.largeLength]: largeLength,
        },
        {
          [styles.smallHeight]: smallHeight,
        },
        {
          [styles.mediumHeight]: mediumHeight,
        },
        {
          [styles.largeHeight]: largeHeight,
        },
      ])}
    >
      <input
        {...getReferenceProps({
          ref: refs.setReference,
          onChange,
          value: inputValue,
          'aria-autocomplete': 'list',
          onKeyDown(event) {
            if (
              event.key === 'Enter' &&
              activeIndex != null &&
              items[activeIndex]
            ) {
              setInputValue(comparativeData(items[activeIndex]));
              setActiveIndex(null);
              setIsOpen(false);
              onEnter && onEnter();
            }
          },
        })}
        type="text"
        placeholder={placeholder}
      />
      <img src={icons.search} alt="search" />
      <div className={styles.floater}>
        <FloatingPortal>
          {isOpen && (
            <FloatingFocusManager
              context={context}
              initialFocus={-1}
              visuallyHiddenDismiss
            >
              <div
                className={clsx([
                  styles.floatWrapper,
                  {
                    [floaterWrapperClassName]: floaterWrapperClassName,
                  },
                ])}
                {...getFloatingProps({
                  ref: refs.setFloating,
                  style: {
                    ...floatingStyles,
                  },
                })}
              >
                {floaterWrapperTitle && (
                  <h3 className={styles.floaterTitle}>{floaterWrapperTitle}</h3>
                )}
                {items.map((item, index) => (
                  <ItemWrapper
                    key={index}
                    {...getItemProps({
                      ref(node) {
                        listRef.current[index] = node;
                      },
                      onClick() {
                        setInputValue(comparativeData(item));
                        setIsOpen(false);
                        refs.domReference.current?.focus();
                        onEnter && onEnter();
                      },
                    })}
                    active={activeIndex === index}
                  >
                    {renderItem && renderItem(item, activeIndex === index)}
                  </ItemWrapper>
                ))}
              </div>
            </FloatingFocusManager>
          )}
        </FloatingPortal>
      </div>
    </div>
  );
}

export default SearchBar;
