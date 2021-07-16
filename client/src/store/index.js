import {configureStore} from '@reduxjs/toolkit';
import tickersReducer from './tickers';

export default configureStore({
  reducer: {
    tickers: tickersReducer
  }
})