import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private productUrl = environment.apiUrl + '/products/';

  constructor(
    private http: HttpClient
  ) { }

  getAllProduct(pageSize: number, pageIndex: number) {
    const params = new HttpParams()
      .set('pageSize', pageSize + '')
      .set('pageIndex', pageIndex + '');
    return this.http.get(this.productUrl + 'list-product', { params });
  }

  getProductByBarcode(barcode: string) {
    const params = new HttpParams()
      .set('barcode', barcode);
    return this.http.get(this.productUrl + 'list-product', { params });
  }
}
