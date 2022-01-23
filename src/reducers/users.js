const usersReducers = {
  login: (state, action) => {
    state.isLoggedIn = true;
    state.currentUser = action.payload;
  },

  logout: (state, action) => {
    state.isLoggedIn = false;
    state.currentUser = null;
  },
};

export default usersReducers;
