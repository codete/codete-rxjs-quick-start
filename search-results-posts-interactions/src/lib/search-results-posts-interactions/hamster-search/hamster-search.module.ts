import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamsterSearchComponent } from './hamster-search.component';
import { SharedUiModule } from '@codete-rxjs/shared-ui';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
  ],
  declarations: [HamsterSearchComponent],
  exports: [HamsterSearchComponent],
})
export class HamsterSearchModule { }
