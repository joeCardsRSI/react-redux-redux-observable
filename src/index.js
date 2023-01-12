import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './App'
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
  
  
/*
  console.log('Initial state:', store.getState());
  // Everytime the state chages, log it
  // Note that subscribe() returns a function for unregistering the listener
  const unsubscribe = store.subscribe(() => console.log('State after dispatch: ', store.getState()));

  // Dispatch some actions
  store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
  store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' });
  store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' });

  store.dispatch({ type: 'todos/todoToggled', payload: 0 });
  store.dispatch({ type: 'todos/todoToggled', payload: 1 });

  store.dispatch({ 
    type: 'filters/statusFilterChanged', 
    payload: {
      color: 'red',
      changeType: 'added'
    } });

  // Stop listening to state updates
  unsubscribe();

  // dispatch one more action to see what happens; wont happen because unsubscribe() has been called
  store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' });
*/