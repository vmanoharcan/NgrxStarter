import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from "@angular/core";
import { UsersService } from "../services/users.service";
import { Observable } from "rxjs";
import { User, UserRow } from "./users.interface";
import { UsersState } from "../store/users.reducer";
import { Store } from "@ngrx/store";
import { loadUsers, saveUserRow, toggleEdit, updateUserRow } from "../store/users.action";
import { selectAllUsers } from "../store/users.selectors";

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  users$: Observable<UserRow[]>;

  constructor(private usersService: UsersService, private store: Store<UsersState>) {
    this.users$ = this.store.select(selectAllUsers);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  updateRow(row: UserRow, columnName: string, event: any): void{
    const updatedUserRow = {
      ...row,
      [columnName]: event.target.value
    };
    
    this.store.dispatch(updateUserRow({ updatedUserRow }))
  }

  toggleEdit(index: number): void {
    this.store.dispatch(toggleEdit({ index }));
  }

  saveRow(userId: string): void {
    this.store.dispatch(saveUserRow({ userId }));
  }

  trackByFn(index: number, item: User): string {
    return item.id; 
  }
}
