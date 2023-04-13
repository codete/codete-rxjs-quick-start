//#region @browser
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthorComponent],
  exports: [AuthorComponent],
})
export class AuthorModule { }
//#endregion