import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamsterModule } from './components/hamster/hamster.module';
import { MaterialModule } from './material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HamsterModule,
  ],
  exports: [
    MaterialModule,
    HamsterModule,
  ]
})
export class SharedUiModule { }
