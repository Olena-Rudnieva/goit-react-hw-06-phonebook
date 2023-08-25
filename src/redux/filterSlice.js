import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    addFilter: (state, action) => (state = action.payload),
  },
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
