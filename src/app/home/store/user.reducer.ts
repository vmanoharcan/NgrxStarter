import {Action, createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {User} from "../../utils/user";
import * as HomeActions from './user.actions';

export const USER_FEATURE_KEY = 'users';

export interface UserState extends EntityState<User> {}

export const userAdapter = createEntityAdapter<User>();

export const initialState: UserState = userAdapter.getInitialState({});

export const reducer = createReducer(
    initialState,

    // on(HomeActions., (state, {}) =>
    //     //
    // ),
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
