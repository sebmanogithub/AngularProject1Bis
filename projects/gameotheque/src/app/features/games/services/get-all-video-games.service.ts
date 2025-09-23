import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoGames } from '../../models/video-game';
import { GetAll } from '../../../core/custom-types';
import { fakeInMemoryGetAllVideoGamesService } from './fake';

export interface GetAllGames extends GetAll<VideoGames> {
  getAll(): Observable<VideoGames>;
}

@Injectable({
  providedIn: 'root',
  useValue: fakeInMemoryGetAllVideoGamesService
})
export class GetAllVideoGamesService implements GetAllGames {
  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<VideoGames> {
    throw new Error('Method not implemented.');
  }
}
