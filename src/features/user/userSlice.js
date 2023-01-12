const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'users/fetchUserFulfilled':
      return {
        ...state,
        // `login` is the username
        [action.payload.login]: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;