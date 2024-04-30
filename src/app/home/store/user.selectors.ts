import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_FEATURE_KEY, UserState, userAdapter } from './user.reducer';

export const selectHomeState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

const { selectAll, selectEntities } = userAdapter.getSelectors();

export const selectAllUsers = createSelector(selectHomeState, (state: UserState) => selectAll(state));
