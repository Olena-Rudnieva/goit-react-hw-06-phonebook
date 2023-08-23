import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, filterReducer } from './reduser';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
