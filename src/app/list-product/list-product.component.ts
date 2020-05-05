import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from '../core/service/rest.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  allProductData: any;

  displayedColumns: string[] = ['No', 'barcode', 'name', 'importPrice', 'exportPrice', 'unit', 'category'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private restService: RestService
  ) { }

  ngOnInit() {
    this.getAllFromApi();
  }

  getAllFromApi() {
    this.restService.getAllProduct()
      .subscribe(
        (data: any) => {
          this.allProductData = data.data.allProducts;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
