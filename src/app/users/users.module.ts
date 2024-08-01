import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UsersComponent} from "./users.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
        UsersComponent
    ],
    exports: [
        UsersComponent
    ]
})
export class UsersModule {
}
