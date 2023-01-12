import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Header = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => setText(e.target.value);

  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim();
    // if user pressed 'enter' key
    if (e.which === 13 && trimmedText) {
      // dispatch the todoAddedd with this text
      dispatch({ type: 'todos/todoAdded', payload: trimmedText });
      // clear the text field
      setText('');
    }
  };

  return (
    <input 
      type="text"
      placeholder="What needs to be done?"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Header;