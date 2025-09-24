import { Component, inject, signal } from '@angular/core';
import { VideoGame } from '../../../models/video-game';
import { TableGamesComponent } from '../table-games/table-games.component';
import { CreateGamesComponent } from '../create-games/create-games.component';
import { MainFiltersComponent } from '../main-filters/main-filters.component';
import { GetAllVideoGamesService } from '../../services/get-all-video-games.service';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [AsyncPipe, TableGamesComponent, CreateGamesComponent, MainFiltersComponent],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.css'
})
export class ListGamesComponent {
  private readonly service = inject(GetAllVideoGamesService);
  videoGames$ = this.service.getAll();
  videoGames$$ = toSignal(this.videoGames$);
  readyToCreate = signal<boolean>(false);

  // videoGameList: VideoGame[] = [
  //   { 
  //     dateSortie: new Date(),
  //     nom: "Final Fantasy 7"
  //   },
  //   { 
  //     dateSortie: new Date(),
  //     nom: "Abe"
  //   },
  //   { 
  //     dateSortie: new Date(),
  //     nom: "Raise of Tomb Raider"
  //   }
  // ];

  prepareCreation(): void {
    this.readyToCreate.set(true);  
  }

  cancelCreation(): void {
    this.readyToCreate.set(false);
  }
}
