import { Component } from '@angular/core';
import { VideoGame } from '../../../models/video-game';
import { TableGamesComponent } from '../table-games/table-games.component';

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [TableGamesComponent],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.css'
})
export class ListGamesComponent {
  videoGameList: VideoGame[] = [
    { 
      dateSortie: new Date(),
      nom: "Final Fantasy 7"
    },
    { 
      dateSortie: new Date(),
      nom: "Abe"
    },
    { 
      dateSortie: new Date(),
      nom: "Raise of Tomb Raider"
    }
  ];

  prepareCreation(): void {
    console.info('Pret !');
  }
}
