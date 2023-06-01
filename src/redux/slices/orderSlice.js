import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import i18next from 'i18next';

export const counterSlice = createSlice({
  name: 'order',
  initialState: {
    // products in cart (if same type, count++)
    // one product has one type
    products: [],
    totalPrice: 0,
    count: 0,
    // products: [
    //  {
    //  id: 1,
    //  name: '',
    //  count: 0,
    //  type:{
    //    name: ''
    //    price: 0
    //  image: ""
    //  }
  },
  reducers: {
    addProduct: (state, action) => {
      const productAdd = action.payload;
      productAdd.count = productAdd.count || 1;

      // if exist, product count++
      const duplicateIndex = state.products.findIndex(
        (product) =>
          product.id === productAdd.id &&
          product.type.name === productAdd.type.name,
      );

      if (duplicateIndex !== -1) {
        state.products[duplicateIndex].count += productAdd.count;
      } else {
        state.products.push(productAdd);
      }

      state.count += productAdd.count;
      toast.success(i18next.t('Add to shopping cart successfully'));
    },

    removeProduct: (state, action) => {
      const { id, type } = action.payload;
      const duplicateIndex = state.products.findIndex(
        (product) => product.id === id && product.type.name === type.name,
      );
      if (duplicateIndex !== -1) {
        state.count -= state.products[duplicateIndex].count;
        state.products.splice(duplicateIndex, 1);
      }
    },

    calcTotalPrice: (state) => {
      const totalPrice = state.products.reduce(
        (accumulator, product) =>
          accumulator + parseFloat(product.type.price * product.count),
        0,
      );
      state.totalPrice = totalPrice;
    },

    increaseProductCount: (state, action) => {
      const { id, type } = action.payload;
      const duplicateIndex = state.products.findIndex(
        (product) => product.id === id && product.type.name === type.name,
      );
      if (duplicateIndex !== -1) {
        state.products[duplicateIndex].count++;
        state.count++;
      }
    },

    decreaseProductCount: (state, action) => {
      const { id, type } = action.payload;
      const duplicateIndex = state.products.findIndex(
        (product) => product.id === id && product.type.name === type.name,
      );
      if (duplicateIndex !== -1) {
        state.products[duplicateIndex].count--;
        if (state.products[duplicateIndex].count === 0) {
          // console.log('remove');
          state.products.splice(duplicateIndex, 1);
        }
        state.count--;
      }
    },
  },
});

export const {
  calcTotalPrice,
  addProduct,
  removeProduct,
  increaseProductCount,
  decreaseProductCount,
} = counterSlice.actions;
export default counterSlice.reducer;
