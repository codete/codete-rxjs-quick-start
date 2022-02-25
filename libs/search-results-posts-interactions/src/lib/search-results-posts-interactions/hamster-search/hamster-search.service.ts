import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hamster } from '@codete-rxjs/api-interfaces';
import { of } from 'rxjs';

@Injectable()
export class HamsterSearchService {
  constructor(private http: HttpClient) { }

  getHamsterByName(name: string) {
    if (!name) {
      return of([]);
    }
    return this.http.get<Hamster[]>(`/api/hamsterByName/:${name || ''}`)
  }

}
