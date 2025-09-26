import { Component, inject, signal } from '@angular/core';
import { TableGamesComponent } from '../table-games/table-games.component';
import { MainFiltersComponent } from '../main-filters/main-filters.component';
import { GetAllVideoGamesService } from '../../services/get-all-video-games.service';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { CreateVideoGameComponent } from '../create-video-game/create-video-game.component';

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [AsyncPipe, TableGamesComponent, MainFiltersComponent, CreateVideoGameComponent],
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
