import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { getString } from "tns-core-modules/application-settings";


@Injectable({
  providedIn: 'root'
})
export class TipohabitacionService{
  private serverUrl = "https://apiprof1parroyave.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getTipoHabitacion() 
  {
    let headers = new HttpHeaders(
    {
      "Content-Type"  : "application/json",
      "Authorization" :  "Bearer "+ getString("token")
    });
    return this.http.get(this.serverUrl + "api/tipohabitaciones", {headers: headers });
    }
  
  }