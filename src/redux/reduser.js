import { contactInitialState, filterInitialState } from './initialState';
import { addContact, addFilter } from './actions';

export const contactReducer = (state = contactInitialState, action) => {
  switch (action.type) {
    case addContact.type:
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case addFilter.type:
      return action.payload;
    default:
      return state;
  }
};
