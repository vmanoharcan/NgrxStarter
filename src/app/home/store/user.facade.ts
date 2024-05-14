import {inject, Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import * as UserSelectors from './user.selectors';
import * as UserActions from './user.actions';

@Injectable()
export class UserFacade {
    private readonly store = inject(Store);

    /**
     * Combine pieces of state using createSelector,
     * and expose them as observables through the facade.
     */
    // x$ = this.store.pipe(select(UserSelectors.x));

    /**
     * Use the initialization action to perform one
     * or more tasks in your Effects.
     */

    // x() {
    //     this.store.dispatch(UserActions.x);
    // }
}
