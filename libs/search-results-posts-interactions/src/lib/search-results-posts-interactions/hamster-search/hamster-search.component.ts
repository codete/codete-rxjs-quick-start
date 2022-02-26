import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Hamster } from '@codete-rxjs/api-interfaces';
import { BehaviorSubject, bufferCount, catchError, debounce, defer, EMPTY, filter, finalize, fromEvent, map, Observable, reduce, scan, share, switchMap, tap, timer } from 'rxjs';
import { HamsterSearchService } from './hamster-search.service';

export type KeyboardEventType = KeyboardEvent & { target: HTMLButtonElement };

@Component({
  selector: 'app-hamster-search',
  templateUrl: './hamster-search.component.html',
  styleUrls: ['./hamster-search.component.scss'],
  providers: [HamsterSearchService],
})
export class HamsterSearchComponent implements OnInit {
  @ViewChild('side', { read: ElementRef }) public side?: ElementRef<any>;
  @ViewChild('search', { static: true }) search?: ElementRef<HTMLButtonElement>;
  searchInputChange$ = defer(() => fromEvent<KeyboardEventType>(this.search?.nativeElement as any, 'keyup'))
    .pipe(
      map(c => c.target.value),
      share(),
    );
  typedWords$?: Observable<string[]>;
  searchResults$?: Observable<Hamster[]>;
  isLoadingData = false;

  constructor(
    private api: HamsterSearchService,
  ) { }

  ngOnInit(): void {
    this.typedWords$ = this.searchInputChange$.pipe(
      filter(f => !!f),
      scan((a, b) => {
        return a.concat(b).slice(-20);
      }, [] as string[]),
      tap(() => this.scrollBottom(this.side)),
      share()
    );

    this.searchResults$ = this.searchInputChange$.pipe(
      tap(() => this.isLoadingData = true),
      switchMap(w => {
        return this.api.getHamsterByName(w).pipe(
          catchError((err) => {
            this.isLoadingData = false;
            return EMPTY;
          }),
        );
      }),
      tap(() => this.isLoadingData = false)
    )
  }

  private scrollBottom(element?: ElementRef) {
    if (element) {
      setTimeout(() => {
        element.nativeElement.scrollTop = element.nativeElement.scrollHeight;
      });
    }
  }

}
