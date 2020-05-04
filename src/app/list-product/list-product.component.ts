import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../core/service/rest.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  length: number;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions: number[] = [5, 10, 100, 200];
  products: any[] = new Array();

  constructor(
    private restService: RestService
  ) { }

  ngOnInit() {
    this.requestSearch(this.pageSize, this.pageIndex);
  }

  onPageEvent(event: any) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.requestSearch(event.pageSize, event.pageIndex);
  }

  async requestSearch(pageSize: number, pageIndex: number) {
    await this.restService.getAllProduct(pageSize, pageIndex)
      .toPromise()
      .then(
        (res: any) => {
          this.length = res.data.count;
          this.products = res.data.allProducts;
        },
        (error: any) => {
          console.log('API error: ', error);
        }
      );
  }
}
