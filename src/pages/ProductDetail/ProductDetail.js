//libraries
import { clsx } from 'clsx';
import { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

//configs
import styles from './ProductDetail.module.scss';
import { apiConfigs } from '~/configs';

//components
import Counter from '~/components/Counter';
import Button from '~/components/Button';
import Image from '~/components/Image';
import ToggleIcon from '~/components/ToggleIcon';
import {
  FilledHeart as FilledHeartIcon,
  EmptyHeart as EmptyHeartIcon,
} from '~/assets/images/icons/SvgIcons';
import Selector from '~/components/Selector';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { t } = useTranslation('translations');
  const navigate = useNavigate();

  const counterRef = useRef();
  const selectedPriceRangeRef = useRef();

  useEffect(() => {
    axios
      .get(apiConfigs.products.detail(id))
      .then((res) => {
        const { error } = res.data;
        if (error) return navigate('/e404', { replace: true });
        const { product: productRes } = res.data;
        setProduct(productRes);
      })
      .catch((err) => {
        console.log(err);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    product && (
      <div className={clsx(['grid', 'wide', styles.wrapper])}>
        <div className="row">
          <div className={clsx(['col', 'l-6', 'm-6', 'c-12', styles.col1])}>
            <div className={styles.imageFixed}>
              <Image
                className={styles.image}
                src={product.image}
                alt="Image Item"
              />
            </div>
          </div>
          <div className={clsx(['col', 'l-6', 'm-6', 'c-12'])}>
            <div className={styles.container}>
              <div>
                <div className={styles.header}>
                  <h3 className={styles.name}>{product.name}</h3>
                  <ToggleIcon
                    className={styles.favorite}
                    activeIcon={<FilledHeartIcon />}
                    unActiveIcon={<EmptyHeartIcon color="var(--red-color)" />}
                  />
                </div>
                <p className={styles.price}>{product.type[0].price} đ</p>
              </div>

              <Selector
                ref={selectedPriceRangeRef}
                className={styles.type}
                itemClassName={styles.typeButton}
                itemActiveClassName={styles.active}
                data={product.type}
                renderItem={(item) => item.name}
              />

              <Counter ref={counterRef} className={styles.quantity} />

              <Button
                onClick={() => {
                  console.log(counterRef.current.value);
                  console.log(selectedPriceRangeRef.current.activeIndex);
                }}
                primary
                className={styles.addBtn}
              >
                {t('Add to cart')}
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <h3>{t('Description')}</h3>
          <p>{product.description || ''}</p>
        </div>
      </div>
    )
  );
}

export default ProductDetail;
