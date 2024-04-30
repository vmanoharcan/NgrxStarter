import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import * as UserActions from './user.actions';
import {UserService} from "./user.service";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private homeService: UserService
  ) {}

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadUsers),
            concatMap(() => {
                return this.homeService.getUsers().pipe(
                    map(users => UserActions.loadUsersSuccess({ users })),
                    catchError(() => of({ type: 'Error Loading Users' }))
                );
            }),
        ),
    );
}
