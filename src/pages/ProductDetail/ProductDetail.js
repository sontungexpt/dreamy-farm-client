//libraries
import { clsx } from 'clsx';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';

//configs
import styles from './ProductDetail.module.scss';
import { productsPageConfigs as configs } from '~/configs/pages';

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

function ProductDetail({ image, price, description }) {
  const { id } = useParams();
  const counterRef = useRef();
  const selectedPriceRangeRef = useRef();

  return (
    <div className={clsx(['grid', 'wide', styles.wrapper])}>
      <div className="row">
        <Image
          className={clsx(['col', 'l-5', 'm-5', 'c-12', styles.image])}
          src={image}
          alt="Image Item"
        />
        <div className={clsx(['col', 'l-7', 'm-7', 'c-12', styles.container])}>
          <div>
            <div className={styles.header}>
              <h3 className={styles.name}>{id}</h3>
              <ToggleIcon
                className={styles.favorite}
                clickIcon={<FilledHeartIcon />}
                unClickIcon={<EmptyHeartIcon />}
              />
            </div>
            <p className={styles.price}>{price} đ</p>
          </div>

          <Selector
            ref={selectedPriceRangeRef}
            className={styles.type}
            itemClassName={styles.typeButton}
            itemActiveClassName={styles.active}
            data={configs.priceRanges}
            renderItem={(item) => item}
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
            Add to cart
          </Button>
        </div>
      </div>
      <div className={styles.description}>
        <h3>Description</h3>
        <p>
          {description ||
            'Beli aneka produk di Toko YouReady secara online sekarang. Kamu bisa beli produk dari Toko YouReady dengan aman & mudah dari Kota Bandung. Ingin belanja lebih hemat & terjangkau di Toko YouReady? Kamu bisa gunakan fitur Cicilan 0% dari berbagai bank dan fitur Bebas Ongkir di Toko YouReady sehingga kamu bisa belanja online dengan nyaman di Tokopedia. Beli aneka produk terbaru di Toko YouReady dengan mudah dari genggaman tangan kamu menggunakan Aplikasi Tokopedia. Cek terus juga Toko YouReady untuk update Produk, Kode Voucher hingga Promo Terbaru dari Toko YouReady Terbaru secara online di Tokopedia'}
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
