import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
