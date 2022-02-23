import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamsterComponent } from './hamster.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [HamsterComponent],
  exports: [HamsterComponent],
})
export class HamsterModule { }
