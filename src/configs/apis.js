const apis = {
  products: {
    root: '/products',
    fruit: '/products/fruits',
    vegetables: '/products/vegetables',
    herbs_aromatics: '/products/herbs-aromatics',
    frozens: '/products/frozens',
    meats_seafoods: '/products/meats-seafoods',
    dairy_eggs: '/products/dairy-eggs',
    detail: (slug) => `/products/detail/${slug}`,
    category: (category) => `/products/${category}`,
  },
  users: {
    login: '/user/login',
    register: '/user/register',
    forgotPassword: '/user/forgot-password',
    resetPassword: '',
    changePassword: '',
    updateProfile: '',
    updateProfileImage: '',
    updateProfilePassword: '',
    updateProfileEmail: '',
  },
};

export default apis;
