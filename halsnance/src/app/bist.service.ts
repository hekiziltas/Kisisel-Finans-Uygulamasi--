import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BistService {

  private apiKey = 'apikey 4z8Vr0uN044mjgh9X8utJa:7JfDd9cCYjDQst2Xxvopgv';
  private apiUrl = 'https://api.collectapi.com/economy/hisseSenedi';

  constructor(private httpClient: HttpClient) { }

  HisseleriTopla(): Observable<any> {
    const headers = new HttpHeaders().set('authorization', this.apiKey).set('content-type', 'application/json');
    return this.httpClient.get<any>(this.apiUrl, { headers });
  }
}
