export const print1 = (storeAPI) => (next) => (action) => {
  console.log('1')
  return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
  console.log('2')
  return next(action)
}

export const print3 = (storeAPI) => (next) => (action) => {
  console.log('3')
  return next(action)
}

export const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching: ', action);

  let result = next(action);
  console.log('result: ', result);
  console.log('next state: ', storeAPI.getState());

  return result;
}

export const delayedMessageMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/todoAdded') {
    setTimeout(() => {
      console.log('ADDED A NEW TODO: ', action.payload);
    }, 2500);
  }

  return next(action)
};