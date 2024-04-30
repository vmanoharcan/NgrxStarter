import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import * as fromHome from './store/user.reducer';
import {UserEffects} from "./store/user.effects";
import {HttpClientModule} from "@angular/common/http";
import {UserFacade} from "./store/user.facade";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature(fromHome.USER_FEATURE_KEY, fromHome.userReducer),
        EffectsModule.forFeature([UserEffects]),
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    providers: [
      UserFacade
    ]
})
export class HomeModule {
}
