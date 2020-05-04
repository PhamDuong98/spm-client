import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private productUrl = environment.apiUrl + '/products/';

  constructor(
    private http: HttpClient
  ) { }

  getAllProduct() {
    return this.http.get(this.productUrl + 'list-product');
  }
}
