import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { getString } from "tns-core-modules/application-settings";


@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private serverUrl = "https://apiprofjocampo.herokuapp.com/";

  private raspberryUrl = "https://unentered-caterpillar-1315.dataplicity.io/";

  constructor(private http: HttpClient) { }

  getRfid() {
    let headers = new HttpHeaders(
      {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + getString("token")
      });
    return this.http.get(this.serverUrl + "api/rfid", { headers: headers });
  }
  
  addRfid(data :any) {
    let headers = new HttpHeaders(
      {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + getString("token")
      });
    return this.http.post(this.serverUrl + "api/rfid", data, { headers: headers });
  }

  readRfid() {
    let headers = new HttpHeaders(
      {
        "Content-Type": "application/json"
      });

    return this.http.get(this.raspberryUrl + "rfid/", { headers: headers });
  }

  writeRfid(data: any) {
    let headers = new HttpHeaders(
      {
        "Content-Type": "application/json"
      });

    return this.http.post(this.raspberryUrl + "rfid/", data, { headers: headers });
  }

}