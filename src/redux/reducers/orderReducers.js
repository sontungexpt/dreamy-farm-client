const initialState = {
  products: [
    {
      id: 1,
      name: '',
      count: 0,
      price: 0,
      image: '',
    },
  ],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload,
        ),
      };
    default:
      console.log('action not found');
      return state;
  }
};

export default orderReducer;
