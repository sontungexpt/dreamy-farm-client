//libraries
import { clsx } from 'clsx';
import { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from '~/apiServices/productServices';
import { useDispatch } from 'react-redux';
import { addProduct, calcTotalPrice } from '~/redux/slices/orderSlice';

//configs
import styles from './ProductDetail.module.scss';

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
import Trans from '~/components/Trans';

function ProductDetail() {
  const [product, setProduct] = useState();
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const counterRef = useRef();
  const typeRef = useRef();

  useEffect(() => {
    const handleGetProductDetail = async () => {
      const productRes = await getProduct(slug);
      if (productRes) {
        setProduct(productRes);
      } else {
        navigate('/e404', { replace: true });
      }
    };
    handleGetProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const handleAdd = () => {
    dispatch(
      addProduct({
        id: product.slug,
        name: product.name,
        image: product.image,
        type: typeRef.current.activeItem,
        count: counterRef.current.value,
      }),
    );
    dispatch(calcTotalPrice());
  };

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
                ref={typeRef}
                className={styles.type}
                itemClassName={styles.typeButton}
                itemActiveClassName={styles.active}
                data={product.types}
                renderItem={(item) => item.name}
              />

              <Counter ref={counterRef} className={styles.quantity} />

              <Button onClick={handleAdd} primary className={styles.addBtn}>
                <Trans>Add to cart</Trans>
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <h3>
            <Trans>Description</Trans>
          </h3>
          <p>{product.description || <Trans>No description</Trans>}</p>
        </div>
      </div>
    )
  );
}

export default ProductDetail;
