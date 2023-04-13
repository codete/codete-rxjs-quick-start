//#region @browser
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookComponent],
  exports: [BookComponent],
})
export class BookModule { }
//#endregion