import { createAction, props } from "@ngrx/store";
import {User, UserRow} from '../users/users.interface';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
    '[Users] Load Users Success',
    props<{ users: User[] }>()
);

export const toggleEdit = createAction(
    '[Users] Toggle Edit',
    props<{ index: number }>()
);

export const saveUserRow = createAction(
    '[Users] Save User Row',
    props<{ userId: string }>()
);

export const updateUserRow = createAction(
    '[Users] Save User Row Success',
    props<{updatedUserRow: UserRow}>()
);

export const saveUserFailure = createAction(
    '[User] Save User Failure'
);

export const saveUserSuccess = createAction(
    '[User] Save User Success',
    props<{ user: User }>()
);

