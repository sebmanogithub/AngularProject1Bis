import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persons } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private readonly http = inject(HttpClient);

  getAll(pageIndex = 1): Observable<Persons> {
    const array: Persons = [
      { name: 'Luke'},
      { name: 'Leia'}
    ]
    return of(array);
  }
}
