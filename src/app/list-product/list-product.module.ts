import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductRoutingModule } from './list-product-routing.module';
import {ListProductComponent} from './list-product.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';

@NgModule({
  declarations: [ListProductComponent, AddProductDialogComponent],
  imports: [
    CommonModule,
    ListProductRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ListProductModule { }
