import { login, logout } from "../slices/users";
import contactInitialState from "../data/contacts";

let contactsReducer = {
  // case reducer: contacts/add
  add: (state, action) => {
    state.push(action.payload);
  },

  // case reducer: contacts/remove
  remove: (state, action) => {
    let index = state.findIndex((contact) => contact.id === action.payload);
    state.splice(index, 1);
  },

  // case reducer: contacts/update
  update: (state, action) => {
    let index = state.findIndex((contact) => contact.id === action.payload.id);
    state[index].firstName = action.payload.firstName;
    state[index].lastName = action.payload.lastName;
    state[index].email = action.payload.email;
    state[index].phone = action.payload.phone;
  },

  //
};

export const contactsExtraReducer = {
  // users/login
  [login.type]: (state, action) => {
    return contactInitialState;
  },

  // users/logout
  [logout.type]: () => {
    return [];
  },
};

export default contactsReducer;
