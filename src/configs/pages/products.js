import { apiConfigs } from '~/configs';
const configs = {
  itemsPerPage: 12,
  categories: [
    {
      title: 'Fruits',
      api: apiConfigs.products.fruit,
      category: 'fruit',
    },
    {
      title: 'Vegetables',
      api: apiConfigs.products.vegetables,
      category: 'vegetable',
    },
    {
      title: 'Herbs & Aromatics',
      api: apiConfigs.products.herbs_aromatics,
      category: 'herb_aromatic',
    },
    {
      title: 'Frozen',
      api: apiConfigs.products.frozens,
      category: 'frozen',
    },
    {
      title: 'Meat & Seafood',
      api: apiConfigs.products.meats_seafoods,
      category: 'meat_seafood',
    },
    {
      title: 'Dairy & Eggs',
      api: apiConfigs.products.dairy_eggs,
      category: 'dairy_egg',
    },
  ],
  priceRanges: ['100 gram', '300 gram', '1 kilo'],
};

export default configs;
