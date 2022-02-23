import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsPostsInteractionsComponent } from './search-results-posts-interactions.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@codete-rxjs/shared-ui';

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
    RouterModule.forChild(routes),
  ],
  declarations: [SearchResultsPostsInteractionsComponent]
})
export class SearchResultsPostsInteractionsModule { }
