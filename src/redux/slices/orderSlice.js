import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import i18next from 'i18next';

export const counterSlice = createSlice({
  name: 'order',
  initialState: {
    products: [],
    totalPrice: 0,
    count: 0,
    // products: [
    //  {
    //  id: 1,
    //  name: '',
    //  count: 0,
    //  price: 0 // unhanded
    //  type: '',
    //  }
  },
  reducers: {
    addProduct: (state, action) => {
      const productAdd = action.payload;
      productAdd.count = productAdd.count || 1;

      // if exist, product count++
      const duplicateIndex = state.products.findIndex(
        (product) =>
          product.id === productAdd.id && product.type === productAdd.type,
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
      const productRemove = action.payload;

      // if exist, product count--
      // if count === 0, remove product
      const duplicateIndex = state.products.findIndex(
        (product) => product.id === productRemove.id,
      );
      if (duplicateIndex !== -1) {
        state.products[duplicateIndex].count--;
        if (state.products[duplicateIndex].count === 0) {
          state.products.splice(duplicateIndex, 1);
        }
      }
    },
    calcTotalPrice: (state) => {
      const totalPrice = state.products.reduce(
        (accumulator, product) =>
          accumulator + parseFloat(product.price * product.count),
        0,
      );
      state.totalPrice = totalPrice;
    },
    increaseProductCount: (state, action) => {
      const { id, type } = action.payload;
      const duplicateIndex = state.products.findIndex(
        (product) => product.id === id && product.type === type,
      );
      if (duplicateIndex !== -1) {
        state.products[duplicateIndex].count++;
      }
      state.count++;
    },
    decreaseProductCount: (state, action) => {
      const { id, type } = action.payload;
      const duplicateIndex = state.products.findIndex(
        (product) => product.id === id && product.type === type,
      );
      if (duplicateIndex !== -1) {
        state.products[duplicateIndex].count--;
        if (state.products[duplicateIndex].count === 0) {
          state.products.splice(duplicateIndex, 1);
        }
      }
      state.count--;
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
