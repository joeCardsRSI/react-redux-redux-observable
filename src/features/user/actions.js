// action creators
export const fetchUser = username => ({ type: 'users/fetchUser', payload: username });
export const fetchUserFulfilled = payload => ({ type: 'users/fetchUserFulfilled', payload });