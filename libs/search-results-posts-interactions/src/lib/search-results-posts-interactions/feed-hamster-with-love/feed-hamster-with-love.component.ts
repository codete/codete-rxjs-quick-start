import { Component, OnInit } from '@angular/core';
import { Hamster } from '@codete-rxjs/api-interfaces';
import { exhaustMap, share, Subject } from 'rxjs';
import { FeedHamsterWithLoveService } from './feed-hamster-with-love.service';

@Component({
  selector: 'app-feed-hamster-with-love',
  templateUrl: './feed-hamster-with-love.component.html',
  styleUrls: ['./feed-hamster-with-love.component.scss'],
  providers: [FeedHamsterWithLoveService],
})
export class FeedHamsterWithLoveComponent implements OnInit {

  constructor(private api: FeedHamsterWithLoveService) { }
  loveClicking$ = new Subject<Hamster>();

  saveLoveClick$ = this.loveClicking$.pipe(
    exhaustMap(hamster => this.api.applyLoveTo(hamster))
  ).subscribe();

  hamsters$ = this.api.getHamsterOwners().pipe(share())

  ngOnInit() {

  }

}
