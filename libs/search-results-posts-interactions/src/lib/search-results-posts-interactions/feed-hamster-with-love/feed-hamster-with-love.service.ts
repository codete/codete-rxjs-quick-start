import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Hamster } from '@codete-rxjs/api-interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class FeedHamsterWithLoveService {
  constructor
    (private http: HttpClient,
      private snackBar: MatSnackBar
    ) { }

  getHamsterOwners() {
    return this.http.get<Hamster[]>('/api/hamsters')
  }

  applyLoveTo(hamster: Hamster) {
    const customObservable = new Observable(obs => {
      if (obs.closed) {
        if (obs.closed) {
          this.snackBar.open(`Canceled applying..`, void 0, {
            duration: 3000
          });
        }
      } else {
        setTimeout(() => {
          if (obs.closed) {
            this.snackBar.open(`Canceled applying..`, void 0, {
              duration: 3000
            });
          } else {
            if(isNaN(hamster.loveLevel)) {
              hamster.loveLevel = 0;
            }
            if (hamster.loveLevel <= 100) {
              hamster.loveLevel = Number(hamster.loveLevel) + 5;
            }
            obs.complete();
            this.snackBar.open(`DONE`, void 0, {
              duration: 1000
            });
          }
        }, 1000)
      }

    });
    return customObservable;
  }


}
