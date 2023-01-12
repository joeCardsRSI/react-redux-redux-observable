import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const selectUser = state => state.user;

const User = () => {
  const user = useSelector(selectUser);
  console.log('user: ', user);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'user/fetchUser', payload: 'jc-development' });
  }

  return (
    <div>
      <button
        onClick={handleClick}
        >
        Get User
      </button>
      <pre>{JSON.stringify(user['jc-development'], null, 2)}</pre>
    </div>
  )
};

export default User;