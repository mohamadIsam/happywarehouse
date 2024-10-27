import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Lookup } from "../model/lookup";

@Injectable({
    providedIn: "root"
})
export class LookupService {

    constructor(private httpClient: HttpClient) { }

    getCountries() {
        return this.httpClient.get<Lookup[]>('api/Lookups/getCountries');
    }

    getRoles() {
        return this.httpClient.get<Lookup[]>(`api/Lookups/getRoles`);
    }
}