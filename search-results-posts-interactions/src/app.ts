//#region @notForNpm

//#region @browser
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-results-posts-interactions',
  template: 'hello from search-results-posts-interactions'
})
export class SearchResultsPostsInteractionsComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

@NgModule({
  imports: [],
  exports: [SearchResultsPostsInteractionsComponent],
  declarations: [SearchResultsPostsInteractionsComponent],
  providers: [],
})
export class SearchResultsPostsInteractionsModule { }
//#endregion

//#region @backend
async function start(port: number) {
  console.log('hello world from backend');
}

export default start;

//#endregion

//#endregion
