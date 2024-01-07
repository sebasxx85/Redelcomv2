import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrordialogComponent } from './components/errordialog/errordialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ErrordialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class SharedModule { }
