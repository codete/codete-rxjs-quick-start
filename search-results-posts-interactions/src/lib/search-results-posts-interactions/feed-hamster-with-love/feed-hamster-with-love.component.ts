//#region @browser
import { Component, OnInit } from '@angular/core';
import { Hamster, HamsterPost } from '@codete-rxjs-quick-start/shared';
import { exhaustMap, map, share, Subject } from 'rxjs';
import { FeedHamsterWithLoveService } from './feed-hamster-with-love.service';

@Component({
  selector: 'app-feed-hamster-with-love',
  templateUrl: './feed-hamster-with-love.component.html',
  styleUrls: ['./feed-hamster-with-love.component.scss'],
  providers: [FeedHamsterWithLoveService],
})
export class FeedHamsterWithLoveComponent implements OnInit {

  constructor(private api: FeedHamsterWithLoveService) { }
  loveClicking$ = new Subject<HamsterPost>();
  saveLoveClick$ = this.loveClicking$.pipe(
    exhaustMap(hamster => this.api.applyLoveTo(hamster))
  ).subscribe();

  hamsters$ = this.api.getHamsterOwners().pipe(
    map(r => r.map(r => r))
  );

  ngOnInit() {

  }

}
//#endregion
