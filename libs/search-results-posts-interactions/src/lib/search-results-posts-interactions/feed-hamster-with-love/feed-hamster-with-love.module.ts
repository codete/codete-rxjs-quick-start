import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedHamsterWithLoveComponent } from './feed-hamster-with-love.component';
import { SharedUiModule } from '@codete-rxjs/shared-ui';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
  ],
  declarations: [FeedHamsterWithLoveComponent],
  exports: [FeedHamsterWithLoveComponent],
})
export class FeedHamsterWithLoveModule { }
