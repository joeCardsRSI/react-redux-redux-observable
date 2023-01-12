import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { fetchUserEpic } from './features/user/epics';

import todosReducer from './features/todos/todosSlice';
import filtersReducer from './features/filters/filtersSlice';
import userReducer from './features/user/userSlice';

export const rootEpic = combineEpics(fetchUserEpic);

export const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer,
    user: userReducer,
});
