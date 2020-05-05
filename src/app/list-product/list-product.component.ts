import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RestService } from '../core/service/rest.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  length: number;
  pageSize = 10;
  pageIndex = 0;
  barcode: string;
  pageSizeOptions: number[] = [10, 25, 50, 100, 200];
  products: any[] = new Array();
  @ViewChild('search') search: ElementRef;


  constructor(
    private restService: RestService
  ) { }

  ngOnInit() {
    this.requestSearch(this.pageSize, this.pageIndex);
  }

  searchProduct() {
    this.restService.getProductByBarcode(this.search.nativeElement.value)
      .toPromise()
      .then(
        (res: any) => {
          this.barcode = res.data.barcode;
        },
        (error: any) => {
          console.log('API error: ', error);
        }
      );
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
