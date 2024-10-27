import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class LogService {

    constructor(private httpClient: HttpClient) { }

    loadLog() {
        return this.httpClient.get('api/Log');
    }

    loadFiles() {
        return this.httpClient.get<any[]>('api/Log/files');
    }
}