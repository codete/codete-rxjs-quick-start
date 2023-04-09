import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamsterPostComponent } from './hamster-post.component';
import { MaterialModule } from '../../material.module';
import { HamsterModule } from '../hamster/hamster.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HamsterModule,
  ],
  declarations: [HamsterPostComponent],
  exports: [HamsterPostComponent],
})
export class HamsterPostModule { }
