import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

import styles from './Detail.module.scss';
import { routes as routeConfigs } from '~/configs';
import { productsPageConfigs as configs } from '~/configs/pages';

import Counter from '~/components/Counter';
import Button from '~/components/Button';
import ToggleIcon from '~/components/ToggleIcon';
import {
  FilledHeart as FilledHeartIcon,
  EmptyHeart as EmptyHeartIcon,
} from '~/assets/images/icons/SvgIcons';

function Detail({ id = 1, image, name, price, description }) {
  const [priceRangeSelected, setPriceRangeSelected] = useState(
    configs.priceRanges[0],
  );
  const counterRef = useRef();

  return (
    <div className={styles.wrapper}>
      <div className={clsx(['grid', styles.info])}>
        <div className="row">
          <img
            className={clsx(['col', 'l-5', 'm-5', 'c-12', styles.image])}
            src={
              image ||
              'data:image/jpeg;base64,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'
            }
            alt="illustration"
          />
          <div
            className={clsx(['col', 'l-7', 'm-7', 'c-12', styles.container])}
          >
            <div>
              <div className={styles.header}>
                <Link to={routeConfigs.moveProductDetail(id)}>
                  <h3 className={styles.name}>{name}</h3>
                </Link>
                <ToggleIcon
                  className={styles.favorite}
                  clickIcon={<FilledHeartIcon />}
                  unClickIcon={<EmptyHeartIcon />}
                />
              </div>
              <p className={styles.price}>{price} đ</p>
            </div>
            <div className={clsx([styles.type])}>
              {configs.priceRanges.map((priceRange) => (
                <Button
                  key={priceRange}
                  onClick={() => setPriceRangeSelected(priceRange)}
                  className={clsx([
                    styles.typeButton,
                    {
                      [styles.active]: priceRange === priceRangeSelected,
                    },
                  ])}
                >
                  {priceRange}
                </Button>
              ))}
            </div>
            <Counter ref={counterRef} className={styles.quantity} />
            <Button
              onClick={() => console.log(counterRef.current.value)}
              primary
              className={styles.addBtn}
            >
              Add to cart
            </Button>
          </div>
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

export default Detail;
