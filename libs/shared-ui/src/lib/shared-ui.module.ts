import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamsterModule } from './components/hamster/hamster.module';
import { MaterialModule } from './material.module';
import { HamsterPostModule } from './components/hamster-post/hamster-post.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HamsterModule,
    HamsterPostModule,
  ],
  exports: [
    MaterialModule,
    HamsterModule,
    HamsterPostModule,
  ]
})
export class SharedUiModule { }
