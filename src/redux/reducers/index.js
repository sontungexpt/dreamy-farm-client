import { combineReducers } from 'redux';

import orderReducer from './orderReducers';

const allReducers = combineReducers({
  order: orderReducer,
});

export default allReducers;
