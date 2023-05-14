const configs = {
  itemsPerPage: 12,
  categories: [
    {
      title: 'Fruits',
      api: '/fruits',
    },
    {
      title: 'Vegetables',
      api: '/vegetables',
    },
    {
      title: 'Herbs & Aromatics',
      api: '/herbs-aromatics',
    },
    {
      title: 'Frozen',
      api: '/frozen',
    },
    {
      title: 'Meat & Seafood',
      api: '/meat-seafood',
    },
    {
      title: 'Dairy & Eggs',
      api: '/dairy-eggs',
    },
  ],
  priceRanges: ['100 gram', '300 gram', '1 kilogram'],
};

export default configs;
