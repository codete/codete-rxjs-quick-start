//#region @browser
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { combineLatestAll, combineLatestWith, firstValueFrom, share, Subject, Subscription, take, takeUntil, takeWhile, tap } from 'rxjs';

type HamsterRouter = 'hamsters-search' | 'hamster-posts';

@Component({
  selector: 'app-search-results-posts-interactions-tab',
  templateUrl: './search-results-posts-interactions.component.html',
  styleUrls: ['./search-results-posts-interactions.component.scss']
})
export class SearchResultsPostsInteractionsComponent implements OnInit {

  destroy$ = new Subject<void>();
  constructor(
    private route: ActivatedRoute,
    public router: Router,
  ) {

  }
  expanded: { [params in HamsterRouter]: boolean } = {} as any;
  SEARCH: HamsterRouter = 'hamsters-search';
  POSTS: HamsterRouter = "hamster-posts";

  currentUrl$ = this.route.url;

  ngOnInit() {
    this.route.queryParams.pipe(
      takeUntil(this.destroy$),
      tap((params) => {
        if (Object.keys(params).length === 0) {
          this.expanded[this.SEARCH] = true;
        } else {
          const tab = params['tab'] as HamsterRouter;
          this.expanded[tab] = true;
        }
      })
    ).subscribe();
  }

  async setTab(tab: HamsterRouter) {
    const currentParam = await firstValueFrom(this.route.queryParams);
    if (tab === this.SEARCH &&
      (
        Object.keys(currentParam).includes(this.SEARCH)
        || (Object.keys(currentParam).length === 0)
      )
    ) {
      return;
    }
    const url = await firstValueFrom(this.currentUrl$);
    this.router.navigate(url, {
      queryParams: {
        tab
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
//#endregion
