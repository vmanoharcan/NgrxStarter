import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadUsers, loadUsersSuccess, saveUserFailure, saveUserRow, saveUserSuccess } from "./users.action";
import { catchError, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { UsersService } from "../services/users.service";
import { User, UserRow } from "../users/users.interface";
import { Store, select } from "@ngrx/store";
import { selectAllUsers } from "./users.selectors";

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    switchMap(() => this.usersService.getUsers()
      .pipe(
        map(users => loadUsersSuccess({ users }))
      ))
  ));

  saveRow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveUserRow),
      withLatestFrom(this.store.pipe(select(selectAllUsers))),
      switchMap(([action, rows]) => {
        const user = rows.map(
          ({ isEditingEnabled, ...user }) => user)
          .find(row => row.id === action.userId) as User

        return this.usersService.saveUser(user).pipe(
          map(() => saveUserSuccess({ user })),
          catchError(error => of(saveUserFailure()))
        );
      })
    )
  );

  showSaveUserSuccessAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveUserSuccess),
      tap(() => {
        alert('User saved successfully!');
      })
    ), { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private store: Store
  ) { }
}