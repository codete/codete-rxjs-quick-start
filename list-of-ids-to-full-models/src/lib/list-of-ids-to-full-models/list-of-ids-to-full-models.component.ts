import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Hamster, HamsterOwner, HamsterOwnerFull } from '@codete-rxjs/api-interfaces';
import { combineLatest, combineLatestWith, map, mergeMap, reduce, share, withLatestFrom } from 'rxjs';
import { ListOfIdsToFullModelsService } from './list-of-ids-to-full-models.service';

@Component({
  selector: 'app-list-of-ids-to-full-models',
  templateUrl: './list-of-ids-to-full-models.component.html',
  styleUrls: ['./list-of-ids-to-full-models.component.scss'],
  providers: [ListOfIdsToFullModelsService],
})
export class ListOfIdsToFullModelsComponent implements OnInit {

  constructor(
    private api: ListOfIdsToFullModelsService
  ) { }


  owners$ = this.api.getHamsterOwners().pipe(share())

  allHamsters$ = this.owners$.pipe(
    map((arr) => {
      const res = arr.reduce((a, b) => {
        return a.concat(b.hamsters as any);
      }, [] as number[])
      return res;
    }),
    mergeMap(arr => {
      const obs = arr.map(id => this.api.getHamsterById(id));
      return combineLatest(obs);
    }),
    share()
  );

  ownersWithHamsters$ = this.owners$.pipe(
    combineLatestWith(this.allHamsters$),
    map(([owners, hamsters]) => {
      return owners.map(a => {
        a.hamsters = a.hamsters.map(hamsterId => hamsters.find(({ id }) => id === hamsterId)) as any;
        return a as HamsterOwnerFull;
      });
    })
  );

  ngOnInit() {
  }

}
