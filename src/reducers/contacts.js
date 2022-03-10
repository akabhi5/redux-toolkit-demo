import {
  createContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
  updateContactThunk,
} from "../thunks/contacts";

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
  // contacts/fetch/pending
  [fetchContactsThunk.pending]: (state, action) => {
    state.data = [];
    state.status = action.meta.requestStatus; //pending
    state.error = {};
  },

  // contacts/fetch/fulfilled
  [fetchContactsThunk.fulfilled]: (state, action) => {
    state.data = action.payload;
    state.status = action.meta.requestStatus; //fulfilled
    state.error = {};
  },

  // contacts/fetch/rejected
  [fetchContactsThunk.rejected]: (state, action) => {
    state.data = [];
    state.status = action.meta.requestStatus; //rejected
    state.error = action.error;
  },

  // contacts/create/pending
  [createContactThunk.pending]: (state, action) => {
    state.status = action.meta.requestStatus; //pending
    state.error = {};
  },

  // contacts/create/fullfiled
  [createContactThunk.fulfilled]: (state, action) => {
    state.data.push(action.payload.newContact);
    state.status = action.meta.requestStatus; //fullfiled
    state.error = {};
  },

  // contacts/create/rejected
  [createContactThunk.rejected]: (state, action) => {
    state.status = action.meta.requestStatus; //rejected
    state.error = action.error;
  },

  // contacts/update/pending
  [updateContactThunk.pending]: (state, action) => {
    state.status = action.meta.requestStatus; //pending
    state.error = {};
  },

  // contacts/update/fullfiled
  [updateContactThunk.fulfilled]: (state, action) => {
    const index = state.data.findIndex(
      (contact) => contact.id === action.payload.id
    );
    state.data[index].firstName = action.payload.firstName;
    state.data[index].lastName = action.payload.lastName;
    state.data[index].email = action.payload.email;
    state.data[index].phone = action.payload.phone;
    state.status = action.meta.requestStatus; //fullfiled
    state.error = {};
  },

  // contacts/update/rejected
  [updateContactThunk.rejected]: (state, action) => {
    state.status = action.meta.requestStatus; //rejected
    state.error = action.error;
  },

  // contacts/remove/pending
  [deleteContactThunk.pending]: (state, action) => {
    state.status = action.meta.requestStatus; //pending
    state.error = {};
  },

  // contacts/remove/fullfiled
  [deleteContactThunk.fulfilled]: (state, action) => {
    const index = state.data.findIndex(
      (contact) => contact.id === action.payload
    );
    state.data.splice(index, 1);
    state.status = action.meta.requestStatus; //fullfiled
    state.error = {};
  },

  // contacts/remove/rejected
  [deleteContactThunk.rejected]: (state, action) => {
    state.status = action.meta.requestStatus; //rejected
    state.error = action.error;
  },
};

/* working to with extra reducer to execute something simultaneously
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
*/

export default contactsReducer;
