//#region @browser
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hamster, HamsterOwner, IHamster, IHamsterOwner, host } from '@codete-rxjs-quick-start/shared';
import { map } from 'rxjs';
import { Helpers } from 'tnp-core';

@Injectable()
export class ListOfIdsToFullModelsService {
  constructor(private http: HttpClient) {
    //#region @websql
    this.getHamsterOwners = () => {
      return HamsterOwner.ctrl.getHamstersOwners().received.observable.pipe(
        map(r => r.body.rawJson),
      );
    }; 1
    this.getHamsterById = (id: number) => {
      return Hamster.ctrl.getBy(id).received.observable.pipe(
        map(r => r.body.rawJson),
      );
    }
    //#endregion
  }

  getHamsterOwners() {
    return this.http.get<IHamsterOwner[]>(`${host}/api/hamsters/owners`)
  }

  getHamsterById(id: number) {
    return this.http.get<IHamster>(`${host}/api/hamster/${id}`)
  }

}
//#endregion
