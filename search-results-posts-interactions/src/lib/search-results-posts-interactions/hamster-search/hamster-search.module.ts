//#region @browser
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamsterSearchComponent } from './hamster-search.component';
import { HamsterModule, MaterialModule } from '@codete-rxjs-quick-start/shared';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HamsterModule,
  ],
  declarations: [HamsterSearchComponent],
  exports: [HamsterSearchComponent],
})
export class HamsterSearchModule { }
//#endregion
