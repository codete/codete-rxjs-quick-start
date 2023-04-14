//#region @browser
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hamster, IHamster } from '@codete-rxjs-quick-start/shared';
import { map, of } from 'rxjs';

@Injectable()
export class HamsterSearchService {
  constructor(private http: HttpClient) {
    //#region @websql
    this.getHamsterByName = (name: string) => {
      if (!name) {
        return of([]);
      }
      return Hamster.ctrl.getHamsterByName(name).received.observable.pipe(
        map(r => r.body.rawJson),
      )
    };
    //#endregion
  }

  getHamsterByName(name: string) {
    if (!name) {
      return of([]);
    }
    return this.http.get<IHamster[]>(`/api/hamsterByName/${name}`)
  }

}
//#endregion
