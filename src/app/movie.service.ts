import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get(payload = '') {
    const path = payload
      ? `/movie/${payload}`
      : '/movie/popular';

    return this.http.get(`${this.accessPointUrl}${path}?api_key=${this.apiKey}`, {headers: this.headers});
  }

  public search(payload) {
    const path = `/search/movie?query=${payload}`;

    return this.http.get(`${this.accessPointUrl}${path}&api_key=${this.apiKey}`, {headers: this.headers});
  }
}
