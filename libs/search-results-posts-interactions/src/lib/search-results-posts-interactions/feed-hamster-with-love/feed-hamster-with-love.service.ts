import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Hamster, HamsterPost } from '@codete-rxjs/api-interfaces';
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
