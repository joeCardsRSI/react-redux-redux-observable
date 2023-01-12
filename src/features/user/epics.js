import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { fetchUserFulfilled } from './actions';

// epic
export const fetchUserEpic = action$ => action$.pipe(
  ofType('user/fetchUser'),
  mergeMap(action => 
    ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
      map(response => fetchUserFulfilled(response))
    )
  )
);