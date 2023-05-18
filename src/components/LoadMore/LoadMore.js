import { useMemo, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './LoadMore.module.scss';

function LoadMore({
  className,
  renderSpacingClassName,
  controlClassName,
  loadMoreClassName,
  collapseClassName,

  autoHidden = true, // if true, the loadMoreLabel will be hidden when there is no more data to load
  canCollapse = false, //just work if autoHidden = false

  loadMoreLabel = 'Load More',
  collapseLabel = 'Collapse',

  data,
  renderItem,
  itemsPerPage = 3,
}) {
  const [pageOffset, setPageOffset] = useState(0);

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const displayItems = useMemo(() => {
    const itemsVisited = pageOffset * itemsPerPage;
    return data.slice(0, itemsVisited + itemsPerPage);
  }, [data, pageOffset, itemsPerPage]);

  const handleLoadMore = () => {
    setPageOffset(pageOffset + 1);
  };

  const handleCollapse = () => {
    setPageOffset(0);
  };

  return (
    <div
      className={clsx([
        styles.wrapper,
        {
          [className]: className,
        },
      ])}
    >
      <div
        className={clsx([
          styles.container,
          {
            [renderSpacingClassName]: renderSpacingClassName,
          },
        ])}
      >
        {displayItems.map((item, index) => renderItem(item, index))}
      </div>
      {(() => {
        if (pageCount === pageOffset) {
          if (autoHidden) {
            return;
          }
          if (canCollapse) {
            return (
              <p
                className={clsx([
                  {
                    [controlClassName]: controlClassName,
                  },
                  {
                    [collapseClassName]: collapseClassName,
                  },
                ])}
                onClick={handleCollapse}
              >
                {collapseLabel}
              </p>
            );
          }
        }
        return (
          <p
            className={clsx([
              {
                [controlClassName]: controlClassName,
              },
              {
                [loadMoreClassName]: loadMoreClassName,
              },
            ])}
            onClick={handleLoadMore}
          >
            {loadMoreLabel}
          </p>
        );
      })()}
    </div>
  );
}

LoadMore.propTypes = {
  className: PropTypes.string,
  renderSpacingClassName: PropTypes.string,
  loadMoreClassName: PropTypes.string,
  collapseClassName: PropTypes.string,

  autoHidden: PropTypes.bool, // if true, the loadMoreLabel will be hidden when there is no more data to load
  canCollapse: PropTypes.bool, //just work if autoHidden = false

  collapseLabel: PropTypes.node,
  loadMoreLabel: PropTypes.node,

  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number,
};

export default LoadMore;
