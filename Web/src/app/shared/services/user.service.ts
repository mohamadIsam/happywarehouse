import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../model/user";
import { PaginatedResponse } from "../model/paginated-response";

@Injectable({
    providedIn: "root"
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

    getUsers(pageNumber: number) {
        var params = new HttpParams().set('pageNumber', pageNumber)
        return this.httpClient.get<PaginatedResponse<User>>('api/User/getAll', { params });
    }

    getUserById(id: number) {
        return this.httpClient.get<User>(`api/User/getById/${id}`);
    }

    update(user: User) {
        return this.httpClient.put('api/User/update', user)
    }

    create(user: User) {
        return this.httpClient.post('api/User/create', user)
    }

    delete(id: number) {
        return this.httpClient.delete(`api/User/delete/${id}`)
    }
}