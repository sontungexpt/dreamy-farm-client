import { apis } from '~/configs';

const configs = {
  itemsPerPage: 12,
  categories: [
    {
      title: 'Fruits',
      api: apis.products.fruit,
      category: 'fruit',
    },
    {
      title: 'Vegetables',
      api: apis.products.vegetables,
      category: 'vegetable',
    },
    {
      title: 'Herbs & Aromatics',
      api: apis.products.herbs_aromatics,
      category: 'herb_aromatic',
    },
    {
      title: 'Frozen',
      api: apis.products.frozens,
      category: 'frozen',
    },
    {
      title: 'Meat & Seafood',
      api: apis.products.meats_seafoods,
      category: 'meat_seafood',
    },
    {
      title: 'Dairy & Eggs',
      api: apis.products.dairy_eggs,
      category: 'dairy_egg',
    },
  ],
  priceRanges: ['100 gram', '300 gram', '1 kilo'],
};

export default configs;
