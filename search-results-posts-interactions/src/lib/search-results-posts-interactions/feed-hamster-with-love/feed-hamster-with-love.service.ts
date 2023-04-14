//#region @browser
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Hamster, IHamster, HamsterOwner, HamsterPost } from '@codete-rxjs-quick-start/shared';
import { map, Observable } from 'rxjs';

@Injectable()
export class FeedHamsterWithLoveService {
  constructor
    (private http: HttpClient,
      private snackBar: MatSnackBar
    ) {
    //#region @websql
    this.getHamsterOwners = () => Hamster.ctrl.getHamsters().received.observable.pipe(
      map(r => r.body.rawJson)
    );
    //#endregion
  }

  getHamsterOwners() {
    return this.http.get<IHamster[]>('/api/hamsters')
  }

  applyLoveTo(hamster: HamsterPost) {
    return new Observable(obs => {
      hamster.isLoading = true;
      setTimeout(() => {
        if (isNaN(hamster.loveLevel)) {
          hamster.loveLevel = 0;
        }
        if (hamster.loveLevel <= 100) {
          hamster.loveLevel = Number(hamster.loveLevel) + 5;
        }
        hamster.isLoading = false;
        obs.complete();
        this.snackBar.open(`DONE`, void 0, {
          duration: 1000
        });
      }, 3000);
    });
  }

}
//#endregion
