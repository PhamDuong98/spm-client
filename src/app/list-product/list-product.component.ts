import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  displayedColumns: string[] = ['No', 'barcode', 'name', 'importPrice', 'exportPrice', 'unit', 'category'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  position: number;
  barcode: string;
  name: string;
  importPrice: number;
  exportPrice: number;
  unit: string;
  category: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, barcode: '12345', name: 'Kem đánh răng Amway', importPrice: 120000, exportPrice: 140000, unit: 'TUYP', category: 'Kem đánh răng' },
  { position: 2, barcode: '12345', name: 'Kem đánh răng Amway', importPrice: 120000, exportPrice: 140000, unit: 'TUYP', category: 'Kem đánh răng' },
];
