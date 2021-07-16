import {createSlice} from '@reduxjs/toolkit';
import { startConnection, stopConnection } from './api';

export const slice = createSlice({
  name: 'tickers',
  initialState: {
    isLoading: false,
    data: [],
    error: null,
    interval: 5000,
  },
  reducers: {
    fetchTickers: state => ({
      ...state,
      isLoading: true,
    }),
    fetchTickersResolve: (state,action) => ({
      ...state,
      isLoading: false,
      data: action.payload,
    }),
    fetchTickersReject: (state,action) => ({
      ...state,
      isLoading: false,
      data: [],
      error: action.payload,
    }),
    setTickersInterval: (state,action) => ({
      ...state,
      interval: action.payload,
    }),
  }
});

export const {fetchTickers,fetchTickersResolve,fetchTickersReject,setTickersInterval} = slice.actions;

export const selectTickersLoading = state => state.tickers.isLoading;
export const selectTickersData = state => state.tickers.data;
export const selectTickersInterval = state => state.tickers.interval;

export const startTickers = () => (dispatch,getState) => {
  dispatch(fetchTickers());
  startConnection((err,quotes)=>{
    if(err) {
      dispatch(fetchTickersReject(err));
    }
    dispatch(fetchTickersResolve(quotes));
  },getState().tickers.interval);
}

export const stopTickers = () => () => {
  stopConnection();
}

export const updateTickers = (interval) => (dispatch) => {
  dispatch(setTickersInterval(interval));
  dispatch(startTickers());
}

export default slice.reducer;