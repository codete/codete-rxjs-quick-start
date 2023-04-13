import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsPostsInteractionsComponent } from './search-results-posts-interactions.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@codete-rxjs-quick-start/shared';
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
    MaterialModule,
    HamsterSearchModule,
    FeedHamsterWithLoveModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SearchResultsPostsInteractionsComponent]
})
export class SearchResultsPostsInteractionsModule { }
