import {createAction, props} from '@ngrx/store';
import {User} from "../../utils/user";

export const loadUsers = createAction('[Home] Load Users');
export const loadUsersSuccess = createAction('[Home] Load Users Success', props<{ users: User[] }>());
