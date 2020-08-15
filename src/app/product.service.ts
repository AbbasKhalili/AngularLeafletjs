import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: HttpClientService
  ) { }

  getAll(): Observable<Product[]> {
    return this._http
      .get<Product[]>({ url: 'https://example-api/products', cacheMins: 5 })
  }
}

export class Product {
  name: string
  description: string
  price: number
  available: boolean
}
