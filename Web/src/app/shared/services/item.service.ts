import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PaginatedResponse } from "../model/paginated-response";
import { Item } from "../model/item";

@Injectable({
    providedIn: "root"
})
export class ItemService {

    constructor(private httpClient: HttpClient) { }

    getItems(warehouseId: number, pageNumber: number = 1) {
        var params = new HttpParams().set("pageNumber", pageNumber);
        return this.httpClient.get<PaginatedResponse<Item>>(`api/Item/getAll/${warehouseId}`, { params });
    }

    getItemById(id: number) {
        return this.httpClient.get<Item>(`api/Item/getById/${id}`);
    }


    create(item: Item) {
        return this.httpClient.post('api/Item/create', item);
    }

    update(item: Item) {
        return this.httpClient.put('api/Item/update', item)
    }
}