import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsPostsInteractionsComponent } from './search-results-posts-interactions.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@codete-rxjs/shared-ui';
import { HamsterSearchModule } from './hamster-search/hamster-search.module';
import { FeedHamsterWithLoveModule } from './feed-hamster-with-love/feed-hamster-with-love.module';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsPostsInteractionsComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    HamsterSearchModule,
    FeedHamsterWithLoveModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SearchResultsPostsInteractionsComponent]
})
export class SearchResultsPostsInteractionsModule { }
