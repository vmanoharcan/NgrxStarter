import {Component, inject, OnInit} from "@angular/core";
import {UserFacade} from "./store/user.facade";
import { NonNullableFormBuilder } from "@angular/forms";
import { filter, tap } from "rxjs";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [``]
})
export class HomeComponent implements OnInit{

  private homeFacade = inject(UserFacade);
  private formBuilder = inject(NonNullableFormBuilder);

  ngOnInit() {
    
  }
}
