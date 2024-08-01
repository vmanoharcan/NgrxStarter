import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User, UserRow } from "../users/users.interface";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';
    constructor(private httpClient: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.apiUrl)
    }

    saveUser(user: User): Observable<User>  {
        return this.httpClient.patch<User>(`${this.apiUrl}/${user.id}`, user);
    }
}