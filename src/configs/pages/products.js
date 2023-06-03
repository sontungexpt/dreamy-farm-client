import { apis } from '~/configs';
import jpgImages from '~/assets/images/jpgs';

const configs = {
  itemsPerPage: 12,
  categories: [
    {
      title: 'Fruits',
      api: apis.products.fruit,
      category: 'fruit',
      img: jpgImages.farmFruit,
    },
    {
      title: 'Vegetables',
      api: apis.products.vegetables,
      category: 'vegetable',
      img: jpgImages.farmVegetable,
    },
    {
      title: 'Herbs & Aromatics',
      api: apis.products.herbs_aromatics,
      category: 'herb_aromatic',
      img: jpgImages.farmHerb,
    },
    {
      title: 'Frozen',
      api: apis.products.frozens,
      category: 'frozen',
      img: jpgImages.farmFrozen,
    },
    {
      title: 'Meat & Seafood',
      api: apis.products.meats_seafoods,
      category: 'meat_seafood',
      img: jpgImages.farmMeat,
    },
    {
      title: 'Dairy & Eggs',
      api: apis.products.dairy_eggs,
      category: 'dairy_egg',
      img: jpgImages.farmDairy,
    },
  ],
  priceRanges: ['100 gram', '300 gram', '1 kilo'],
};

export default configs;
