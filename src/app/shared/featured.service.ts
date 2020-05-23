import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})
export class FeaturedService {
    private serverUrl = "https://unentered-caterpillar-1315.dataplicity.io/";
    //   private token: string;

    constructor(private http: HttpClient) { }

    private crearRequestHeader() {
        let headers = new HttpHeaders({
            //   "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json"
        });

        return headers;
    }

    cambiarEstado(data: any, color:string) {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        console.log(this.serverUrl);
        console.log(data);

        return this.http.post(
            this.serverUrl + "led/" + color + "/", data, { headers: headers });
    }


}