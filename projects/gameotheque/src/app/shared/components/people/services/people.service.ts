import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Persons } from '../models';

type OnePeopleApiReturn = {
  name: string;
}

type PeopleApiReturn = {
  results: OnePeopleApiReturn[];
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private readonly http = inject(HttpClient);

  getAll(pageIndex = 1): Observable<Persons> {
    return this.http.get<PeopleApiReturn>('https://swapi.dev/api/people').pipe(
      map(returnApi => {
        return returnApi.results.map(item => ({ name: item.name }))
      })
    );
  }
}
