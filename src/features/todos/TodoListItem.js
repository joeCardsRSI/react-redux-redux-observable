import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const selectTodoById = (state, todoId) => {
  return state.todos.find(todo => todo.id === todoId);
};

const TodoListItem = ({ id }) => {

  // Call our `selectTodoById` function with the state and id value
  // useSelector() gives access to the store's state
  const todo = useSelector(state => selectTodoById(state, id));
  const { text, completed } = todo;
  const dispatch = useDispatch();

  const handleCompletedChanged = () => {
    dispatch({ type: 'todos/todoToggled', payload: todo.id});
  };

  return (
    <li>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={handleCompletedChanged}
        />
        <div className="todo-text">{text}</div>
      </div>
    </li>
  );
};

export default TodoListItem;

/*
React components interact with a Redux store, including calling useSelector to read Redux state, calling useDispatch to give us access to the dispatch function, and wrapping our app in a <Provider> component to give those hooks access to the store.
*/