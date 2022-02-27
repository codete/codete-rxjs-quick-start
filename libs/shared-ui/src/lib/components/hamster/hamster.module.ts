import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamsterComponent } from './hamster.component';
import { MaterialModule } from '../../material.module';
import { HamsterComponentForPost } from './hamster-for-post.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [HamsterComponent, HamsterComponentForPost],
  exports: [HamsterComponent, HamsterComponentForPost],
})
export class HamsterModule { }
