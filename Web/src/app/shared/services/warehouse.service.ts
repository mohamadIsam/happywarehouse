import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PaginatedResponse } from "../model/paginated-response";
import { Warehouse } from "../model/warehouse";

@Injectable({
    providedIn: "root"
})
export class WarehouseService {

    constructor(private httpClient: HttpClient) { }

    getWarehouses(pageNumber: number = 1) {
        var params = new HttpParams().set("pageNumber", pageNumber);
        return this.httpClient.get<PaginatedResponse<Warehouse>>('api/Warehouse/getAll', { params });
    }

    getWarehouseById(id: number) {
        return this.httpClient.get<Warehouse>(`api/Warehouse/getById/${id}`);
    }


    create(warehouse: Warehouse) {
        return this.httpClient.post('api/Warehouse/create', warehouse);
    }

    update(warehouse: Warehouse) {
        return this.httpClient.put('api/Warehouse/update', warehouse)
    }
}