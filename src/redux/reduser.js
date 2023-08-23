// import { createReducer } from '@reduxjs/toolkit';
// import { initialState } from './initialState';
// import { case1, case2 } from './actions';

// export const rootReducer = createReducer(initialState, {
//   [case1]: (state, action) => ({
//     ...state,
//     key: state,
//   }),
//   [case2]: (state, action) => ({
//     ...state,
//     key: state,
//   }),
// });

import { contactInitialState, filterInitialState } from './initialState';

// export const contactReducer = ((state = contactInitialState), action) => {
//     switch (action.type) {
//         case "contacts/addContact":
//             return [...state, action.payload];
//         case "contacts/deleteContact":
//             return state.filter(contact => contact.id !== action.payload);
//         default:
//             return state;
//     }
// }

export const contactReducer = () => {};

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case "filter/addFilter":
//             return action.payload;
//     };
//     default:
//             return state;
//   }
// };

export const filterReducer = () => {};
