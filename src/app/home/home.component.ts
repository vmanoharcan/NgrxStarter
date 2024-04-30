import {Component, inject, OnInit} from "@angular/core";
import {UserFacade} from "./store/user.facade";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [``]
})
export class HomeComponent implements OnInit{

  private homeFacade = inject(UserFacade);

  users$ = this.homeFacade.allUsers$;

  ngOnInit() {
    this.homeFacade.loadUsers();
  }
}
