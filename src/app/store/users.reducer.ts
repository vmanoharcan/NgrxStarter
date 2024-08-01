import { createReducer, on } from "@ngrx/store";
import {User, UserRow} from '../users/users.interface';
import { state } from "@angular/animations";
import { loadUsersSuccess, saveUserFailure, saveUserRow, toggleEdit, updateUserRow } from "./users.action";

export interface UsersState {
    userRows: UserRow[];
}

export const initialState: UsersState = {
    userRows:[]
}

export const usersReducer = createReducer(
    initialState,
    on(loadUsersSuccess, (state, {users}) => ({
        ...state, 
        userRows: users.map(user =>({...user, isEditingEnabled:false}) )
    })),
    on(toggleEdit, (state, { index }) => ({
        ...state,
        userRows: state.userRows.map((userRow, i) => 
          i === index ? { ...userRow, isEditingEnabled: !userRow.isEditingEnabled } : userRow
        )
    })),
    on(updateUserRow, (state, { updatedUserRow }) => ({
        ...state,
        userRows: state.userRows.map((userRow) => 
        userRow.id === updatedUserRow.id ? { ...userRow, ...updatedUserRow} : userRow
        )
    }))
)