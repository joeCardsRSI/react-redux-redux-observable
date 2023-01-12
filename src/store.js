import { composeWithDevTools } from 'redux-devtools-extension';
import { 
  createStore, 
  applyMiddleware, 
} from 'redux';

import { createEpicMiddleware } from 'redux-observable';

import { rootReducer, rootEpic } from './reducer';
import { loggerMiddleware, delayedMessageMiddleware } from './exampleAddons/middleware';

const epicMiddleware = createEpicMiddleware();

const composedEnhancer = composeWithDevTools(
  applyMiddleware(loggerMiddleware, delayedMessageMiddleware, epicMiddleware)
);

export default function configureStore() {
  const store = createStore(rootReducer, composedEnhancer);

  epicMiddleware.run(rootEpic);
  return store;
};
