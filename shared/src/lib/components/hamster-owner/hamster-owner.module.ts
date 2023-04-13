//#region @browser
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamsterOwnerComponent } from './hamster-owner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HamsterOwnerComponent],
  exports: [HamsterOwnerComponent],
})
export class HamsterOwnerModule { }
//#endregion