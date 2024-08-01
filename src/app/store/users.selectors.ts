import { createSelector, createFeatureSelector } from "@ngrx/store";
import { UsersState } from "./users.reducer";

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectAllUsers = createSelector(
    selectUsersState,
    (state: UsersState) => state.userRows
)