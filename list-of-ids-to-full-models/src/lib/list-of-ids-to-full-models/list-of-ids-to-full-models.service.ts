import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hamster, HamsterOwner } from '@codete-rxjs/api-interfaces';

@Injectable()
export class ListOfIdsToFullModelsService {
  constructor(private http: HttpClient) { }

  getHamsterOwners() {
    return this.http.get<HamsterOwner[]>('/api/hamsters/owners')
  }

  getHamsterById(id: number) {
    return this.http.get<Hamster>(`/api/hamster/${id}`)
  }

}
