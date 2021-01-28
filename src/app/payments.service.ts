import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Card } from './models/card.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  _url = 'http://localhost:3000/payments'
  constructor(private _http: HttpClient) { }

  payment(user: Card) {
    return this._http.post<any>(this._url, user)
  }
}
