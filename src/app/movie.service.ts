import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get(payload = '') {
    const path = payload
      ? `/${payload}`
      : '';

    return this.http.get(`${this.accessPointUrl}${path}`, {headers: this.headers});
  }
}
