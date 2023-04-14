//#region @browser
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedHamsterWithLoveComponent } from './feed-hamster-with-love.component';
import { HamsterPostModule, MaterialModule } from '@codete-rxjs-quick-start/shared';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HamsterPostModule,
  ],
  declarations: [FeedHamsterWithLoveComponent],
  exports: [FeedHamsterWithLoveComponent],
})
export class FeedHamsterWithLoveModule { }
//#endregion
