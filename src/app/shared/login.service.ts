import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverUrl = "https://apiprofjocampo.herokuapp.com/";
  private token: string;

  constructor(private http: HttpClient) { }

  private crearRequestHeader() {
    let headers = new HttpHeaders({
      "Authorization": "Bearer " + this.token,
      "Content-Type": "application/json"
    });

    return headers;
  }

  autenticar(data: any) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.post(
      this.serverUrl + "api/usuarios/autenticar", data, { headers: headers });

  }

  // getHabitaciones() {
  //   this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZGU1YjE5YTlmODYxZDEyNjQwZTQxZjYiLCJpYXQiOjE1ODQ5MDkxNTcsImV4cCI6MTU4NDkxMDA1N30.wPpsBOg2BYbC8-cfJy5HU00VzbidaSY9kRt9iBQ3loU";
  //   let headers = this.crearRequestHeader();
  //   return this.http.get(this.serverUrl + "api/habitaciones", { headers });
  // }
}
